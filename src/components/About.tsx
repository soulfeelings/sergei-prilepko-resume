import { useI18n } from '../i18n/I18nContext';
import { useCheckbox } from '../context/CheckboxContext';
import './About.css';

export const About = () => {
  const { data } = useI18n();
  const { checkedItems, toggleItem } = useCheckbox();
  const aboutId = 'about';
  const isChecked = checkedItems.has(aboutId);

  return (
    <section className={`about ${isChecked ? 'about--checked' : ''}`}>
      <label className="about__checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleItem(aboutId)}
          className="about__checkbox"
        />
        <div className="about__content">
          <h2 className="about__title">{data.sections.about}</h2>
          <p className="about__text">{data.about}</p>
        </div>
      </label>
    </section>
  );
};
