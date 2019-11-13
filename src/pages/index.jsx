import React, { useState } from 'react';
import Contenido from '../components/Contenido';
import Modal from '../components/modal';
import Formulario from '../components/formulario';
import Logo from '../assets/static/logo.png';
import logoWs from '../assets/static/logoWS.png';
import '../assets/styles/index.scss';

const Pages = () => {
  const [modal, setModal] = useState(false);
  const contenido = {
    title: ['Descubre', 'Conéctate', 'Practica'],
    frase: ['espacios, eventos y actividades', 'con personas, equipos y grupos', 'tu deporte favorito'],
  };

  const [text, setText] = useState({
    title: [contenido.title[0]],
    frase: [contenido.frase[0]],
  });
  const viewModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  if (text.title == contenido.title[0] && !modal) {
    setTimeout(() => {
      setText({
        ...text,
        title: [contenido.title[1]],
        frase: [contenido.frase[1]],
      });
    }, 5000);
  };

  if (text.title == contenido.title[1] && !modal) {
    setTimeout(() => {
      setText({
        ...text,
        title: [contenido.title[2]],
        frase: [contenido.frase[2]],
      });
    }, 5000);
  };

  if (text.title == contenido.title[2] && !modal) {
    setTimeout(() => {
      setText({
        ...text,
        title: [contenido.title[0]],
        frase: [contenido.frase[0]],
      });
    }, 5000);
  }

  return (
    <Contenido>
      <section className='Pages'>
        {modal && (
          <Modal close={() => viewModal()}>
            <Formulario />
          </Modal>
        )}
        <img className='Pages__img' src={Logo} alt='Logo Parners' />
        <div>
          <h2 className='Pages__title words'>{text.title}</h2>
          <h3 className='Pages__frase'>{text.frase}</h3>
        </div>
        <h4 className='Pages__cta'>¡Entrenemos Juntos!</h4>
        <div className='Pages__btn'>
          <button
            className='btn btn-blanco-color'
            type='button'
            onClick={() => viewModal()}
          >
            Descubre como
          </button>
          <button className='btn btn-whatsapp' type='button'>
            <img src={logoWs} alt='LogoWhatsapp' />
            Contactanos
          </button>
        </div>
      </section>
    </Contenido>
  );
};

export default Pages;
