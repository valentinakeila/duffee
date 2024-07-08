import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory"
import Owners from "../../components/owners/Owners";

function Landing() {
  return (
    <>
      <Navigation />
      <Carousel/>
      <OurStory/>
      <Owners/>
      <Footer />
    </>
  );
}

export default Landing;
