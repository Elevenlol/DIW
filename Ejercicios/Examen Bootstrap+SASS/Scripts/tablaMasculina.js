var datos =[
    {fecha: "7 de abril" , nombre: "Marcha las hoces", tipo: "Carretera", ubicacion: "Vegacervera (León)"},
    {fecha: "20 de abril" , nombre: "Ebro Gold Race", tipo: "Carretera" , ubicacion: "Miranda de Ebro (Burgos)" },
    {fecha: "27 de abril" , nombre: "Marcha Bajo tietar -Gredos sur", tipo: "BTT" , ubicacion: "Mombeltrán (Ávila)" },
    {fecha:"25 de mayo" , nombre:"La Icuesta", tipo: "Carretera" , ubicacion:"Espinosa de los monteros" },
    {fecha:"26 de mayo" , nombre:"Marcha El Terrible", tipo: "carretera" , ubicacion: "Toro (Zamora)" },
    {fecha:"23 de junio" , nombre: "Memorial Alberto Fernández", tipo: "Carretera" , ubicacion: "Aguilar de Campoo (Palencia)" },
    {fecha:"06 de julio" , nombre:"Espinosa paraiso ciclista", tipo: "Carretera" , ubicacion:"Espinosa de los monteros (Burgos)" },
    {fecha:"14 de julio" , nombre:"Ciclo ruta Lagunas de Neila", tipo:"Carretera" , ubicacion:"Quintanar de la Sierra" },
    {fecha:"11 de agosto" , nombre:"Marcha Pedro Delgado", tipo:"Carretera" , ubicacion:"Segovia" },
    {fecha:"22 de septiembre" , nombre:"II Vuelta a Segovia Gravel", tipo: "Gravel" , ubicacion:"Segovia" },
]
if(typeof document != 'undefined'){
    var tbody = document.getElementById("tabla-Pruebas");
    datos.forEach(function (item){
        var fila= document.createElement('tr');
        var fechaCell= document.createElement('td');
        fechaCell.textContent = item.fecha;
        fila.appendChild(fechaCell);
        var nombreCell=document.createElement('td');
        nombreCell.textContent = item.nombre;
        fila.appendChild(nombreCell);
        var tipoCell=document.createElement('td');
        tipoCell.textContent=item.tipo;
        fila.appendChild(tipoCell);
        var ubicacionCell=document.createElement('td');
        ubicacionCell.textContent=item.ubicacion;
        fila.appendChild(ubicacionCell);

        tbody.appendChild(fila);

    })
}
