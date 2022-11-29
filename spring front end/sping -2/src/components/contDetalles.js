import { loandCards } from "../util/loandCards.js";
import loandComponents from "../util/loandComponents.js";

const section = document.createElement("section");
section.classList.add("content__detalles");
section.innerHTML = "hola";

export default async (data,idTest) => {
    let temp = null;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == idTest) {
        temp = detalles(data[i]);
        temp += loandCards(data, data[i].categoria, idTest);
        i = data.length;
      }
    }

    section.innerHTML = temp;
    loandComponents(section.outerHTML);
};

export const content = async (categoria) => {
    let temp = loandCards(data, categoria, -1);
    section.innerHTML = temp;
    loandComponents(section.outerHTML);
};

export const detalles = ({ id, name, description, link_img, precio }) => {
  return `<div class="content__detalles___card">
          <h2 class="content__title title">
            <button class="card__button button sinfondo" data-id="return"><-</button>
            Detalles</h2>
            <img src=${link_img} class="detalles___card-img" alt="imagen"/>
            <div class="detalles___card-texto">
                <h2 class="detalles___cars-title">${name}</h2>
                <p>${description}</p>
                <p>$ <b>${precio}</b></p>
            </div>
           </div>`;
};
