import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
import styles from './Amenities.module.css'

gsap.registerPlugin(CSSRulePlugin);

export const Amenities = () => {
    
    const thetitlebg = useRef()
    const thetitle = useRef()
    const essentialsbg = useRef()
    const kitchenbg = useRef()
    const easeinoutexpo = [0.87, 0, 0.13, 1]

    return (
        <div className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <div className={`${styles.titles_container} text-6xl font-extrabold leading-snug`}>
                <motion.div className={styles.titles} ref={thetitle}
                    viewport={{ once: true }}
                    initial={{x:-200}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Amenities
                </motion.div>
            </div>
            <motion.div className={styles.titles_bg} ref={thetitlebg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, type:"cubic-bezier", ease:easeinoutexpo}}
            />


            <div className={`${styles.essentials_container}`}>
                <motion.div class={`${styles.essentials_stats}`}
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >
                    <div className={`${styles.col}`}>
                        <div className={`${styles.title}`}>ESSENTIALS:</div>
                        <div className={`${styles.card}`}>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Linens provided</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Towels Provided</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.column}`}>Heating</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Hair Dryer</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Air conditioning</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Wireless Internet</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Toilet Paper</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Basic Soaps</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div className={`${styles.essentials_bg}`} ref={essentialsbg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />  

            
            <div className={`${styles.kitchen_container}`}>
                <motion.div class={`${styles.kitchen_stats}`}
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >   
                    <div className={`${styles.col}`}>
                        <div className={`${styles.title}`}>KITCHEN:</div>
                        <div className={`${styles.card}`}>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Microwave</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Refrigerator</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.column}`}>Dishes & Utensils</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Coffee Maker</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Dishwasher</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Stove</div>
                            </div>
                            <div className={`${styles.column}`}>
                                <div className={`${styles.details}`}>Oven</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div className={`${styles.kitchen_bg}`} ref={kitchenbg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />  
        </div>
    )
};
