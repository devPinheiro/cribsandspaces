import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classJoin from 'classnames';



const Navbar = () => {
    const [isVisible, changeVisibility] = useState(false);
    const classToggle = classJoin({
        block: isVisible,
        hidden: !isVisible
    });

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white-500 pt-5 z-40 pb-8">
            
            <div className="flex items-center flex-shrink-0 text-dark mr-6">
                <Link to="/">
                    <img className="w-24" src="https://res.cloudinary.com/appnet/image/upload/v1571225682/cns/cribsandspaces_interior_design_logo_small.png" />
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border navToggler rounded text-dark-200 border-dark-500 hover:text-dark hover:border-dark"
                    onClick={() => changeVisibility(!isVisible)}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                id="navLink"
                className={`${classToggle} w-full lg:visible xl:visible lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm text-center m-auto pt-8 lg:pt-1 xl:pt-1">
                    <NavLink
                        className="font-raleway block  md:text-lg lg:text-lg xl:text-lg text-sm lg:mr-8 mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-dark"
                        to="/"
                        exact
                        activeClassName="border-orange-500 font-semibold pb-1 border-b-2"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="font-raleway block   md:text-lg lg:text-lg xl:text-lg lg:mr-8 mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-dark"
                        to="/projects"
                        activeClassName="border-orange-500 font-semibold pb-1 border-b-2"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        className="font-raleway block   md:text-lg lg:text-lg xl:text-lg lg:mr-8 mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-dark"
                        to="/blog"
                        exact
                        activeClassName="border-orange-500 font-semibold pb-1 border-b-2"
                    >
                        Our Blog
                    </NavLink>

                    <div className="font-raleway block   md:text-lg lg:text-lg xl:text-lg lg:mr-8 lg:mt-4 lg:inline-block lg:mt-0 ">
                   <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-black border-orange-500 hover:border-transparent hover:text-white hover:bg-orange-500 mt-4 lg:mt-0">Get in touch</a>
                </div>
                </div>
              
            
            </div>
        </nav>
    );
};

export default Navbar;
