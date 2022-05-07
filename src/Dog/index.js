import React from 'react';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Dog=()=>{
    const exampleVariant = {
        visible: { opacity: 1 ,scale:1},
        hidden: { opacity: 0,scale: 0},
      }
    const Mystyle={
        backgroundColor:"red",
        width: "100px",
        border: "15px solid green",
        padding: "50px",
        margin: "20px",
    }
    return(
    <motion.div 
    variants={exampleVariant}
    animate="visible"
     initial="hidden"
    className='Box'>
    
        <h1 style={Mystyle}>Box</h1>
    </motion.div>
    
    );
}
export default Dog;