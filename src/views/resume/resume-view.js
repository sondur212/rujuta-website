import React, { useState, useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';
import { Document, Page } from 'react-pdf';
import './resume-view.scss';
import resume from './../../../assets/images/resumefinal.pdf';

const ResumeView = () => {
  const pageRef = useRef(null);
  const [initialWidth, setInitialWidth] = useState(null);
  const setPdfSize = () => {
    if (pageRef && pageRef.current) {
      setInitialWidth(pageRef.current.getBoundingClientRect().width);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 1000));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 1000));
    };
  }, []);
  const resumeWidth = Math.floor(initialWidth * 0.45);
  return (
    <div ref={pageRef} className="resume-view">
      <Document file={resume}>
        <Page width={resumeWidth} pageNumber={1} />
      </Document>
    </div>
  );
};

ResumeView.Url = '/resume';

export default ResumeView;
