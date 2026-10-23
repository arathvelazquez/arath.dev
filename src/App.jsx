import Header from './content/Header';
import Footer from './content/Footer';
import Title from './components/Title';
import Stack from './content/Stack';
import Experience from './content/Experience'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './App.css';

library.add(faLinkedin, faGithub)

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <Title section="about" title="What I Can Do" subtitle="About" />

      <div>
        <div className="m-auto w-10/12">
          <h3 className="uppercase text-2xl font-extrabold mb-3">I develop digital projects</h3>
          <p className="text-sm justify-center mb-3">
            Full stack developer with a bachelor's degree in Computer Science and about 20 years of experience in software, the last 11 focused on web development.
          </p>
          <p className="text-sm justify-center mb-3">
            I'm the founder of Caargo.mx, a SaaS platform for trucking companies in Mexico that I built end to end with Next.js, Node.js, MongoDB and AWS.
          </p>
          <p className="text-sm justify-center mb-3">
            I also work as an AWS backend developer at NBCUniversal, building microservices with Node.js and AWS, and as a partner at MediaHunter, where I build e-commerce platforms. Previously, I was the AWS Tech Lead for Columbia's APIs and microservices.
          </p>
          <Stack />
        </div>
      </div>

      <Title section="experience" title="What I've Done" subtitle="Experience" />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
