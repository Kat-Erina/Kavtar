'use client'

import React from 'react'
import Card from './Card'
import { useMessages, useTranslations } from 'next-intl';
import { title } from 'process';

const Projects = () => {
    const t=useTranslations('projects');
    const messages=useMessages();
    const projectsArray=messages.projects.items;

    const svgs=[ '/drop.svg','/key.svg']
    const maps=['/map.png','/guramishvilii.png']
    
  return (
    <div>

        {projectsArray.map((project:{name:string, title:string, desc:string, hidden:string}, index:number)=><Card key={project.title} project={project} mappic={maps[index]} svg={svgs[index]} ></Card>)}
       
    
    </div>
  )
}

export default Projects