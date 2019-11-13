import React from 'react';
import './modal.scss';

const Modal = ({ children }) => (
  <section className='Modal'>
    <div className='Modal__content'>
      {children}
    </div>
  </section>
);

export default Modal;