import { useI18n } from '../i18n/I18nContext';
import './LanguageSelection.css';

interface LanguageSelectionProps {
  onLanguageSelected: () => void;
}

export const LanguageSelection = ({ onLanguageSelected }: LanguageSelectionProps) => {
  const { setLanguage } = useI18n();

  const handleLanguageSelect = (lang: 'ru' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('resume_language_selected', 'true');
    onLanguageSelected();
  };

  return (
    <div className="language-selection">
      <div className="language-selection__content">
        <div className="language-selection__buttons">
          <button
            className="language-selection__button language-selection__button--en"
            onClick={() => handleLanguageSelect('en')}
          >
            <span className="language-selection__flag">🇬🇧</span>
            <span className="language-selection__label">English</span>
          </button>
          <button
            className="language-selection__button language-selection__button--ru"
            onClick={() => handleLanguageSelect('ru')}
          >
            <span className="language-selection__flag">🇷🇺</span>
            <span className="language-selection__label">Русский</span>
          </button>
        </div>
      </div>
    </div>
  );
};
