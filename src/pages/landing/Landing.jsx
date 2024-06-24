import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory"

function Landing() {
  return (
    <>
      <Navigation />
      <Carousel/>
      <OurStory/>
      <Footer />
    </>
  );
}

export default Landing;
