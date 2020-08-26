import React from 'react';
import './expressive-view.scss';
import hicloth from 'assets/images/hi-cloth.png';
import framework1 from './../../../assets/images/expressive-objects/1.jpg';
import framework2 from './../../../assets/images/expressive-objects/2.jpg';
import framework3 from './../../../assets/images/expressive-objects/3.png';

import agitated from './../../../assets/images/expressivecloth/agitated.gif';
import curious from './../../../assets/images/expressivecloth/curious.gif';
import disgust from './../../../assets/images/expressivecloth/disgust.gif';
import embarassed from './../../../assets/images/expressivecloth/embarassed.gif';
import excited from './../../../assets/images/expressivecloth/excited.gif';
import fear from './../../../assets/images/expressivecloth/fear.gif';

import ballemotionsmov from './../../../assets/videos/ball-emotions.mp4';
import beltvideo from './../../../assets/videos/belt-video.mp4';

const ExpressiveView = () => {
  const images = [agitated, curious, disgust, embarassed, excited, fear];

  const imagelist = images.map((image, idx) => (
    <div key={idx} className="gif-container">
      <img alt="Expressive Graph" src={image} />
    </div>
  ));

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
      </div>
      <div className="expressive-framework-block">
        <div className="frame-video-wrap top">
          <video loop autoPlay="autoplay" muted>
            <source src={ballemotionsmov} type="video/mp4" />
          </video>
        </div>
        <p className="videocaptions top">
          We tried representing some emotions with a ball as our object. Since
          it is such a simple object we felt that it would force us to focus
          more on the movement and form.
        </p>
        <div className="frame-video-wrap bottom">
          <video loop autoPlay="autoplay" muted>
            <source src={beltvideo} type="video/mp4" />
          </video>
        </div>
        <p className="videocaptions bottom">
          We also tried to express emotions using a belt as an object, as it
          gave us a different type of form to work with.
        </p>
        <p className="videocaptions framework">
          We tried to narrow down a framework for some basic human emotions and
          tried to identify some parameters of that emotion. These included
          speed, duration, direction and quality of movement
        </p>
        <div className="frame-image-wrap top">
          <img alt="framework Main" src={framework1} />
        </div>
        <div className="frame-image-wrap left">
          <img alt="framework Details" src={framework2} />
        </div>
        <div className="frame-image-wrap right">
          <img alt="framework Graph" src={framework3} />
        </div>
        <p className="videocaptions emotions">
          Finally, I then tried to express different emotions using a cloth as
          my object, using what we had learned so far -
        </p>
        {imagelist}
        <h1>Final Thoughts</h1>
        <p className="videocaptions final">
          We displayed twelve of these animations at an exhibition in the
          Rangoli Metro Station in Bangalore to find out people’s response to
          the animations. We asked them what emotion they were able to recognise
          from the animations and whether they could envision this method of
          communication from objects like Alexa or Google Home in the future.
          There were mixed answers from people about the emotions. Some emotions
          like happy or sad were easy for people to understand, but the more
          nuanced emotions like embarrassment were harder to identify.
        </p>
      </div>
    </div>
  );
};

ExpressiveView.Url = '/expressive';

export default ExpressiveView;
