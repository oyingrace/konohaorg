'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { arrowdown } from '../assets';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Konoha Financial Conference" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The Konoha Financial Conference </span>  is set to unfold, 
        bringing together financial experts, entrepreneurs, 
        and policymakers for a groundbreaking event. Held virtually, 
        discussions will span diverse topics, including cryptocurrency, sustainable finance,
         and technological advancements.{' '}
        <span className="font-extrabold text-white">
        Esteemed speakers,
        </span>{' '}
        will offer insights into navigating the evolving financial landscape.{' '}
        <span className="font-extrabold text-white">Networking opportunities</span> promise to enrich the experience, 
        fostering collaboration and innovation. As anticipation builds,
         the conference heralds a new era of economic {' '}
        <span className="font-extrabold text-white"> empowerment</span> within the web3 community.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={arrowdown}
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
