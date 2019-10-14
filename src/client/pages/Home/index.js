import React, { Component } from 'react';
import Hero from '../../components/Hero';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="blog section w-full max-w-screen-xl relative mx-auto px-6  sm:pr-20 sm:pl-20">
          <div className="border-gray-800 ">
              <h4>We build awesome stuffs too</h4>
              <p>we are always adventurous and that drive us to build cool product</p>
          </div>
        </div>
      </div>
    )
  }
}
