import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, alt, className }) => {
  return (
    <img 
       data-testid="image-component"
       src={src}
       alt={alt}
       className={className} 
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image
