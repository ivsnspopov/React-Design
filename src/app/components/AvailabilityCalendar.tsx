"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, Users } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import { format, differenceInDays, isSameDay } from "date-fns";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./ui/utils";

interface AvailabilityCalendarProps {
  pricePerNight: number;
  currency?: string;
  unavailableDates?: Date[];
  onDateSelect?: (range: { from: Date; to: Date } | undefined) => void;
  className?: string;
}

interface GuestCount {
  adults: number;
  children: number;
}

function GuestSelector({
  guests,
  onGuestsChange,
}: {
  guests: GuestCount;
  onGuestsChange: (guests: GuestCount) => void;
}) {
  const handleIncrement = (type: keyof GuestCount) => {
    onGuestsChange({
      ...guests,
      [type]: guests[type] + 1,
    });
  };

  const handleDecrement = (type: keyof GuestCount) => {
    if (guests[type] > (type === "adults" ? 1 : 0)) {
      onGuestsChange({
        ...guests,
        [type]: guests[type] - 1,
      });
    }
  };

  return (
    <div className="space-y-4 pt-4 border-t border-[#2D2D2D]">
      <div className="flex items-center gap-2 text-[#8A8A8A]">
        <Users className="w-4 h-4" />
        <span
          className="text-xs uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Guests
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-sm text-[#F5F5F0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Adults
            </p>
            <p
              className="text-xs text-[#4A4A4A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ages 13+
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDecrement("adults")}
              disabled={guests.adults <= 1}
              className={cn(
                "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200",
                guests.adults <= 1
                  ? "border-[#2D2D2D] text-[#4A4A4A] cursor-not-allowed"
                  : "border-[#4A4A4A] text-[#8A8A8A] hover:border-[#C9A86C] hover:text-[#C9A86C]"
              )}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span
              className="w-6 text-center text-[#F5F5F0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {guests.adults}
            </span>
            <button
              onClick={() => handleIncrement("adults")}
              className="w-8 h-8 rounded-full border border-[#4A4A4A] text-[#8A8A8A] hover:border-[#C9A86C] hover:text-[#C9A86C] flex items-center justify-center transition-all duration-200"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-sm text-[#F5F5F0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Children
            </p>
            <p
              className="text-xs text-[#4A4A4A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ages 2-12
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDecrement("children")}
              disabled={guests.children <= 0}
              className={cn(
                "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200",
                guests.children <= 0
                  ? "border-[#2D2D2D] text-[#4A4A4A] cursor-not-allowed"
                  : "border-[#4A4A4A] text-[#8A8A8A] hover:border-[#C9A86C] hover:text-[#C9A86C]"
              )}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span
              className="w-6 text-center text-[#F5F5F0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {guests.children}
            </span>
            <button
              onClick={() => handleIncrement("children")}
              className="w-8 h-8 rounded-full border border-[#4A4A4A] text-[#8A8A8A] hover:border-[#C9A86C] hover:text-[#C9A86C] flex items-center justify-center transition-all duration-200"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AvailabilityCalendar({
  pricePerNight,
  currency = "£",
  unavailableDates = [],
  onDateSelect,
  className,
}: AvailabilityCalendarProps) {
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState<GuestCount>({ adults: 2, children: 0 });
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const numberOfNights = useMemo(() => {
    if (range?.from && range?.to) {
      return differenceInDays(range.to, range.from);
    }
    return 0;
  }, [range]);

  const totalPrice = useMemo(() => {
    return numberOfNights * pricePerNight;
  }, [numberOfNights, pricePerNight]);

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some((unavailable) => isSameDay(date, unavailable));
  };

  const handleSelect = (selectedRange: DateRange | undefined) => {
    setRange(selectedRange);
    if (selectedRange?.from && selectedRange?.to) {
      onDateSelect?.({ from: selectedRange.from, to: selectedRange.to });
    } else {
      onDateSelect?.(undefined);
    }
  };

  return (
    <div
      className={cn(
        "bg-[#1A1A1A] rounded-lg p-6 border border-[#2D2D2D]",
        className
      )}
    >
      <style jsx global>{`
        .luxury-calendar {
          --rdp-cell-size: 44px;
          --rdp-accent-color: #c9a86c;
          --rdp-background-color: #1a1a1a;
        }

        .luxury-calendar .rdp-months {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .luxury-calendar .rdp-months {
            flex-direction: row;
            gap: 2rem;
          }
        }

        .luxury-calendar .rdp-month {
          margin: 0;
        }

        .luxury-calendar .rdp-caption {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0 1rem 0;
          position: relative;
        }

        .luxury-calendar .rdp-caption_label {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 400;
          color: #f5f5f0;
          letter-spacing: 0.05em;
        }

        .luxury-calendar .rdp-nav {
          display: flex;
          gap: 0.25rem;
          position: absolute;
          width: 100%;
          justify-content: space-between;
          padding: 0 0.5rem;
        }

        .luxury-calendar .rdp-nav_button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #2d2d2d;
          color: #8a8a8a;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .luxury-calendar .rdp-nav_button:hover {
          background: #2d2d2d;
          border-color: #4a4a4a;
          color: #c9a86c;
        }

        .luxury-calendar .rdp-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 2px;
        }

        .luxury-calendar .rdp-head_cell {
          color: #4a4a4a;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.5rem 0;
          text-align: center;
        }

        .luxury-calendar .rdp-cell {
          text-align: center;
          padding: 0;
        }

        .luxury-calendar .rdp-day {
          width: var(--rdp-cell-size);
          height: var(--rdp-cell-size);
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: #8a8a8a;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          background: transparent;
        }

        .luxury-calendar .rdp-day:hover:not(.rdp-day_disabled):not(.rdp-day_selected) {
          background: #2d2d2d;
          color: #f5f5f0;
        }

        .luxury-calendar .rdp-day_today {
          color: #f5f5f0;
          font-weight: 500;
          box-shadow: inset 0 0 0 1px rgba(245, 245, 240, 0.3);
        }

        .luxury-calendar .rdp-day_selected {
          background: #c9a86c !important;
          color: #0d0d0d !important;
          font-weight: 500;
        }

        .luxury-calendar .rdp-day_range_start {
          background: #c9a86c !important;
          color: #0d0d0d !important;
          border-radius: 4px 0 0 4px;
        }

        .luxury-calendar .rdp-day_range_end {
          background: #c9a86c !important;
          color: #0d0d0d !important;
          border-radius: 0 4px 4px 0;
        }

        .luxury-calendar .rdp-day_range_start.rdp-day_range_end {
          border-radius: 4px;
        }

        .luxury-calendar .rdp-day_range_middle {
          background: linear-gradient(
            90deg,
            rgba(201, 168, 108, 0.3) 0%,
            rgba(201, 168, 108, 0.15) 50%,
            rgba(201, 168, 108, 0.3) 100%
          );
          color: #c9a86c;
          border-radius: 0;
        }

        .luxury-calendar .rdp-day_disabled {
          color: #4a4a4a;
          cursor: not-allowed;
          text-decoration: line-through;
          opacity: 0.5;
        }

        .luxury-calendar .rdp-day_outside {
          color: #2d2d2d;
        }
      `}</style>

      <AnimatePresence mode="wait">
        <motion.div
          key={format(currentMonth, "yyyy-MM")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <DayPicker
            mode="range"
            selected={range}
            onSelect={handleSelect}
            numberOfMonths={2}
            disabled={[{ before: new Date() }, isDateUnavailable]}
            showOutsideDays={false}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            className="luxury-calendar"
            components={{
              IconLeft: () => <ChevronLeft className="w-4 h-4" />,
              IconRight: () => <ChevronRight className="w-4 h-4" />,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 pt-6 border-t border-[#2D2D2D] space-y-4">
        <div className="flex items-center justify-between">
          <span
            className="text-sm text-[#8A8A8A]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {currency}
            {pricePerNight.toLocaleString()} per night
          </span>
          {numberOfNights > 0 && (
            <span
              className="text-sm text-[#8A8A8A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {numberOfNights} night{numberOfNights > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {range?.from && range?.to && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between py-3 px-4 bg-[#0D0D0D] rounded-md"
          >
            <div className="space-y-1">
              <p
                className="text-xs text-[#4A4A4A] uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Selected dates
              </p>
              <p
                className="text-sm text-[#F5F5F0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {format(range.from, "MMM d")} – {format(range.to, "MMM d, yyyy")}
              </p>
            </div>
            <div className="text-right">
              <p
                className="text-xs text-[#4A4A4A] uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Total
              </p>
              <p
                className="text-lg text-[#C9A86C]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {currency}
                {totalPrice.toLocaleString()}
              </p>
            </div>
          </motion.div>
        )}

        <GuestSelector guests={guests} onGuestsChange={setGuests} />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!range?.from || !range?.to}
          className={cn(
            "w-full py-4 rounded-md text-sm uppercase tracking-[0.2em] transition-all duration-300",
            range?.from && range?.to
              ? "bg-[#C9A86C] text-[#0D0D0D] hover:bg-[#D4B87A]"
              : "bg-[#2D2D2D] text-[#4A4A4A] cursor-not-allowed"
          )}
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
}
