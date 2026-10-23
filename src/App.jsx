import Header from './content/Header';
import Footer from './content/Footer';
import Title from './components/Title';
import Stack from './content/Stack';
import SubMenu from './components/SubMenu';
import Experience from './content/Experience'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './App.css';

library.add(faLinkedin, faTwitter, faGithub)

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <Title section="about" title="What I Can Do" subtitle="About" />

      <div>
        <div className="m-auto w-10/12">
          <h3 className="uppercase text-2xl font-extrabold mb-3">I develop digital projects</h3>
          <p className="text-sm justify-center mb-3">
            Software developer with bachelor's degree in Computer Science. Strong background in Node.js, MongoDB, AWS infrastructure and FrontEnd technologies. About 12 years of experience in IT area and in last 6 years I have been focused on Web development. Recently, I've been working in Ecommerce projects and mainly creating first class APIs with MEAN stack and AWS infrastructure.
          </p>
          <Stack />    
        </div>
      </div>
      
      <Title section="experience" title="What I've Done" subtitle="Experience" />
      {/* <SubMenu /> */}
      <Experience />
      {/* <Title section="contact" title="Get in Touch" subtitle="Contact" /> */}
      <Footer />
    </div>
  );
}

export default App;
