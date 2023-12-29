import React from 'react';
import '../Styles/Card1.css';

const Card1 = () => {
 return (
    <div className="card">
      <div className="card-header">
        <h3>Card Title</h3>
      </div>
      <div className="card-body">
        <div className="card-locations">
          <h5>Place 1</h5>
          <h5>Place 2</h5>
          <h5>Place 3</h5>
          {/* Add more place items as needed */}
        </div>
        <div className="card-view-blogs">
          <h5>View Blogs</h5>
          <p>HH:MM:SS</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="page-marker"></div>
      </div>
    </div>
 );
};

export default Card1;