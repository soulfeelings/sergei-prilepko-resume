import { useI18n } from '../i18n/I18nContext';
import { useCheckbox } from '../context/CheckboxContext';
import './TechStack.css';

export const TechStack = () => {
  const { data } = useI18n();
  const { checkedItems, toggleItem } = useCheckbox();

  const categories = [
    { key: 'frontend', title: 'Front-end:', items: data.techStack.frontend },
    { key: 'backend', title: 'Back-end:', items: data.techStack.backend },
    { key: 'testing', title: 'Testing:', items: data.techStack.testing },
    { key: 'design', title: 'Design:', items: data.techStack.design },
    { key: 'other', title: '', items: data.techStack.other }
  ];

  return (
    <section className="tech-stack">
      <h2 className="tech-stack__title">{data.sections.techStack}</h2>
      <div className="tech-stack__content">
        {categories.map((category) => {
          const categoryId = `tech-${category.key}`;
          const isChecked = checkedItems.has(categoryId);
          
          return (
            <div key={category.key} className={`tech-stack__category ${isChecked ? 'tech-stack__category--checked' : ''}`}>
              <label className="tech-stack__checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(categoryId)}
                  className="tech-stack__checkbox"
                />
                {category.title && <h3 className="tech-stack__category-title">{category.title}</h3>}
                <p className="tech-stack__items">{category.items.join(', ')}</p>
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};
