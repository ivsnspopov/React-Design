import { useState, ImgHTMLAttributes } from 'react';

interface ImageSkeletonProps {
  className?: string;
}

export function ImageSkeleton({ className = '' }: ImageSkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#1A1A1A] ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            #2D2D2D 20%,
            rgba(201, 168, 108, 0.08) 50%,
            #2D2D2D 80%,
            transparent 100%
          )`,
        }}
      />
    </div>
  );
}

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className = '', ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <ImageSkeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}
