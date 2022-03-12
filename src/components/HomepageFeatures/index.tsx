import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';



type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'An "Open Source" Story',
    Svg: require('@site/static/img/soul.svg').default,
    description: (
      <>
        Registration for share-alike license pending.
      </>
    ),
  },
  {
    title: 'Immerse in the various story mediums',
    Svg: require('@site/static/img/outlinedEyes.svg').default,
    description: (
      <>
        Experience The Anomaly Project through the webcomic, novel, music, and TTRPG.
      </>
    ),
  },
  {
    title: 'Currently being developed',
    Svg: require('@site/static/img/soulRed.svg').default,
    description: (
      <>
        Please look forward to our future endeavors for the project!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
