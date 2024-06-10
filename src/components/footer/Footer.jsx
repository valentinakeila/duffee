import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-page-1">
        <div>phoneIcon + phoneNumber</div>
        <div>
          <i className="fa-solid fa-envelope"></i> emailAdress
        </div>
      </div>
      <div className="footer-page-2">
        <div className="footer-page-2-1">
          <div className="footer-icon">
            <i className="fa-brands fa-tiktok"></i>
          </div>
          <div className="footer-icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="footer-icon">
            <i className="fa-brands fa-square-facebook"></i>
          </div>
          <div className="footer-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="footer-page-2-2">Duffee 2024 All Rigth Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
