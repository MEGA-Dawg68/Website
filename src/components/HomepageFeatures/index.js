import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Things I do',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        I am a student in Western Australia. I like to hack computers and gain 
        administator rights without the password (No maliciously of course). I also play games like 
        Battlefield 2042, Counter Strike 2 and Operation Harsh doorstop
      </>
    ),
  },
  {
    title: 'What will I put on here?',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        I will put some of my projects on here, and maybe some of my school 
        work (Computer based of course). I will also try to teach you how 
        to exploit windows based systems (Educational purposes only).

      </>
    ),
  },
  {
    title: 'What is this website made with?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This website is made with Docusaurus 2, a modern static website generator.
        It is written in React and uses Markdown. It is hosted on GitHub Pages.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
