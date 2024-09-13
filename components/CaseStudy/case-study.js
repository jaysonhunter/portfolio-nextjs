import Hero from '/components/Hero/hero';
import CtaBlock from '/components/CtaBlock/cta-block';
import CaseStudyDetailsBlock from '/components/CaseStudyDetailsBlock/case-study-details-block';

export default function CaseStudy({ data, children }) {
  return (
    <>
      <Hero heroData={data.hero} />
      <CaseStudyDetailsBlock projectDescription={data.caseStudyDetails.projectDescription} />

      { children }

      <CtaBlock />
    </>
  )
}

