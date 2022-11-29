export default () => {
  return `<h2 class="content__title title">
            <button class="card__button button sinfondo" data-id="return"><-</button>
            Agregar nuevo producto</h2>
            <form action="" class="content__form">
                <div class="content__form___box-inputs box">
                    <input id="url" type="text" class="box-inputs__inputs input url" placeholder="URl de la imagen" required>
                    <label for="url" class="box-inputs__label">URl de la imagen</label>
                </div>
                <div class="content__form___box-inputs">
                    <input type="text" class="box-inputs__inputs input categoria" placeholder="Categoria" required>
                    <label class="box-inputs__label">Categoria</label>
                </div>
                <div class="content__form___box-inputs">
                    <input type="text" class="box-inputs__inputs input name" placeholder="Nombre producto" required>
                    <label class="box-inputs__label">Nombre producto</label>
                </div>
                <div class="content__form___box-inputs">
                    <input type="text" class="box-inputs__inputs input precio" placeholder="Precio producto" required>
                    <label class="box-inputs__label">Precio producto</label>
                </div>
                <div class="content__form___box-inputs">
                    <input type="text" class="box-inputs__inputs input descripcion" placeholder="Descripción del producto">
                    <label class="box-inputs__label">Descripción del producto</label>
                </div>
                <input type="submit" class="content__from-button button" value="Agregar producto" data-id="addProduc">
            </form>`;
};
