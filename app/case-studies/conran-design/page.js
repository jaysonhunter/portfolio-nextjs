import DATA from '/data/casestudyConranDesign.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function ConranDesign() {
  return (
    <>
    <CaseStudy data={ DATA }>

<section className="u-row-space-medium">
  <div className="container-fluid">
    <div className="row u-max-content-width-narrow">
      <h2>The Regulatory Map</h2>
      <p>The first map consists of a custom drawn world map with 30 country markers, each with functionality to load in and display regulatory content via Ajax.</p>
      <p>The map can be seen here <a href="http://maps.jaysonhunter.com/regulatory/" className="underlined-link" target="_blank">Regulatory Map</a></p>
      <p></p>
    </div>
  </div>
</section>

<section className="u-row-space-medium u-bg-color-grey-92">
  <div className="container-fluid">
    <img className="b-lazy"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-src="/assets/img/case-studies/conran-design/conran-design-maps-case-study-01-large.jpg"
      data-src-small="/assets/img/case-studies/conran-design/conran-design-maps-case-study-01-large.jpg"
      alt="" />
      <img className="b-lazy"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-src="/assets/img/case-studies/conran-design/conran-design-maps-case-study-02-large.jpg"
      data-src-small="/assets/img/case-studies/conran-design/conran-design-maps-case-study-02-large.jpg"
      alt="" />
    </div>
</section>

<section className="u-row-space-medium">
  <div className="container-fluid">
    <div className="row u-max-content-width-narrow">
      <h2>The Heatmap</h2>
      <p>The 2nd map relies on using an external map provider, overlaying a set of interactive country areas using the GEOJSON format.</p>
      <p>The map has a filter which styles each region and displays dynamic data in a pop over associated with that region.</p>
      <p>The map can be seen here <a href="http://maps.jaysonhunter.com/heatmap/" className="underlined-link" target="_blank">Heatmap</a></p>
      <p></p>
    </div>
  </div>
</section>

<section className="u-bg-color-grey-92">
  <div className="container-fluid">
    <img className="b-lazy"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-src="/assets/img/case-studies/conran-design/conran-design-maps-case-study-03-large.jpg"
      data-src-small="/assets/img/case-studies/conran-design/conran-design-maps-case-study-03-large.jpg"
      alt="" />
    </div>
</section>


    </CaseStudy>
    </>
  )
}