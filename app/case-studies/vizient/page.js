import DATA from '/data/casestudyVizient.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function Vizient() {
  return (
    <>
    <CaseStudy data={ DATA }>
      
<section class="u-row-space-medium">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Challenge</h2>
      <p>I was commissioned by Future Brand, a global creative agency to develop the front end components for this new website. These components would be integrated into an backend CMS by a team of developers in Chicago.</p>
    </div>
  </div>
</section>

<section class="u-row-space-medium u-bg-color-white">
  <div class="container-fluid">
    <div class="row u-max-content-width-narrow">
      <h2>The Approach</h2>
      <p>As with all large projects I reduce the design down into smaller, reusable building blocks that I call elements, components and modules. I learnt this approach from a very talented chemistry graduate, and web developer called Brad Frost.</p>
      <p>I created the HTML blocks using a templating language called Jade, the styling rules using Sass and the clever logic bit using Javascript, the language of the web. By assembling the smaller components together the integration team could create any page design with ease.</p>
    </div>
  </div>
</section>

<section>
  <img class="u-full-width b-lazy"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    data-src="/assets/img/case-studies/vizient/vizient-case-study-01-large.jpg"
    data-src-small="/assets/img/case-studies/vizient/vizient-case-study-01-large.jpg"
    alt="" />
</section>


    </CaseStudy>
    </>
  )
}