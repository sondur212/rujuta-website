import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './project-content.scss';

const ProjectCard = ({
  place,
  card: { image, title, details, cardlink, tags },
}) => {
  const taglist = tags.map((tag, idx, arr) => {
    return (
      <span key={idx} className="tag-name">
        {tag}
        {idx != arr.length - 1 ? <span className="tag-name">, </span> : null}
      </span>
    );
  });

  return (
    <div className="project__card">
      <div className={classnames('project__main', place)}>
        <div className="card__image-container">
          <Link className="page-link" to={{ pathname: cardlink }}>
            <img className="card__image" alt="project desc" src={image} />
          </Link>
        </div>
        {/* <ProjectTitle title={title} tags={tags} cardlink={cardlink} /> */}
      </div>
      <div className={classnames('project__info', place)}>
        <div className={classnames('project__annotation', place)}>{title}</div>
        <p className={classnames('project__details', place)}>{details}</p>
        <div className={classnames('project-tags', place)}>{taglist}</div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  place: PropTypes.string.isRequired,
  card: PropTypes.shape({
    image: PropTypes.object,
    title: PropTypes.string,
    cardlink: PropTypes.string,
    anno: PropTypes.string,
    details: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
