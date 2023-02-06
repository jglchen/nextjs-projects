import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';
import { getSortedProjectsData } from '@/lib/projects';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { MatterItem } from '@/lib/types';

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData: MatterItem[] = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}

export default function Home({ allProjectsData }: { allProjectsData: MatterItem[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
       <section className={utilStyles.headingMd}>
        <p>
        If you want to build a website for your business venture. 
        Selecting the right technology for developing an application or website is becoming more challenging. 
        Among all, React is considered the fastest-growing Javascript framework. With a quick learning curve, reusable components, and clean abstraction, React is a clear win for front-end developers across the globe. 
        In addition to the front-end applications, <strong>React apps with Node backend services</strong> are easy to build up full-function web applications.
        </p>
        <p>        
        Internet traffic from mobile devices has surpassed the traffic from desktops for many years. 
        With each passing year, the gap between mobile and desktop usage is becoming more pronounced. 
        Providing <strong>a mobile-friendly web application</strong> has been becoming more and more important. 
        Responsive Web Design (RWD) plays a vital key role in mobile-friendly applications. 
        Furthermore, mobile apps will be the ultimate means for mobile-friendly solutions.
        </p>
        <p>
        A native mobile application is developed for use on a particular platform or device. 
        In Android development, people can write codes in Kotlin or Java; in iOS, you can use Swift or Objective-C. 
        <strong>React Native</strong> is a framework for building Android and iOS applications using React and the app platform’s native capabilities. 
        With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components. 
        By following similar plan designs, you can construct rich UI for native applications by IOS and Android. 
        </p>
        <p>
        If you want to develop a web application and/or a mobile application, React will be a strong building block for your development. 
        A professional with strong knowledge and skills of <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>React</strong>, <strong>React Native</strong>, and solid experience of databases such as <strong>MySQL</strong>, etc. as well as with a good grasp of <strong>CSS</strong> and <strong>RWD</strong> will be the ideal one to help you develop the projects. <strong>My name is John Chen, I am exactly the one you are looking for.</strong>
        </p>
        <p>
        Several side projects are listed below to demonstrate React websites and associated React Native apps with similar plan designs:
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                {title}
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