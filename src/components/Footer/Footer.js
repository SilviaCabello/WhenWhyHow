import "../Footer/Footer.css";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-container">
      <h10 className="title-footer">Contact us | Privacy | Security</h10>

      <div className="icons">
        <div className="conection-title">
          <h11>Connect with us</h11>
        </div>
        <a target="_blank" href="https://www.linkedin.com/company/whenwhyhow//">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="icons-footer"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/whenwhyhow_tech"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} className="icons-footer" />
        </a>
      </div>

      <div>
        <p className="footer-rights">
          &copy;{new Date().getFullYear()} WhenWhyHow Corporation | All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
