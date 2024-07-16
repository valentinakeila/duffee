import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory"
import Owners from "../../components/owners/Owners";
import PhotosCarousel from "../../components/photosCarousel/PhotosCarousel";
import { useContext } from "react";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import NavBarUser from "../../components/navbar/NavBarUser";

function Landing() {

  const { currentUser } = useContext(AuthenticationContext);

  return (
    <>
      {currentUser ? <NavBarUser /> : <Navigation />}
      <Carousel/>
      <OurStory/>
      <PhotosCarousel/>
      <Owners/>
      <Footer />
    </>
  );
}

export default Landing;
