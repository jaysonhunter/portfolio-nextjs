export default function Hero({ heroData }) {
  return (
    <section className={`hero ${heroData.extraClasses} ${heroData.bgColorClass} js-hero`} data-resize={heroData.resizeHero}>
      <div className="bg-image b-lazy"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src={heroData.bgImageURL}
          data-src-small={heroData.bgSmallImageURL}
          data-src-medium={heroData.bgMediumImageURL}
          style={{backgroundPosition: heroData.bgPosition}}
          >
      </div>

      {heroData.overlay && <div className="overlay"></div>}

      <div className={`text-block ${heroData.textColorClass} animated animate-on-scroll`} data-animation-class="fadeInUp">
        {heroData.title && <div className={"title"}>{heroData.title}</div>}
        <div className={"sub-text"}>{heroData.subText}</div>
      </div>

      {heroData.scrollDown && <a href="#" className="scroll-down js-scroll-down"></a>}
    </section>
  
  )
}