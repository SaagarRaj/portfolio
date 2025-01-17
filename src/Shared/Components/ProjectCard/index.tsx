import React from 'react'
import { IconMapping } from '@/Shared/Types/types'
import icons from '@/Assets/icons'
import Image from 'next/image'

const iconMapping: IconMapping = {
    android: icons.androidIcon,
    html: icons.htmlIcon,
    css: icons.cssIcon,
    javascript: icons.javascriptIcon,
    typescript: icons.typescriptIcon,
    node: icons.nodeIcon,
    tailwind: icons.tailwindIcon,
    mongodb: icons.MongoDBIcon,
    python: icons.pythonIcon,
    firebase: icons.firebaseIcon,
    sql: icons.sqlIcon,
    aws: icons.awsIcon,
    dynamodb: icons.awsDynamoDbIcon,
    elasticache: icons.awsElastiCacheIcon,
    memcached: icons.memcachedIcon,
    redis: icons.redisIcon,
    react: icons.reactIcon
}


type Props = {
    title: string,
    description: string,
    techUsed: string[],
    projectLink: string,
    liveLink?: string,
    DemoVideo?: string
}

const ProjectCard = ({ title, description, techUsed, projectLink, liveLink, DemoVideo }: Props) => {
    return (
        <div className="flex flex-col items-start justify-between m-4 border border-gray-400 rounded-lg p-4 bg-white">



            {/* Project Title and Description */}
            <div className="flex flex-col p-4  items-center w-full ">
                <h1 className="font-semibold mb-2 ">{title}</h1>
                <hr className='w-full border-gray-500' />
                <p className="font-light text-justify mt-4"> {description}</p>
            </div>

            {/* Technology Icons and Project Link */}
            <div className="flex flex-col items-center p-4 gap-4 w-full md:flex-row md:items-start md:justify-between">
                {/* Technology Icons */}
                <div className="flex md:flex-wrap items-center justify-evenly md:justify-center gap-2 w-full md:w-auto">
                    {techUsed.map((tech) => {
                        const Icon = iconMapping[tech];
                        return Icon ? (
                            <Image key={tech} src={Icon} height={25} width={25} alt={`${tech} icon`} />
                        ) : null;
                    })}
                </div>

                {/* Project Link */}
                <div className="flex flex-col md:items-end items-center gap-2">

                    <a href={projectLink} className="flex gap-1" target="_blank" rel="noopener noreferrer">
                        <span className="font-extralight">Project Link</span>
                        <Image className="cursor-pointer" src={icons.githubIcon} height={25} width={25} alt="GitHub icon" />
                    </a>

                    {liveLink && (
                        <a href={liveLink} className="flex gap-1" target="_blank" rel="noopener noreferrer">
                            <span className="font-extralight underline underline-offset-2">Live Link</span>
                        </a>
                    )}

                    {DemoVideo && (
                        <a href={DemoVideo} className="flex gap-1" target="_blank" rel="noopener noreferrer">
                            <span className="font-extralight underline underline-offset-2">Demo Video</span>
                        </a>
                    )}


                </div>
            </div>

        </div>
    )
}

export default ProjectCard