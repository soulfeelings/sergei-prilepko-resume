import { useI18n } from '../i18n/I18nContext';
import './Header.css';

export const Header = () => {
  const { data } = useI18n();

  return (
    <header className="header">
      <img src={`${import.meta.env.BASE_URL}photo.jpeg`} alt={data.name} className="header__photo" />
      <h1 className="header__name">{data.name}</h1>
      <h2 className="header__position">{data.position}</h2>
    </header>
  );
};
