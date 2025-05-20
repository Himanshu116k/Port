import React from 'react'
import Iridescence from '../../Components/Comp/Iridescence'
import Lanyard from '../../Components/Idcard/Lanyard'
import TrueFocus from '../../Components/TrueFocus/TrueFocus'
import Aurora from '../../Components/Auroro/Auroro'

const Hero1 = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Section */}
        <div className="w-full h-full flex">
          <div className="w-[2%] h-full bg-black"></div>
          <div className="w-full border-2 border-black bg-black">
            <Aurora
              colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
              blend={0.5}
              amplitude={1.0}
              speed={1.3}
            />
          </div>
        </div>

        {/* Overlapping Elements */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-around px-4">
          {/* Left Box */}
          <div className="bg-black relative top-[83vh] text-white h-[23vh] w-[50%] rounded-tr-[40px] rounded-br-[30px] z-10 px-6 shadow-lg">
            <TrueFocus
              sentence="Himanshu kumar"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>

          {/* Right Lanyard */}
          <div className="h-full w-[44%] rounded-tr-[40px] z-10 flex justify-center items-center">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1
