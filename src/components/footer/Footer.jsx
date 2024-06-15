import LinkContact from "./linkContact/LinkContact";
import LinkIcon from "./linkIcon/LinkIcon";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
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
        <div>
          <LinkIcon icon={"fa-brands fa-tiktok"} url={"#"} />
          <LinkIcon icon={"fa-brands fa-instagram"} url={"#"} />
          <LinkIcon icon={"fa-brands fa-square-facebook"} url={"#"} />
          <LinkIcon icon={"fa-brands fa-whatsapp"} url={"#"} />
        </div>
      </div>
      <div>
        Duffee 2024 © | All Rigths Reserved
      </div>
    </div>
  );
};

export default Footer;
