import React from 'react';
import './resume-view.scss';
import resume from 'assets/Rujuta_Resume.pdf';

const ResumeView = () => {
  return (
    <div className="resume-view">
      <embed src={resume} width="800px" height="1200px" />
    </div>
  );
};

ResumeView.Url = '/resume';

export default ResumeView;
