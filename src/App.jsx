
import './App.css'
import Nav from './Sections/Navbar/Nav'
import Iridescence from './Components/Comp/Iridescence'
import Hero1 from './Sections/Hero1/Hero1'
import Hero2 from './Sections/Hero2/Hero2'
import LetterGlitch from'./Components/Glitch/Glitch'

function App() {


  return (
    <>

      <Nav />
      <Hero1 />
      <Hero2 />
   
      <div className='relative'>
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
      </div>





    </>
  )
}

export default App
