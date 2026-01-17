import { useI18n } from '../i18n/I18nContext';
import './Experience.css';

export const Experience = () => {
  const { data, t } = useI18n();

  return (
    <section className="experience">
      <h2 className="experience__title">{data.sections.experience}</h2>
      <div className="experience__list">
        {data.experience.map((item, index) => (
          <div key={index} className="experience__item">
            <div className="experience__header">
              <h3 className="experience__company">{item.company}</h3>
              <div className="experience__meta">
                <span className="experience__period">{item.period}</span>
                {item.duration && <span className="experience__duration">({item.duration})</span>}
              </div>
            </div>
            {item.technologies.length > 0 && (
              <div className="experience__technologies">
                <strong>{t('sections.technologies')}:</strong> {item.technologies.join(', ')}
              </div>
            )}
            <ul className="experience__description">
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
