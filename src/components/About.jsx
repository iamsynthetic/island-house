import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import styles from './About.module.css'

gsap.registerPlugin(CSSRulePlugin);

export const About = () => {
    
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
        <div className={`about h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <div className="about-title-container text-6xl font-extrabold leading-snug">
                <motion.div className={styles.titles} ref={thetitle}
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    About This Rental
                </motion.div>
            </div>
            <motion.div className="about-title-bg" ref={thetitlebg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, type:"cubic-bezier", ease:easeinoutexpo}}
            />

            <div className="housefeatures-container">
                <motion.div class="stats"
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >
                    <div class="col title">cottage<br/><span className="detail">580 sq. ft</span></div>
                    <div class="col title">1 bedroom<br/><span className="detail">2 beds sleeps 2</span></div>
                    <div class="col title">1 bathroom<br/><span className="detail">full, soaker tub</span></div>
                    <div class="col title">Spaces<br/><span className="detail">living room, kitchen, patio</span></div>
                </motion.div>
            </div>

            <motion.div className="housefeatures-bg" ref={thebodycopybg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />

            <div className="about-bodycopy-container">
                <motion.p className="bodycopy text-lg text-gray-600 mt-4"
                    viewport={{ once: true }}
                    initial={{x:-610}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.8, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Welcome to your own private island! Located in the Million Islands area, it's just a two minute boat ride from the mainland. Enjoy beautiful views all season long, right outside your door. This cozy cottage was built in 2021 and features an open concept kitchen and living room, a spacious bedroom and a bathroom with a tub. It has a back porch with a sliding door, a wood burning fireplace, a fire pit, already cut firewood and access to a boat with a huge deck!
                </motion.p>
            </div>
            <motion.div className="about-bodycopy-bg" ref={thebodycopybg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.7, type:"cubic-bezier", ease:easeinoutexpo}}
            />

            <motion.div className="button-container cursor-pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <motion.button className={`button text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
                    viewport={{ once: true }}
                    initial={{scaleX:0, scaleY:0}}
                    whileInView={{scaleX:1, scaleY:1}}
                    transition={{duration:.6, delay:.9, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    <div className="button-label">Get In Touch</div>
                </motion.button>    
            </motion.div>
        </div>
    )
};
