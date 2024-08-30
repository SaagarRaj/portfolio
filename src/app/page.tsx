'use client'
import { Navbar } from "@/Scenes/Navbar";
import Image, { StaticImageData } from "next/image";
import icons from "@/Assets/icons";
import DevImage from "@/Assets/icons/icons/19362653-removebg.png"
import About from "@/Scenes/About";
import Experience from "@/Scenes/Experience";
import Project from "@/Scenes/Projects";
import Contact from "@/Scenes/Contact ";
import { useEffect, useState } from "react";
import { ExperienceItem, ProjectItem } from '@/Shared/Types/types';
import { getAllExperience, getAllProject } from "@/Aws/db";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {

  const [experienceObject, setExperienceObject] = useState<ExperienceItem[]>([])
  const [projectObject, setProjectObject] = useState<ProjectItem[]>([])

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await getAllExperience();
        const sortedData = data.sort((a, b) => {
          const startDateA = new Date(a.Date.split(' - ')[0]);
          const startDateB = new Date(b.Date.split(' - ')[0]);

          return startDateB.getTime() - startDateA.getTime();
        })
        setExperienceObject(sortedData)
      } catch (err) {
        console.log("Failed to fetch experience data:", err)
      }
    };

    const fetchProject = async () => {
      try {
        const data = await getAllProject();
        const sortedData = data.sort((a, b) => {
          return a.title.localeCompare(b.title)
        });
        setProjectObject(sortedData)
      } catch (error) {
        console.log("Failed to fetch project data:", error)
      }
    }

    fetchExperience();
    fetchProject();
  }, [])


  const iconList: StaticImageData[] = [
    icons.htmlIcon,
    icons.cssIcon,
    icons.javascriptIcon,
    icons.typescriptIcon,
    icons.reactIcon,
    icons.nodeIcon,
    icons.tailwindIcon,
    icons.MongoDBIcon,
    icons.firebaseIcon,
    icons.awsIcon,
    icons.sqlIcon,
    icons.awsDynamoDbIcon,
  ]

  return (
    <>
      <Analytics />
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="" className="h-[100vh] mt-0">
        <div className="w-[80%] mx-auto h-full">
          <div className="flex items-center justify-center h-full">
            {/* Left section */}
            <div className="flex flex-col items-start">
              <p>Hi, I am</p>
              <p className=" text-[3rem] md:text-[3.5rem] p-2 pt-0">Saagar Raj Tiwari</p>
              <p>A Full-stack Developer</p>
              <button className="border border-black rounded-md p-2 mt-6 hover:bg-black hover:text-custom-yellow">
                <a href={process.env.NEXT_PUBLIC_RESUME_LINK} target="_blank" rel="noopener noreferrer">Resume</a>
              </button>
              <div className="flex items-center justify-center mt-4 gap-4">
                <a href="https://github.com/SaagarRaj" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="hover:cursor-pointer"
                    src={icons.githubIcon}
                    alt={`Github Icon`}
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.linkedin.com/in/srt99/" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="hover:cursor-pointer"
                    src={icons.linkedInIcon}
                    alt={`LinkedIn Icon`}
                    width={33}
                    height={33}
                  />
                </a>

                <a href="mailto:saagar991@gmail.com" target="_blank" rel="noopener noreferrer"><Image className="hover:cursor-pointer" src={icons.mailIcon} alt={`Mail Icon`} width={33} height={35} /></a>
              </div>
            </div>
            {/* Right section */}
            <div className="hidden md:flex">
              <Image className="translate-x-10" src={DevImage} alt="Dev Image" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About icons={iconList} />

      {/* Experience */}
      <Experience ExpObj={experienceObject} />

      {/* Project */}
      <Project content={projectObject} />

      {/* Contact */}
      <Contact />


      <section id="footer" className="bg-custom-blue">
        <div className="flex items-center justify-center ">
          <p className="mt-10 mb-4 text-gray-400 ">
            copyright @ 2024
          </p>
        </div>
      </section>
    </>
  );
}
