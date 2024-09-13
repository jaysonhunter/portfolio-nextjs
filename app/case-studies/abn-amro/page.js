import DATA from '/data/casestudyABNAmro.json';
import CaseStudy from '/components/CaseStudy/case-study'

export default function ABNAmro() {
  return (
    <>
      <CaseStudy data={ DATA }>
      <section className="u-row-space-medium">
        <div className="container-fluid">
          <div className="u-max-content-width-narrow">
            <h2>The Requirements</h2>
            <p>I was commissioned to help the bank automate and streamline a number of processes by developing new workflow systems, thereby reducing manual effort to meet financial regulatory requirements.</p>
          </div>
        </div>
      </section>

      <section className="u-row-space-medium u-bg-color-white">
        <div className="container-fluid">
          <div className="u-max-content-width-narrow">
            <h2>Personal Account Dealing</h2>
            <p>A &apos;Personal Account Dealer&apos; application was developed to reduce turnaround time for Personal Account Dealing requests (crucial for business, since the buying and selling of shares depends on speed).  This project received a great deal of attention from global offices due to its success.
            </p>
          </div>
        </div>
      </section>

      <section className="u-row-space-medium">
        <div className="container-fluid">
          <div className="u-max-content-width-narrow">
            <h2>Approved Persons</h2>
            <p>An &apos;Approved Persons&apos; database was developed to enable Compliance to record details of all &apos;Approved Persons&apos;, automating the workflow approval process for all candidate training courses and exam bookings.
            </p>
          </div>
        </div>
      </section>
      <section className="u-row-space-medium u-bg-color-white">
        <div className="container-fluid">
          <div className="u-max-content-width-narrow">
            <h2>Global Key Client</h2>
            <p>A &apos;Global Key Client&apos; Database, accessible by thousands of employees across Europe, the U.S.A. and Asia, improved the &apos;Client Approval&apos; process, a preliminary step in the bank&apos;s trading procedures.
            </p>
          </div>
        </div>
      </section>

      </CaseStudy>
    </>
  )
}

