import React from 'react';
import './arya-view.scss';

const AryaView = () => {
  return (
    <div className="arya-view">
      <div className="arya-image-wrap">
        <img src="assets/images/aryawebsiteedited.svg" alt="Arya Page 1" />
      </div>
      <div className="arya-video-wrap">
        <video loop autoPlay="autoplay" muted>
          <source
            src="assets/videos/arya-course-signups.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="arya-image-wrap">
        <img src="assets/images/aryawebsite2.svg" alt="Arya Page 2" />
      </div>
    </div>
  );
};

AryaView.Url = '/arya';

export default AryaView;
