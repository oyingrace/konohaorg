import styles from "../style";
import { discount, heroo} from "../assets";
import GetStarted from "./GetStarted";
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import {fadeIn} from '../../variants';


'use client';



const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount{" "}
            <span className="text-white">Ongoing</span> 
          </p>
        </div>

        <motion.div
           variants={fadeIn('up',0.5)} 
           initial='hidden'
           animate='show'
           exit="hidden"
        className="flex flex-row justify-between items-center w-full">
          <h1
          className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The <span className="text-gradient">Web3</span><br className="sm:block hidden" />{" "}
            <span className="text-gradient">Accelerator</span>{" "}
          </h1>

          <motion.div
          className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </motion.div>

        </motion.div>

        <motion.h1
           variants={fadeIn('down',0.5)} 
           initial='hidden'
           animate='show'
           exit="hidden"
        className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Programme.
        </motion.h1>

        <motion.p 
       
        className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Designed to empower individuals like you with the knowledge and skills needed to thrive in the rapidly evolving landscape of Web3,
           our programme is your gateway to success.
        </motion.p>
      </motion.div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={heroo} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
