import DATA from '/data/data.json';
import Image from 'next/image';

export default function ClientLogoGrid() {
  return (
    <ul className="client-logo-grid">
      {DATA.clientLogos.map((logo, index) => (
        <li key={index} className="logo-grid-item">
          <Image className="logo-image"
            src={logo.logoURL} alt="image"
            placeholder='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            width={800} 
            height={800} 
            style={{ width: '100%', height: '100%' }} />
      </li>
      ))}
    </ul>
  )
}