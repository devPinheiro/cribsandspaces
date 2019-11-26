import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mx-auto px-6  sm:pr-20 sm:pl-20 pt-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row ">
                <div className="w-full sm:w-1/3 text-center sm:text-left pt-8">
                    <h6 className="font-raleway font-bold text-base pb-5">
                        Links
                    </h6>

                    <div className="leading-tight pb-3">
                        <Link className="font-raleway text-sm " to="/books">
                            Projects
                        </Link>
                    </div>
                    <div className="leading-tight pb-3">
                        <Link className="font-raleway text-sm " to="/">
                            
                        </Link>
                    </div>
                </div>

                <div className="w-full sm:w-1/3 text-center sm:text-left pt-8 xl:pl-20">
                    <h6 className="font-raleway font-bold text-base pb-5">
                        Connect with us
                    </h6>

                    <div className="leading-tight pb-3">
                        <Link className="font-raleway text-sm " to="/">
                            Twitter
                        </Link>
                    </div>
                    <div className="leading-tight pb-3">
                        <Link className="font-raleway text-sm " to="/">
                            Facebook
                        </Link>
                    </div>
                    <div className="leading-tight pb-3">
                        <Link className="font-raleway text-sm " to="/">
                            Instagram
                        </Link>
                    </div>
                </div>

                <div className="w-full sm:w-1/3 text-center sm:text-left  pt-8 xl:pl-20">
                    <h6 className="font-raleway font-bold text-base pb-5">
                        Our Locations
                    </h6>
                    <div className="leading-tight pb-3">
                        <p className="font-raleway text-sm ">HQ - Internet</p>
                    </div>
                    <div className="leading-tight pb-3">
                        <p className="font-raleway text-sm pr-8">
                            234 Block 2a Maryland Mall
                            <br /> Maryland, Lagos Nigeria
                        </p>
                    </div>
                </div>
            </div>

            <p className="pt-10 pb-5 text-center font-raleway text-xs font-light">
                {' '}
                @ Copyright 2019
            </p>
        </div>
    );
};

export default Footer;

