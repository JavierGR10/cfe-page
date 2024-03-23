import React from "react";
import { LuZap } from "react-icons/lu";
import "./footer.css";
import cfe_text from '../../assets/images/cfe_text.png';

const Footer = () => {
  return (
    <footer className="footer-59391 text-white">
      <div className="border-bottom pb-3 mb-4">
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
            <img src={cfe_text} alt="cfe_img" className="img-fluid" style={{'width':'20rem'}}/>
          </div>
          <div className="col-lg-6 text-lg-right order-3 order-lg-3">
            <p className="m-0 text-center">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
