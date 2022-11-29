import { contentCard } from "../util/loandCards.js";
import loandComponents from "../util/loandComponents.js";

const content = document.createElement("section");
content.classList.add("content__productosAll");

export default (data) => {
  content.innerHTML = cabeceraCard();
  content.innerHTML += loandCards(data);
  loandComponents(content.outerHTML);
};

const cabeceraCard = () => {
  return `
                  <span class="productos__cards-span span">
                      <h2 class="producto__cards-title title">Todos los productos</h2>
                      <button class="card__button button sinfondo" data-id="add">Agregar producto</button>
                  </span>
              `;
};

export const loandCards = (data) => {
  let temp = `<section class="producto__cards">
                ${contentCard(data, "trivi", -1)}
              </section>`;
  return temp;
};
