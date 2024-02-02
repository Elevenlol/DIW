const datos = [
  {
    fecha: "04 de febrero",
    nombre: "GRAN PREMIO BTT GALLEGOS DE ARGAÑÁN",
    tipo: "BTT",
    ubicacion: "GALLEGOS DE ARGAÑÁN (SALAMANCA)",
  },
  {
    fecha: "04 de febrero",
    nombre: "II TROFEO SIEGA VERDE BTT ESCUELAS",
    tipo: "BTT",
    ubicacion: "VILLAR DE LA YEGUA (SALAMANCA)",
  },
  {
    fecha: "10 de febrero",
    nombre: "XVIII TROFEO JOAQUIN MIGUELAÑEZ",
    tipo: "BTT",
    ubicacion: "CANTIMPALOS (SEGOVIA)",
  },
  {
    fecha: "17 de febrero",
    nombre: "VI BTT STREAMBIKE-CIUDAD DE AVILA",
    tipo: "BTT",
    ubicacion: "AVILA (AVILA)",
  },
  {
    fecha: "18 de febrero",
    nombre: "II TROFEO CIUDAD DE ARENAS BTT XCO",
    tipo: "BTT XCO",
    ubicacion: "ARENAS DE SAN PEDRO (AVILA)",
  },
  {
    fecha: "24 de febrero",
    nombre: "V TROFEO FCO MANCEBO BTT",
    tipo: "BTT",
    ubicacion: "BURGOHONDO (AVILA)",
  },
  {
    fecha: "25 de febrero",
    nombre: "I TROFEO AYTO DE RIOFRIO BTT",
    tipo: "BTT",
    ubicacion: "RIOFRIO (AVILA)",
  },
  {
    fecha: "02 de marzo",
    nombre: "GRAN PREMIO INTERNACIONAL CANDELEDA-GREDOS",
    tipo: "BTT",
    ubicacion: "CANDELEDA (AVILA)",
  },
  {
    fecha: "09 de marzo",
    nombre: "XCO VILLA DE GUIJUELO",
    tipo: "BTT XCO",
    ubicacion: "GUIJUELO (SALAMANCA)",
  },
  {
    fecha: "10 de marzo",
    nombre: "GRAN PREMIO CIUDAD DE VALLADOLID BTT XCO",
    tipo: "BTT XCO",
    ubicacion: "VALLADOLID (VALLADOLID)",
  },
  {
    fecha: "10 de marzo",
    nombre: "I TROFEO AYTO FONTIVEROS-MEMORIAL ESTELA DOMINGUEZ",
    tipo: "BTT",
    ubicacion: "FONTIVEROS (AVILA)",
  },
  {
    fecha: "16 de marzo",
    nombre: "IV XCO BTT BEMBIBRE",
    tipo: "BTT XCO",
    ubicacion: "BEMBIBRE (LEON)",
  },
  {
    fecha: "19 de agosto",
    nombre: "XLIII GRAN PREMIO VILLA DE CERVERA",
    tipo: "BTT",
    ubicacion: "CERVERA DE PISUERGA (PALENCIA)",
  },
  {
    fecha: "23 de septiembre",
    nombre: "I TROFEO VADILLO – CHALLENGE SORIA",
    tipo: "BTT",
    ubicacion: "VADILLO (SORIA)",
  },
  {
    fecha: "23 de septiembre",
    nombre: "I TROFEO TALVEILA CRI – CHALLENGE SORIA",
    tipo: "BTT",
    ubicacion: "TALVEILA (SORIA)",
  },
  {
    fecha: "24 de septiembre",
    nombre: "XI CRITERIUM MOISES DUEÑAS",
    tipo: "BTT",
    ubicacion: "BEJAR (SALAMANCA)",
  },
  {
    fecha: "24 de septiembre",
    nombre: "I TROFEO NAVALENO – CHALLANGE SORIA",
    tipo: "BTT",
    ubicacion: "NAVALENO (SORIA)",
  },
];
if (typeof document != "undefined") {
  let tbody = document.getElementById("tabla-Pruebas");
  datos.forEach(function (item) {
    let fila = document.createElement("tr");
    let fechaCell = document.createElement("td");
    fechaCell.textContent = item.fecha;
    fila.appendChild(fechaCell);
    let nombreCell = document.createElement("td");
    nombreCell.textContent = item.nombre;
    fila.appendChild(nombreCell);
    let tipoCell = document.createElement("td");
    tipoCell.textContent = item.tipo;
    fila.appendChild(tipoCell);
    let ubicacionCell = document.createElement("td");
    ubicacionCell.textContent = item.ubicacion;
    fila.appendChild(ubicacionCell);
    tbody.appendChild(fila);
  });
}
