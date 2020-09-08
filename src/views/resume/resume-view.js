import React from 'react';
import { Document, Page } from 'react-pdf';
import './resume-view.scss';
import resume from './../../../assets/images/resumefinal.pdf';

const ResumeView = () => {
  return (
    <div className="resume-view">
      {/* <embed src={resume} width="800px" height="1200px" /> */}
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

ResumeView.Url = '/resume';

export default ResumeView;
