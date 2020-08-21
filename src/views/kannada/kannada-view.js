import React from 'react';
import './kannada-view.scss';

const KannadaView = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="kannada-view-wrapper">
        <img
          className="kannada-image-content"
          alt="learning process for kannada"
          src="assets/images/kannadawebsite3.png"
        />
      </div>
    </div>
  );
};

KannadaView.Url = '/kannada';

export default KannadaView;
