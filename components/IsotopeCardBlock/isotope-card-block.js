import Card from "@/components/Card/card";

export default function IsotopCardBlock({data}) {
  return (
    <ul className={`isotope-grid ${data.gridTypeClass} js-isotope-grid`}>
        <li className={"grid-sizer"}></li>
        <li className={"gutter-sizer"}></li>
        {data.dataContent.map((item, index) => (
          item.isActive && (
            <li key={index} className={`isotope-item ${item.filterKey}`}>
              <Card card={item} />
            </li>
          )
        ))}
    </ul>
  )
}