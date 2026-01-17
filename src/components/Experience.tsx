import { useI18n } from '../i18n/I18nContext';
import { useCheckbox } from '../context/CheckboxContext';
import './Experience.css';

export const Experience = () => {
  const { data, t } = useI18n();
  const { checkedItems, toggleItem } = useCheckbox();

  return (
    <section className="experience">
      <h2 className="experience__title">{data.sections.experience}</h2>
      <div className="experience__list">
        {data.experience.map((item, index) => {
          // Проверяем, все ли описания отмечены
          const allDescriptionsChecked = item.description.every((_, idx) => {
            const descId = `exp-${index}-desc-${idx}`;
            return checkedItems.has(descId);
          });
          
          // Компания считается прочитанной только если все описания отмечены
          const isChecked = allDescriptionsChecked;
          
          return (
            <div key={index} className={`experience__item ${isChecked ? 'experience__item--checked' : ''}`}>
              <div className="experience__content">
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
                  {item.description.map((desc, idx) => {
                    const descId = `exp-${index}-desc-${idx}`;
                    const isDescChecked = checkedItems.has(descId);
                    
                    return (
                      <li key={idx} className={`experience__description-item ${isDescChecked ? 'experience__description-item--checked' : ''}`}>
                        <label className="experience__description-label">
                          <input
                            type="checkbox"
                            checked={isDescChecked}
                            onChange={() => toggleItem(descId)}
                            className="experience__description-checkbox"
                          />
                          {desc}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
