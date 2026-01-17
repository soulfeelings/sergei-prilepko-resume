import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../data/translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  data: typeof translations.ru;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'resume_language';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return 'en';
      
      // Если это JSON строка, пытаемся распарсить
      let parsed: string;
      if (saved.startsWith('{') || saved.startsWith('[')) {
        const json = JSON.parse(saved);
        parsed = typeof json === 'string' ? json : (json.language || json.lang || saved);
      } else {
        parsed = saved;
      }
      
      return (parsed === 'ru' || parsed === 'en') ? parsed : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    return value;
  };

  const data = translations[language];

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, data }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
