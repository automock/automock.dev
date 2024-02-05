import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './index.module.css';

const highlightsData = [{
  icon: "img/3d.svg",
  heading: "Extensible",
  content: "Provides unparalleled flexibility through its meticulously crafted modular architecture."
}, {
  icon: "img/magic-wand.svg",
  heading: "Versatile",
  content: "Serves as a robust, elegant, and well-structured foundation for all kinds of server-side applications."
}, {
  icon: "img/quality.svg",
  heading: "Progressive",
  content: "Introduces design patterns and well-established solutions to the Node.js landscape."
}];

const blockCardData = [{
  icon: "img/puzzle.svg",
  heading: "Modularity",
  content: "Streamline upkeep by organizing applications into self-contained modules."
}, {
  icon: "img/rocket.svg",
  heading: "Scalability",
  content: "Scale seamlessly with an efficient, battle-tested components. "
}, {
  icon: "img/di.svg",
  heading: "Dependency injection",
  content: "Elevate testability with a sophisticated dependency injection system. "
}, {
  icon: "img/type-safety.svg",
  heading: "Type safety",
  content: "Mitigate errors through the robust type safety features of TypeScript."
}, {
  icon: "img/ecosystem.svg",
  heading: "Rich ecosystem",
  content: "Explore a rich ecosystem offering versatile tools to craft solutions tailored to your needs."
}, {
  icon: "img/chip.svg",
  heading: "Enterprise-ready",
  content: "Trusted by thousands of leading companies and organizations worldwide."
}, {
  icon: "img/microservices.svg",
  heading: "Microservices",
  content: "Create loosely coupled, independently deployable services for increased agility and scalability."
}, {
  icon: "img/api.svg",
  heading: "Web apps",
  content: "Build REST APIs, GraphQL APIs, Queues, and real-time & event-driven applications in no time."
}];

const principalSponsorsData = [{
  link: "#",
  image: "img/trilon.1777374a.svg",
}, {
  link: "#",
  image: "img/valor-software.8a89543b.png"
}, {
  link: "#",
  image: "img/amplication-logo.7793cc70.svg"
}];

const goldSponsorsData = [{
  link: "#",
  image: "img/red-hat-logo.c5e6e64a.svg",
}, {
  link: "#",
  image: "img/sanofi.b18c1526.png"
}, {
  link: "#",
  image: "img/nx-logo.0c7a375e.png"
}, {
  link: "#",
  image: "img/intrinisic-logo.cdfbbe86.png"
}, {
  link: "#",
  image: "img/jetbrains-logo.536f2da5.svg"
}, {
  link: "#",
  image: "img/snyk-logo-black.9d8e52cf.png"
}, {
  link: "#",
  image: "img/fuse-logo.6f263cfe.svg"
}, {
  link: "#",
  image: "img/ridi-logo.0045775b.svg"
}, {
  link: "#",
  image: "img/movavi-logo.513cacf7.svg"
}, {
  link: "#",
  image: "img/skunk-logo.a5643938.png"
}];

const silverSponsorsData = [{
  link: "#",
  image: "img/n-inc-logo.25e4f4af.svg"
}, {
  link: "#",
  image: "img/twistag-logo.8d8b7792.png"
}, {
  link: "#",
  image: "img/immediate-edge-logo.17a44115.png"
}, {
  link: "#",
  image: "img/casinos-zonder-logo.807a9117.png"
}];

const bronzeSponsorsData = [{
  link: "#",
  image: "img/novologic.11cf92a2.png"
}, {
  link: "#",
  image: "img/swingdev-logo.ccf3f573.svg"
}, {
  link: "#",
  image: "img/mantro-logo.52a5f10c.svg"
}, {
  link: "#",
  image: "img/genuinebee.85622ca7.svg"
}, {
  link: "#",
  image: "img/triplebyte.1d5c2209.png"
}, {
  link: "#",
  image: "img/netlify-logo.551c7514.svg"
}, {
  link: "#",
  image: "img/nearpod-logo.2f234545.svg"
}, {
  link: "#",
  image: "img/codeguesser-logo.7fe76af6.svg"
}, {
  link: "#",
  image: "img/the-big-phone-store-logo.021bcaf0.png"
}, {
  link: "#",
  image: "img/vpn-review-logo.f6846486.png"
}, {
  link: "#",
  image: "img/lambda-it-logo.d3e8ba20.svg"
}, {
  link: "#",
  image: "img/rocketech-logo.eac89356.svg"
}, {
  link: "#",
  image: "img/aussiecasinohex-logo.6f73c4e8.svg"
}, {
  link: "#",
  image: "img/cryptocasinos-logo.e363efd7.svg"
}, {
  link: "#",
  image: "img/anonymistic-logo.fa542d82.png"
}, {
  link: "#",
  image: "img/naologic-logo.2a0e9532.svg"
}, {
  link: "#",
  image: "img/casinoutan-svensk-logo.109b8ce3.svg"
}, {
  link: "#",
  image: "img/casinohexca-logo.ce224d03.png"
}, {
  link: "#",
  image: "img/casinoonline-logo.8bae5f5a.png"
}, {
  link: "#",
  image: "img/casinoutankonto-logo.6834f75f.svg"
}, {
  link: "#",
  image: "img/casinot-logo.e53500be.png"
}, {
  link: "#",
  image: "img/wagerdex-logo.8ca3b447.png"
}, {
  link: "#",
  image: "img/casinotop-logo.afef8757.png"
}, {
  link: "#",
  image: "img/nettikasinolista-logo.c6c12d65.svg"
}, {
  link: "#",
  image: "img/betomania-logo.37b1239e.png"
}, {
  link: "#",
  image: "img/ace-logo.5c9223bb.svg"
}, {
  link: "#",
  image: "img/indekin-logo.5f92b15c.png"
}, {
  link: "#",
  image: "img/nzcasinohex-logo.68b77327.png"
}, {
  link: "#",
  image: "img/casino-portugal-logo.5c08cb7d.png"
}, {
  link: "#",
  image: "img/casinotop-logo.afef8757.png"
}, {
  link: "#",
  image: "img/fortune-games-logo.541bb569.png"
}, {
  link: "#",
  image: "img/nongamstopwager-logo.29bc350b.png"
}, {
  link: "#",
  image: "img/triplecore-logo.08ab1c17.svg"
}, {
  link: "#",
  image: "img/bestcasinos-pl-logo.fe4228ce.svg"
}, {
  link: "#",
  image: "img/casinowizard-logo.c987f296.png"
}, {
  link: "#",
  image: "img/polygon-logo.d0d1757c.svg"
}, {
  link: "#",
  image: "img/mobile-reality-logo.629b0e85.png"
}, {
  link: "#",
  image: "img/online-casino-xyz-logo.57ae35e0.png"
}, {
  link: "#",
  image: "img/parimatch-logo.e27a1529.png"
}, {
  link: "#",
  image: "img/boringowl-logo.fbc5c395.svg"
}, {
  link: "#",
  image: "img/bets-logo.0a5d1a8d.png"
}, {
  link: "#",
  image: "img/freespinny-logo.32b42495.png"
}, {
  link: "#",
  image: "img/normalres-logo.4e6ab362.png"
}, {
  link: "#",
  image: "img/kodifiresticks-logo.16f8744e.png"
}, {
  link: "#",
  image: "img/surebet-logo.16cef2ae.png"
}, {
  link: "#",
  image: "img/online-casino-belgie-logo.2736874a.png"
}, {
  link: "#",
  image: "img/topaustraliangambling-logo.f77e577d.svg"
}, {
  link: "#",
  image: "img/internetpokles-logo.6cab18b4.png"
}, {
  link: "#",
  image: "img/casinoaus-logo.b65a50ad.png"
}, {
  link: "#",
  image: "img/auonline-logo.fe005aa0.png"
}, {
  link: "#",
  image: "img/au-internet-pokies-logo.68b65119.png"
}, {
  link: "#",
  image: "img/legalbet-logo.90a9d7df.png"
}, {
  link: "#",
  image: "img/correct-casino-logo.8784ee73.svg"
}, {
  link: "#",
  image: "img/broadband-deals-logo.c4b583df.png"
}, {
  link: "#",
  image: "img/dopiosh-logo.80a96d4e.png"
}, {
  link: "#",
  image: "img/onlinecasinowiki-logo.a6332264.png"
}, {
  link: "#",
  image: "img/socpromotion-logo.3e94f9b5.png"
}, {
  link: "#",
  image: "img/slots-city-logo.73b430cb.png"
}, {
  link: "#",
  image: "img/nongamstopcasinos-logo.fd89bc3b.png"
}, {
  link: "#",
  image: "img/thesportsgeek-logo.1ae82c25.png"
}, {
  link: "#",
  image: "img/btc-india.ebd7c9a3.png"
}, {
  link: "#",
  image: "img/probukmacher-logo.442e3ef0.svg"
}, {
  link: "#",
  image: "img/nettcasino-logo.5ba28dc4.svg"
}, {
  link: "#",
  image: "img/playrealmoneyslots-logo.c9e44f5c.png"
}, {
  link: "#",
  image: "img/nyecasino-logo.05ddfd86.png"
}, {
  link: "#",
  image: "img/hinge-health-logo.bf04d7e4.svg"
}, {
  link: "#",
  image: "img/famoid-logo.2df6d907.png"
}, {
  link: "#",
  image: "img/blackjackonline-logo.cb1e76f2.png"
}, {
  link: "#",
  image: "img/casinotbiz-logo.c2043439.png"
}, {
  link: "#",
  image: "img/lookslots-logo.8b930b23.png"
}, {
  link: "#",
  image: "img/julienferand-logo.c5dac179.jpeg"
}, {
  link: "#",
  image: "img/tripoffice-logo.e881af54.png"
}, {
  link: "#",
  image: "img/zenrows-logo.2ee0126c.png"
}, {
  link: "#",
  image: "img/kajino-logo.b5c1cdb5.png"
}, {
  link: "#",
  image: "img/releaf-logo.5ef07438.png"
}, {
  link: "#",
  image: "img/automaten-logo.3cb45776.png"
}, {
  link: "#",
  image: "img/nzfirst-logo.bc5f8f04.svg"
}, {
  link: "#",
  image: "img/solcellsforetag-logo.7cb47ae4.svg"
}, {
  link: "#",
  image: "img/online-us-casinos-logo.2b909181.png"
}, {
  link: "#",
  image: "img/slotsup-logo.5fe6ee02.png"
}, {
  link: "#",
  image: "img/trustedcasinos-logo.2c2de2a2.png"
}, {
  link: "#",
  image: "img/aussiebestcasinos-logo.d79c35e6.png"
}, {
  link: "#",
  image: "img/wekrypto-logo.14123f47.png"
}, {
  link: "#",
  image: "img/couponlab-logo.3a198688.png"
}, {
  link: "#",
  image: "img/casinosvensk-logo.721ac284.png"
}, {
  link: "#",
  image: "img/leaflet-casino-logo.22abeb1e.png"
}, {
  link: "#",
  image: "img/legitcasino-logo.f49fc56b.png"
}, {
  link: "#",
  image: "img/aviators-logo.bb143479.png"
}, {
  link: "#",
  image: "img/indublin-logo.794da2c3.png"
}, {
  link: "#",
  image: "img/lux-limo-logo.9bdb8e06.png"
}];

function Homepage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <div className={styles.highlightsWrapper}>
        <div className="container">
          <div className={styles.highlightRow}>
            {highlightsData.map((item, index) =>
              <div className={styles.highlightBlock} key={index}>
                <div className={styles.iconWrapper}><img src={item.icon} /></div>
                <h5>{item.heading}</h5>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.blocksWrapper}>
        <div className="container">
          <div className={styles.heading}>
            <h4>Everything you need..</h4>
            <p> Build robust, powerful, and scalable server-side applications and stop reinventing the wheel. </p>
          </div>
          <div className={styles.blocksRow}>
            {blockCardData.map((item, index) =>
              <div className={styles.blocksCol} key={index}>
                <div className={styles.block}>
                  <div className={styles.iconWrapper}><img src={item.icon} /></div>
                  <h5>{item.heading}</h5>
                  <p>{item.content}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.enterpriseWrapper} id="enterprise">
        <div className="container">
          <div className={styles.enterpriseColumn}>
            <h2> The open source platform designed for the future. Build enterprise. </h2>
            <p> A complete development kit for building scalable server-side apps. Contact us to find out more about
              expertise consulting, on-site enterprise support, trainings, and private sessions. </p> <a
                href="#" target="_blank" className={styles.btn}
                title="Enterprise | NestJS - A progressive Node.js framework">Learn more about support offerings</a>
          </div>
        </div>
      </div>
      <div className={styles.liveWrapper}>
        <div className="container">
          <h4>Live preview</h4>
          <p> See how your application may potentially look like without leaving<br /> your personal browser. </p>
          <iframe
            src="https://stackblitz.com/edit/nestjs-typescript-starter-pcysqn?embed=1&file=src/app.service.ts&hideNavigation=1&showSidebar=1&view=editor"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </div>
      </div>

      <div className={styles.newsletterWrapper}>
        <div className="container">
          <div className={styles.envelopeBg}>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg>
          </div>
          <div className={styles.hgroup}>
            <h3>Join our Newsletter</h3>
            <p> Subscribe to stay up to date with the latest Nest updates, features, and videos! </p>
          </div>
          <div className={styles.newsletterForm}>
            <form className={styles.formWrapper}>
              <input id="newsletter-email" className={styles.formControl} name="email" type="email" placeholder="Email address.." required />
              <button type="submit" className={styles.signupButton}>
                <svg className={styles.faPaperPlane} aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg>
                <svg className={styles.iconSuccess} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    // <Layout
    //   title={siteConfig.title}
    //   description="Standalone Library for Automated Mocking of Class Dependencies.">
      <>
        <Header/>
        <Homepage />
        <Footer />
      </>
    // </Layout>
  );
}
