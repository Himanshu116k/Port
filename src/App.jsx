
import './App.css'
import Nav from './Sections/Navbar/Nav'
import Iridescence from './Components/Comp/Iridescence'
import Hero1 from './Sections/Hero1/Hero1'
import Hero2 from './Sections/Hero2/Hero2'
import LetterGlitch from'./Components/Glitch/Glitch'
import Hero3 from './Sections/Hero3/Hero3'
import Hero4 from './Sections/Hero4/Hero4'

import { Timeline } from './Components/Timeline/Timeline'
import Card1 from './Components/Codecard/Codecard'
import  Tabs  from './Components/Project/Project'
import { div } from 'framer-motion/client'
import Testimonial4 from './Components/Testimonial/Testimonial'
import ContactForm from './Sections/Contact/Contact'
import {
  VscHome,
  VscAccount,
  VscBriefcase,
  VscRocket,
  VscGlobe,
  VscTools,
  VscMail ,
  
  VscPerson ,
} from "react-icons/vsc";
import Dock  from './Sections/BottomNav/BottomNav'
import Footer from './Sections/Footer/Footer'
function App() {
  const timelineData = [
    {
      title: "Started Pyton and Data Anylycis",
      content: <p className="text-black dark:text-white">In Jan 2023, I began learning HTML, CSS, and JavaScript.</p>,
    },
    {
      title: "Started Learning Web Dev",
      content: <p className="text-black dark:text-white">In Jan 2023, I began learning HTML, CSS, and JavaScript.</p>,
    },
    {
      title: "Built First Project",
      content: <p className="text-black dark:text-white">Created a portfolio website using React and Tailwind.</p>,
    },
    {
      title: "Learned Backend",
      content: <p className="text-black dark:text-white">Started working with Node.js, Express, and MongoDB.</p>,
    },
  ];

const unsplashTabs = [
  {
    title: "Nature",
    value: "nature",
    content: (
      
      <div className="p-4 bg-black h-[80vh]  w-[70%]   bg-gradient-to-br from-purple-700 to-violet-900 rounded-lg shadow">
        <h2 className="text-xl font-bold text-black dark:text-white ">Beautiful Nature</h2>
        <div className='w-full h-[70%] flex justify-center items-center'>
        <img
          src="https://images.pexels.com/photos/7184402/pexels-photo-7184402.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Nature"
          className="rounded-lg shadow-md w-[80%] max-w-2xl h-[80%] mx-auto
"
        />
        </div>
        <p className=" text-black dark:text-white">
          Experience the calmness and beauty of nature in every detail.
        </p>
      </div>
   
    ),
  },
  {
    title: "Tech",
    value: "tech",
    content: (
      <div className="p-4 bg-black h-[80vh]  w-[70%]  bg-gradient-to-br from-purple-700 to-violet-900 rounded-lg shadow">
        <h2 className="text-xl font-bold text-black dark:text-white mb-2">Technology</h2>
        <img
          src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Technology"
         className="rounded-lg shadow-md w-[80%] max-w-2xl h-[80%] mx-auto
"
        />
        <p className="mt-2 text-black dark:text-white">
          A glimpse into the modern world driven by innovation.
        </p>
      </div>
    ),
  },
  {
    title: "Architecture",
    value: "architecture",
    content: (
      <div className="p-4 bg-black h-[80vh]  w-[70%]  bg-gradient-to-br from-purple-700 to-violet-900 rounded-lg shadow">
        <h2 className="text-xl font-bold text-black dark:text-white mb-2">Architecture</h2>
        <img
          src="https://images.pexels.com/photos/6624869/pexels-photo-6624869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Architecture"
         className="rounded-lg shadow-md w-[80%] max-w-2xl h-[80%] mx-auto
"
        />
        <p className="mt-2 text-black dark:text-white">
          Explore structures that define civilization’s creative edge.
        </p>
      </div>
    ),
  },
  {
    title: "Mountains",
    value: "mountains",
    content: (
      <div className="p-4 bg-black h-[80vh]  w-[70%]   bg-gradient-to-br from-purple-700 to-violet-900 rounded-lg shadow">
        <h2 className="text-xl font-bold text-black dark:text-white mb-2">Majestic Mountains</h2>
        <img
          src="https://images.pexels.com/photos/4503875/pexels-photo-4503875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Mountains"
         className="rounded-lg shadow-md w-[80%] max-w-2xl h-[80%] mx-auto
"
        />
        <p className="mt-2 text-black dark:text-white">
          Climb to the heights and witness the serenity from above.
        </p>
      </div>
    ),
  },
  {
    title: "Plate",
    value: "Plate",
    content: (
      <div className="p-4 bg-black h-[80vh]  w-[70%]   bg-gradient-to-br from-purple-700 to-violet-900 rounded-lg shadow">
        <h2 className="text-xl font-bold text-black dark:text-white mb-2">Majestic Mountains</h2>
        <img
          src="https://images.pexels.com/photos/5913380/pexels-photo-5913380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Mountains"
          className="rounded-lg shadow-md w-[80%] max-w-2xl h-[80%] mx-auto
"
        />
        <p className="mt-2 text-black dark:text-white">
          Climb to the heights and witness the serenity from above.
        </p>
      </div>
    ),
  },
];




// const items = [
//     { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
//     { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
//     { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
//     { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
//   ];


const items = [
  {
    icon: <VscHome style={{ color: "white" }} />,
    label: "Home",
    onClick: () => {
      document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    icon: <VscBriefcase style={{ color: "white" }} />, // Certificates
    label: "Certificates",
    onClick: () => {
      document.getElementById("Certificates")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    icon: <VscRocket style={{ color: "white" }} />, // Journey
    label: "Journy",
    onClick: () => {
      document.getElementById("journy")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    icon: <VscGlobe style={{ color: "white" }} />, // Social
    label: "Social",
    onClick: () => {
      document.getElementById("Social")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    icon: <VscTools style={{ color: "white" }} />, // Skills
    label: "Skills",
    onClick: () => {
      document.getElementById("Skills")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    icon: <VscPerson    style={{ color: "white" }} />, // Skills
    label: "Testimonials",
    onClick: () => {
      document.getElementById("Testimonials")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    icon: <VscMail     style={{ color: "white" }} />, // Skills
    label: "Contact Me ?",
    onClick: () => {
      document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
    },
  },
];


  return (
    <>
 
      <Nav />

      <Hero1 />
      <Hero2 />
      <Timeline data={timelineData} />
      <Hero3/>
           <div
         className='bg-black'>
      <Hero3/>
    <Hero4/>
  
   
      {/* <div className='relative'>
        <div>
      <LetterGlitch
        glitchSpeed={5}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      </div>
      <div className='top-[-20vh] left-0 w-full flex justify-around px-4'>
        <h1>Multi-Skills Developer</h1>
      </div>
      </div> */}

      <div className='w-full h-full flex-col  flex justify-center items-center'>
      <h1 className='text-white text-4xl'>Skills That I Have</h1>
     <br>
     </br>      <p className='text-white text-3xl'> All the skills Mention below</p>
      </div>



<div className='w-full flex justify-center ' style={{ background: 'black' }} id='Skills'>
  <Tabs
    tabs={unsplashTabs}
    containerClassName="my-12"
    tabClassName="bg-transparent text-sm font-medium"
    activeTabClassName="!bg-blue-300 dark:!bg-blue-800"
    contentClassName="h-[400px] bg-transparent"
  />
  
</div>
{/* <section className="bg-white dark:bg-black relative top-[40vh]">
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </section> */}
    
  
  
    
  </div>

<Dock 
    items={items}
    // panelHeight={68}
    // baseItemSize={50}
    // magnification={70}
  />
  <Testimonial4/>
  

  <ContactForm/>
  
   <Footer/>
    </>
  )
}

export default App
