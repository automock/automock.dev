import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './styles.module.css';

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change 50 to your desired scroll threshold
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on a component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <>
      <div className={`${styles.navbarSticky} ${scrolled ? styles.visible : ''}`}>
        <div className="container">
          <div className={styles.navbar}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <img src="img/logo.png" alt="Suites Logo" />
              </Link>
            </div>
            <ul className={styles.navWrapper}>
              <li className={styles.hidden_xs}>
                <Link href="#" title="Documentation | Suites">Docs</Link>
              </li>
              <li className={styles.hidden_sm}>
                <Link href="/learn" title="API Reference | Suites">API Reference</Link>
              </li>
              <li className={styles.hidden_sm}>
                <Link href="/learn" title="Learn | Suites">Learn</Link>
              </li>
              <li>
                <Link href="#" target="_blank" className={styles.icon}>
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className={styles.pageHeader}>
        <div className={styles.subWrapper}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logoLink}>
              <img src="img/logo.png" alt="Suites Logo"/> <span>Suites</span>
            </Link>
          </div>
          <nav>
            <ul className={styles.navWrapper}>
              <li className={styles.hidden_xs}>
                <Link href="/docs" title="Documentation | Suites">Documentation</Link>
              </li>
              <li className={styles.hidden_sm}>
                <Link href="/learn" title="Learn | Suites">Learn</Link>
              </li>
              <li className={styles.hidden_sm}>
                <Link href="/learn" title="API Reference | Suites">API Reference</Link>
              </li>
              <li>
                <Link href="https://github.com/suites-dev/suites" target="_blank" className="icon m-l-30">
                  <FaGithub/>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container">
          <div className={styles.topWrapper}>
            <div className={styles.mainWrapper}>
              <img src="img/logo.png" alt="Suites Logo" className={styles.mainLogo}/>
              <h1>Suites <span>(formerly Automock)</span></h1>
              <h4>An opinionated, progressive testing meta-framework</h4>
              <div className={styles.buttonsWrapper}>
                <a href="/docs" className={`${styles.btn} ${styles.documentationBtn}`}>Documentation</a>
                <a href="https://github.com/suites-dev/suites" className={`${styles.btn} ${styles.sourceBtn}`}>
                  <FaGithub/>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
