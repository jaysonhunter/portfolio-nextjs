import DATA from '/data/casestudySkoda.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function AholdDelhaize() {
  return (
    <>
     <CaseStudy data={ DATA }>
        <section className="u-row-space-medium">
          <div className="container-fluid">
            <div className="row u-max-content-width-narrow">
              <h2>The Challenge</h2>
              <p>Create a bespoke mobile website to reinforce the brand values, enable potential customers to view the entire range, and book test drives from their mobile devices. The more people who booked test drives, the more sales they will make.</p>
              <p>The launch had to coincide with the airing of Skoda’s latest TV advert, featuring Sir Bradley Wiggins, so the tight deadline had to be met.</p>
            </div>
          </div>
        </section>

        <section className="u-row-space-medium u-bg-color-white">
          <div className="container-fluid">
            <div className="row u-max-content-width-narrow">
              <h2>The Approach</h2>
              <p>Using some already developed front end components, I was commissioned to complete this development, and deliver the fully functional front-end components. A very lean code base was used without dependencies on any bloated 3rd party libraries.</p>

              <p>The mobile site had to be quick so avoided the dependency on any bloated, third-party code libraries. The front end components were then integrated into an Umbraco CMS.</p>
            </div>
          </div>
        </section>

        <section>
          <img className="u-full-width b-lazy"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-src="/assets/img/case-studies/skoda/skoda-case-study-02-large.jpg"
            data-src-small="/assets/img/case-studies/skoda/skoda-case-study-02-large.jpg"
            alt="" />
        </section>
      </CaseStudy>
    </>
  )
}