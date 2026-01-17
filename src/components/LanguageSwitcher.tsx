import { useI18n } from '../i18n/I18nContext';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="language-switcher">
      <button
        className={`language-switcher__button ${language === 'ru' ? 'language-switcher__button--active' : ''}`}
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
      <button
        className={`language-switcher__button ${language === 'en' ? 'language-switcher__button--active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};
