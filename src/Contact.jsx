import './Contact.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="section Contact">
        <h1 className='section-title'>Contact</h1>
        <div className='icons'>
        <a href='https://www.linkedin.com/in/antonio-fern%C3%A1ndez-juan-496ab4254/' rel='noreferrer' target="_blank" className='icon lkdn-icon'>
            <FaLinkedinIn  />
        </a>
        <a href='mailto:tofeju@gmail.com' target="_blank" rel='noreferrer' className='icon mail-icon'>
            <FaEnvelope />
        </a>
        <a href = 'https://github.com/tuniet' target="_blank" rel='noreferrer'  className='icon gh-icon'>
            <FaGithub />
        </a>
        </div>
    </div>
  );
}

export default Contact;