import Header from "../components/Header.js";
import Pie from "../components/Pie.js";
import Section from "../components/NosotrosContacto.js";

const content = document.querySelector(".content");
const section = document.createElement("section");
section.classList.add("content__descripcion", "section");

export default (sectionValue) => {
  content.innerHTML = "";
  const cabecera = document.querySelector(".cabecera");
  const piePagina = document.querySelector(".pie");
  cabecera.innerHTML = Header();
  section.innerHTML = Section();
  piePagina.innerHTML = Pie();
  content.innerHTML = sectionValue + section.outerHTML;
};