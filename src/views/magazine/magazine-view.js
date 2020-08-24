import React from 'react';
import PropTypes from 'prop-types';
import './magazine-view.scss';
import collage from './../../../assets/images/magazinepictures/collagecovermockup.jpg';
import content from './../../../assets/images/magazinepictures/contentsmockup.jpg';
import irisapfel from './../../../assets/images/magazinepictures/irisapfelmockup.jpg';
import homekitchen from './../../../assets/images/magazinepictures/homekitchenmockup.jpg';
import interval from './../../../assets/images/magazinepictures/interviewquestions.jpg';
import burningman from './../../../assets/images/magazinepictures/burningmanmockup.jpg';

const MagImage = ({ image }) => {
  return (
    <div className="mag-image-container">
      <img className="mag-image" alt="magazine page" src={image} />
    </div>
  );
};

MagImage.propTypes = {
  image: PropTypes.string.isRequired,
};

const MagazineView = () => {
  const images = [
    collage,
    content,
    irisapfel,
    homekitchen,
    interval,
    burningman,
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

MagazineView.Url = '/collage';

export default MagazineView;
