import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './project-content.scss';

const ProjectCard = ({
  place,
  card: { image, title, details, cardlink /*, tags*/ },
}) => {
  const image_path = `assets/images/${image}`;
  return (
    <div className="project__card">
      <div className={classnames('project__main', place)}>
        <div className="card__image-container">
          <Link className="page-link" to={{ pathname: cardlink }}>
            <img className="card__image" alt="project desc" src={image_path} />
          </Link>
        </div>
        {/* <ProjectTitle title={title} tags={tags} cardlink={cardlink} /> */}
      </div>
      <div className={classnames('project__info', place)}>
        <div className={classnames('project__annotation', place)}>{title}</div>
        <div className={classnames('project__details', place)}>{details}</div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  place: PropTypes.string.isRequired,
  card: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    cardlink: PropTypes.string,
    anno: PropTypes.string,
    details: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
