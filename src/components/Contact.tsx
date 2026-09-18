import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:isarsam2409@gmail.com" data-cursor="disable">
                isarsam2409@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Brookwood High School</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/is4r0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/isar-samnani-70706a407/?isSelfProfile=false"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            > 
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/is4rs0?s=11"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            > 
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/isar_samnani/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Isar Samnani</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
