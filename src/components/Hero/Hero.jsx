import React from 'react'
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import {RiShoppingBagFill} from "react-icons/ri"
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion"
const Hero = () => {

    const transition ={duration: 3, type:"string"}
  return (
    <div className={css.container}>

        {/*left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>
                {" "}
                Seedily say has suitable disposal and boy. Exercise joy man children
                 rejoiced.
                 </span>
            </div>
        </div>

        {/*middle side hero image section */}
        <div className={css.wrapper}> 
             {/*blue circle */}
            <motion.div 
            initial={{bottom:"2rem"}}
            whileInView={{bottom:"0rem"}}
            className={css.blueCircle}
            transition={transition}
            ></motion.div>



            <img src={HeroImg} alt="" width={600}/>
            <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signUp}>
                    <span>Best SignUp Offers</span>

               
                <div>
                <BsArrowRight/>
                </div>
                </div>
               </div>
               </div>

               {/*right side */}
               <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
               </div>
              </div>

  )
}

export default Hero