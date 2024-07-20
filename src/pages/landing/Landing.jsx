import NavBarAdmin from "../../components/navbar/NavBarAdmin";
import NavBarSysAdmin from "../../components/navbar/NavBarSysAdmin";

import React, { useState, useContext } from "react";

import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory";
import Owners from "../../components/owners/Owners";
import PhotosCarousel from "../../components/photosCarousel/PhotosCarousel";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import NavBarUser from "../../components/navbar/NavBarUser";

const buttonStyle = {
  fontSize: '1.5em',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#fcbb79',
  color: 'black',
};

function Landing() {
  const { currentUser } = useContext(AuthenticationContext);
  const [isLatin, setIsLatin] = useState(false);

  const handleLanguageSwitch = () => {
    setIsLatin(!isLatin);
  };

  let navBarComponent;
  if (!currentUser) {
    navBarComponent = <Navigation />;
  } else if (currentUser.isSysAdmin) {
    navBarComponent = <NavBarSysAdmin />;
  } else if (currentUser.adminRole) {
    navBarComponent = <NavBarAdmin />;
  } else {
    navBarComponent = <NavBarUser />;
  }

  return (
    <>
      {navBarComponent}
      <div className="d-flex mt-1" style={{ position: "absolute", zIndex: 2, marginLeft: "2rem" }}>
        <button onClick={handleLanguageSwitch} className="mt-3" style={buttonStyle}>
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
