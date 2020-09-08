import React from 'react';
import { Link } from 'react-router-dom';

import './project-header.scss';

const ProjectHeader = () => {
  return (
    <div className="project-header">
      <h1 className="heading-1 colored">
        <Link className="heading-link" to="/resume">
          <span className="heading-colored">Hi, I&apos;m Rujuta! </span>
        </Link>
        <br />
        Here are some ideas that I have been exploring ... <br />
      </h1>
    </div>
  );
};

export default ProjectHeader;
