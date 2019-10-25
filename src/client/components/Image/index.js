import React from 'react';
import Proptypes from 'prop-types';

const Image = ({src, alt, className }) => {
  return (
    <img
       src={src}
       alt={alt}
       className={className} 
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.sttring,
};

export default Image
