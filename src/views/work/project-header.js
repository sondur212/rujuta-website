import React from 'react';

import './project-header.scss';

const ProjectHeader = () => {
  return (
    <div className="project-header">
      <h1 className="heading-1 colored">
        <a
          href="assets/Rujuta_Resume.pdf"
          target="_blank"
          className="heading-link"
        >
          <span className="heading-colored">Hi, I&apos;m Rujuta! </span>
        </a>
        <br />
        Here are some ideas that I have been exploring ... <br />
      </h1>
    </div>
  );
};

export default ProjectHeader;
