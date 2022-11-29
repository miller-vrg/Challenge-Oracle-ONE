export default () => {
  sessionStorage.setItem("estado","login");
  return `<section class="content__login">
             <h2 class="content__login-title">Iniciar Sesión</h2>
             <input type="email" class="content__login-input input" placeholder="Escriba su correo electronico" required>
             <input type="password" class="content__login-input input" placeholder="Escriba su contraseña" required>
             <button class="content__login-button button" data-id="entrar">Entrar</button>
           </section>`;
};
