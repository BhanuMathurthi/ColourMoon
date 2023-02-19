import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = React.memo(() => {
  return (
    <>
      <footer className="bg-primary mt-5">
        <div className="container">
          <div className="row text-light d-flex align-items-center justify-content-center justify-content-md-between">
            <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
              <p className="me-2 mb-0">Download App</p>
              <a href="https://example.com">
                <img
                  src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-PNG-Cutout.png"
                  alt="playstore logo"
                  width="100px"
                />
              </a>
              <a href="https://example.com">
                <img
                  src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"
                  alt="Appstore logo"
                  width="160px"
                />
              </a>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
              <p className="me-2 mb-0">Connect with us</p>
              <a href="!#">
                <FaFacebook
                  className="rounded-circle me-2"
                  style={{
                    color: "blue",
                    backgroundColor: "white",
                    fontSize: "28px",
                  }}
                />
              </a>
              <a href="!#">
                <FaTwitter
                  className="rounded-circle p-1 me-2"
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontSize: "28px",
                  }}
                />
              </a>
              <a href="!#">
                <FaInstagram
                  className="rounded-circle p-1 me-2"
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontSize: "28px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;
