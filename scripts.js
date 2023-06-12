let formularioTickets = document.getElementById("formulario");

formularioTickets.addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let cantidad = document.getElementById("cantidad").value;
  let categoria = document.getElementById("categoria").value;
  let totalAPagar = document.getElementById("totalAPagar");
  let total = 0;

  let precioUnitario;

  if (categoria == "estudiante") {
    precioUnitario = 200 * 0.2; // 80% desc
  } else if (categoria == "trainee") {
    precioUnitario = 200 * 0.5; // 50% desc
  } else if (categoria == "junior") {
    precioUnitario = 200 * 0.85; // 15% desc
  } else if (categoria == "general") {
    precioUnitario = 200; // general
  }

  total = precioUnitario * cantidad;

  totalAPagar.value = `$${total}`;
});
