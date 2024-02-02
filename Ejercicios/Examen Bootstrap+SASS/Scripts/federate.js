const opcionCarnet = document.getElementById("carnet");
const inputClub = document.getElementById("clubFederacion");
const capaCategoria = document.getElementById("categoria");

function carnetSelecionado() {
  const mostrar = !opcionCarnet.checked;
  capaCategoria.style.display = mostrar ? "block" : "none";
  inputClub.style.display = mostrar ? "block" : "none";
}

document.getElementsByName("tipoLicencia").forEach(function (radio) {
  radio.addEventListener("change", carnetSelecionado);
});
