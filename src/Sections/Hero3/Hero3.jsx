import React from 'react'
import { DraggableCardContainer, DraggableCardBody } from "./content";

const Hero3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" id='Certificates'>
       
      
      <DraggableCardContainer>
        <DraggableCardBody className="bg-white dark:bg-neutral-800 text-black dark:text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNTtrIawKezVeb4yfUO8aViJgMzZfFYEhXA&s" // make sure the image exists in the public/images folder
            alt="Card"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Draggable Image Card</h2>
          <p>This card includes an image and is draggable and interactive.</p>
        </DraggableCardBody>
      </DraggableCardContainer>
      <DraggableCardContainer>
        <DraggableCardBody className="bg-white dark:bg-neutral-800 text-black dark:text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNTtrIawKezVeb4yfUO8aViJgMzZfFYEhXA&s" // make sure the image exists in the public/images folder
            alt="Card"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Draggable Image Card</h2>
          <p>This card includes an image and is draggable and interactive.</p>
        </DraggableCardBody>
      </DraggableCardContainer>
   
      <DraggableCardContainer>
        <DraggableCardBody className="bg-white dark:bg-neutral-800 text-black dark:text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNTtrIawKezVeb4yfUO8aViJgMzZfFYEhXA&s" // make sure the image exists in the public/images folder
            alt="Card"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Draggable Image Card</h2>
          <p>This card includes an image and is draggable and interactive.</p>
        </DraggableCardBody>
      </DraggableCardContainer>
    </div>
  )
}

export default Hero3