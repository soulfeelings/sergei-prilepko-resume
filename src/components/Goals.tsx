import { useI18n } from '../i18n/I18nContext';
import { useCheckbox } from '../context/CheckboxContext';
import './Goals.css';

export const Goals = () => {
  const { data } = useI18n();
  const { checkedItems, toggleItem } = useCheckbox();

  return (
    <section className="goals">
      <h2 className="goals__title">{data.sections.goals}</h2>
      <ul className="goals__list">
        {data.goals.map((goal, index) => {
          const goalId = `goal-${index}`;
          const isChecked = checkedItems.has(goalId);
          
          return (
            <li key={index} className={`goals__item ${isChecked ? 'goals__item--checked' : ''}`}>
              <label className="goals__checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(goalId)}
                  className="goals__checkbox"
                />
                {goal}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
