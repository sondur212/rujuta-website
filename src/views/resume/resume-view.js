import React from 'react';
import './resume-view.scss';

const ResumeView = () => {
  return (
    <div className="resume-view">
      <embed src="assets/Rujuta_Resume.pdf" width="800px" height="1200px" />
    </div>
  );
};

ResumeView.Url = '/resume';

export default ResumeView;
