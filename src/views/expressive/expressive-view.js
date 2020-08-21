import React from 'react';
import './expressive-view.scss';

const ExpressiveView = () => {
  return (
    <div className="expressive-view-wrapper">
      <div className="expressive-image-wrapper">
        <h1>An Expressive Cloth</h1>
        <div className="expressive-image-block">
          <img
            className="expressive-image-content"
            alt="Expreessive cloth cover"
            src="assets/images/hi-cloth.png"
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
          <img
            alt="framework Main"
            src="assets/images/expressive-objects/1.jpg"
          />
        </div>
        <div className="frame-image-wrap left">
          <img
            alt="framework Details"
            src="assets/images/expressive-objects/2.jpg"
          />
        </div>
        <div className="frame-image-wrap right">
          <img
            alt="framework Graph"
            src="assets/images/expressive-objects/3.png"
          />
        </div>
        <div className="frame-video-wrap left">
          <video loop autoplay="autoplay" muted>
            <source src="assets/videos/ball-emotions.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="frame-video-wrap right">
          <video loop autoplay="autoplay" muted>
            <source src="assets/videos/belt-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

ExpressiveView.Url = '/expressive';

export default ExpressiveView;
