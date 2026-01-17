import { QuestStep } from './QuestFlow';
import { useI18n } from '../../i18n/I18nContext';
import './ChoiceButtons.css';

interface ChoiceButtonsProps {
  choices: QuestStep[];
  onChoice: (step: QuestStep) => void;
}

export const ChoiceButtons = ({ choices, onChoice }: ChoiceButtonsProps) => {
  const { language } = useI18n();

  const getChoiceLabel = (choice: QuestStep): string => {
    const labels: Record<string, Record<QuestStep, string>> = {
      ru: {
        about: 'Обо мне',
        experience: 'Опыт работы',
        tech: 'Технологии',
        projects: 'Проекты',
        contacts: 'Контакты'
      },
      en: {
        about: 'About me',
        experience: 'Work experience',
        tech: 'Technologies',
        projects: 'Projects',
        contacts: 'Contacts'
      }
    };
    return labels[language][choice] || choice;
  };

  return (
    <div className="choice-buttons">
      {choices.map((choice) => (
        <button
          key={choice}
          className="choice-buttons__button"
          onClick={() => onChoice(choice)}
        >
          {getChoiceLabel(choice)}
        </button>
      ))}
    </div>
  );
};
