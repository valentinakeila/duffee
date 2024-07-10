import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory"
import Owners from "../../components/owners/Owners";
import PhotosCarousel from "../../components/photosCarousel/PhotosCarousel";

function Landing() {
  return (
    <>
      <Navigation />
      <Carousel/>
      <OurStory/>
      <PhotosCarousel/>
      <Owners/>
      <Footer />
    </>
  );
}

export default Landing;
