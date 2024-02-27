import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  id="courses" className={layout.section}>

    <motion.div
     variants={fadeIn('down', 'tween', 0.3, 1)}
    className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why Choose<br className="sm:block hidden" /> Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Our courses have been prepared to give you the knowledge needed to build, Enough money to invest in projects, 
A powerful branding/influence/portfolio to land good deals and a strong network.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div
    variants={fadeIn('up', 'tween', 0.3, 1)}
    className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </motion.section>
);

export default Business;
