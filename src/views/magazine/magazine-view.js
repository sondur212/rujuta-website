import React from 'react';
import PropTypes from 'prop-types';
import './magazine-view.scss';

const MagImage = ({ image }) => {
  const image_path = `assets/images/magazinepictures/${image}`;
  return (
    <div className="mag-image-container">
      <img className="mag-image" alt="magazine page" src={image_path} />
    </div>
  );
};

MagImage.propTypes = {
  image: PropTypes.string.isRequired,
};

const MagazineView = () => {
  const images = [
    'collagecovermockup.jpg',
    'contentsmockup.jpg',
    'irisapfelmockup.jpg',
    'homekitchenmockup.jpg',
    'interviewquestions.jpg',
    'burningmanmockup.jpg',
  ];

  const imagelist = images.map((image, idx) => (
    <MagImage key={idx} image={image} />
  ));
  return (
    <div className="magazine-view">
      <h1 className="magazine-header">Magazine View</h1>

      <div className="magazine-wrapper">{imagelist}</div>
    </div>
  );
};

MagazineView.Url = '/magazine';

export default MagazineView;
