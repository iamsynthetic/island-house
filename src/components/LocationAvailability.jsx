import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
import Map from '../assets/map.png';
import styles from './LocationAvailability.module.css'

gsap.registerPlugin(CSSRulePlugin);

export const LocationAvailability = () => {
    
    const thetitlebg = useRef()
    const thetitle = useRef()
    const theavailability = useRef()
    const theavailabilitybg = useRef()
    const thefeaturesbg = useRef()
    const easeinoutexpo = [0.87, 0, 0.13, 1]

    return (
        <div className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <div className={`${styles.title_container} g_title text-6xl font-extrabold leading-snug`}>
                <motion.div className={styles.title} ref={thetitle}
                    viewport={{ once: true }}
                    initial={{x:-400}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Location & Availability
                </motion.div>
            </div>
            <motion.div className={styles.title_bg} ref={thetitlebg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, type:"cubic-bezier", ease:easeinoutexpo}}
            />

            <div className={styles.features_container}>
                <motion.div class={styles.stats}
                    viewport={{ once: true }}
                    initial={{x:-700}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >
                    <div class={`${styles.col} ${styles.stats_title} g_subtitle`}>
                        <div>
                            Thousand Islands, Ontario, Canada<br/>
                            <span className={`${styles.stats_details} g_subsubtitle`}>Detailed location provided after booking</span>
                        </div>
                        <div className={`${styles.places_group}`}>
                            <div className="g_subtitle">
                                Things To Do in the Area
                            </div> 
                            <div className={`${styles.places_list_item}`}>
                                Brockville Railway Tunnel
                            </div> 
                            <div className={`${styles.places_list_item}`}>
                                thousand Islands Playhouse
                            </div> 
                            <div className={`${styles.places_list_item}`}>
                                1000 Islands Tower
                            </div> 
                            <div className={`${styles.places_list_item}`}>
                                Fulford Place
                            </div> 
                            <div className={`${styles.places_list_item}`}>
                                Aquatarium at Tall Ships Landing
                            </div> 
                            <div className={`${styles.places_list_item}`}>
                                Charleston Lake Provincial Park
                            </div> 
                        </div>
                    </div>
                    <div class={`${styles.col} ${styles.themap}`}>
                        <img src={Map} alt="map" />
                    </div>
                </motion.div>
            </div>

            <motion.div className={styles.features_bg} ref={thefeaturesbg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />


            <div className={`${styles.availability_container} g_title text-6xl font-extrabold leading-snug`}>
                <motion.div className="g_subtitle" ref={theavailability}
                    viewport={{ once: true }}
                    initial={{x:-300}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Availability & Additional Information
                        <div className={`${styles.availability_list_item}`}>
                            Currently there is a five day waiting list. Call to inquire.
                        </div> 
                        <div className={`${styles.availability_list_item}`}>
                            There is a mandatory cleaning fee of $100 upon booking
                        </div> 
                        <div className={`${styles.availability_list_item}`}>
                            There is a fee for pets of $50
                        </div> 
                </motion.div>
            </div>
            <motion.div className={styles.availability_bg} ref={theavailabilitybg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, type:"cubic-bezier", ease:easeinoutexpo}}
            />
        </div>
    )
};
