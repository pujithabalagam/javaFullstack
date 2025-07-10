import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <p>Follow us on:</p>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;