import React from 'react'
import "./Projects.scss"
import abo from "./assets/abo.jpg"
import {motion} from "framer-motion"
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"
const variants={
    initial:{
        x:-40,
        y:100,
        opacity:0,

    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1

        }

    },
}

const projects = () => {
  return (
    <motion.div className='project' 
    variants={variants} 
    initial="initial"
     whileInView="animate">
        <motion.div className='textContainer' variants={variants}>
            <p>Unleashing potential, one step at a time.</p>
            <hr/>
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <div className='title'>
                <img src={abo}  alt=''/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
            </div>
            <div className='title'>
                <h1><motion.b whileHover={{color:"orange"}}>For New</motion.b> Projects</h1>
                <a href='https://www.linkedin.com/in/vaibhav-srivastava-3b95b018a/'><button><b>CONNET WITH ME</b></button></a>
            </div>
        </motion.div>
        <motion.div className='listContainer'>

             <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
                <h2>Resume     <FaFacebook size={20} style={{color : "white", marginRight : "2rem"}}/></h2>
                <p>Unlock my journey on paper</p>
                <a href='https://drive.google.com/file/d/1B29p1lHF4S7tL04hTNgd6oIcKyzddYfH/view?usp=sharing'><button>DOWNLOAD</button></a>
                </motion.div>

             <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
                <h2>Linkedin   <FaLinkedin size={20} style={{color : "white", marginRight : "2rem"}}/> </h2>
                <p>Make A Connection</p>
                <a href='https://www.linkedin.com/in/vaibhav-srivastava-3b95b018a/'><button>CONNECT</button></a>
                </motion.div>
                
             <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
                <h2>GitHub    <FaGithub size={20} style={{color : "white", marginRight : "2rem"}}/></h2>
                <p>Explore my Recent works</p>
                <a href='https://github.com/vaibhav04096'><button >EXPLORE</button></a>
                </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default projects