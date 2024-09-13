import CaseStudiesCarousel from '../CaseStudiesCarousel/case-studies-carousel';

const OffPageCanvas = ({ menu, handleHideNav }) => {

  return (
    <div className="off-canvas-nav js-off-canvas-nav">

      <div className="nav-wrapper" aria-hidden="true">
        <div className="nav-wrapper-inner">
          <nav className="nav-content">
            <ul className="nav-items">
              {menu.menuItems.map((menuItem, index) => (
                menuItem.isActive && (
                  <li key={index} className="nav-item" >
                    <a href={menuItem.menuLinkURL} className="nav-link" onClick={handleHideNav}>
                      {menuItem.menuItemText}
                    </a>
                  </li>
                  )
              ))}
            </ul>
          </nav>

          <CaseStudiesCarousel />
        </div>

      </div>

    </div>
    
  )
}

export default OffPageCanvas