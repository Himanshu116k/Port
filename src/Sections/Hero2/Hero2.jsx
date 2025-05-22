import React from 'react'
import TiltedCard from '../../Components/Comp/Card/Card'
import Image from './base_1.jpg'
import VariableProximity from '../../Components/Depcard/Decrypted'
import { useRef } from 'react';






const Hero2 = () => {
    const containerRef = useRef(null);
    return (
        <div className='flex flex-row justify-around items-center h-full w-full bg-black px-[5vh]' id='Home'>
            <div className='h-[63vh]  w-[50%] flex items-center justify-center mt-[10vh]' >
                <TiltedCard
                    imageSrc={Image}
                    altText="Himanshu kumar"
                    captionText="Himanshu kumar"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="350px"
                    rotateAmplitude={11}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            Himanshu kumar
                        </p>
                    }
                />
            </div>
            <div className='  h-[63vh] mt-[10vh] w-full flex flex-col justify-center items-center'  >

                <h1 className='font-extralight text-[25px] text-white '>Hi Iam Himanshu kumar</h1>
                <p className='text-white'>A Front-End Developer ,backend And  iam Data Anylist and Agentic ai </p>
            </div>
        </div>
    )
}

export default Hero2