import Hero from '/components/Hero/hero';
import DATA from '/data/data.json';
import OVERVIEW_DATA from '/data/casestudyOverview.json';
import CtaBlock from '/components/CtaBlock/cta-block';
import IsotopeCardBlock from "/components/IsotopeCardBlock/isotope-card-block";

export const metadata = {
  title: OVERVIEW_DATA.title,
  description: OVERVIEW_DATA.description,
  OGImage: OVERVIEW_DATA.ogImage,
  OGImageWidth: OVERVIEW_DATA.ogImageWidth,
  OGImageHeight: OVERVIEW_DATA.ogImageHeight,
  TwitterImage: OVERVIEW_DATA.twitter_image,
}

export default function Projects() {
  return (
    <>

    <Hero heroData={OVERVIEW_DATA.hero} />

    <section className="u-row-space-medium u-text-center">
        <div className="container-fluid">
          <div className="u-max-content-width-narrow">
            <h2>I&apos;ve been a developer for years</h2>
            <p>Below you&apos;ll find a selection of some of my most recent projects that showcase the type of clients I work closely with.</p>
          </div>
        </div>
    </section>

    <section className="text-center u-row-space-large u-bg-color-white">
        <div className="container-fluid">
          <div className="u-max-content-width-wide">
              <div className="text-block u-h2 u-row-space-medium-bottom">
                  Selected Projects
              </div>
          </div>

          <IsotopeCardBlock 
            gridTypeClass='grid-2-up' 
            data={DATA.allCaseStudies} />

        </div>
    </section>

    <CtaBlock />
  </>
  )
}