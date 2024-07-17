import React, { useContext } from "react";
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import NavBarUser from "../../components/navbar/NavBarUser";
import NavBarAdmin from "../../components/navbar/NavBarAdmin";
import NavBarSysAdmin from "../../components/navbar/NavBarSysAdmin";
import Navigation from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import OurStory from "../../components/ourStory/OurStory";
import Owners from "../../components/owners/Owners";
import PhotosCarousel from "../../components/photosCarousel/PhotosCarousel";

function Landing() {
  const { currentUser } = useContext(AuthenticationContext);

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
      <Carousel />
      <OurStory />
      <PhotosCarousel />
      <Owners />
      <Footer />
    </>
  );
}

export default Landing;
