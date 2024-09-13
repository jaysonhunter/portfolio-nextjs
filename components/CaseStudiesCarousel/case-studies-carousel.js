import DATA from '/data/data.json';
import Card from '@/components/Card/card';

export default function CaseStudiesCarousel({ handleHideNav }) {
  return (
    <div className="carousel-viewport">
      <a href="#" className="carousel-nav carousel-nav__prev js-nav-carousel-prev"></a>
      <a href="#" className="carousel-nav carousel-nav__next js-nav-carousel-next"></a>
      <div className="carousel-wrapper js-nav-carousel iscroll">
        <div className="slides js-nav-carousel-slides">
          {DATA.allCaseStudies.dataContent.map((caseStudyItem, ) => (
            caseStudyItem.isActive && (
              <div className="slide" key={caseStudyItem.id} onClick={handleHideNav}>
                <Card card={caseStudyItem} />
              </div>
            )
          ))}
        </div>
      </div>
      <div className="carousel-drag fadeOut js-carousel-drag" data-animation-class="fadeOut">DRAG</div>
    </div>
  )
}