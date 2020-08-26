import React from 'react';
import { Link } from 'react-router-dom';

const EmailView = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <Link to="mailto:rujuta.sondur@gmail.com?subject=Say%20Hi%20to%20Rujuta!">
        <span>Email</span>
      </Link>
    </div>
  );
};

EmailView.Url = '/email';

export default EmailView;
