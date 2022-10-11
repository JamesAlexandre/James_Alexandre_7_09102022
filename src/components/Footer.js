import Logo from "../assets/logo_white.svg";
import FooterCSS from "../style/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
