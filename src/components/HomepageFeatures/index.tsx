import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🚀 Zero-Setup Mocking',
    description: (
      <>
        <strong>Dive straight into testing without the hassle.</strong> Automatically generate mock
        objects, eliminate manual setup and reduce boilerplate code.
      </>
    ),
  },
  {
    title: '🔍 Type-Safe Mocks',
    description: (
      <>
        <strong>Leverage TypeScript's power with mocks that retain the same type information as real objects.</strong>
        &nbsp;Write tests with confidence, knowing that type mismatches will be caught.
      </>
    ),
  },
  {
    title: '⚡ Optimized Performance',
    description: (
      <>
        <strong>Lightning-fast execution for all your unit tests.</strong> Automock's lightweight design ensures that
        your tests run smoothly and efficiently.
      </>
    ),
  },
  {
    title: '🔄 Consistent Structure',
    description: (
      <>
        <strong>Achieve a uniform approach to unit testing.</strong>
        &nbsp;Your tests will follow a consistent syntax and structure, making them easier to read and maintain.
      </>
    ),
  },
  {
    title: '🌐 Community & Support',
    description: (
      <>
        <strong>Achieve a uniform approach to unit testing.</strong>
        &nbsp; Your tests will follow a consistent syntax and structure, making them easier to read and maintain.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={styles.feature}>
      {/*<div className="text--center">*/}
      {/*  <Svg className={styles.featureSvg} role="img" />*/}
      {/*</div>*/}
      <div className="padding-horiz--md">
        <h3>{title}</h3> - <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
