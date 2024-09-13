import DATA from '/data/casestudyVividLime.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function VividLime() {
  return (
    <>
    <CaseStudy data={ DATA }>

<section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Requirements</h2>
      <p>Vivid Lime commissioned me to develop phase 2 for ICLP&apos;s website. This phase involved developing the Resources section containing a searchable archive of blog articles, reports, infographics and other material.</p>
      <p>The content could be filtered using terms from the Media Type, Category and Sector tabs.</p>
    </div>
  </div>
</section>

<section class="u-row-space-medium u-bg-color-white">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Approach</h2>
      <p>I firstly refactored the existing code base using best practices where possible, and implemented an improved build process for the current developer.</p>
      <p>I worked closely with this developer transferring much knowledge to him making the management and workflow of future projects that much easier.</p>
    </div>
  </div>
</section>

<section>
  <img class="u-full-width b-lazy"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="/assets/img/case-studies/vivid-lime/vivid-lime-case-study-01-large.jpg"
    data-src-small="/assets/img/case-studies/vivid-lime/vivid-lime-case-study-01-large.jpg"
    alt="" />
</section>


    </CaseStudy>
    </>
  )
}