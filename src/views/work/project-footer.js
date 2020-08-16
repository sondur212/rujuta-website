import React from 'react';
import './project-content.scss';

const ProjectFooter = () => {
  return (
    <div className="project-footer">
      <div className="footer-contacts">
        <div className="contact-div">
          <a href="mailto:rujuta.sondur@gmail.com" className="contact-link">
            <img
              alt="mail logo"
              src="https://uploads-ssl.webflow.com/5bc7e5d38494fc307e9df068/5bd0143b0688092e8b72efd2_Email.png"
              className="contact-img"
              width="40"
            />
          </a>
        </div>
        <div className="contact-div">
          <a
            href="https://www.linkedin.com/in/verajiaweichen/"
            className="contact-link"
          >
            <img
              src="https://uploads-ssl.webflow.com/5bc7e5d38494fc307e9df068/5bd0143bae57fdf7c2c89409_linkedin%20(4).png"
              className="contact-img"
              width="40"
              alt="Linkedin link"
            />
          </a>
        </div>
        <div className="contact-div">
          <a href="https://medium.com/@verajiaweichen" className="contact-link">
            <img
              src="https://uploads-ssl.webflow.com/5bc7e5d38494fc307e9df068/5bd0143bd8a198b32b2ca1d9_Medium.png"
              className="contact-img"
              width="40"
              alt="Medium link"
            />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copyright-text">© 2020 Designed by Rujuta Sondur</div>
      </div>
    </div>
  );
};

export default ProjectFooter;
