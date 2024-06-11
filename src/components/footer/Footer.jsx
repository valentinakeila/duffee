import "./footer.css";
import LinkContact from "./linkContact/LinkContact";
import LinkIcon from "./linkIcon/LinkIcon";

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-links">
        <div className="footer-links-1">
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
        <div className="footer-links-2">
          <LinkIcon icon={"fa-brands fa-tiktok"} url={"#"} />
          <LinkIcon icon={"fa-brands fa-instagram"} url={"#"} />
          <LinkIcon icon={"fa-brands fa-square-facebook"} url={"#"} />
          <LinkIcon icon={"fa-brands fa-whatsapp"} url={"#"} />
        </div>
      </div>
      <div className="footer-copyrigths">
        Duffee 2024 © | All Rigths Reserved
      </div>
    </div>
  );
};

export default Footer;
