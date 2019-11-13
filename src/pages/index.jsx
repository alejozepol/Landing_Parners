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
      <h4 className='Pages__cta'>¿Qué esperas? ¡cambia tu estilo de vida!</h4>
      <button>Descubre como </button>
      <button>Escribemos en whatsapp </button>
    </section>
  </Contenido>
);

export default Pages;
