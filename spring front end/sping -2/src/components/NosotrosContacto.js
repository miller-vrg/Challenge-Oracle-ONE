export default () => {
  return (`
            <div class="content__descripcion-nosotros">
            <div class="content__descripcion-logo content-logo">
                <img src="/assets/img/Vector.png" alt="" />
                <img src="/assets/img/Texto.png" alt="AluraGeek">
            </div>
            <ul class="content__descripcion-listado">
                <li class="content__descripcion-items">Quienes somos</li>
                <li class="content__descripcion-items">Politica de privacidad</li>
                <li class="content__descripcion-items">Programa de fidelidad</li>
                <li class="content__descripcion-items">Nuestras tiendas</li>
                <li class="content__descripcion-items">Quiero ser franquicia</li>
                <li class="content__descripcion-items">Anuncie aqui</li>
            </ul>
        </div>
        <div class="content__descripcion-contacto">
            <h5 class="content__descripcion-title">Hable con nostros</h5>
            <input type="text" class="content__descripcion-input input" placeholder="Nombre">
            <input type="text" class="content__descripcion-input input" placeholder="Escribe tu mensaje">
            <button class="content__descripcion-button button">Enviar</button>
        </div>
    `);
};
