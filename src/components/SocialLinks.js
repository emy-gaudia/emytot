import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/settings/profile">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/zapantaemy.gaudia?mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/gaudiaemy/">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;