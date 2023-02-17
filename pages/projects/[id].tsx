import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout';
import { getAllProjectIds, getProjectData } from '@/lib/projects';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DataItem } from '@/lib/types';

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = getAllProjectIds();
   return {
     paths,
     fallback: false
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const projectData: DataItem = await getProjectData(params?.id as string)
   return {
     props: {
       projectData
     }
   }
}

export default function Project({ projectData }: { projectData:  DataItem }) {
  const homeEl = useRef<HTMLDivElement | null>(null);
  const [panelWidth, setPanelWidth] = useState(45*18);
  
  useEffect(() => {
    setPanelWidth((homeEl.current as HTMLDivElement).offsetWidth);
  },[]);

  
  function getUrlElm(urlStr: string, innerStr: string){
     if (!urlStr){
        return
     }
     
     if (/^http/i.test(urlStr)){
        return (
           <a href={urlStr} target='_blank' rel="noreferrer">
              {innerStr}
           </a>
        );
     }
     
     return (
        <Link href={urlStr} target='_blank'>
           {innerStr}
        </Link>     
     );
  }
  /*
  const imgSize = [
     {width: (panelWidth * 0.73).toFixed(), height: (panelWidth * 0.73 * 1600 / 2560).toFixed()},
     {width: (panelWidth * 0.21).toFixed(), height: (panelWidth * 0.21 * 2436 / 1125).toFixed()}
  ];*/
  const imgSize = [
    {width: Math.round(panelWidth * 0.74), height: Math.round(panelWidth * 0.74 * 1600 / 2560)},
    {width: Math.round(panelWidth * 0.22), height: Math.round(panelWidth * 0.22 * 2436 / 1125)}
  ];

  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article ref={homeEl}>
        <h2 className={utilStyles.headingLx}>{projectData.title}</h2>
        <div className={utilStyles.lightText}>
          {projectData.description}
        </div>
        <h2 className={utilStyles.headingLg}>
          {projectData.siteurl && getUrlElm(projectData.siteurl, "View the Site")}
          {projectData.appurl && getUrlElm(projectData.appurl, "View the App")}
          {projectData.source && 
            <>
            {(projectData.siteurl || projectData.appurl) &&
              (<> | </>)
            }
            {getUrlElm(projectData.source, "GitHub")}
            </>
          }
          {projectData.nativepub && 
            <>
            {(projectData.siteurl || projectData.appurl || projectData.source) &&
              (<> | </>)
            }
            {getUrlElm(projectData.nativepub, "Expo Publish")}
            </>
          }
          {projectData.nativesource && 
            <>
            {(projectData.siteurl || projectData.appurl || projectData.source || projectData.nativepub) &&
              (<> | </>)
            }
            {getUrlElm(projectData.nativesource, "GitHub(Mobile)")}
            </>
          }
        </h2>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        {projectData.docker &&
         <h3 className={utilStyles.headingMd}>
           Docker: {projectData.docker}
         </h3>
        }
        {(projectData.siteimg || projectData.mobileimg) &&
          <div style={{margin: '1.5rem 0'}}>
          <div className={utilStyles.flexContainer}>
            {projectData.siteimg && projectData.mobileimg &&
            <>
              {projectData.siteimg &&
               (<a href={projectData.siteurl || projectData.appurl} target='_blank' rel="noreferrer"><Image
                  src={`/images/${projectData.siteimg}`}
                  alt="Screenshot of the Website App"
                  width={imgSize[0].width}
                  height={imgSize[0].height}  
                  /></a>)
             }
             {projectData.mobileimg && 
               (<a href={projectData.nativepub} target='_blank' rel="noreferrer"><Image
                  src={`/images/${projectData.mobileimg}`}
                  alt="Screenshot of the Mobile App"
                  width={imgSize[1].width}
                  height={imgSize[1].height}  
                  /></a>)
             }
            </>
            }
            {projectData.siteimg && !projectData.mobileimg &&
               (<a href={projectData.siteurl || projectData.appurl} target='_blank' rel="noreferrer"><Image
               src={`/images/${projectData.siteimg}`}
               alt="Screenshot of the Website App"
               width={panelWidth}
               height={panelWidth * 1600 / 2560}  
               /></a>)
            }
          </div>
          </div>
        }
      </article>      
    </Layout>
  )
}