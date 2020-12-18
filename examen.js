function ejercicio1(cadena){
    let cad1 = cadena.substring(0, cadena.length/2);
    let cad2 = cadena.substring(cadena.length/2, cadena.length);
    cont1 = 0;
    cont2 = 0;
    for(var i = 0; i < cad1.length; i++) {
        if (cad1[i] == "("){
            cont1++;
        }
    }

    for(var i = 0; i < cad2.length; i++) {
        if (cad2[i] == ")"){
            cont2++;
        }
    }

    if (cont1==cont2){
        return true;
    }
    else{
        return false;
    }

}

function ejercicio2(arrayFechas=[], fechaInicio, fechaFin){
    let fechas=[];
    for (fecha of arrayFechas){
        if (Date.parse(fecha)>Date.parse(fechaInicio) && Date.parse(fecha)<Date.parse(fechaFin)){
            fechas.push(fecha);
        }
    }
    return fechas;
}

/*function ejercicio3(nums=[]){
    if (nums.length < 1) {
        return 0;
    }
    else{
        let arr = nums;
        arr.shift();
        if(arr.length > 0){
            arr[0] = nums[0]*arr[0];
            return nums[0] *= ejercicio3(arr);
        }
        else{
            return nums[0];
        }
        
    }
    
}*/

function ejercicio3(nums = []){
    resultado = 1;
    for(num of nums){
        resultado*=num;
    }
    return resultado;
}

function ejercicio4(filas, columnas, color, dom){
    let tabla = document.createElement("table");
    for (i = 0; i<filas; i++){
        let fila = document.createElement("tr");
        if(i%2!=0){
            fila.style.backgroundColor = color;
        }
        for (j=0; j<columnas; j++){
            let columna = document.createElement("td");
            columna.textContent = "Examen";
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    dom.appendChild(tabla);


    let celdas = document.getElementsByTagName("td");
    for (celda of celdas){
        celda.addEventListener("click", (e)=>
        {
            e.target.textContent = "";
        });
    }
    // almacena en local storage
    localStorage.setItem("tabla", tabla.innerHTML);

//Ajax
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // que hago cuando entra la respuesta
        for (celda of celdas){
            celda.textContent=this.responseText;
        }
       }
        
    }
    xhttp.open("GET", "textoEjercicio4", true);
    xhttp.send();
    
}



function grafico(){
    google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Año', 'Poblacion', { role: 'style' } ],
        ['2017', 14252, 'color: green; opacity: 0.6'],
        ['2018', 23360, 'color: green; opacity: 0.4'],
        ['2019', 40421, 'color:green; opacity: 0.2'],
        ['2020', 43500, 'color: green; opacity: 0.9']
    ]);
  
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);
  
        var options = {
          title: "Evolucion de la población de Navalcarnero",
          width: 700,
          height: 400,
          backgroundColor: "lightblue",
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
          animation:{
            duration: 5000,
            easing: "in",
            startup: true,
            },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
  }
}

window.onload = grafico();