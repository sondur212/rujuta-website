import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './project-content.scss';

const ProjectTitle = ({ title, cardlink, tags }) => {
  const taglist = tags.map((tag, idx) => {
    return (
      <div key={idx} className="tag-new">
        <div className="tag-text">{tag}</div>
      </div>
    );
  });

  return (
    <div className="title-block">
      <div className="project-name">
        <Link className="title-link" to={{ pathname: cardlink }}>
          {title}
        </Link>
      </div>
      <div className="tag-block">{taglist}</div>
    </div>
  );
};

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
  cardlink: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectTitle;
