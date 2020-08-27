import React from 'react';
import PropTypes from 'prop-types';
import './magazine-view.scss';
import collage from './../../../assets/images/magazinepictures/collagecovermockup.jpg';
import content from './../../../assets/images/magazinepictures/contentsmockup.jpg';
import irisapfel from './../../../assets/images/magazinepictures/irisapfelmockup.jpg';
import creative from './../../../assets/images/magazinepictures/creativecrush.jpg';
import homekitchen from './../../../assets/images/magazinepictures/homekitchenmockup.jpg';
import interval from './../../../assets/images/magazinepictures/interviewquestions.jpg';
import burningman from './../../../assets/images/magazinepictures/burningmanmockup.jpg';

const MagImage = ({ image }) => {
  return (
    <div className="mag-image-container">
      <img alt="magazine page" src={image.picture} />
      <p>{image.caption}</p>
    </div>
  );
};

MagImage.propTypes = {
  image: PropTypes.string.isRequired,
};

const MagazineView = () => {
  const images = [
    {
      caption:
        'In keeping with the name Collage, the cover page is a collage of pictures from the articles in the magazine ',
      picture: collage,
    },
    {
      caption:
        'The contents page is designed by showing a collection of pages that give the viewer a preview of the magazine articles',
      picture: content,
    },
    {
      caption:
        'Since we were only allowed to use the pictures from the original article, the pictures of the mannequins have been photoshopped together. The questions and answers have been arranged by using a baseline grid',
      picture: irisapfel,
    },
    {
      caption:
        'This is an attempt at a unique, dynamic way to look at articles',
      picture: creative,
    },
    {
      caption:
        'An eye catching title and a good baseline grid can really help the readability of an article',
      picture: homekitchen,
    },
    {
      caption:
        "From something, that was originally a simple list of questions, this article is putting across it's information in a much more interesting way",
      picture: interval,
    },
    {
      caption:
        'The orange aquare in the center, unites all of the elements on the page, creating a good balance between them',
      picture: burningman,
    },
  ];

  const imagelist = images.map((image) => (
    <MagImage key={image.caption} image={image} />
  ));
  return (
    <div className="magazine-view">
      <p className="magazine-title">
        &quot;Collage&quot; is a magazine I designed, by taking existing
        articles and putting my own spin on how they would look in a magazine
      </p>
      <div className="magazine-wrapper">{imagelist}</div>
    </div>
  );
};

MagazineView.Url = '/collage';

export default MagazineView;
