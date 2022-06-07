import "./style.css";
import logoIcon from "../../assets/icons/logo.svg";
import whatsappIcon from "../../assets/images/whatsapp.png";
import instagramIcon from "../../assets/images/instagram.png";
import emailIcon from "../../assets/images/email.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>El Geladon 2022 ®</p>
      <img alt="Logo El Geladon" src={logoIcon} />
      <div>
        <img alt="Logo Email" src={emailIcon} />
        <img alt="Logo Whatsapp" src={whatsappIcon} />
        <img alt="Logo Instagram" src={instagramIcon} />
      </div>
    </div>
  );
};

export default Footer;
