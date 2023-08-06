import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Intro } from "./Intro";
import { About } from "./About";
import { Rooms } from "./Rooms";
import { TabletWarning } from "./TabletWarning";
import { LocationAvailability } from './LocationAvailability';
import { Amenities } from "./Amenities";

gsap.registerPlugin(CSSRulePlugin);

const Section = (props) => {

    const { children } = props
    
    return (
        <motion.section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
        >
            {children}
        </motion.section>
    )
}

export const Interface = () => {

    const [showContent, setShowContent] = useState(true)
    const [showMessage, setShowMessage] = useState(true)
    const tabletwidth = 768

    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth < tabletwidth) {
                setShowContent(false)
                setShowMessage(true)
            }
            else
            {
                setShowContent(true)
                setShowMessage(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <div className="flex flex-col items-center w-screen">
            
            {showContent && <Intro /> }
            {showContent && <About />}
            {showContent && <Rooms />}
            {showContent && <LocationAvailability />}
            {showContent && <Amenities />}

            {showMessage && <TabletWarning />}
            
        </div>
    );
};
