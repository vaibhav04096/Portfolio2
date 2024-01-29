import React from 'react'
import "../components/Navbar.scss"
import {motion} from "framer-motion"
import fb from "../assets/fb.png"
import git from "../assets/git.png"
import LD from "../assets/LD.png"
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
            <motion.span initial={{ opacity:0, scale:0.5}}
             animate={{opacity:1, scale:1}}
             transition={{duration:0.5}}>Vaibhav</motion.span>
            <div className='social'>
                <a href='https://www.facebook.com/vaibhav.srivastava.39904181/'><img src={fb} alt=""/></a>
                <a href='https://www.linkedin.com/in/vaibhav-srivastava-3b95b018a/'><img src={LD} alt=""/></a>
                <a href='https://github.com/vaibhav04096'><img src={git} alt=""/></a>

            </div>

        </div>

    </div>
  )
}

export default Navbar