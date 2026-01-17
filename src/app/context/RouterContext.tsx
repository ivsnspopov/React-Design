import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Route = 'home' | 'london' | 'france' | 'property' | 'article' | 'journal' | 'contact' | 'about';

interface RouterContextType {
  currentRoute: Route;
  propertyId: string | null;
  articleId: string | null;
  navigate: (route: Route, id?: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [propertyId, setPropertyId] = useState<string | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const [route, id] = hash.split('/');
      
      if (route === 'london' || route === 'france' || route === 'journal' || route === 'contact' || route === 'about') {
        setCurrentRoute(route as Route);
        setPropertyId(null);
        setArticleId(null);
      } else if (route === 'property' && id) {
        setCurrentRoute('property');
        setPropertyId(id);
        setArticleId(null);
      } else if (route === 'article' && id) {
        setCurrentRoute('article');
        setArticleId(id);
        setPropertyId(null);
      } else {
        setCurrentRoute('home');
        setPropertyId(null);
        setArticleId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: Route, id?: string) => {
    setHistory(prev => [...prev, window.location.hash]);
    if (route === 'property' && id) {
      window.location.hash = `property/${id}`;
    } else if (route === 'article' && id) {
      window.location.hash = `article/${id}`;
    } else if (route === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = route;
    }
  };

  const goBack = () => {
    if (history.length > 0) {
      const prevHash = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      window.location.hash = prevHash;
    } else {
      window.location.hash = '';
    }
  };

  return (
    <RouterContext.Provider value={{ currentRoute, propertyId, articleId, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within RouterProvider');
  return context;
}
