export default function CaseStudyDetailsBlock({projectDescription}) {
  return (
    <section class="case-study-detail">
      <div class="project-details">
        <div class="container-fluid">
          <div class="row u-max-content-width-narrow">
            <h2>Project summary</h2>
            <div class="project-description">{projectDescription}</div>
          </div>
        </div>
      </div>
    </section>
  )
}