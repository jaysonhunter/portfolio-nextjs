import CONTACT_DATA from '/data/contact.json';
import Hero from '/components/Hero/hero';

export const metadata = {
  title: CONTACT_DATA.title,
  description: CONTACT_DATA.description,
  "og:image": CONTACT_DATA.ogImage,
  OGImageWidth: CONTACT_DATA.ogImageWidth,
  OGImageHeight: CONTACT_DATA.ogImageHeight,
  "twitter:image" : CONTACT_DATA.twitter_image,
}

export default function Contact() {
  return (
    <>
    <Hero heroData={CONTACT_DATA.hero} />

    <section className="u-row-space-medium">
      <div className="container-fluid">
        <div className="u-max-content-width-narrow">
            <div className="u-text-center">
              <h2>I&apos;m based in London (UK), perfect for global business.</h2>
            </div>
        </div>

        <div className="time-zones u-row-space-small">
          {/* {{#contactInfo.officeLocations.london}} */}

            <div id="london-clock" className="clock">
              <div className="hours-container">
                <div className="hours"></div>
              </div>
              <div className="minutes-container">
                <div className="minutes"></div>
              </div>
              <div className="seconds-container">
                <div className="seconds"></div>
              </div>
            </div>

          </div>
          {/* {{/contactInfo.officeLocations.london}} */}
        </div>

        <div className="u-max-content-width-narrow">
            <div className="u-text-center">
              <a href={`mailto:${CONTACT_DATA.contactEmailAddresses.generalEnquiries}`} className="u-h2 underlined-link">{CONTACT_DATA.contactEmailAddresses.generalEnquiries}</a>
            </div>
          </div>
    </section>
    </>
  )
}

