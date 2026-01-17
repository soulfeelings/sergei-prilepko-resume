import { useI18n } from '../i18n/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import './ScoreSystem.css';

interface ScoreSystemProps {
  score: number;
  total: number;
}

export const ScoreSystem = ({ score, total }: ScoreSystemProps) => {
  const { language } = useI18n();
  const percentage = Math.round((score / total) * 100);

  const scoreText = language === 'ru' 
    ? `Баллы: ${score} / ${total}`
    : `Score: ${score} / ${total}`;

  return (
    <div className="score-system">
      <div className="score-system__container">
        <div className="score-system__info">
          <span className="score-system__text">{scoreText}</span>
          <span className="score-system__percentage">{percentage}%</span>
        </div>
        <div className="score-system__progress">
          <div 
            className="score-system__progress-bar" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="score-system__language">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
