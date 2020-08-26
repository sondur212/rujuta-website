import React from 'react';
import './kannada-view.scss';
import kannadaWebsite from './../../../assets/images/kannadawebsite3.png';
import ScrollToTop from './../../components/navigation/scroll-top';

const KannadaView = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <ScrollToTop />
      <div className="kannada-view-wrapper">
        <img
          className="kannada-image-content"
          alt="learning process for kannada"
          src={kannadaWebsite}
        />
      </div>
    </div>
  );
};

KannadaView.Url = '/kannada';

export default KannadaView;
