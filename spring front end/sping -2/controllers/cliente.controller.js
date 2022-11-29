import contentVerMas from "../src/components/contentVerMas.js";
import Form from "../src/components/Form.js";
import loandComponents from "../src/util/loandComponents.js";
import isNext from "/src/util/message.js";

export const addProductos = async (datos, evento) => {
  evento.preventDefault();
  const temp = {
    title: "Esta seguro de proceder?",
    text: "Los cambios se veran reflejados en la lista de productos!.",
    icon: "question",
  };
  if (!(await isNext(temp))) add(datos);
};

const valueForm = () => {
  return {
    id: "" + Math.floor(Math.random() * 3000) + new Date().getTime(),
    link_img: document.querySelector(".url").value,
    categoria: document.querySelector(".categoria").value,
    name: document.querySelector(".name").value,
    precio: document.querySelector(".precio").value,
    description: document.querySelector(".descripcion").value,
  };
};

const setForm = () => {
  return {
    link_img: document.querySelector(".url"),
    categoria: document.querySelector(".categoria"),
    name: document.querySelector(".name"),
    precio: document.querySelector(".precio"),
    description: document.querySelector(".descripcion"),
  };
};

export const deletProductos = async (datos, idTest, evento) => {
  evento.preventDefault();
  const temp = {
    title: "Esta seguro de proceder?",
    text: "Los cambios no son reversibles!.",
    icon: "warning",
  };
  if (!(await isNext(temp))) delet(datos, idTest);
};

const delet = (datos, idTest) => {
  datos.splice(index(datos, idTest), 1);
  contentVerMas(datos);
  sessionStorage.setItem("datos", JSON.stringify(datos));
};

const add = (datos) => {
  const id = sessionStorage.getItem("id");

  if (id == null) {
    datos.push(valueForm());
    limpiar();
  } else datos.splice(index(datos, id), 1, valueForm());

  sessionStorage.setItem("datos", JSON.stringify(datos));
  sessionStorage.setItem("id", null);
};

const limpiar = () => {
  const form = setForm();
  form.name.value = "";
  form.description.value = "";
  form.link_img.value = "";
  form.precio.value = "";
  form.categoria.value = "";
};

export const editProductos = (datos, idTest, evento) => {
  evento.preventDefault();
  loandComponents(Form());
  console.log(index(datos, idTest));
  const dataTemp = datos[index(datos, idTest)];
  const form = setForm();
  console.log(form);

  form.link_img.value = dataTemp.link_img;
  form.name.value = dataTemp.name;
  form.precio.value = dataTemp.precio;
  form.description.value = dataTemp.description;
  form.categoria.value = dataTemp.categoria;
  sessionStorage.setItem("id", idTest);
};

const index = (datos, idTest) => {
  let index = null;
  const size = datos.length;

  for (let i = 0; i < size; i++) {
    if (datos[i].id == idTest) {
      index = i;
      i = size;
    }
  }
  console.log(index);
  return index;
};

export const busqueda = (datos, name) => {
  let dato = null;
  const size = datos.length;

  for (let i = 0; i < size; i++) {
    if (datos[i].name == name) {
      dato = datos[i];
      i = size;
    }
  }
  return dato;
};
