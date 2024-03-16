import React from "react";
import { LuZap } from "react-icons/lu";
import "./footer.css";
import cfe_text from '../../assets/images/cfe_text.png';

const Footer = () => {
  return (
    <footer class="footer-59391 text-white">
      <div class="border-bottom pb-3 mb-4">
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
            <img src={cfe_text} alt="" srcset=""  className="img-fluid" style={{'width':'20rem'}}/>
          </div>
          <div class="col-lg-6 text-lg-right order-3 order-lg-3">
            <p class="m-0 text-center">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
