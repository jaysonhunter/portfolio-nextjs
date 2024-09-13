import DATA from '/data/casestudyConcisemedia.json';
import CaseStudy from '/components/CaseStudy/case-study';

export default function ConciseMedia() {
  return (
    <>
    <CaseStudy data={ DATA }>
    <section className="u-row-space-medium">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>The brief</h2>
         <p>Concise Media Group commissioned me to produce a bespoke, interactive iPad app for their client, Cushman & Wakefield -  a commercial real estate company.</p>
         <p>The client was hosting a conference in Cannes, and wanted an interactive app to replace the bulky, paper handouts normally associated with events.</p>
         <p>The app had to provide an intuitve interface containing all the event content, and enable the participants to engage with the program in real time.</p>
       </div>
     </div>
   </section>
   
   
   <section className="u-row-space-medium u-bg-color-white">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>The approach</h2>
         <p>I produced the app using Concises&apos; whitelabel codebase as a starting point, customising its look and feel with assets from the client.</p>
         <p>The app contained the following features: </p>
   
         <ul>
           <li>Agenda</li>
           <li>Attendee and speaker biograhies</li>
           <li>Messaging</li>
           <li>Voting/Polling</li>
           <li>Ask a question</li>
           <li>Word cloud</li>
           <li>Push presentation</li>
           <li>Notes</li>
           <li>Feedback form</li>
         </ul>
   
       </div>
     </div>
   </section>
   
   <section className="u-row-space-medium">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>The result</h2>
         <p>It was the first time Cushman & Wakfield had used an interactive app at a conference. They were most pleased with the results as the app achieved 100% participation from all 360 guests.</p>
       </div>
     </div>
   </section>
   
   <section>
     <img className="b-lazy"
       src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
       data-src="/assets/img/case-studies/concise-media-group/cushman-large.jpg"
       data-src-small="/assets/img/case-studies/concise-media-group/cushman-large.jpg"
       alt="" />
   </section>
   
   <section className="u-row-space-medium u-bg-color-white">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>Other Client Apps</h2>
         <p>I developed in excess of 40 apps for companies such as Ernst & Young, HAVAS New York, First Protocol, IBM, HSBC, Shell and Rolls Royce. Here are just a few of those app screens:</p>
       </div>
     </div>
   </section>
   
   <section className="u-row-space-medium-top u-text-center u-bg-color-grey-92">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>Ernst &amp; Young</h2>
       </div>
     </div>
   
     <img className="b-lazy"
       src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
       data-src="/assets/img/case-studies/concise-media-group/ey-large.jpg"
       data-src-small="/assets/img/case-studies/concise-media-group/ey-large.jpg"
       alt="" />
   </section>
   
   <section className="u-row-space-medium-top u-text-center u-bg-color-grey-92">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>HAVAS New York</h2>
       </div>
     </div>
     <img className="b-lazy"
       src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
       data-src="/assets/img/case-studies/concise-media-group/havas-large.jpg"
       data-src-small="/assets/img/case-studies/concise-media-group/havas-large.jpg"
       alt="" />
   </section>
   
   <section className="u-row-space-medium-top u-text-center u-bg-color-grey-92">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>Fist Protocol Demo</h2>
       </div>
     </div>
     <img className="b-lazy"
       src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
       data-src="/assets/img/case-studies/concise-media-group/first-protocol-large.jpg"
       data-src-small="/assets/img/case-studies/concise-media-group/first-protocol-large.jpg"
       alt="" />
   </section>
   
   <section className="u-row-space-medium-top u-text-center u-bg-color-grey-92">
     <div className="container-fluid">
       <div className="row u-max-content-width-narrow">
         <h2>First Protocol Pantheon</h2>
       </div>
     </div>
     <img className="b-lazy"
       src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
       data-src="/assets/img/case-studies/concise-media-group/pantheon-large.jpg"
       data-src-small="/assets/img/case-studies/concise-media-group/pantheon-large.jpg"
       alt="" />
   </section>

    </CaseStudy>
    </>
  )
}