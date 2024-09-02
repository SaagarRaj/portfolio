import React, { useState } from 'react';
import ProjectCard from '@/Shared/Components/ProjectCard';
import icons from '@/Assets/icons';
import { IconMapping } from '@/Shared/Types/types'
import Image from 'next/image';
import CloseIcon from '@/Assets/icons/icons/close.png';
type Props = {};

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


// const ProjectObject = {

//     title: "Project Title",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     techUsed: ["html", "typescript", "firebase", "tailwind"],
//     projectLink: "link"
// }

const AddProject = (props: Props) => {
    const [title, setTitle] = useState("Add title");
    const [description, setDescription] = useState("Description");
    const [link, setLink] = useState<string>("");
    const [skills, setSkills] = useState<string[]>(["html"]);
    const [inputSkill, setInputSkill] = useState<string>("");
    const [demoVideo, setDemoVideo] = useState<string | undefined>(undefined)

    const handleAddSkill = (selectedSkill?: string) => {
        const skill = selectedSkill ? selectedSkill : inputSkill.trim();
        if (skill && !skills.includes(skill)) {
            setSkills([...skills, skill]);
            setInputSkill(""); // Clear the input field after adding
        }
    };

    const handleRemoveSkill = (skillToRemove: string): void => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };



    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputSkill(e.target.value);
        handleAddSkill(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
        if (e.key === 'Enter') {
            handleAddSkill();
        }
    };


    const lableStyle = `p-4 `;
    const inputStyle = `p-1 m-1 border-b-2 w-[90%] text-sm`;
    return (
        <>
            <nav className='w-full flex items-center justify-center bg-custom-offWhite shadow-md '>
                <h1 className='p-2 text-2xl '>
                    Add Project
                </h1>
            </nav>
            <div className='w-[80%] flex items-start justify-between h-full p-8 mx-auto '>
                <div className='w-[40%] p-4 flex flex-col border-2 rounded-md'>
                    <label className={lableStyle}> Project Title </label>
                    <input
                        className={inputStyle}

                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className={lableStyle}> Project Link </label>
                    <input
                        className={inputStyle}

                        onChange={(e) => setLink(e.target.value)}
                    />
                    <label className={lableStyle}> Demo Video Link </label>
                    <input
                        className={inputStyle}

                        onChange={(e) => setDemoVideo(e.target.value)}
                    />
                    <label className={lableStyle}> Description </label>
                    <textarea
                        rows={5}
                        cols={50}
                        className={inputStyle}

                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label className={lableStyle}> Skills </label>
                    {/* <div className='flex items-center'>
                        <input
                            className={inputStyle}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Add a skill and press Enter"
                        />
                        <button
                            type="button"
                            onClick={handleAddSkill}
                            className='ml-2 px-4 py-1 border-2 rounded-md shadow-sm'
                        >
                            Add
                        </button>
                    </div> */}
                    <select
                        className={inputStyle}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        defaultValue="" // To set the placeholder as selected by default
                    >
                        <option value="" disabled>Add a skill</option>
                        {Object.keys(iconMapping).map((skill) => (
                            <option key={skill} value={skill}>
                                {skill.charAt(0).toUpperCase() + skill.slice(1)}
                            </option>
                        ))}
                    </select>


                    <div className='mt-2'>
                        {skills.map((skill, index) => (
                            <>
                                <span
                                    key={index}
                                    className='inline-flex  bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'
                                >
                                    {skill}
                                    <span className='ml-2 cursor-pointer' onClick={() => handleRemoveSkill(skill)}>
                                        <Image src={CloseIcon} width={15} height={15} alt='Close Icon' />
                                    </span>
                                </span>

                            </>
                        ))}
                    </div>

                    <button className='p-2 mt-2 hover:border-2 hover:shadow-xl '>Submit</button>
                </div>
                <div className='w-[50%] h-full p-4 pt-0'>
                    <ProjectCard
                        title={title}
                        description={description}
                        techUsed={skills}
                        projectLink={link}
                        DemoVideo={demoVideo}
                    />
                </div>
            </div>
        </>
    );
}

export default AddProject;
