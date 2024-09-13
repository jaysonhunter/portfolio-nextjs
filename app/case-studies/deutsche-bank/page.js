import DATA from '/data/casestudyDeutscheBank.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function DeutscheBank() {
  return (
    <>
    <CaseStudy data={ DATA }>
    <section class="u-row-space-medium u-bg-color-white">
      <div class="container-fluid">
        <div class="u-max-content-width-narrow">
          <h2>The Requirements</h2>
          <p>As part of a team of developers I provided IT solutions to a variety of businesses, including Controlling, HR, Treasury, Audit and Compliance.</p>
          <p>Clients included Corporate & Investment Bank (CIB) and Private Clients and Assets Management (PCAM).</p>

          <p>I managed every phase of the development life cycle of each project, from business need analysis, timescales and costs, to design and development, testing and training of all users.</p>

          <p>As part of the bank wanting to outsource many operations, I was responsible for managing the migration of 200+ applications to Singapore, liaising daily between the two sites.</p>
        </div>
      </div>
    </section>
    </CaseStudy>
    </>
  )
}