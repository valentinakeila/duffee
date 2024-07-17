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
      <div className="d-flex mt-1" style={{position:"absolute",zIndex:2,marginLeft:"2rem"}}>
        <button onClick={handleLanguageSwitch} className="mt-5 fs-5 text-white rounded py-2 px-1 fw-bold" style={{backgroundColor:"#FFC091",color:"#FFFFFF",border:"solid 1px white"}}>
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
