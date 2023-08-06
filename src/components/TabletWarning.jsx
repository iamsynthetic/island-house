import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import styles from './Intro.module.css'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export const TabletWarning = () => {

    const thetitlebg = useRef()
    const thetitle = useRef()
    const thebodycopybg = useRef()
    const easeinoutexpo = [0.87, 0, 0.13, 1]

    return (
        <div className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <div className="titles-container text-6xl font-extrabold leading-snug">
                <motion.div className={styles.titles} ref={thetitle}
                    viewport={{ once: true }}
                    initial={{x:-245}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Oopsie!
                </motion.div>
            </div>
            <motion.div className="titles-bg" ref={thetitlebg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, type:"cubic-bezier", ease:easeinoutexpo}}
            />

            <div className="bodycopy-container">
                <motion.p className="bodycopy text-lg text-gray-600 mt-4"
                    viewport={{ once: true }}
                    initial={{x:-300}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    This site is optimized for a larger screen size.
                </motion.p>
            </div>
            <motion.div className="bodycopy-bg" ref={thebodycopybg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.2, type:"cubic-bezier", ease:easeinoutexpo}}
            />
        </div>
    )
};
