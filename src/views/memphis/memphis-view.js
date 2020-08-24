import React from 'react';
import './memphis-view.scss';
import memphisslow from './../../../assets/images/memphis-slow-resized.gif';

const MemphisView = () => {
  return (
    <div className="memphis-view">
      <div className="memphis-header">
        <p>
          <span className="memphis-abstract">Project Abstract: </span>This is an
          animated infograph that we designed to show the history of the
          typeface Memphis.
        </p>
        <p>Team members: Rujuta Sondur and Akriti Sharma</p>
      </div>
      <div className="memphis-gif-wrap">
        <img src={memphisslow} alt="Memphis Typeface" />
      </div>
    </div>
  );
};

MemphisView.Url = '/memphis';

export default MemphisView;
