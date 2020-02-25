/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Modal = ({ label, children }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const clickHandler = () => setModalOpened(!modalOpened);
  return (
    <div>
      <button
        type="button"
        className={`inline-block text-sm px-4 py-2 leading-none border rounded-full text-black border-orange-500 focus:border-transparent hover:border-transparent hover:text-white hover:bg-orange-500 mt-4 lg:mt-0"
          ${modalOpened ? 'border-orange-500 font-semibold pb-1 border-b-2' : ''}
          
        `}
        onClick={clickHandler}
      >
        {label}
      </button>

      <div className={modalOpened ? 'modal-container modal-container-active' : 'modal-container'}>
        <div className="modal-header" />
        <div className="modal-body">{children}</div>
        <div className="modal-footer" />
      </div>

      <div
        className={modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'}
        onClick={clickHandler}
      />
    </div>
  );
};

export default Modal;
