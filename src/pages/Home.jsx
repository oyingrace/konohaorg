import styles from "../style";
import { Explore, World } from "../sections";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";

const Home = () => (
  <div className="bg-primary-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Explore/>
        <Business />
       {/*<Billing /> */ }
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        <World/>
       {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
