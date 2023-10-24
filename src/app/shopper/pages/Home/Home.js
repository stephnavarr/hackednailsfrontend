'use client';
import classes from './Home.module.css';
import Header from '../../layout/Header';
import Carousel from './Carousel';
function Home() {
  const FeaturedProducts = () => {
    return (
      <section className="featured-products">
        <h3>FEATURED</h3>
      </section>
    );
  };

  const TaglineSection = () => {
    return (
      <section className={classes.taglineSection}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Carousel />
      </section>
    );
  };
  return (
    <>
      <Header />
      <div className={classes.landingSection}>
        <h1>PAGE TAGLINE</h1>
        <TaglineSection />
      </div>

      <FeaturedProducts />
    </>
  );
}
export default Home;
