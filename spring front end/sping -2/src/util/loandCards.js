import loandComponents from "./loandComponents.js";
const productos = document.createElement("section");
productos.classList.add("productos");

const categoriasUni = [];

// export const peticion = async () => await axios.get(url);

export const loandHome = async (datos) => {
  productos.innerHTML = await loandProductos(datos);
 const temp = await promociones() + productos.outerHTML;
  loandComponents(temp);
};

const promociones = () => {
  return `<section class="content__img">
            <div class="content__img-interno">
                <h2 class="content__img___interno-title">Este mes esta lleno de promociones.</h2>
                <p class="content__img___interno-texto">Productos seleccionados con 33% de descuento</p>
                <button class="content__img___interno-button button">Ver Consolas</button>
            </div>
          </section>`;
};

const loandProductos = (datos) => {
  let temp = "";
  datos.forEach((element) => {
    if (categoriasUni.indexOf(element.categoria) < 0) {
      temp += `<section class="producto__cards">
                        ${cabeceraCard(element.categoria)}
                        ${contentCard(datos, element.categoria, -1)}
                </section>`;
      categoriasUni.push(element.categoria);
    }
  });
  return temp;
};

export const loandCards = (datos, categoria, id) => {
  let temp = "";
  datos.forEach((element) => {
    if (categoria == element.categoria) {
      temp = `<section class="producto__cards">
                        ${cabeceraCard(element.categoria)}
                        ${contentCard(datos, element.categoria, id)}
                </section>`;
    }
  });
  return temp;
};

const cabeceraCard = (categoria) => {
  return `
                <span class="productos__cards-span span">
                    <h2 class="producto__cards-title title">${categoria}</h2>
                    <button class="card__button button sinfondo" data-id="todo">Ver todo -></button>
                </span>
            `;
};

export const contentCard = (datos, categoria, id) => {
  return `<div class="producto__cards-content">
                ${loandCard(datos, categoria, id)}
                </div>`;
};

const loandCard = (datos, comprovacion, idTest) => {
  let temp = "";
  datos.forEach(({ id, name, categoria, link_img, precio }) => {
    if (comprovacion == categoria && id != idTest) {
      temp += `<div class="cards-content-card" data-id="${id}">
                        <img class="card__img" src="${link_img}" alt="Producto">
                        <h5 class="card__title">${name}</h5>
                        <p>$${precio}</p>
                        <button class="card__button button sinfondo" data-id="detalles">Ver producto</button>
                </div>`;
    } else if (comprovacion == "trivi") {
      temp += `<div class="cards-content-card" data-id="${id}">
                        <span class="span" data-id="${id}">
                        <button class="card__span-button button sinfondo" data-id="eliminar">
                        <i class="fi fi-sr-trash"></i>
                        </button>
                        <button class="card__span-button button sinfondo" data-id="editar">
                        <i class="fi fi-sr-edit"></i>
                        </button>
                        </span>
                        <img class="card__img" src="${link_img}" alt="Producto">
                        <h5 class="card__title">${name}</h5>
                        <p>$${precio}</p>
                        <button class="card__button button sinfondo" data-id="detalles">Ver producto</button>
                </div>`;
    }
  });
  return temp;
};
