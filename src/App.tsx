import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Contacts } from './components/Contacts';
import { Goals } from './components/Goals';
import { Projects } from './components/Projects';
import { ScoreSystem } from './components/ScoreSystem';
import { Toast } from './components/Toast';
import { SuccessAnimation } from './components/SuccessAnimation';
import { LanguageSelection } from './components/LanguageSelection';
import { GameInstructions } from './components/GameInstructions';
import { CheckboxProvider, useCheckbox } from './context/CheckboxContext';
import { useI18n } from './i18n/I18nContext';
import './App.css';

const AppContent = () => {
  const { score, total } = useCheckbox();
  const { language, t } = useI18n();
  const [languageSelected, setLanguageSelected] = useState(() => {
    return localStorage.getItem('resume_language_selected') === 'true';
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successShown, setSuccessShown] = useState(false);
  const [reviewerToastShown, setReviewerToastShown] = useState(false);

  useEffect(() => {
    const percentage = Math.round((score / total) * 100);
    
    if (percentage === 100 && gameStarted && !successShown) {
      setShowSuccess(true);
      setSuccessShown(true);
      // Плавная прокрутка к контактам сразу при достижении 100%
      setTimeout(() => {
        const contactsElement = document.getElementById('contacts');
        if (contactsElement) {
          contactsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100);
    }
  }, [score, total, gameStarted, successShown]);

  useEffect(() => {
    if (!gameStarted || reviewerToastShown) return;

    const minDelay = 10000; // 10 секунд
    const maxDelay = 30000; // 30 секунд
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

    const timer = setTimeout(() => {
      setToastMessage(t('toasts.reviewers'));
      setShowToast(true);
      setReviewerToastShown(true);
    }, randomDelay);

    return () => clearTimeout(timer);
  }, [gameStarted, reviewerToastShown, t]);

  useEffect(() => {
    if (localStorage.getItem('resume_language_selected') === 'true') {
      setLanguageSelected(true);
    }
  }, [language]);

  if (!languageSelected) {
    return <LanguageSelection onLanguageSelected={() => setLanguageSelected(true)} />;
  }

  const handleSuccessComplete = () => {
    setShowSuccess(false);
  };

  if (!gameStarted) {
    return <GameInstructions onStart={() => setGameStarted(true)} />;
  }

  return (
    <div className="app">
      <Toast show={showToast} onClose={() => setShowToast(false)} message={toastMessage} />
      <SuccessAnimation show={showSuccess} onComplete={handleSuccessComplete} />
      <ScoreSystem score={score} total={total} />
      <div className="app__container">
        <aside className="app__sidebar">
          <Header />
          <About />
          <TechStack />
          <Goals />
          <Projects />
          <Contacts />
        </aside>
        <main className="app__main">
          <Experience />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <CheckboxProvider>
      <AppContent />
    </CheckboxProvider>
  );
}

export default App;
