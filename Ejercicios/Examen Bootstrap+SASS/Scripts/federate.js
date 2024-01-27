let opcionCarnet = document.getElementById("carnet");
let inputClub = document.getElementById("clubFederacion");
var capaCategoría = document.getElementById("categoria");

document.getElementsByName("tipoLicencia").forEach(function (radio) {
  radio.addEventListener("change", function () {
    if (!opcionCarnet.checked) {
      capaCategoría.style.display = "block";
      inputClub.style.display = "block";
    } else {
      capaCategoría.style.display = "none";
      inputClub.style.display = "none";
    }
  });
});
