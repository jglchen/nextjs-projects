import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
import bluebird from 'bluebird';
import { Matter, DataItem } from '@/lib/types';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
 
    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName); 
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Matter)
    };      
  
  });
  
  // Sort posts by date
  return allProjectsData.sort((a, b) => {
    if (a.priority < b.priority) {
      return 1
    } else {
      return -1
    }
  }); 
 } 
 
 
 export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString(); 
  
  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as Matter)
  };
}

export async function getSortedProjectsList() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory).filter(item => item.endsWith('.md'));
  
  const allProjectsData: DataItem[] = await bluebird.map(fileNames, async (item: string) => { 
    // Remove ".md" from file name to get id
    const id = item.replace(/\.md$/, '');
    
    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, item); 
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();  

    return {
      id,
      contentHtml,
      ...(matterResult.data as Matter)
    };
  
  },{concurrency: 10});

  // Sort posts by date
  return allProjectsData.sort((a, b) => {
    if (a.priority < b.priority) {
      return 1
    } else {
      return -1
    }
  }); 
}
