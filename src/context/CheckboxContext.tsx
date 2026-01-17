import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';

interface CheckboxContextType {
  checkedItems: Set<string>;
  toggleItem: (id: string) => void;
  score: number;
  total: number;
}

const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);

const STORAGE_KEY = 'resume_checkbox_progress';

export const CheckboxProvider = ({ children }: { children: ReactNode }) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return new Set(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      // Игнорируем ошибки парсинга
    }
    return new Set();
  });

  useEffect(() => {
    try {
      const itemsArray = Array.from(checkedItems);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsArray));
    } catch {
      // Игнорируем ошибки сохранения
    }
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const { score, total } = useMemo(() => {
    // About: 1, TechStack: 5, Goals: 1, Experience descriptions: 18 = 25 total
    // Experience descriptions: FREELANCE(6) + INDRIVE(4) + VKONTAKTE(2) + RESPONA(3) + FREELANCE(3) = 18
    // Компании и контакты не считаются отдельно - только описания опыта
    const companyIds = new Set(['exp-0', 'exp-1', 'exp-2', 'exp-3', 'exp-4']);
    const contactIds = new Set(['contact-0', 'contact-1', 'contact-2', 'contact-3', 'contact-4']);
    const itemsWithoutCompaniesAndContacts = Array.from(checkedItems).filter(
      id => !companyIds.has(id) && !contactIds.has(id)
    );
    
    return {
      score: itemsWithoutCompaniesAndContacts.length,
      total: 25
    };
  }, [checkedItems]);

  return (
    <CheckboxContext.Provider value={{ checkedItems, toggleItem, score, total }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (context === undefined) {
    throw new Error('useCheckbox must be used within CheckboxProvider');
  }
  return context;
};
