import DATA from '/data/casestudyChillisauce.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function Chillisauce() {
  return (
    <>
    <CaseStudy data={ DATA }>
    <section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Challenge</h2>
      <p>Build a user-centric, mobile-first website to improve revenue and value for the company shareholders. The site had to ooze authenticity and convey the brands values with captivating photography of all events.</p>
    </div>
  </div>
</section>

<section class="u-row-space-medium u-bg-color-white">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Approach</h2>
      <p>I was commissioned to develop all HTML and CSS components in a modular fashion in order to keep the size of the code base down. It was important to ensure performance and maintainability did not suffer.</p>

      <p>A static representation of the site was created using a modular pattern library, called PatternLab by Brad Frost to contain all HTML and CSS components. This was available online for everyone to track progress and provide feedback on.
      </p>
    </div>
  </div>
</section>

<section class="text-center u-bg-color-grey-92">
  <div class="container-fluid ">
    <div class="row">
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/chillisauce/chillisauce-elements.jpg"
      alt="" />
      </div>
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/chillisauce/chillisauce-components.jpg"
      alt="" />
      </div>
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/chillisauce/chillisauce-modules.jpg"
      alt="" />
      </div>
      <div class="one-quarter">
        <img class="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/img/case-studies/chillisauce/chillisauce-pages.jpg"
      alt="" />
      </div>
    </div>
  </div>
</section>

<section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Result</h2>
      <p>The backend developers used this pattern library to access the HTML components, which they used to build the site using the Sitecore CMS and Angular.</p>
    </div>
  </div>
</section>


<section>
  <img class="u-full-width b-lazy"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="/assets/img/case-studies/chillisauce/chillisauce-case-study-01-large.jpg"
    data-src-small="/assets/img/case-studies/chillisauce/chillisauce-case-study-01-large.jpg"
    alt="" />
</section>

    </CaseStudy>
    </>
  )
}