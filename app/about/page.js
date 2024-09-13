import PageTitle from '@/components/PageTitle/page-title';
import CtaBlock from '/components/CtaBlock/cta-block';
import ABOUT_DATA from "/data/about.json";

export const metadata = {
  title: ABOUT_DATA.title,
  description: ABOUT_DATA.description,
  OGImage: ABOUT_DATA.ogImage,
  OGImageWidth: ABOUT_DATA.ogImageWidth,
  OGImageHeight: ABOUT_DATA.ogImageHeight,
  TwitterImage: ABOUT_DATA.twitter_image,
}

export default function About() {
  return (
    <>
    <PageTitle title={ABOUT_DATA.page.title} subText={ABOUT_DATA.page.subText} />

    <section className="u-row-space-medium u-bg-color-white">
        <div className="container-fluid">
            <div className="u-max-content-width-narrow">
                <h2>A few facts about myself</h2>
                <p>Firstly, I&apos;m a proud dad of 2, and feel very lucky to have such a loving family. I prefer quality over quantity, have a great appreciation for bespoke craftsmanship, and enjoy starting businesses. I&apos;m an avid fan of the Rolling Stones having been to many of their concerts, including Blues legends such as BB King and Buddy Guy.</p>
                <p>Skiing and scuba diving are my sports of choice, and I&apos;d rather have a 1964 Ferrari 250 GTO over any of the new, hi-tech versions of today. I&apos;m not a man of many words but certainly a straight talker. I&apos;ll happily tell you what you need to know, not what you want to hear.</p>
            </div>
        </div>
    </section>

    <section className="u-row-space-small u-bg-color-white">
        <div className="container-fluid">
            <div className="row u-max-content-width-narrow">
                <h2>Where it all began</h2>
                <p>I remember this like it was yesterday, but it&apos;s a defining memory for me.</p>

                <p>Every Sunday my mom, dad and I would go to the same hotel for lunch. We&apos;d never miss going there unless we weren&apos;t in town, so we knew all the staff by first name, and of course the owner who was a family friend.</p>

                <p>Every now and then my aunt and uncle would join us. One Sunday my aunt told my parents that she thought I&apos;d be good with computers.</p>

                <p>So I convinced my dad that I would use a computer for “homework”, and he agreed to buy me one. I&apos;ll never forget standing in the computer shop with the salesman telling me - “You&apos;ll never run out of memory - it has 4KB you know.”</p>

                <p>The computer was a Texas Instruments 99/4A, and 4K was a lot back in the 80&apos;s.</p>
            </div>
        </div>
    </section>

    <section className="u-row-space-small u-bg-color-white">
      <div className="container-fluid">
        <div className="row u-max-content-width-narrow">
            <h2>How I got hooked into IT</h2>
            <p>My “homework” turned more in game playing and wanting to figure out how they worked, so I became very interested in programming.</p>

            <p>A few years passed and better computers emerged such as the Commodore 64 and the legendary Commodore Amiga was the best thing since sliced bread.</p>

            <p>Unfortunately, there were very few programmming books available, and Google hadn&apos;t even been invented yet.</p>

            <p>So I just experimented and got things to work through trial and error. I remember spending many a summer holiday indoors just programming.</p>

            <p>The Amiga 500 got me hooked, and I just had to pursue IT as a passion.</p>
          </div>
        </div>
    </section>

    <section className="u-row-space-small u-bg-color-white">
      <div className="container-fluid">
        <div className="row u-max-content-width-narrow">
            <h2>My studies</h2>
            <p>I finished school and studied computer programming (Information Technology) for 3 years.</p>
            <p>Admittedly I&apos;ve forgotten most of the course work but what has remained with me, is the fundamental understanding and best practices one applies to software engineering.</p>
        </div>
      </div>
    </section>

    <section className="u-row-space-small u-bg-color-white">
      <div className="container-fluid">
        <div className="row u-max-content-width-narrow">
            <h2>And today...</h2>
            <p>My IT skills have provided me with opportunities to work within industries such as financial services, creative agencies, recruitment and real estate.</p>

            <p>Whilst development is still vey much my bread and butter, I&apos;m now focussing more on the consultancy side of my business. Technology advances so quickly that it&apos;s hard to keep up with it all, and it can become tiring at times.</p>
            <p>So now I focus more on a business&apos; needs - the ‘why&apos;, and not so much the ‘how&apos;.</p>
            <p>Helping you deliver your next web project, by working alongside you as a partner, right from the start.</p>
        </div>
      </div>
    </section>

    <CtaBlock />
    </>
  )
}