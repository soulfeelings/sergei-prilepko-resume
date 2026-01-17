import { useState } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { ChoiceButtons } from './ChoiceButtons';
import { InfoCard } from './InfoCard';
import './QuestFlow.css';

export type QuestStep = 
  | 'intro'
  | 'about'
  | 'experience'
  | 'tech'
  | 'projects'
  | 'contacts'
  | 'complete';

export const QuestFlow = () => {
  const { data, language } = useI18n();
  const [currentStep, setCurrentStep] = useState<QuestStep>('intro');
  const [visitedSteps, setVisitedSteps] = useState<Set<QuestStep>>(new Set(['intro']));
  const [showInfo, setShowInfo] = useState(false);

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      ru: {
        intro: 'Отлично! С чего начнем?',
        about: 'Обо мне',
        experience: 'Опыт работы',
        tech: 'Технологии',
        projects: 'Проекты',
        contacts: 'Контакты',
        complete: 'Спасибо за знакомство!',
        nextQuestion: 'Что еще хочешь узнать?'
      },
      en: {
        intro: 'Great! Where should we start?',
        about: 'About me',
        experience: 'Work experience',
        tech: 'Technologies',
        projects: 'Projects',
        contacts: 'Contacts',
        complete: 'Thanks for getting to know me!',
        nextQuestion: 'What else would you like to know?'
      }
    };
    return translations[language][key] || key;
  };

  const handleChoice = (step: QuestStep) => {
    setCurrentStep(step);
    setVisitedSteps(prev => new Set([...prev, step]));
    setShowInfo(true);
  };

  const handleBack = () => {
    setShowInfo(false);
  };

  const getAvailableChoices = (): QuestStep[] => {
    const allChoices: QuestStep[] = ['about', 'experience', 'tech', 'projects', 'contacts'];
    return allChoices.filter(choice => choice !== currentStep);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 'intro':
        return null;
      case 'about':
        return {
          title: data.sections.about,
          content: data.about,
          type: 'text' as const
        };
      case 'experience':
        return {
          title: data.sections.experience,
          content: data.experience,
          type: 'experience' as const
        };
      case 'tech':
        return {
          title: data.sections.techStack,
          content: data.techStack,
          type: 'tech' as const
        };
      case 'projects':
        return {
          title: data.sections.projects,
          content: data.experience.filter(exp => exp.company === 'FREELANCE'),
          type: 'projects' as const
        };
      case 'contacts':
        return {
          title: data.sections.contacts,
          content: data.contacts,
          type: 'contacts' as const
        };
      case 'complete':
        return null;
      default:
        return null;
    }
  };

  const stepContent = getStepContent();

  if (showInfo && stepContent) {
    return (
      <div className="quest-flow">
        <InfoCard 
          title={stepContent.title}
          content={stepContent.content}
          type={stepContent.type}
          onBack={handleBack}
        />
        {visitedSteps.size < 6 && (
          <div className="quest-flow__next">
            <p className="quest-flow__next-text">{t('nextQuestion')}</p>
            <ChoiceButtons 
              choices={getAvailableChoices()}
              onChoice={handleChoice}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="quest-flow">
      <ChoiceButtons 
        choices={getAvailableChoices()}
        onChoice={handleChoice}
      />
    </div>
  );
};
