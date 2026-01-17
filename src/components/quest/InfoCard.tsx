import { useI18n } from '../../i18n/I18nContext';
import { WorkExperience, Contact } from '../../types/resume';
import './InfoCard.css';

interface InfoCardProps {
  title: string;
  content: any;
  type: 'text' | 'experience' | 'tech' | 'projects' | 'contacts';
  onBack: () => void;
}

export const InfoCard = ({ title, content, type, onBack }: InfoCardProps) => {
  const { language } = useI18n();

  const renderContent = () => {
    switch (type) {
      case 'text':
        return <p className="info-card__text">{content}</p>;
      
      case 'experience':
        const experience = content as WorkExperience[];
        return (
          <div className="info-card__experience">
            {experience.map((item, index) => (
              <div key={index} className="info-card__experience-item">
                <h3 className="info-card__company">{item.company}</h3>
                <div className="info-card__meta">
                  <span>{item.period}</span>
                  {item.duration && <span>({item.duration})</span>}
                </div>
                {item.technologies.length > 0 && (
                  <div className="info-card__tech">
                    <strong>{language === 'ru' ? 'Технологии' : 'Technologies'}:</strong> {item.technologies.join(', ')}
                  </div>
                )}
                <ul className="info-card__description">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'tech':
        const tech = content as { frontend: string[]; backend: string[]; testing: string[]; design: string[]; other: string[] };
        return (
          <div className="info-card__tech-stack">
            <div className="info-card__tech-category">
              <strong>Front-end:</strong> {tech.frontend.join(', ')}
            </div>
            <div className="info-card__tech-category">
              <strong>Back-end:</strong> {tech.backend.join(', ')}
            </div>
            <div className="info-card__tech-category">
              <strong>Testing:</strong> {tech.testing.join(', ')}
            </div>
            <div className="info-card__tech-category">
              <strong>Design:</strong> {tech.design.join(', ')}
            </div>
            <div className="info-card__tech-category">
              {tech.other.join(', ')}
            </div>
          </div>
        );
      
      case 'projects':
        const projects = content as WorkExperience[];
        return (
          <div className="info-card__projects">
            {projects.map((project, index) => (
              <div key={index} className="info-card__project">
                <h3 className="info-card__project-title">{project.company}</h3>
                <ul className="info-card__description">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'contacts':
        const contacts = content as Contact[];
        return (
          <div className="info-card__contacts">
            {contacts.map((contact, index) => (
              <div key={index} className="info-card__contact">
                {contact.link ? (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" className="info-card__contact-link">
                    <strong>{contact.type}:</strong> {contact.value}
                  </a>
                ) : (
                  <span><strong>{contact.type}:</strong> {contact.value}</span>
                )}
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="info-card">
      <div className="info-card__header">
        <h2 className="info-card__title">{title}</h2>
        <button className="info-card__back" onClick={onBack}>
          {language === 'ru' ? '← Назад' : '← Back'}
        </button>
      </div>
      <div className="info-card__body">
        {renderContent()}
      </div>
    </div>
  );
};
