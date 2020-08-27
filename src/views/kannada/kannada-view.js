import React from 'react';
import './kannada-view.scss';
import kannadafinal from './../../../assets/images/kannadafinal.jpg';
import kannadamov from './../../../assets/videos/kannada-prototype.mov';

const KannadaView = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="kannada-view-wrapper">
        <img
          className="kannada-image-content"
          alt="learning process for kannada"
          src={kannadafinal}
        />
      </div>
      <div className="kannada-intro-wrap">
        <video loop autoPlay="autoplay" muted>
          <source src={kannadamov} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

KannadaView.Url = '/kannada';

export default KannadaView;
