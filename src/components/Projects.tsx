import { useI18n } from '../i18n/I18nContext';
import './Projects.css';

export const Projects = () => {
  const { data } = useI18n();

  return (
    <section className="projects">
      <h2 className="projects__title">{data.sections.projects}</h2>
      <ul className="projects__list">
        {data.projects.map((project, index) => (
          <li key={index} className="projects__item">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="projects__link"
            >
              <div className="projects__content">
                <span className="projects__name">{project.name}</span>
                {project.role && <span className="projects__role">{project.role}</span>}
              </div>
              <span className="projects__arrow">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
