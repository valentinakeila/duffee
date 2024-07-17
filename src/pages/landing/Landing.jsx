import React, { useState, useContext } from "react";
import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory";
import Owners from "../../components/owners/Owners";
import PhotosCarousel from "../../components/photosCarousel/PhotosCarousel";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import NavBarUser from "../../components/navbar/NavBarUser";

function Landing() {
  const { currentUser } = useContext(AuthenticationContext);
  const [isLatin, setIsLatin] = useState(false);

  const handleLanguageSwitch = () => {
    setIsLatin(!isLatin);
  };

  return (
    <>
      {currentUser ? <NavBarUser /> : <Navigation />}
      <div className="d-flex mt-4" style={{position:"absolute",zIndex:2,marginLeft:"2rem"}}>
        <button onClick={handleLanguageSwitch} className="btn btn-primary">
          {isLatin ? "Cambiar a Español" : "Translate to Latin"}
        </button>
      </div>
      <Carousel isLatin={isLatin} />
      <OurStory isLatin={isLatin} />
      <PhotosCarousel />
      <Owners isLatin={isLatin} />
      <Footer />
    </>
  );
}

export default Landing;
