import React, { useState } from 'react';
import './Contenido.scss';
import bg1 from '../../assets/static/1.jpg';
import bg2 from '../../assets/static/2.jpg';
import bg3 from '../../assets/static/3.jpg';
import bg4 from '../../assets/static/4.jpg';
import bg5 from '../../assets/static/5.jpg';
import bg6 from '../../assets/static/6.jpg';
import bg7 from '../../assets/static/7.jpg';
import bg8 from '../../assets/static/8.jpg';
import gymMovil from '../../assets/static/fondoMovil.png';

const Contenido = ({ children }) => {
  const [bg, setBg] = useState(bg1);

  if (bg == bg1) {
    setTimeout(() => {
      setBg(bg2);
      setTimeout(() => {
        setBg(bg3);
        setTimeout(() => {
          setBg(bg4);
          setTimeout(() => {
            setBg(bg5);
            setTimeout(() => {
              setBg(bg6);
              setTimeout(() => {
                setBg(bg7);
                setTimeout(() => {
                  setBg(bg8);
                  setTimeout(() => {
                    setBg(bg1);
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }
  return (
    <section className='Contenido'>
      <img src={bg} alt='fondo Deporte' className='Contenido__img' />
      <img src={gymMovil} alt='fondo Deporte' className='Contenido__img-movil' />
      {children}
    </section>
  );
};

export default Contenido;
