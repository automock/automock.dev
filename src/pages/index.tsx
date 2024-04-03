import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks';
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

function Homepage() {
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
      <div>
        <div className="container">

          <CodeBlock
            language="go"
            text={`v := Vertex{X: 1, Y: 2}\nv := Vertex{X: 1, Y: 2}\nv := Vertex{X: 1, Y: 2}`}
            theme={dracula}
            showLineNumbers={true}
          />
        </div>
      </div>

      {/*<div className={styles.enterpriseWrapper} id="enterprise">*/}
      {/*  <div className="container">*/}
      {/*    <div className={styles.enterpriseColumn}>*/}
      {/*      <h2> The open source platform designed for the future. Build enterprise. </h2>*/}
      {/*      <p> A complete development kit for building scalable server-side apps. Contact us to find out more about*/}
      {/*        expertise consulting, on-site enterprise support, trainings, and private sessions. </p> <a*/}
      {/*          href="#" target="_blank" className={styles.btn}*/}
      {/*          title="Enterprise | NestJS - A progressive Node.js framework">Learn more about support offerings</a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className={styles.liveWrapper}>
        <div className="container">
          <h4>Live preview</h4>
          <p> See how your application may potentially look like without leaving<br /> your personal browser. </p>
          <iframe
            src="https://stackblitz.com/edit/nestjs-typescript-starter-pcysqn?embed=1&file=src/app.service.ts&hideNavigation=1&showSidebar=1&view=editor"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </div>
      </div>

      {/*<div className={styles.newsletterWrapper}>*/}
      {/*  <div className="container">*/}
      {/*    <div className={styles.envelopeBg}>*/}
      {/*      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg>*/}
      {/*    </div>*/}
      {/*    <div className={styles.hgroup}>*/}
      {/*      <h3>Join our Newsletter</h3>*/}
      {/*      <p> Subscribe to stay up to date with the latest Nest updates, features, and videos! </p>*/}
      {/*    </div>*/}
      {/*    <div className={styles.newsletterForm}>*/}
      {/*      <form className={styles.formWrapper}>*/}
      {/*        <input id="newsletter-email" className={styles.formControl} name="email" type="email" placeholder="Email address.." required />*/}
      {/*        <button type="submit" className={styles.signupButton}>*/}
      {/*          <svg className={styles.faPaperPlane} aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg>*/}
      {/*          <svg className={styles.iconSuccess} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>*/}
      {/*        </button>*/}
      {/*      </form>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
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
