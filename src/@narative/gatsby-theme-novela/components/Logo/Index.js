import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <div className="Image__Desktop">
  <img
    src="https://i.ibb.co/yfYKYG4/Logo-Makr-1rw-Khq.png"
    height="100px"
    alt="Be Water"
  />
</div>
  
  
  
  );
}