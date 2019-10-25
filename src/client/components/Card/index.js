import React from 'react';
import Proptypes from 'prop-types'
import Image from '../Image';

const Card = ({ image, title, description, tags, ...rest}) => {
  return (

      <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                {description}
              </p>
            </div>
            <div className="px-6 py-4">
            {
              tags.map( tag => {
                return (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                )
              })
            }
              
             
            </div>
            </div>

  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.array,
  image: PropTypes.string,
  rest: Proptypes.any
};

export default Card
