import React from 'react';
import './expressive-view.scss';
import hicloth from 'assets/images/hi-cloth.png';
import expressive1 from './../../../assets/images/expressive-objects/1.jpg';
import expressive2 from './../../../assets/images/expressive-objects/2.jpg';
import expressive3 from './../../../assets/images/expressive-objects/3.png';
import ballemotionsmov from './../../../assets/videos/ball-emotions.mp4';
import beltvideo from './../../../assets/videos/belt-video.mp4';

const ExpressiveView = () => {
  return (
    <div className="expressive-view-wrapper">
      <div className="expressive-image-wrapper">
        <h1>An Expressive Cloth</h1>
        <div className="expressive-image-block">
          <img
            className="expressive-image-content"
            alt="Expreessive cloth cover"
            src={hicloth}
          />
        </div>
      </div>
      <div className="expressive-view-details">
        <p>
          The aim of this project was to be able to express human emotions
          through inanimate objects without relying on more human
          characteristics such as facial expressions.
        </p>
        <p>
          I believe that in the future technology will not be limited to solely
          voice or screen interactions but will also rely on the form of the
          object for communication.
        </p>
        <p>
          We tried to narrow down a framework for some basic human emotions and
          tried to identify some parameters of that emotion
        </p>
      </div>
      <div className="expressive-framework-block">
        <div className="frame-image-wrap top">
          <img alt="framework Main" src={expressive1} />
        </div>
        <div className="frame-image-wrap left">
          <img alt="framework Details" src={expressive2} />
        </div>
        <div className="frame-image-wrap right">
          <img alt="framework Graph" src={expressive3} />
        </div>
        <div className="frame-video-wrap left">
          <video loop autoPlay="autoplay" muted>
            <source src={ballemotionsmov} type="video/mp4" />
          </video>
        </div>
        <div className="frame-video-wrap right">
          <video loop autoPlay="autoplay" muted>
            <source src={beltvideo} type="video/mp4" />
          </video>
        </div>
        <p className="captions left">
          We tried representing some emotions with a ball as our object. Since
          it is such a simple object we felt that it would force us to focus
          more on the movement and form.
        </p>
        <p className="captions right">
          We also tried to express emotions using a belt as an object, as it
          gave us a different type of form to work with.
        </p>
      </div>
    </div>
  );
};

ExpressiveView.Url = '/expressive';

export default ExpressiveView;
