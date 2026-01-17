import { useI18n } from '../i18n/I18nContext';
import { useCheckbox } from '../context/CheckboxContext';
import './Contacts.css';

export const Contacts = () => {
  const { data, t } = useI18n();
  const { score, total } = useCheckbox();
  const isCompleted = score === total;

  return (
    <section id="contacts" className="contacts">
      <h2 className="contacts__title">{data.sections.contacts}</h2>
      <div className="contacts__container">
        <div className={`contacts__wrapper ${!isCompleted ? 'contacts__wrapper--blurred' : ''}`}>
          <ul className="contacts__list">
            {data.contactsList.map((contact, index) => {
              return (
                <li key={index} className="contacts__item">
                  {contact.link ? (
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contacts__link">
                      <strong>{contact.type}:</strong> {contact.value}
                    </a>
                  ) : (
                    <span><strong>{contact.type}:</strong> {contact.value}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {!isCompleted && (
          <div className="contacts__message">
            {t('contacts.unlockMessage')}
          </div>
        )}
      </div>
    </section>
  );
};
