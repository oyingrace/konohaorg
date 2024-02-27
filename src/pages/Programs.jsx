import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, HeroP, Insights, WhatsNew, World } from '../sections';
import styles from "../style";


const Programs = () => {
  return (
    <div className="bg-primary-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


       <div className="bg-primary-black overflow-hidden">
    <HeroP/>
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <GetStarted />
    </div>

    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
  </div>

  <div className={`bg-primary-black ${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
  <Footer />
  </div>
  </div>
  </div>
  
  )
}

export default Programs