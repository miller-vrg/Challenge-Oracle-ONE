export default () => {
  return `
             <div class="cabecera__logo content-logo">
                <img src="/assets/img/Vector.png" alt="" />
                <img src="/assets/img/Texto.png" alt="AluraGeek"/>
            </div>
            <div class="cabera__content">
                <input type="text" class="cabecera__contet-input input-buscar" placeholder="O que desea encontrar?"/>
                <button class="cabera__content-button button sinfondo" data-id="busqueda">
                    <img src="/assets/img/busqueda.png" alt="Buscar"/>
                </button>
                </div>
            <button class="cabera__content-button button button-login" data-id="login">Login</button>
        `;
};
