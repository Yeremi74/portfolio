import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <Link to={'https://github.com/Yeremi74'} target='_blank'>
        <span>GitHub</span>
      </Link>
      <Link to={'https://www.linkedin.com/in/yeremigonzalez7'} target='_blank'>
        <span>LinkedIn</span>
      </Link>
    </footer>
  );
};

export default Footer;
