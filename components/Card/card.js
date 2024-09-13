export default function Card({card}) {
  return (
    <div className={`card ${card.cardClasses}`} data-href={card.cardURL}>
      <a href={card.cardURL} className={"card-link"}>
        <div className={"card-image b-lazy"}
          data-src={card.cardImgURL} alt={card.cardImgAlt}>
        </div>
        <div className={"card-content"}>
          <div className={"card-text"}>
            <div className={"card__title"}>
              {card.cardTitle}
            </div>
            <div className={"card__sub-title"}>
              {card.cardSubTitle}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}