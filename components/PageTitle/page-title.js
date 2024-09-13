export default function PageTitle ({ title, subText }) {
  return (
    <section className="page-title-block {{colorVersionClass}}">
      <div className="container-fluid">
        <div className="text-block">
          <div className="title">{title}</div>
          <div className="sub-text">{subText}</div>
        </div>
      </div>
    </section>
    
  )
}

