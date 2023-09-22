import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
import { BiBed } from 'react-icons/bi'
import { LiaCouchSolid, LiaToiletSolid } from 'react-icons/lia'
import { PiBathtub, PiTelevisionSimple } from 'react-icons/pi'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { GiBarbecue } from 'react-icons/gi'
import styles from './Rooms.module.css'


gsap.registerPlugin(CSSRulePlugin);

export const Rooms = () => {
    
    const btntl = gsap.timeline()
    const thetitlebg = useRef()
    const thetitle = useRef()
    const bedroombg = useRef()
    const bathroombg = useRef()
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
        <div className={`rooms h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <div className="title-container text-6xl font-extrabold leading-snug">
                <motion.div className={styles.titles} ref={thetitle}
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.1, type:"cubic-bezier", ease:easeinoutexpo}}
                >
                    Rooms & Beds
                </motion.div>
            </div>
            <motion.div className="title-bg" ref={thetitlebg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, type:"cubic-bezier", ease:easeinoutexpo}}
            />


            <div className="bedroom-container">
                <motion.div class="stats"
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >
                    <div className="col">
                        <div className="row title">BEDROOMS: 1 (sleeps 4)</div>
                        <div className="row card">
                            <div className="row subtitle">1 bedroom</div>
                            <div className="row details">queen bed & sleep sofa</div>
                            <div className="icons-container">
                                <BiBed className='icon'/>
                                <LiaCouchSolid className='icon'/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div className="bedroom-bg" ref={bedroombg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />


            <div className="bathroom-container">
                <motion.div class="stats"
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >
                    <div className="col">
                        <div className="row title">BATHROOMS: 1</div>
                        <div className="row card">
                            <div className="row subtitle">1 bathroom</div>
                            <div className="row details">Toilet & Shower</div>
                            <div className="icons-container">
                                <LiaToiletSolid className='icon'/>
                                <PiBathtub className='icon'/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div className="bathroom-bg" ref={bathroombg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />


            <div className="otherroom-container">
                <motion.div class="stats"
                    viewport={{ once: true }}
                    initial={{x:-600}}
                    whileInView={{x:0}}
                    transition={{duration:.6, delay:.4, type:"cubic-bezier", ease:easeinoutexpo}}    
                >
                    <div className="col">
                        <div className="row title">SPACES:</div>
                        <div className="row card">
                            <div className="column">
                                <TbToolsKitchen2 className='icon'/> 
                                <div className="detail">kitchen</div>
                            </div>
                            <div className="column">
                                <PiTelevisionSimple className='icon' />
                                <div className="detail">living room</div>
                            </div>
                            <div className="column">
                                <GiBarbecue className='icon' />
                                <div className="detail">back patio</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div className="otherroom-bg" ref={bathroombg}
                viewport={{ once: true }}
                initial={{scaleX:0, originX:0}}
                whileInView={{scaleX:1}}
                transition={{duration:.6, delay:.3, type:"cubic-bezier", ease:easeinoutexpo}}
            />  
        </div>
    )
};
