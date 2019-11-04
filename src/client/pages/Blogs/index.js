import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SampleData = () => {
 return( <Query query={gql `
  query {
    blogs {
      title,
      content
    }
  }
  
  `}>
    {
      ({loading, error, data}) => {
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error </p>
        return data.blogs.map((item, id) => {
          <div key={id}>
             <h4>{item.title}</h4>
             <p>{item.content}</p>
          </div>
        })
      }
    }
  </Query>
  )
}


const Blog = () => {
  return (
    <div className="w-full max-w-screen-xl  mx-auto px-6  sm:pr-20 sm:pl-20">
       
        
       
        <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">Collection of Blog posts</h1>
           <div className="border-orange-500 border-l-2 pl-5 pt-5 pb-5 "> 
           <SampleData></SampleData>
       
              <p>we are always adventurous and that drive us to build cool product</p>
              <p>We derive joy in making your space your space truly.</p>
           </div>

          <div
            className="w-full flex flex-col  pt-24 items-center lg:flex-row lg:h-80 lg:justify-between">

            <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>
        </div>

        <div
            className="w-full flex flex-col  pt-24 items-center lg:flex-row lg:h-80 lg:justify-between">

            <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
