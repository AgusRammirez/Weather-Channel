function cargarCiudad (data){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=230f3d6c3bf8c745810e0411d0127f05&units=metric&lang=es", (ciudad)=>{ 
    console.log(ciudad)
    })
}

var boton = document.querySelector("button")
var input = document.querySelector("input")
var ciudad = input.value

boton.addEventListener("click", function(){
    if(input.value == ""){
        alert("Debe ingresar el nombre de una ciudad")
    }    else {
            ciudad = input.value
            cargarCiudad(ciudad)
            $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=230f3d6c3bf8c745810e0411d0127f05&units=metric&lang=es", function(data) {
                document.querySelector(".container").style.visibility = "visible"
                document.querySelector("#ciudad").textContent = data.name
                document.querySelector("#temperatura").innerHTML = data.main.temp+"<sup>°C</sup>"
                document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png")
                document.querySelector("#descripcion").textContent = data.weather[0].description
                
            }).fail(function() {
                alert("Ciudad no encontrada");
              }) 
            input.value = ""
        }
})