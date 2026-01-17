import { useI18n } from '../i18n/I18nContext';
import './Contacts.css';

export const Contacts = () => {
  const { data } = useI18n();

  return (
    <section className="contacts">
      <h2 className="contacts__title">{data.sections.contacts}</h2>
      <ul className="contacts__list">
        {data.contacts.map((contact, index) => (
          <li key={index} className="contacts__item">
            {contact.link ? (
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contacts__link">
                <strong>{contact.type}:</strong> {contact.value}
              </a>
            ) : (
              <span><strong>{contact.type}:</strong> {contact.value}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
