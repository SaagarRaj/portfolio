'use client'
import { Navbar } from "@/Scenes/Navbar";
import Image, { StaticImageData } from "next/image";
import icons from "@/Assets/icons";
import DevImage from "@/Assets/icons/icons/19362653-removebg.png"
import About from "@/Scenes/About";
import { ExperienceObjectType, ProjectObjectType } from "@/Shared/Types/types";
import Experience from "@/Scenes/Experience";
import Project from "@/Scenes/Projects";
import Contact from "@/Scenes/Contact ";
import { useEffect, useState } from "react";
import { ExperienceItem, ProjectItem } from '@/Shared/Types/types';
import { getAllExperience } from "@/Aws/db";
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
    fetchExperience();
  }, [])

  const ProjectObject: ProjectObjectType[] = [
    {
      title: "Blog Market",
      description: "Developed a Blog app featuring a sleek user interface using React.js and Tailwind CSS. The frontend integrates seamlessly with a Node.js backend, utilizing Axios for API fetching and Multer for image storage. Implemented JWT for user authentication and session management. MongoDB Atlas is used for CRUD operations, including managing user credentials, blog posts, and comments. Enhanced security with Bcrypt for password encryption.",
      techUsed: ["react", "typescript", "mongodb", "tailwind"],
      projectLink: "https://github.com/SaagarRaj/React-BlogApp",
      DemoVideo: "https://www.youtube.com/watch?v=4Nw3wKFp2cM"
    },
    {
      title: "Weather App",
      description: "Created a modern and responsive frontend using Next.js and React.js, optimized for various screen sizes. Utilized the Weather API to fetch real-time data including temperature, wind speed, humidity, and air pressure, with reliability ranging from 90% to 95%. Enhanced code maintainability and robustness through TypeScript.",
      techUsed: ["react", "typescript", "tailwind"],
      projectLink: "https://github.com/SaagarRaj/Nextjs-WeatherApp",
      liveLink: "https://nextjs-weather-app-4s5k.vercel.app/"
    },
    {
      title: "Evo Gym",
      description: `Developed a responsive landing page for a gym using React.js and TypeScript. Integrated engaging animations and interactive elements to boost user experience and visitor engagement. Utilized the react-hook-form library for efficient form handling and validation in the "Contact Us" section, optimizing user input processing. Applied best practices in component-based architecture, state management, and responsive design to ensure a smooth and consistent user experience across devices and screen sizes.`,
      techUsed: ["react", "javascript", "tailwind"],
      projectLink: "https://github.com/SaagarRaj/ gym-app",
      liveLink: 'https://gym-app-five-beryl.vercel.app/'
    },
    {
      title: "Tic-Tac-Toe",
      description: `Enhanced the Tic Tac Toe Web App with React.js and integrated Confetti.js to provide immersive animations, particularly celebrating player victories. This integration boosts user engagement and adds a fun, interactive element to the game.`,
      techUsed: ["react", "javascript", "tailwind"],
      projectLink: "https://github.com/SaagarRaj/TicTacToe",
      liveLink: "https://tic-tac-toe-seven-lemon.vercel.app/"
    },
    {
      title: "BitTrade",
      description: `Led the development of BitTrade, a cryptocurrency market insights app, as part of a capstone project. Utilized the CoinMarketCap API to provide real-time market data. Implemented the MVVM (Model-View-View-Model) architecture for scalable design. Integrated Google Firebase for backend database management, user login/registration, transactional data, and user authorization. Optimized data fetching with the OkHttp package for real-time updates and accurate information retrieval.`,
      techUsed: ["android"],
      projectLink: "https://github.com/SaagarRaj/BitTrade"
    },
    {
      title: "Sorting Visualizer",
      description: `Developed a Sorting Visualizer app to showcase various sorting algorithms (bubble, quick, merge, insertion, selection). Implemented the frontend using React and TypeScript, allowing users to visualize and interact with the sorting process. Added functionality for users to adjust the speed of the visualizer for a customized experience.`,
      techUsed: ["react", "typescript", "tailwind"],
      projectLink: "https://github.com/SaagarRaj/SortingVisualizer-NEXT",
      liveLink: 'https://sorting-visualizer-next-beta.vercel.app/'
    },
    {
      title: "Emotion Detection Model",
      description: `Developed an emotion detection model trained on the CIFAR-100 dataset, achieving an accuracy of 83.97%. This notable performance secured the 3rd position on the Papers with Code CIFAR-100 leaderboard. The model's high accuracy was achieved without using any additional training datasets, demonstrating its effectiveness in emotion classification within the CIFAR-100 framework.`,
      techUsed: ["python"],
      projectLink: "https://github.com/SaagarRaj/Emotion-Detection-FER13"
    },
  ];

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
                <a href="https://drive.google.com/file/d/1lwC-dU9YoSAVF-ezG7n3qLDp_pjFXYvA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
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
      <Project content={ProjectObject} />

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
