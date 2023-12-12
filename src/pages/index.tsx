import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <a href="https://www.producthunt.com/posts/automock?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-automock" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=427897&theme=light" alt="Automock - Simpler&#0032;Unit&#0032;Tests&#0032;for&#0032;TypeScript | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
        <br /><br />

        <img className={styles.logo} src="img/logo.svg" alt="Automock Logo" />

        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Focus on creating solid test suites, automate the generation of<br />mock objects, and improve the unit testing workflow.
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.button}
            to="/docs">
            Read the Docs
          </Link>
          &nbsp;
          &nbsp;
          &nbsp;
          <Link
            className={styles.button}
            to="https://github.com/automock/automock">
            Source Code
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Standalone Library for Automated Mocking of Class Dependencies.">
      <HomepageHeader />
    </Layout>
  );
}
