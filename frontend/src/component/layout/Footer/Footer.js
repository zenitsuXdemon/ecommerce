import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>MY SHOP</h1>
        <p>Get branded products at cheaper price</p>

        <p>Copyrights 2022 &copy; Shubham Kr and Abhinay Paul</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="<Button>Contact: shubhamkumar200101@gmail.com</Button>">Instagram</a>
        <a href="<Button>Contact: shubhamkumar200101@gmail.com</Button>">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
