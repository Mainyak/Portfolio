import React, { useEffect } from 'react';
import './App.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { FaJava, FaHtml5, FaPython, FaCss3Alt, FaJsSquare, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import all necessary icons
import joshImage from './josh.jpg'; // Import your profile image
import { Link } from 'react-scroll'; // Import scroll functionality
import shopeeImage from './shopee.png'; // Import Shopee project image
import todoImage from './todo.png'; // Import  Todo project image

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      offset: 120, 
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header" data-aos="fade-down">
      <div className="image-holder">
        <img src={joshImage} alt="Josh" />
      </div>
      <h1 className="joshua">Joshua Remorosa</h1>
      <p>Web Developer | Designer | Tech Enthusiast</p>
      <nav className='nav-links'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        Hello! I'm Joshua Remorosa, an IT student passionate about technology and its endless possibilities.
        I am currently pursuing my degree at the Western Institute of Technology, where I'm diving deep into 
        the world of computer science and information technology.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-container" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skill java" data-aos="zoom-in">
        <p><FaJava /> Java: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div className="skill html" data-aos="zoom-in">
        <p><FaHtml5 /> HTML: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="skill python" data-aos="zoom-in">
        <p><FaPython /> Python: 1 year</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '55%' }}></div>
        </div>
      </div>
      <div className="skill css" data-aos="zoom-in">
        <p><FaCss3Alt /> CSS: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="skill javascript" data-aos="zoom-in">
        <p><FaJsSquare /> JavaScript: 1 year</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '40%' }}></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project" data-aos="flip-left">
          <h3 className="project-title">Techshop</h3>
          <img src={shopeeImage} alt="Shopee Clone Screenshot" className="project-image" />
          <p className="project-description">A Shopee Clone Made Using React And Firebase</p>
          <a href="https://github.com/Mainyak/techshop" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
        <div className="project" data-aos="flip-left">
          <h3 className="project-title">Todo App</h3>
          <img src={todoImage} alt="Todo App Screenshot" className="project-image" />
          <p className="project-description">A Todo App Made using React and MONGODB</p>
          <a href="https://github.com/Mainyak/todo" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>Email: Remorosa.joshuatit2011@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/joshua-remorosa-222363331/" target="_blank" rel="noreferrer">linkedin.com/in/joshua-remorosa</a></p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-offset='0'>
      <p>© 2024 Joshua Remorosa</p>
      <div className="social-links">
        <a href="https://github.com/Mainyak" target="_blank" rel="noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/joshua-remorosa-222363331/" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} /> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default App;
