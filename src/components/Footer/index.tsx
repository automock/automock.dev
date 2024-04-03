import React from 'react';
import Link from '@docusaurus/Link';
import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.pageFooter}>
      <div className="container">
        <div className={styles.socialWrapper}>
          <Link href="https://github.com/suites-dev/suites" target="_blank" className={styles.icon}>
            <FaGithub/>
          </Link>
        </div>
        <p>
          Released under the MIT License
          <br/>
          Copyright © 2024 - <Link href="https://linkedin.com/in/omermorad" target="_blank">Omer Morad</Link>
          <br/>
          hosted by <Link href="https://www.netlify.com" target="_blank" rel="nofollow">Netlify</Link>
        </p>
      </div>
    </footer>
  );
}
