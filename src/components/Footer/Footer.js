import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-container">
      <p className="title-footer">Contact us | Privacy | Security</p>

      <div className="icons">
        <div className="conection-title">
          <p>Connect with us</p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/whenwhyhow//">

          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="icons-footer"
          />
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://twitter.com/whenwhyhow_tech"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} className="icons-footer" />
        </a>
      </div>

      <div>
        <p className="footer-rights">
          &copy;{new Date().getFullYear()} WhenWhyHow Corporation | All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
