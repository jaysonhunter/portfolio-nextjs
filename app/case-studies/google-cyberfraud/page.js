import DATA from '/data/casestudyGoogleCyberfraud.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function Google() {
  return (
    <>
    <CaseStudy data={ DATA }>

<section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Challenge</h2>
      <p>The current website was very text based, and needed an updated look with more imagery. I was commissioned to work closely with Beyonds&apos; UI team in London, and create a working prototype showcasing the new designs.</p>
    </div>
  </div>
</section>

<section class="u-row-space-medium u-bg-color-white">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Approach</h2>
      <p>After reviewing the designs I applied the Atomic Design methodology and quickly deconstructed them into a number of reusable common patterns. I implemented a component library called PatternLab which enabled everyone to track the progression of development online.</p>
      <p>PatternLab allows you to develop small components and assemble them to create many different page designs without having to duplicate code. A very handy tool indeed.</p>
      <p>These reusable snippets of HTML code would be implemented into Google’s very own internal CMS called Goro, that uses the Django templating language.</p>
    </div>
  </div>
</section>

<section class="text-center u-bg-color-grey-92">
  <div class="container-fluid">
    <div class="row">
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/google/google-elements.jpg"
      alt="" />
      </div>
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/google/google-components.jpg"
      alt="" />
      </div>
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/google/google-modules.jpg"
      alt="" />
      </div>
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/google/google-pages.jpg"
      alt="" />
      </div>
    </div>
  </div>
</section>

<section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Result</h2>
      <p>A fully functioning prototype contain mostly sample designs with the standard “Lorem Ipsum” placeholder text all developers are familiar with.</p>
      <p>I created the Home page, ‘Click Fraud Protection’ and ‘Display Advertising Protection’ landing pages, along with the ‘Understanding Online advertising fraud’ and ‘Click fraud protection for publishers’ pages.</p>
      <p>The working prototype can be viewed <a href="http://google-cyberfraud.jaysonhunter.com/patternlab/public/?p=pages-home-page" class="underlined-link" target="_blank">here.</a></p>
    </div>
  </div>
</section>


<section>
  <img class="u-full-width b-lazy"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="/assets/img/case-studies/google/google-case-study-01-large.jpg"
    data-src-small="/assets/img/case-studies/google/google-case-study-01-large.jpg"
    alt="" />
</section>


    </CaseStudy>
    </>
  )
}