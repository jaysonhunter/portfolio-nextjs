import DATA from '/data/casestudyJPMorgan.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function JPMorgan() {
  return (
    <>
    <CaseStudy data={ DATA }>

      <section class="u-row-space-medium u-bg-color-white">
        <div class="container-fluid">
          <div class="row u-max-content-width-narrow">
            <h2>The Requirement</h2>
            <p>Banks are required to put in place and maintain policies and procedures to prevent and detect money-laundering. Banks are also under a regulatory obligation to establish, implement and maintain adequate policies and procedures for countering the risk that they might be used to further financial crime.</p>

            <p>The requirement was to help the business implement a software package that would scan all SWIFT wire transfer instructions for known entities according the OFAC (Office of Foreign Assets Control).</p>
          </div>
        </div>
      </section>

      <section class="u-row-space-medium">
        <div class="container-fluid">
          <div class="row u-max-content-width-narrow">
            <h2>The Regulations</h2>
            <p>The Office of Foreign Assets Control (OFAC) of the US Department of the Treasury administers and enforces economic and trade sanctions based on US foreign policy and national security goals against targeted foreign countries and regimes, terrorists, international narcotics traffickers, those engaged in activities related to the proliferation of weapons of mass destruction, and other threats to the national security, foreign policy or economy of the United States.</p>

            <p>The FSA is the ‘competent authority’ under the Money Laundering Regulations and the Wire Transfer Regulations. This means they are responsible for ensuring that financial services firms comply with this legislation.</p>

            <p>The risk of money laundering is relevant to two statutory objectives:</p>

            <ul>
              <li>Reducing the extent to which it is possible for a firm to be used for purposes connected with financial crime, because weak AML controls leave firms vulnerable to becoming involved in money laundering, unwittingly or otherwise; and</li>
              <li>Maintaining market confidence because the use of UK firms to launder money could adversely affect the reputation of the UK market.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="u-row-space-medium u-bg-color-white">
        <div class="container-fluid">
          <div class="row u-max-content-width-narrow">
            <h2>The Work</h2>
            <p>Working alongside the Compliance team I assisted with the implementation of a European ‘Anti-Money Laundering’ software package, to comply with the financial regulatory authorities.</p>
            <p>I also oversaw the implementation of a similar custom-written application for the Delaware branch in the US.</p>
          </div>
        </div>
      </section>


    </CaseStudy>
    </>
  )
}