import { useI18n } from '../i18n/I18nContext';
import './TechStack.css';

export const TechStack = () => {
  const { data } = useI18n();

  return (
    <section className="tech-stack">
      <h2 className="tech-stack__title">{data.sections.techStack}</h2>
      <div className="tech-stack__content">
        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Front-end:</h3>
          <p className="tech-stack__items">{data.techStack.frontend.join(', ')}</p>
        </div>
        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Back-end:</h3>
          <p className="tech-stack__items">{data.techStack.backend.join(', ')}</p>
        </div>
        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Testing:</h3>
          <p className="tech-stack__items">{data.techStack.testing.join(', ')}</p>
        </div>
        <div className="tech-stack__category">
          <h3 className="tech-stack__category-title">Design:</h3>
          <p className="tech-stack__items">{data.techStack.design.join(', ')}</p>
        </div>
        <div className="tech-stack__category">
          <p className="tech-stack__items">{data.techStack.other.join(', ')}</p>
        </div>
      </div>
    </section>
  );
};
