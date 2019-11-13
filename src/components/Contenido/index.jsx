import React from 'react';
import '../../assets/styles/components/Contenido.scss';
import gym from '../../assets/static/gym.jpg';

const Contenido = ({ children }) => {
  return (
    <section className='Contenido'>
      <img src={gym} alt={gym} className='Contenido__img' />
      {children}
    </section>
  );
};

export default Contenido;
