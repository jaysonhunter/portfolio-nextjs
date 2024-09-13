import PropTypes from 'prop-types';

export default function Header({ navToggle,  isNavOpen }) {
  
  return (
    <header className={`page-header js-page-header`}  >
      <a href="/" className="logo" title="Jayson Hunter Logo" />

      <div className="nav-toggle">
        <button className={`hamburger hamburger--spin js-nav-toggle ${isNavOpen ? 'is-active': ''}`} type="button" onClick={navToggle}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

    </header>
  )
}


Header.propTypes = {
  /** Is this the principal call to action on the page? */
  isNavOpen: PropTypes.bool,
}

Header.defaultProps = {
  isNavOpen: false,
};
