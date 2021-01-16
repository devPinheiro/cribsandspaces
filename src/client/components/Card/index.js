import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ featured_image, title, description, tags, ...rest }) => {
  return (
    <div className="max-w-sm  m-2 rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={
          // featured_image[0].url
          //   ? featured_image[0].url
          //   : 
          'https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg'
        }
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">{description}</p> */}
      </div>
      <div className="px-6 py-4">
        {/* {
              tags.map( tag => {
                return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                )
              })
            } */}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.array,
  image: PropTypes.string,
  rest: PropTypes.any,
};

export default Card;
