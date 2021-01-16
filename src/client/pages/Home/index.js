/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Card from '../../components/Card';
// import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Project from '../../components/ProjectCard';
import Projects from '../../components/queries/Projects';

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />

        {/* Projects slides */}
        <div className="w-full mt-40 max-w-screen-xl mx-auto px-6  sm:pr-20 sm:pl-20">
          <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">
            Projects we love{' '}
          </h1>
          <div className="border-orange-500 border-l-2 pl-5 pt-5 pb-5 ">
            <p>we are always adventurous and that drive us to build cool product</p>
            <p>We derive joy in making your space your space truly.</p>
          </div>

         
        </div>

         <div className="w-full flex flex-col  pt-24 items-center lg:flex-row lg:h-80 lg:justify-between overflow-x-scroll">
           {/* <Projects /> */}
           <Project />
           <Project />
          </div>

          <div className="w-full flex flex-col  pt-24 items-center lg:flex-row lg:h-80 lg:justify-between overflow-x-scroll">
           {/* <Projects /> */}
           <Project />
           <Project />
          </div>


        {/* Projects slides */}
        <div className="w-full mt-40 max-w-screen-xl mx-auto px-6 pb-24  sm:pr-20 sm:pl-20">
          <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">
            We build awesome stuffs too
          </h1>
          <div className="border-orange-500  border-l-2 pl-5 pt-5 pb-5 ">
            <p>we are always adventurous and that drive us to build cool product</p>
            <p>we are always adventurous and that drive us to build cool product</p>
          </div>

          <div
            className="w-full flex flex-col  pt-24 items-center
        lg:flex-row lg:h-80 lg:justify-between"
          >
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* About section */}
        <div className="w-full flex flex-col bg-gray-200  pt-24 pb-24 items-center sm:flex-row lg:h-80 lg:justify-between">
          <div className="w-full px-10 sm:w-2/3 sm:pl-16 sm:pr-16">
            <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">
              Our Studio
            </h1>
            <img
              className="w-full"
              src="https://res.cloudinary.com/appnet/image/upload/v1571059325/cns/apartment-chair-contemporary-509922.png"
            />
          </div>

          <div className="w-full px-10 sm:w-1/3 pl-5 pr-5">
            <div className="border-orange-500  border-l-2 pl-5 pt-5 pb-5 ">
              <p>
                We are a team young smart people who are commited to frontiering the interior design
                movement in Africa and the world at large.
              </p>
            </div>

            <p className="pt-10 pb-5">
              we are always adventurous and that drive us to build cool product
            </p>

            <form className=" block w-full ">
              <div className="lg:flex lg:items-center">
                <div className="block  w-full md:flex">
                  <input
                    className="font-raleway w-full shadow appearance-none  border border-orange-500 rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="search"
                    type="email"
                    placeholder="exampe@gmail.com"
                  />
                </div>
                <div className="block w-full lg:flex-1 xl:flex-1 xl:pr-10  lg:pr-10 ">
                  <button
                    className="font-raleway block w-full text-center text-sm px-4 py-2 pr-10 pl-10 border-500 rounded-r text-white border border-orange-500 bg-orange-500 hover:border-white mt-4 shadow lg:mt-0"
                    type="submit"
                  >
                    Join
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
