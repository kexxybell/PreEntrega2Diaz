import React from 'react';

const Galeria = () => {
  return (
    <main className="galeria">
      <h2 className="animate__animated animate__backInRight">Diseños Disponibles</h2>
      <section className="galeria_disponibles">
        <div>
          <img src="src\assets\images\1.png" alt="tattood1" />
        </div>
        <div>
          <img src="src\assets\images\2.png" alt="tattood2" />
        </div>
        <div>
          <img src="src\assets\images\3.png" alt="tattood3" />
        </div>
        <div>
          <img src="src\assets\images\4.png" alt="tattood4" />
        </div>
        <div>
          <img src="src\assets\images\5.png" alt="tattood5" />
        </div>
      </section>

      <h2 className="animate__animated animate__backInRight">Trabajos Realizados</h2>
      <section className="galeria_disponibles">
        <div>
          <img src="src\assets\images\11.png" alt="tattoo1" />
        </div>
        <div>
          <img src="src\assets\images\22.png" alt="tattoo2" />
        </div>
        <div>
          <img src="src\assets\images\33.png" alt="tattoo3" />
        </div>
        <div>
          <img src="src\assets\images\44.png" alt="tattoo4" />
        </div>
        <div>
          <img src="src\assets\images\55.png" alt="tattoo5" />
        </div>
      </section>
    </main>
  );
};

export default Galeria;
