import React from 'react';
import './Contenido.scss';
import gym from '../../assets/static/gym.jpg';
import gymMovil from '../../assets/static/fondoMovil.png';

const Contenido = ({ children }) => {
  return (
    <section className='Contenido'>
      <img src={gym} alt='fondo Deporte' className='Contenido__img' />
      <img src={gymMovil} alt='fondo Deporte' className='Contenido__img-movil' />
      {children}
    </section>
  );
};

export default Contenido;
