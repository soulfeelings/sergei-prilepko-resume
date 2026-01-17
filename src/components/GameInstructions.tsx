import { useI18n } from '../i18n/I18nContext';
import { useCheckbox } from '../context/CheckboxContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import './GameInstructions.css';

interface GameInstructionsProps {
  onStart: () => void;
}

export const GameInstructions = ({ onStart }: GameInstructionsProps) => {
  const { data, language } = useI18n();
  const { score, total } = useCheckbox();
  const hasProgress = score > 0;
  const percentage = Math.round((score / total) * 100);

  const instructions = language === 'ru' 
    ? {
        title: 'Инструкция к игре',
        description: 'Это резюме фулстек разработчика Сергея. Оно сделано в форме игры.',
        rules: [
          'Когда читаете пункт - жмите на галочку',
          'Получайте баллы за каждый отмеченный элемент',
          'Попробуйте отметить все элементы резюме!'
        ],
        button: hasProgress ? 'Продолжить' : 'Начать игру',
        progress: 'Ваш прогресс'
      }
    : {
        title: 'Game Instructions',
        description: 'This is the resume of Sergey, a fullstack developer. It\'s made in the form of a game.',
        rules: [
          'When you read an item - click the checkbox',
          'Earn points for each checked item',
          'Try to check all resume items!'
        ],
        button: hasProgress ? 'Continue' : 'Start Game',
        progress: 'Your progress'
      };

  return (
    <div className="game-instructions">
      <div className="game-instructions__content">
        <h1 className="game-instructions__title">{instructions.title}</h1>
        <div className="game-instructions__card">
          <h2 className="game-instructions__name">{data.name}</h2>
          <p className="game-instructions__position">{data.position}</p>
          <p className="game-instructions__description">{instructions.description}</p>
          <ul className="game-instructions__rules">
            {instructions.rules.map((rule, index) => (
              <li key={index} className="game-instructions__rule">
                {rule}
              </li>
            ))}
          </ul>
          {hasProgress && (
            <div className="game-instructions__progress">
              <p className="game-instructions__progress-label">{instructions.progress}</p>
              <div className="game-instructions__progress-bar">
                <div 
                  className="game-instructions__progress-fill" 
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="game-instructions__progress-text">
                {score} / {total} ({percentage}%)
              </p>
            </div>
          )}
          <button className="game-instructions__button" onClick={onStart}>
            {instructions.button}
          </button>
          <div className="game-instructions__language">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
