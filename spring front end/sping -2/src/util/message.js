export default async ({title,text,icon}) =>
await Swal.fire({
  title,
  text,
  icon,
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí, continuar!",
  cancelButtonText: 'No, cancelar!',
}).then(async (result) => {
  if (result.isConfirmed) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Acción completada con exito! :).",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Acción cancelada :).",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return !result.isConfirmed;
});