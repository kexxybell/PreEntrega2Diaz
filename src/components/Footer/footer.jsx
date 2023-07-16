import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer id="pie">
      <h2>Redes Sociales</h2>
      <div>
        <a href="https://twitter.com/?lang=es" target="_blank">
          <img src="\src\assets\images\gorjeo.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="\src\assets\images\logotipo-de-instagram.png" alt="instagram" />
        </a>
        <a href="https://es-la.facebook.com/" target="_blank">
          <img src="\src\assets\images\facebook.png" alt="facebook" />
        </a>
        <a href="https://wa.me/542616183835" target="_blank">
          <img src="\src\assets\images\whatsapp.png" alt="whatsapp" />
        </a>
      </div>
      <section>
        <div>
          <h2>Proveedores</h2>
          <a href="https://dynamiccolor.com/" target="_blank">
            <img src="\src\assets\images\PngItem_2440163.png" alt="dynamiccolor" />
          </a>
          <a href="https://chosenarttattoo.com" target="_blank">
            <img src="\src\assets\images\clipart331630.png" alt="Chosenart.com" />
          </a>
          <p>enzodiaz27@gmail.com</p>
          <p>+542616183835</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
