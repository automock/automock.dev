import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
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

    // Cleanup the event listener on component unmount
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
                <img src="img/logo-small.ede75a6b.svg" alt="NestJS - A progressive Node.js framework" />
              </Link>
            </div>
            <ul className={styles.navWrapper}>
              <li className={styles.hidden_xs}>
                <Link href="#" title="Documentation | NestJS - A progressive Node.js framework">DOCUMENTATION</Link>
              </li>
              <li className={styles.hidden_sm}>
                <Link href="#" title="Enterprise | NestJS - A progressive Node.js framework">ENTERPRISE</Link>
              </li>
              <li className={styles.hidden_sm}>
                <Link href="#" title="Courses | NestJS - A progressive Node.js framework">COURSES</Link>
              </li>
              <li className={styles.hidden_md}>
                <Link href="#" title="Devtools | NestJS - A progressive Node.js framework"><span className={styles.new}>NEW</span>
                  DEVTOOLS</Link> </li>
              <li>
                <Link href="#" target="_blank" className={styles.icon}>
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" className={styles.icon}>
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" className={styles.icon}>
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className={styles.pageHeader}>
        <div className="container">
          <div className={styles.topWrapper}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <img src="img/logo-small.ede75a6b.svg" alt="NestJS - A progressive Node.js framework" />
              </Link>
            </div>
            <nav>
              <ul className={styles.navWrapper}>
                <li className={styles.hidden_xs}>
                  <Link href="#" title="Documentation | NestJS - A progressive Node.js framework">DOCUMENTATION</Link>
                </li>
                <li className={styles.hidden_sm}>
                  <Link href="#" title="Enterprise | NestJS - A progressive Node.js framework">ENTERPRISE</Link>
                </li>
                <li className={styles.hidden_sm}>
                  <Link href="#" title="Courses | NestJS - A progressive Node.js framework">COURSES</Link>
                </li>
                <li className={styles.hidden_md}>
                  <Link href="#" title="Devtools | NestJS - A progressive Node.js framework"><span className={styles.new}>NEW</span>
                    DEVTOOLS</Link> </li>
                <li>
                  <Link href="#" target="_blank" className="icon m-l-30">
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" className="icon">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" className="icon">
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.mainWrapper}>
              <h1>Hello, nest!</h1>
              <h4>A progressive Node.js framework for building efficient, reliable and scalable server-side
                applications. </h4>
              <div className={styles.buttonsWrapper}> 
                <a href="https://docs.nestjs.com" className={`${styles.btn} ${styles.documentationBtn}`}>Documentation</a> 
                <a href="https://github.com/nestjs/nest" className={`${styles.btn} ${styles.sourceBtn}`}> 
                  <FaGithub />
                  <span>Source code</span> 
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
