import DATA from '/data/casestudyAholdDelhaize.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function AholdDelhaize() {
  return (
    <>
    <CaseStudy data={ DATA }>
      <section className="u-row-space-medium">
        <div className="container-fluid">
          <div className="row u-max-content-width-narrow">
            <h2>The Challenge</h2>
            <p>Develop a whitelabel product that could be configured to suit the needs of the various countries. This core product needed to have the flexibility to look and function differently depending on the local requirements.</p>
          </div>
        </div>
      </section>

      <section className="u-row-space-medium u-bg-color-white">
        <div className="container-fluid">
          <div className="row u-max-content-width-narrow">
            <h2>The Approach</h2>
            <p>I was commissioned to help develop, and deliver the modular, reusable front end components in HTML, CSS and Javascript. The key to developing large scale enterprise applications, is to not develop large scale applications.</p>

            <p>The approach I use on all projects is to develop smaller, reusable components that can be assembled to create large, scalable applications.</p>

            <p>Wireframes were created from which mockups screens prepared for client signoff. Tools such as Axure for wireframes, and Invision for prototypes were invaluable to the smooth, forward progression of the project, as averyone could view them from the various global locations.</p>
          </div>
        </div>
      </section>

      <section className="u-row-space-medium u-bg-color-grey-92">
        <div className="container-fluid">
          <img className="b-lazy"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-src="/assets/img/case-studies/ahold-delhaize/delhaize-case-study-02-large.jpg"
            data-src-small="/assets/img/case-studies/ahold-delhaize/delhaize-case-study-02-large.jpg"
            alt="" />
          </div>
      </section>

      <section className="text-center u-bg-color-grey-92">
        <div className="container-fluid">
          <div className="row">
            <div className="one-quarter">
              <img className="b-lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src="/assets/img/case-studies/ahold-delhaize/delhaize-elements.jpg"
            alt="" />
            </div>
            <div className="one-quarter">
              <img className="b-lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src="/assets/img/case-studies/ahold-delhaize/delhaize-components.jpg"
            alt="" />
            </div>
            <div className="one-quarter">
              <img className="b-lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src="/assets/img/case-studies/ahold-delhaize/delhaize-modules.jpg"
            alt="" />
            </div>
            <div className="one-quarter">
              <img className="b-lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src="/assets/img/case-studies/ahold-delhaize/delhaize-pages.jpg"
            alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="u-row-space-medium">
        <div className="container-fluid">
          <div className="row u-max-content-width-narrow">
            <h2>The Solution</h2>
            <p>Working with highly talented, cross functional teams of developers, UX and UI we developed a solution that functions across a multitude of mobile devices aswell as being cross browser compatible, incorporating usability best practices.</p>
            <p>The team in London worked well with the various back-end integration teams in Romania, Ukraine and Greece.</p>
          </div>
        </div>
      </section>

      <section>
        <img className="b-lazy"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src="/assets/img/case-studies/ahold-delhaize/delhaize-case-study-01-large.jpg"
          data-src-small="/assets/img/case-studies/ahold-delhaize/delhaize-case-study-01-large.jpg"
          alt="" />
      </section>

      </CaseStudy>
    </>
  )
}