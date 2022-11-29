import { busqueda } from "../../controllers/cliente.controller.js";
import loandComponents from "../util/loandComponents.js";
import { detalles } from "./contDetalles.js";

const content = document.createElement("section");
content.classList.add("content__productosAll");

export default async (data) => {
  const value = document.querySelector(".input-buscar").value;
  const dataTemp = await busqueda(data, value);

  if (dataTemp == null) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Producto no enontrado :).",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    content.innerHTML = detalles(dataTemp);
    loandComponents(content.outerHTML);
  }
};