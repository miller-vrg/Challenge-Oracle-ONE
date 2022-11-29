import { loandHome } from "../../src/util/loandCards.js";
import loandComponets from "/src/util/loandComponents.js";
import login from "/src/components/contentLogin.js";
import contDetalles from "/src/components/contDetalles.js";
import contentVerMas from "../../src/components/contentVerMas.js";
import form from "../../src/components/Form.js";
import buscar from "/src/components/contentBusqueda.js";

import {
  addProductos,
  deletProductos,
  editProductos,
} from "../../controllers/cliente.controller.js";
// import controllerLogin from "/controllers/controller_login.js";

// loandComponets(login());
const url = "/data/data.json";
const peticion = async () => {
  await axios.get(url).then(({ data }) => {
    sessionStorage.setItem("login", "");
    sessionStorage.setItem("datos", JSON.stringify(data));
    location = "/";
  });
};

if (sessionStorage.getItem("datos") == null) {
  peticion();
}

const data = JSON.parse(sessionStorage.getItem("datos"));
let buttons = document.querySelectorAll(".button");

const loandHo = async () => {
  await loandHome(data);
  buttons = document.querySelectorAll(".button");
  buttonEvent(buttons);
};

loandHo();

//loandComponets(form());
const eventos = {
  add: (data, evento, idparent) => loandComponets(form()),
  todo: (data, evento, idparent) => contentVerMas(data),
  addProduc: (data, evento, idparent) => addProductos(data, evento),
  editar: (data, evento, idparent) => editProductos(data, idparent, evento),
  eliminar: (data, evento, idparent) => deletProductos(data, idparent, evento),
  detalles: (data, evento, idparent) => contDetalles(data, idparent),
  busqueda: (data, evento, idparent) => buscar(data),
  login: (data, evento, idparent) => {
    sessionStorage.setItem("login", true);
    loandComponets(login());
  },
  entrar: async (data, evento, idparent) => inicio(),
  return: (data, evento, idparent) => (location = "/"),
};

const inicio = () => {
  sessionStorage.setItem("login", "ocultar");
  location = "/";
};

const buttonEvent = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", async (evento) => {
      const id = button.dataset.id;
      const idparent = button.parentElement.dataset.id;
      await eventos[id](data, evento, idparent);
      buttons = document.querySelectorAll(".button");
      buttonEvent(buttons);
    });
  });
};
