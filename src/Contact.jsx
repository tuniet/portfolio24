import './Contact.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div id='Contact' className="section Contact">
        <div className='section-header'>
          <h1>Contact</h1>
          <p>If you are interested in working together, let me know via <a href='mailto:tofeju@gmail.com' target="_blank" rel='noreferrer'>Mail</a> or <a href='https://www.linkedin.com/in/antonio-fern%C3%A1ndez-juan-496ab4254/' rel='noreferrer' target="_blank">Linkedin</a>.</p>
          <p>You can check the code of this portfolio and the rest of my projects through <a href = 'https://github.com/tuniet' target="_blank" rel='noreferrer'>Github</a>.</p>
        </div>
        <div className='icons'>
        <a href='mailto:tofeju@gmail.com' target="_blank" rel='noreferrer' className='icon mail-icon'>
            <FaEnvelope />
        </a>
        <a href='https://www.linkedin.com/in/antonio-fern%C3%A1ndez-juan-496ab4254/' rel='noreferrer' target="_blank" className='icon lkdn-icon'>
            <FaLinkedinIn  />
        </a>
        <a href = 'https://github.com/tuniet' target="_blank" rel='noreferrer'  className='icon gh-icon'>
            <FaGithub />
        </a>
        </div>
    </div>
  );
}

export default Contact; 