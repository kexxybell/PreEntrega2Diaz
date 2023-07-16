import React from 'react';

const CuidadosComponent = () => {
  return (
    <main className="cuidados_main">
      <h1 className="animate__animated animate__backInRight">Cuidados</h1>
      <h2 className="subtitulo">INSTRUCCIONES</h2>
      <p className="texto_cuidados">
        Una vez terminado el tatuaje, el tatuador lo limpiará y lo cubrirá con un plástico.
        Hay dos tipos de plásticos protectores, ¿cuál de ellos es mejor? Cada plástico tiene sus ventajas y tu tatuador utilizará el plástico que más convenga según las condiciones de tu tatuaje.
      </p>
      <div className="listas_cuidados">
        <li>Parche dérmico:</li>
        <p>
          Es un plástico que tiene un adhesivo especialmente formulado para tatuajes y piel, su tecnología permite que se quede en la piel durante varios días.
          Generalmente este tipo de parche se utiliza en tatuajes pequeños y medianos, o en zonas difíciles. Debes dejarlo aproximadamente hasta el día 5.
        </p>
        <li>Plástico film:</li>
        <p>
          Este plástico es ampliamente usado en el proceso de curación de tatuajes desde hace muchos años y con muy buenos resultados.
          Protegerá tu piel las primeras horas, normalmente debes dejarlo puesto entre 4 y 8 horas.
        </p>
      </div>
      <div>
        <img
          className="img_tat"
          src="src\assets\images\pexels-lucas-guimarães-5533992.jpg"
          alt="tatuador"
        />
      </div>
      <h2 className="subtitulo">¿Cómo cuidar mi tatuaje los primeros días?</h2>
      <div className="texto_cuidados">
        <p>
          Una vez sin plástico, (el que sea que hayas tenido), lava la zona con agua y dermolimpiador.
          Hazlo suavemente con las yemas de los dedos, recuerda enjuagar muy bien y usar agua templada o fría (no caliente).
          Evita secar la zona con toalla (guarda muchas bacterias), utiliza en su lugar una toalla desechable.
          Lava tu tatuaje solamente una vez al día, máximo dos y sólo si consideras que la zona esté sucia.
        </p>
        <p>
          Si tu duda es ¿cuánto tiempo debo poner crema a mi tatuaje? la respuesta es simple: durante 10 días.
          Aplica la crema suavemente y en una capa MUY DELGADA, esto evitará que el tatuaje se reseque y ayudará a que cicatrice adecuadamente.
          La piel pasará por un proceso de regeneración hasta llegar a un estado óptimo.
          Esto tomará algunas semanas, pero la piel lucirá restaurada alrededor del día 10.
          Recuerda no rascar tu tatuaje por ningún motivo, es posible que tu tatuaje forme algunas costras delgadas, recuerda también no arrancar las costras, deja que caigan solas.
        </p>
      </div>

      <div className="texto_cuidados">
        <ul>
          <li>
            Evita el sol, el mar, las albercas, el vapor o saunas por al menos 21 días.
          </li>
          <li>No rasques ni arranques las costras.</li>
          <li>
            Algunos tatuajes requieren que suspendas el ejercicio por unos días,
            esto depende principalmente de la extensión y zona de tu tatuaje. Consulta con tu tatuador.
          </li>
          <li>
            Evita dormir sobre tu tatuaje los primeros 3 días, para evitar que se adhiera a las sábanas o ropa;
            si es el caso, despega con cuidado utilizando agua.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default CuidadosComponent;

