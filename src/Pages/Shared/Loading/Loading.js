import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{height:'300px'}} className='w-100 justify-content-center align-items-center d-flex'>
        <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;