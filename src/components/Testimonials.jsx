import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Testimonials = () => (
  <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Hear from our<br className="sm:block hidden" /> students
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
       An unparalleled opportunity to accelerate your journey into the world of Web3. 
        </p>
      </div>
    </div>

    <motion.div
    variants={fadeIn('up', 'tween', 0.3, 1)}
    className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </motion.div>
  </motion.section>
);

export default Testimonials;
