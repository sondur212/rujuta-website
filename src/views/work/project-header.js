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
          <span className="heading-colored">Rujuta Sondur </span>
        </a>
        is a product designer who is exploring new designs and living in Pune.{' '}
        <br />
      </h1>
    </div>
  );
};

export default ProjectHeader;
