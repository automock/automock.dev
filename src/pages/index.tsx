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
        <img className={styles.logo} src="img/logo.svg" alt="Suites Logo" />

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
            to="https://github.com/suites-dev/suites">
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
