import React from 'react'
import {useRef} from "react"
import "./Portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"E-Commerce",
        img:"https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:" Explore fashion with our HTML, CSS, and JavaScript e-commerce site. Discover trendy clothes and trending products. Seamlessly designed for a delightful and efficient shopping experience. Explore now!",

    },
    {
        id:2,
        title:"TicTacToe",
        img:"https://media.istockphoto.com/id/946399874/photo/chalkboard-ticktacktoe-background.jpg?s=612x612&w=0&k=20&c=AqdzRbaFXccEhY5HJR3a5h7ueNUPk5DD7kIIALi4fV8=",
        desc:"Dive into my Haskell-powered Tic-Tac-Toe game—a minimalist and functional take on the classic. Immerse yourself in strategic moves and smart gameplay. It's a code-driven challenge that brings the timeless joy of Tic-Tac-Toe to life in a concise, elegant Haskell implementation.",
        

    },
    {
        id:3,
        title:"Portfolio 1",
        img:"https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Elevate your online presence with my latest React portfolio—a visually striking masterpiece seamlessly blending elegance and functionality. It's not just a snapshot of accomplishments but a dynamic story of growth through continuous learning and upskilling in React",

    },
    {
        id:4,
        title:"Portfolio 2",
        img:"https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Delve into my React portfolio—a visual spectacle with interactive React hooks, seamless responsiveness, and sophisticated SCSS styling. Navigating through engaging sections provides a consistent, user-friendly experience. Beyond accomplishments, a segment underscores my commitment to ongoing learning and upskilling with React. Witness a convergence of creativity, innovation, and technology, leaving a lasting impression—a succinct narrative of growth and style.",
        

    },
];

const Single =({item})=>{


    const ref =useRef();
    
    const{scrollYProgress}= useScroll({
        target:ref , 
        //offset: ["start start", "end start"],


});

    const y=useTransform(scrollYProgress,[0,1],[-50,200]);
    return(
        <section >
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer'ref={ref}>
                <img src ={item.img} alt="IMAGE" />
                </div>
                <motion.div className='textContainer'style={{y}} >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href='https://github.com/vaibhav04096'><button>VIEW SOURCE</button></a>
                </motion.div>
                </div>
            </div>
    
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const{scrollYProgress}= useScroll({
        target:ref , 
        offset: ["end end", "start start"],
});

const scaleX =useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
})

  return (
    <div className='portfolio' ref={ref}>
        <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className='progressBar'></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio