import DATA from '/data/home.json';
import Hero from '/components/Hero/hero';
import ClientLogoGrid from '/components/ClientLogoGrid/client-logo-grid';
import IsotopeCardBlock from "/components/IsotopeCardBlock/isotope-card-block";
//import MetaTags from '@/components/MetaTags/MetaTags';

export const metadata = {
  title: DATA.title,
  description: DATA.description,
  author: "Jayson Hunter",
}

export default function HomePage() {
   return (
    <>
    <Hero heroData={DATA.hero} />

    <section className={"u-row-space-medium u-text-center"}>
      <div className={"container-fluid"}>
        <div className={"u-max-content-width-wide"}>
          <h2>I&apos;m an IT consultant with a passion for business.</h2>
          <p>I enjoy working with local businesses within the London area, as well as some of my previous
            clients stretching between New York and the Ukraine. Whether you&apos;re looking to improve your current
            website or completely start from scratch, it&apos;s worth having a quick conversation with me to see what
            I could offer you.</p>
        </div>
      </div>
    </section>
 
    <section className={"u-row-space-medium u-bg-color-white"}>
      <div className={"container-fluid"}>
        <div className={"u-max-content-width-narrow"}>
          <div className={"u-h2 u-text-center u-row-space-medium-bottom"}>
            How I can help your business
          </div>
        </div>
      </div>

      <div className={"container-fluid"}>
        <div className={"row u-text-center"}>
          <div className={"col-xs-12 col-md-4 u-p-b-64"}>
            <div className={"u-h3 u-row-space-small-bottom"}>
              Consulting
            </div>
            <p>I recommend going through a discovery phase to flesh out the full requirements of your project.
              Not only will this save you a lot of time, but will also save you from blowing your budget.</p>
          </div>
          <div className={"col-xs-12 col-md-4 u-p-b-64"}>
            <div className={"u-h3 u-row-space-small-bottom"}>
              Development
            </div>
            <p>This is where I actually bring your ideas to life through code. I can advise on the most suitable
              technologies to use, including industry best practices such as as mobile first development, and
              optimisation.</p>
          </div>
          <div className={"col-xs-12 col-md-4"}>
            <div className={"u-h3 u-row-space-small-bottom"}>
              Marketing
            </div>
            <p>Having a great looking website is a must have these days, but that&apos;s pointless if nobody can find
              it. Google has about 80% share of the search engine market, so ensuring your site can be found is
              paramount.</p>
          </div>
        </div>
      </div>
    </section>

    <section className={"u-bg-color-midnight-blue u-row-space-medium"}>
      <div className={"container-fluid"}>
        <div className={"u-max-content-width-wide"}>
          <div className={"text-block u-h2 text-center u-color-white"}>
            A few clients I&apos;ve been involved with:
          </div>
        </div>

        <ClientLogoGrid />
      
      </div>
    </section>

    <section className={"u-row-space-medium"}>
      <div className={"container-fluid"}>
        <div className={"u-h2 u-text-center u-max-content-width-wide"}>
          I strive to become a partner to your business, helping you solve the many challenges you have in the
          digital space.
        </div>
      </div>
    </section>

    <section className={"text-center u-row-space-large u-bg-color-white"}>
      <div className={"container-fluid"}>
        <div className={"u-max-content-width-wide"}>
          <div className={"text-block u-h2 u-row-space-medium-bottom"}>
            Featured Projects
          </div>
        </div>

        <IsotopeCardBlock gridTypeClass='grid-2-up' data={DATA.caseStudies} />

        <div className={"u-row-space-medium-top"}>
          <a href="/case-studies" className={"btn btn-primary"}>VIEW MORE OF MY WORK</a>
        </div>
      </div>
    </section>

    </>
  )
}