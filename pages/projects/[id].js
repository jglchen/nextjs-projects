import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}

export default function Project({ projectData }) {
  function getUrlElm(urlStr, innerStr){
     if (!urlStr){
        return
     }
     
     if (/^http/i.test(urlStr)){
        return (
           <a href={urlStr} target='_blank'>
              {innerStr}
           </a>
        );
     }
     
     return (
        <Link href={urlStr}>
           <a target='_blank'>{innerStr}</a>
        </Link>     
     );
  }
  
  let siteUrlElm;
  let appUrlElm;
  let srcUrlElm;
  if (projectData.siteurl){
     siteUrlElm = getUrlElm(projectData.siteurl, "View the Site");
  }
  if (projectData.appurl){
     appUrlElm = getUrlElm(projectData.appurl, "View the App");
  }
  if (projectData.source){
     srcUrlElm = <>{' | '}{getUrlElm(projectData.source, "Source")}</>;
  }

  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          {projectData.description}
        </div>
        <h2 className={utilStyles.headingLg}>
          {siteUrlElm}{appUrlElm}{srcUrlElm}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>      
    </Layout>
  )
}