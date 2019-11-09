import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

class Hero extends Component {
  render() {
    return (
         <div className=" hero-bg  ">
             <div className="w-full max-w-screen-xl relative mx-auto px-6   md:px-20">
           <Header />
               <div className="xl:flex lg:flex block mb-4">
                    <div className="block xl:flex-1 lg:flex-1  text-dark  ">
                        <div className="pt-10 xl:pt-24 xl:mt-18 xl:pr-10  lg:pt-24 lg:mt-18 lg:pr-10 ">
                            <h1 className="font-raleway leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">
                            Interior Design Beyond Borders
                            </h1>
                            <h6 className="font-raleway text-base sm:text-lg md:text-xl pt-4 pb-12 text-dark-400 ">
                            Lorem ipsum putem remus lorem this
We turn your space into a wonder
                            </h6>
                            <div className="flex text-center xl:text-left lg:text-left mb-8 ">
                                <Link
                                    to="/projects"
                                    className="font-raleway text-sm md:text-base lg:text-xl xl:text-xl px-4 py-2 pt-3 pb-3  xl:pt-4 xl:pb-4 lg:pt-4 lg:pb-4 pr-10 pl-10 xl:pr-20 xl:pl-20 lg:pr-16 lg:pl-16 md:pr-10 md:pl-10 border-500 rounded text-white border border-orange-500 bg-orange-500 mt-4 shadow-lg"
                                > 
                                    Explore Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" block xl:flex-1 lg:flex-1 pt-8 m-auto  ">
                       
                    </div>
                </div>

                {/* hero tab  */}
                <div className="relative hidden md:show block lg:flex -mb-4  w-md mx-auto md:mr-28 md:ml-28 lg:mr-32 lg:ml-32  xl:mr-40 xl:ml-40  pt-10 pb-10 p-6 bg-white rounded-lg shadow-xl">

                <div
            className="w-full flex flex-col items-center
        lg:flex-row lg:h-80 lg:justify-between"
        >


<div className="block ">
                    <img className="w-10" src="https://res.cloudinary.com/appnet/image/upload/v1571058998/cns/bathtub.png" />
                    <h4>Bath Tubs</h4>
                </div>
                <div className="block ">
                    <img className="w-10" src="https://res.cloudinary.com/appnet/image/upload/v1571058987/cns/desktop.png" />
                    <h4>Bath Tubs</h4>
                </div>
                <div className="block ">
                    <img className="w-10" src="https://res.cloudinary.com/appnet/image/upload/v1571058994/cns/kitchen.png" />
                    <h4>Bath Tubs</h4>
                </div>
                <div className="block ">
                    <img className="w-10" src="https://res.cloudinary.com/appnet/image/upload/v1571058987/cns/decorating.png" />
                    <h4>Bath Tubs</h4>
                </div>
        </div>
                
                </div>


              
                </div>
         </div>
    )
  }
}


export default Hero;