import './Header.scss';
import { ReactComponent as ReactLogo } from '../../assets/icons/logo.svg';

const Header = () => (
  <header className="header">
    <div className="header__section">
      <ReactLogo className="header__logo" />
      <div>
        <h3 className="header__title">requestum</h3>
        <p className="header__subtitle">web development company</p>
      </div>
    </div>

    <p className="header__description">Github users search app</p>
  </header>
);

export default Header;
