import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h4>Our social media</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col">
            <h4>Our contacts</h4>
            <ul className="list-unstyled">
              <li>+996 705342312</li>
              <li>Bishkek, Kyrgyzstan</li>
              <li>119 Street Tabyshalieva</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col">
            <h4>Global Sites</h4>
            <ul className="list-unstyled">
              <li>Canada</li>
              <li>Australia</li>
              <li>Mexico</li>
            </ul>
          </div>
        </div>
        {/* <hr /> */}
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GLOBAL NATURE | All right reserved
            | Terms of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
