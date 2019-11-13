import React from 'react';
import Contenido from '../components/Contenido';
import Logo from '../assets/static/logo.png';
import '../assets/styles/index.scss';

const Pages = () => (
  <Contenido>
    <section className='Pages'>
      <img className='Pages__img' src={Logo} alt='Logo Parners' />
      <h2 className='Pages__title'>¡Entrenemos Juntos!</h2>
      <h3 className='Pages__frase'>Descubre, Conecta, Práctica</h3>
      <h4 className='Pages__cta'>Tu deporte no volverá a ser igual</h4>
      <div className='Pages__btn'>
        <button className='btn btn-blanco-color' type='button'>Descubre como </button>
        <button className='btn btn-whatsapp' type='button'>Contactanos </button>
      </div>
    </section>
  </Contenido>
);

export default Pages;
