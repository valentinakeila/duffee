import "./footer.css";
import LinkContact from "./linkContact/LinkContact";

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-page-1">
        <LinkContact
          icon={"fa-solid fa-phone"}
          data={"0341-4335900"}
          url={"#"}
        />
        <LinkContact
          icon={"fa-solid fa-envelope"}
          data={"duffee@gmail.com"}
          url={"#"}
        />
      </div>
      <div className="footer-page-2">
        <div className="footer-page-2-1">
          {/*<LinkIcon/> <i className="fa-brands fa-tiktok"></i>*/}
          {/*<LinkIcon/> <i className="fa-brands fa-instagram"></i>*/}
          {/*<LinkIcon/> <i className="fa-brands fa-square-facebook"></i>*/}
          {/*<LinkIcon/> <i className="fa-brands fa-whatsapp"></i>*/}
        </div>
        <div className="footer-page-2-2">Duffee 2024 All Rigth Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
