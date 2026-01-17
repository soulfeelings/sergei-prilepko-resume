import { useI18n } from '../i18n/I18nContext';
import './About.css';

export const About = () => {
  const { data } = useI18n();

  return (
    <section className="about">
      <h2 className="about__title">{data.sections.about}</h2>
      <p className="about__text">{data.about}</p>
    </section>
  );
};
