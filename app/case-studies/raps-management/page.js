import DATA from '/data/casestudyRapsManagement.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function RapsManagement() {
  return (
    <>
    <CaseStudy data={ DATA }>

<section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Challenge</h2>
      <p>RAPS management commissioned me to develop a professional looking website to enhance thier online brand, differentiate them from your competitors, allow the editing and adding of new content via an easy to use CMS, and lay the foundation for improved search engine rankings.
      </p>
    </div>
  </div>
</section>

<section class="u-row-space-medium u-bg-color-white">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Approach</h2>
      <p>The project was scoped into the Concept, Design, Technical and lastly the Testing phases.</p>
      <p>In the Concept phase, I began work by outlining the basic flow and gathering text and images for the website. During the Design phase I created the digital artwork for the various pages and integrated the images and text.</p>
      <p>For the Technical phase I enabled the website server, domain and added interactive functionality such as the contact form. </p>

    <p>Lastly, the Testing phase was responsible for checking the entire website to make sure it operated as expected.</p>
    </div>
  </div>
</section>

<section>
  <img class="u-full-width b-lazy"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="/assets/img/case-studies/raps/raps-case-study-01-large.jpg"
    data-src-small="/assets/img/case-studies/raps/raps-case-study-01-large.jpg"
    alt="" />
</section>


    </CaseStudy>
    </>
  )
}