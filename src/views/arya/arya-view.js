import React from 'react';
import './arya-view.scss';
import aryapage1 from './../../../assets/images/aryafinal1.jpg';
import aryapage2 from './../../../assets/images/aryafinal2.jpg';
import aryamov from './../../../assets/videos/arya-prototype.mov';

const AryaView = () => {
  return (
    <div className="arya-view">
      <div className="arya-image-wrap">
        <img src={aryapage1} alt="Arya Page 1" />
      </div>
      <div className="arya-video-wrap">
        <video loop autoPlay="autoplay" muted>
          <source src={aryamov} type="video/mp4" />
        </video>
      </div>
      <div className="arya-image-wrap">
        <img src={aryapage2} alt="Arya Page 2" />
      </div>
    </div>
  );
};

AryaView.Url = '/arya';

export default AryaView;
