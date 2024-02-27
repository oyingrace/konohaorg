import { jobs } from "../assets";
import styles, { layout } from "../style";
import Button2 from "./Button2";
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { motion } from 'framer-motion';


const CardDeal = () => (
  <motion.section
  variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  className={layout.section}>


    <motion.div
     variants={fadeIn('right', 'tween', 0.2, 1)}
    className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      What We<br className="sm:block hidden" /> Offer
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our comprehensive programme covers a diverse range of topics, including blockchain technology, decentralized finance (DeFi), non-fungible tokens (NFTs), smart contracts, and more. Whether you're a seasoned professional looking to expand your skill set or a newcomer eager to explore the possibilities of Web3,
       our tailored curriculum caters to learners of all levels.
      </p>

     <Button2 styles={`mt-10`} />
    </motion.div>

    <motion.div
     variants={fadeIn('left', 'tween', 0.2, 1)}
    className={layout.sectionImg}>
      <img src={jobs} alt="billing" className="w-[100%] h-[100%]" />
    </motion.div>
  </motion.section>
);

export default CardDeal;
