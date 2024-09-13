'use client';

import DATA from '/data/data.json';
import { useState } from 'react';
import PageHeader from "@/components/PageHeader/page-header";
import OffPageCanvas from "@/components/OffPageCanvas/off-page-canvas";
import Footer from "@/components/Footer/footer";
import Script from 'next/script'
// import '/main.css'

export default function RootLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = (event) => {
    console.log('handleNavToggle')
    event.preventDefault();
    setIsNavOpen(!isNavOpen);
  }

  const handleHideNav = () => {
    setIsNavOpen(false);
  }

  return (
    <html lang="en">
      <body>
        <div className={isNavOpen ? 'has-nav-open': ''}>
            <PageHeader navToggle={handleNavToggle} isNavOpen={isNavOpen} />
            <OffPageCanvas menu={DATA.menus.offCanvas} handleHideNav={handleHideNav}/>
            <main className="inner-wrapper">
              {children}
            </main>
            <Footer />

          <a className="back-to-top js-back-to-top"></a>

          <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></Script>
          <Script src="/main.js"></Script>
          
        </div>
      </body>
    </html>
  )
}