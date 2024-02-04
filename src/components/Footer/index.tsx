import React from 'react';
import Link from '@docusaurus/Link';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.pageFooter}>
    <div className="container">
      <div className={styles.socialWrapper}>
        <Link href="https://github.com/nestjs/nest" target="_blank" className={styles.icon}>
          <FaGithub />
        </Link>
        <Link href="https://twitter.com/nestframework" target="_blank" className={styles.icon}>
          <FaXTwitter />
        </Link>
        <Link href="https://linkedin.com/company/19078346" target="_blank" className={styles.icon}>
          <FaLinkedin />
        </Link>
      </div>
      <p> Released under the MIT License <br /> Official NestJS Consulting <Link href="https://trilon.io"
        title="Official NestJS Consulting | Angular Consulting" target="_blank">Trilon.io</Link><br /> Copyright
        © 2024 - <Link href="https://twitter.com/kammysliwiec" target="_blank">Kamil Mysliwiec</Link> <br /> Designed
        by <Link href="https://dribbble.com/JakubStaron" target="_blank">Jakub Staron</Link>, hosted by <Link
          href="https://www.netlify.com" target="_blank" rel="nofollow">Netlify</Link> <br /> <Link
            href="https://github.com/nestjs/nest/blob/master/readme_zh.md" target="_blank">中文说明</Link> </p>
    </div>
  </footer >
  );
}
