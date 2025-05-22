import React from 'react'
import SpotlightCard from'./File'
import { div } from 'framer-motion/client'
import { VscHome, VscAccount } from "react-icons/vsc";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Hero4 = () => {
  return (
 <div style={{ display: "flex", gap: "2rem", padding: "2rem", background: "#222", justifyContent:"center" }} id='Social'> 


      <SpotlightCard spotlightColor="rgba(10, 102, 194, 0.3)"> {/* LinkedIn blue */}
        <FaLinkedin style={{ color: "white", fontSize: "3rem" }} />
        <h3 style={{ color: "white",padding:"4px",fontWeight:"300" }}>LinkedIn</h3>
        <p style={{ color: "white", maxWidth: "200px",padding:"4px" }}>
          Connect to Github
        </p>
        <p style={{ color: "white", maxWidth: "200px",padding:"4px" }}>
          To see all my projects
        </p>
        <button className="spotlight-button linkedin-button" style={{marginTop:"15px"}}>Connect Now</button>

      </SpotlightCard>     

      <SpotlightCard spotlightColor="rgba(39, 205, 26, 0.3)"> {/* GitHub dark */}
        <FaGithub style={{ color: "white", fontSize: "3rem" }} />
        <h3 style={{ color: "white",padding:"4px",fontWeight:"300" }}>GitHub</h3>
        <p style={{ color: "white", maxWidth: "200px",padding:"4px" }}>
          Connect to Github
        </p>
        <p style={{ color: "white", maxWidth: "200px",padding:"4px" }}>
          To see all my projects
        </p>
<button className="spotlight-button github-button" style={{marginTop:"15px"}}>Connect Now</button>   
   </SpotlightCard>

      
 <SpotlightCard spotlightColor="rgba(225, 48, 108, 0.3)"> {/* Instagram pink */}
        <FaInstagram style={{ color: "white", fontSize: "3rem" }} />
        <h3 style={{ color: "white",padding:"4px",fontWeight:"300" }}>Instagram</h3>
          <p style={{ color: "white", maxWidth: "200px",padding:"4px" }}>
          Connect to Instagram
        </p>
          <p style={{ color: "white", maxWidth: "200px",padding:"4px" }}>
          For Social Update
        </p>
        <button className='spotlight-button' style={{marginTop:"15px"}}>Connect Now</button>
      </SpotlightCard>
    </div>
    
     

  )
}

export default Hero4