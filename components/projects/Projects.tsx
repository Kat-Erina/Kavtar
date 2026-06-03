'use client'

import React from 'react'
import Card from './Card'
import { useMessages, useTranslations } from 'next-intl';

const Projects = () => {
    const t=useTranslations('projects');
    const messages=useMessages();
    const projectsArray=messages.projects.items;

    const svgs=[ '/drop.svg','/key.svg']
    
  return (
    <div>

        {projectsArray.map((project:{name:string, title:string, desc:string, hidden:string}, index:number)=><Card key={index} project={project} svg={svgs[index]}></Card>)}
       
    
    </div>
  )
}

export default Projects