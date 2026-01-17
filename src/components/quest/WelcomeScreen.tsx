import { useI18n } from '../../i18n/I18nContext';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const { data, language } = useI18n();

  const welcomeText = language === 'ru' 
    ? 'Привет! Давай знакомиться?'
    : 'Hi! Let\'s get to know each other?';

  return (
    <div className="welcome-screen">
      <div className="welcome-screen__content">
        <h1 className="welcome-screen__name">{data.name}</h1>
        <p className="welcome-screen__greeting">{welcomeText}</p>
        <button className="welcome-screen__button" onClick={onStart}>
          {language === 'ru' ? 'Начать' : 'Start'}
        </button>
      </div>
    </div>
  );
};
