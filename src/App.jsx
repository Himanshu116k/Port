
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

function App() {
  const timelineData = [
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


  return (
    <>

      <Nav />
      <Hero1 />
      <Hero2 />
      <Timeline data={timelineData} />
      <Hero3/>
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
<Card1/>




    </>
  )
}

export default App
