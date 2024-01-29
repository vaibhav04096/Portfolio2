import "./Hero.scss"
import{motion} from "framer-motion"
import hero from "./assets/hero.png"
import scroll from "./assets/scroll.png"
const textVariants ={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants ={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType: "mirror",
      duration:20,
    },
  },
};
const Hero = () => {
  const items = [
    
    "Contact",
  ];
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div 
        className="textContainer" 
        variants={textVariants}
        initial="initial"
        animate="animate">
          <motion.h2 variants={textVariants}>Vaibhav Srivastava</motion.h2>
            <motion.h1 variants={textVariants} ><motion.b whileHover={{color:"orange"}}>React And</motion.b><br/><motion.b  whileHover={{color:"orange"}}>Full-Stack</motion.b><motion.b  whileHover={{color:"orange"}}> Developer</motion.b></motion.h1>
            <motion.div variants={textVariants} className="button">
                <a href="https://drive.google.com/file/d/1B29p1lHF4S7tL04hTNgd6oIcKyzddYfH/view?usp=sharing"  ><motion.button>Download My Resume</motion.button></a>
                {items.map((item) => (
        <motion.a href={`#${item}`} key={item}   >
          <button>{item}</button>
        </motion.a>
      ))}
            </motion.div>
            <motion.img variants={textVariants} 
            animate="scrollButton" src={scroll} alt=""/>
            </motion.div>
            </div>
            <motion.div  className="slidingTextContainer" 
            variants={sliderVariants} 
            initial="initial" 
            animate="animate">
              Web, Android & Full-Stack Developer
            </motion.div>
    <div className="imageContainer">
        <img src={hero} alt=""/>
    </div>
   

    </div>
  )
}

export default Hero