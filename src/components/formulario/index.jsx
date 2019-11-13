import React from 'react';
import './formulario.scss';

const Formulario = () => {

  return (
    <section className='formulario'>
      <div className='formulario__text'>
        <h3>Tu deporte no volverá a ser igual</h3>
        <p>
					Registrate para estar al tanto de nuestras novedades
        </p>
      </div>
      <form className='formulario__form' action='https://parners.us5.list-manage.com/subscribe/post?u=e3d25671bcaca5e0019e7bd8b&amp;id=b4e4646fc1' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' target='_blank' novalidat>
        <h2>Registrate</h2>
        <input className='formulario__fname input' placeholder='Nombre y Apellido' type='text' name='FNAME' id='mce-FNAME' />
        <input className='formulario__email input' placeholder='Correo electronico' type='email' name='EMAIL' id='mce-EMAIL' />
        <input className='formulario__btn btn btn-blanco-color' type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' type='submit' />
      </form>
    </section>
  );
};

export default Formulario;
