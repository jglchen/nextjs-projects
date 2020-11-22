import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Hello, I’m <strong>John</strong>. I am an experienced full-stack software engineer for 10+ years as well as a web site operator. 
        </p>
        <p>
        I founded a web site called gogofund.com providing updated financial data and related news, preferably on mutual funds in the early 2000, and had been operating the web site as CEO and CTO. 
        In the old days, we used <strong>ASP</strong>, <strong>JavaScript</strong>, and <strong>MSSQL</strong> for the site.
        </p>
        <p>
        Thereafter I set up another news social network site, <a href="https://www.ilikeedit.com" target="_blank">iLikeEdit</a>. For this site, we use <strong>MySQL</strong> as the storage engine, <strong>PHP</strong> for the back end, and <strong>React</strong> for the front end. In the current stage we are developing the mobile apps for iOS and Android with <strong>React Native</strong>.
        </p>
        <p>
        I’d like to provide a high quality development service and actively participate in project developments. I can help you project development right the way through all the stages.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}}`}>
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <div className={utilStyles.listHorizon}>
           <div>HTML</div>
           <div>CSS</div>
           <div>MySQL</div>
           <div>MySQL Programming</div>
           <div>PHP</div>
           <div>JavaScript</div>
           <div>jQuey</div>
           <div>React</div>
           <div>React Native</div>
           <div>Java</div>
       </div> 
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
               {description}
              </small>
           </li>            
          ))}
        </ul>
      </section>
    </Layout>
  )
}