let button = document.querySelector("#lightMode")
let button2 = document.querySelector("#darkMode")
let body = document.querySelector("body")

button.addEventListener("click", function(event){
  body.style.backgroundColor = "white"
 body.style.color = "navy"
})

button2.addEventListener("click", function(event){
  body.style.backgroundColor = "black"
 body.style.color = "white"
 
})
