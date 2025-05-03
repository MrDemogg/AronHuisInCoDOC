import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Легко использовать',
    emoji: "🧱",
    description: (
      <>
        Самая тупейшая документация
      </>
    ),
  },
  {
    title: 'Уникальный контент',
    emoji: '🧑‍🤝‍🧑',
    description: (
      <>
        Такого вы не видели нигде
      </>
    ),

  }
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Heading as="h1">{emoji}</Heading>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container" style={{position: "relative", top: 70}}>
        <div className="row" style={{flex: 1, justifyContent: "space-between"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
