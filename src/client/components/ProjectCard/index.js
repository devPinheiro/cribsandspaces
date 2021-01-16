import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project_images, Title, Company_Name, description, ...rest }) => {
  return (
    <div className="w-1/2 h-screen  m-2 rounded mt-10 mb-10 mr-4 ml-4 shadow-lg">
      <img
        className="max-w-sm h-64 "
        src={
          // project_images[0].url
          //   ? project_images[0].url
          //   : 
          'https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg'
        }
        alt="Sunset in the mountains"
      />
      <div className="px-2 py-4">
        {/* <div className="font-bold text-xl mb-2">{Title}</div>

        <p className="text-gray-700 text-base">{Company_Name}</p> */}
      </div>
      <div className="px-6 py-4">

      </div>
    </div>
  );
};

Project.propTypes = {
  Title: PropTypes.string,
  description: PropTypes.string,
  project_images: PropTypes.array,
  Comppany_Name: PropTypes.string,
  rest: PropTypes.any,
};

export default Project;
