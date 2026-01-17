import { Header } from './components/Header';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Contacts } from './components/Contacts';
import { Goals } from './components/Goals';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useI18n } from './i18n/I18nContext';
import './App.css';

function App() {
  const { data } = useI18n();

  return (
    <div className="app">
      <LanguageSwitcher />
      <div className="app__container">
        <aside className="app__sidebar">
          <Header />
          <About />
          <TechStack />
          <Goals />
          <Contacts />
        </aside>
        <main className="app__main">
          <Experience />
        </main>
      </div>
    </div>
  );
}

export default App;
