/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import Modal from './modal';

export default function ContactForm() {
  return (
    <Modal label="Get In Touch">
      <div className="w-full pt-6 pb-6">
        <h3 className="font-bold">Let's get in touch</h3>
        <p className="text-sm">We are here for your suggestions or just to have a chat</p>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="float-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="mb-6">
            <label
              className="float-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailaddress"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="emailaddress"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="float-left block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailaddress"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="message"
              placeholder="Enter your message"
            />
          </div>
          <div className="float-right items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="w-full px-3 mb-6 md:mb-5">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            type="text"
            placeholder="Full name"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailaddress"
            type="text"
            placeholder="Email Address"
          />

          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            placeholder="Enter your Message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 float-right text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form> */}
    </Modal>
  );
}
