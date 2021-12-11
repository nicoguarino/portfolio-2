import React from 'react';
import PhotoList from '../PhotoList/photoList.js';

function Portfolio() {
  
  return (
    <section>
      <h1 data-testid="h1tag">Portfolio</h1>
      <p>Class Assignments and Projects</p>
      <PhotoList />
    </section>
  );
}
export default Portfolio;