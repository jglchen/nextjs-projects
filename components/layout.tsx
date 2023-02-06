/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import { LayoutProps  } from '@/lib/types';

const name = 'John Chen';
//export const siteTitle = 'About John Chen, A Full-Stack Software Developer';
//export const siteTitle = 'Build React Applications from Website to Mobile';
export const siteTitle = 'Build Applications from Website to Mobile';
export const subTitle = 'John Chen - A talent you are looking for web solutions';

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Build React Applications from Website to Mobile, John Chen - A talent you are looking for web solutions"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h2 className={utilStyles.headingXl}>{siteTitle}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingXl}>
              <Link href="/" className={utilStyles.colorInherit}>
                {siteTitle}
              </Link>
            </h2>
          </>
        )}
      </header>
      {home &&
        <div className="clearfix">
          <h4 className={`text-right ${utilStyles.lightText}`}>
            React Native Expo Publish: <a href="https://expo.dev/@jglchen/nextjs-projects" target="_blank" rel="noreferrer">https://expo.dev/@jglchen/nextjs-projects</a>
          </h4>
        </div>
      }
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
      <hr />
      <footer className={styles.footer} >
        <div>{subTitle}</div>
        <div className={styles.footerList}>
          <div className={utilStyles.lightText}>John Chen</div>
          <div>
            <Link href='mailto:jglchen@outlook.com' target='_blank'>
              jglchen@outlook.com
            </Link>
          </div>
          <div className={styles.iconDescr}>
            <img src='/images/facebook-icon.png' alt='facebook' className={styles.iconImage} />
            <div>&nbsp;</div>
            <Link href='https://www.facebook.com/jglchen' target='_blank'>
              jglchen
            </Link>
          </div>
          <div className={styles.iconDescr}>
            <img src='/images/github-icon.png' alt='facebook' className={styles.iconImage} />
            <div>&nbsp;</div>
            <Link href='https://github.com/jglchen' target='_blank'>
              jglchen
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}