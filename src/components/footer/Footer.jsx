import LinkContact from "./linkContact/LinkContact";
import LinkIcon from "./linkIcon/LinkIcon";

const Footer = () => {

  const tikTokPageUrl = "https://www.tiktok.com/";
  const instagramPageUrl = "https://www.instagram.com/";
  const facebookPageUrl = "https://www.facebook.com/";
  const whatsappPageUrl = "https://www.whatsapp.com/";

  return (
    <div className="bg-black d-flex-column w-100 position-absolute bottom-0" style={{height: "110px"}}>
      <div className="d-flex gap-5 justify-content-center h-75 align-items-end">
        <div className="d-flex gap-5 w-25">
          <LinkContact
            icon={"bi bi-telephone-fill"}
            data={"0341-4335900"}
            url={"tel: +54012345678"}
            hoverMesagge={"Lamanos!"}
          />
          <LinkContact
            icon={"bi bi-envelope-fill"}
            data={"duffee@gmail.com"}
            url={"mailto: duffee@gmail.com"}
            hoverMesagge={"Enviar mail"}
          />
        </div>
        <div className="d-flex gap-5 w-25 mb-2">
          <LinkIcon icon={"bi bi-tiktok"} url={tikTokPageUrl} hoverMesagge={"Seguinos en TikTok!"}/>
          <LinkIcon icon={"bi bi-instagram"} url={instagramPageUrl} hoverMesagge={"Seguinos en Instagram!"}/>
          <LinkIcon icon={"bi bi-facebook"} url={facebookPageUrl} hoverMesagge={"Seguinos en Facebook!"}/>
          <LinkIcon icon={"bi bi-whatsapp"} url={whatsappPageUrl} hoverMesagge={"Envianos un Whatsapp!"}/>
        </div>
      </div>
      <div className="text-light text-end me-2">
        Duffee 2024 © | All Rigths Reserved
      </div>
    </div>
  );
};

export default Footer;
