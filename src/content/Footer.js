import { Button } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  
  return (
    <footer id="footer" className="w-full flex h-full bottom-0 text-gray-200 bg-black">
      <div className="m-auto mt-10 mb-10 text-center">
        <span className="font-extrabold uppercase block">
          Arath Fabricio
        </span>
        Web Developer
        {/* <Button /> */}
        <div className="m-auto w-10/12 mt-4 flex justify-around text-xl">
          <a target="tab" href="https://www.linkedin.com/in/arathvelazquez/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a target="tab" href="https://www.twitter.com/arathvelazquez"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a target="tab" href="https://github.com/arathvelazquez"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;