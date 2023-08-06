import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import styles from './Intro.module.css'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export const Intro = (props) => {

    const { onSectionChange } = props
    
    const btntl = gsap.timeline()
    const thetitlebg = useRef()
    const thetitle = useRef()
    const thebodycopybg = useRef()

    const easeinoutexpo = [0.87, 0, 0.13, 1]
    
    const onMouseEnter = () => {
        gsap.to(".button", {scaleX:.9, scaleY:.9, duration:.4, ease:'Back.easeInOut'})
        let rule = CSSRulePlugin.getRule(".button::before"); //get the rule
        btntl.to(rule, {duration: .3, cssRule: {marginLeft:"-100px"}, ease:'Circ.easeInOut'});
    }

    const onMouseLeave = () => {
        gsap.to(".button", {scaleX:1, scaleY:1, duration:.4, ease:'Back.easeInOut'})
        let rule = CSSRulePlugin.getRule(".button::before"); //get the rule
        btntl.to(rule, {duration: .3, cssRule: {marginLeft:"-400px"}, ease:'Circ.easeInOut'});
    }

    return (
        <div className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <div className="titles-container text-6xl font-extrabold leading-snug">
                <motion.div className={styles.titles} ref={thetitle}
                    viewport={{ once: true }}
                    initial={{x:-245}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:2.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Dreams
                </motion.div>
            </div>
            <motion.div className="titles-bg" ref={thetitlebg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:2, type:"cubic-bezier", ease:easeinoutexpo}}
            />

            <div className="bodycopy-container">
                <motion.p className="bodycopy text-lg text-gray-600 mt-4"
                    viewport={{ once: true }}
                    initial={{x:-300}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:2.3, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    They come true, but only if you buy this property!
                </motion.p>
            </div>
            <motion.div className="bodycopy-bg" ref={thebodycopybg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:2.2, type:"cubic-bezier", ease:easeinoutexpo}}
            />
            
            <motion.div className="button-container cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => onSectionChange(1)}>
                <motion.button className={`button text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
                    viewport={{ once: true }}
                    initial={{scaleX:0, scaleY:0}}
                    whileInView={{scaleX:1, scaleY:1}}
                    transition={{duration:.6, delay:2.4, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    <div className="button-label">Learn More</div>
                </motion.button>    
            </motion.div>
        </div>
    )
};
