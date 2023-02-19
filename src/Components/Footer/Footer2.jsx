import React from "react";

export default function Footer2() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="container footer-content">
      <div className="row text-center pt-4">
        <nav className="col-md-12 d-flex align-items-center justify-content-between">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                About Us
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Technical Info
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Careers
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Contact
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Disclaimer
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Feedback
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Subscriptions
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                Terms &amp; Conditions
              </a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a className="text-decoration-none text-dark" href="!#">
                CSR Policy
              </a>
            </li>
          </ul>
        </nav>
        <div className="row text-center mt-2">
          <div className="col-md-12">
            <p>
              <small>
                &#169; Eenadu television Pvt. Ltd {currentYear}. All Rights
                Reserved
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
