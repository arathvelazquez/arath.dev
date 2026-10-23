import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

  return (
    <footer id="footer" className="w-full flex h-full bottom-0 text-gray-200 bg-black">
      <div className="m-auto mt-10 mb-10 text-center">
        <span className="font-extrabold uppercase block">
          Arath Velázquez
        </span>
        Full Stack Developer
        <div className="m-auto w-10/12 mt-4 flex justify-around text-xl gap-6">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arathvelazquez/" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/arathvelazquez" aria-label="GitHub"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href="mailto:arathdev@gmail.com" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <a href="mailto:arathdev@gmail.com" className="block mt-3 text-sm hover:text-primary">arathdev@gmail.com</a>
      </div>

    </footer>
  )
}

export default Footer;
