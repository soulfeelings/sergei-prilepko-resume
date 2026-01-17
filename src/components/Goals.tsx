import { useI18n } from '../i18n/I18nContext';
import './Goals.css';

export const Goals = () => {
  const { data } = useI18n();

  return (
    <section className="goals">
      <h2 className="goals__title">{data.sections.goals}</h2>
      <ul className="goals__list">
        {data.goals.map((goal, index) => (
          <li key={index} className="goals__item">{goal}</li>
        ))}
      </ul>
    </section>
  );
};
