// Seleccionamos la imagen de la mosca por su id
const fly = document.getElementById("fly");

// Variables para la posición inicial y la velocidad
let posX = Math.random() * (window.innerWidth - fly.offsetWidth);
let posY = Math.random() * (window.innerHeight - fly.offsetHeight);
let velX = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2
let velY = Math.random() * 4 - 2; // Velocidad aleatoria entre -2 y 2

function updateFly() {
  // Actualizamos la posición según la velocidad
  posX += velX;
  posY += velY;
  
  // Definimos los límites de la ventana
  const maxX = window.innerWidth - fly.offsetWidth;
  const maxY = window.innerHeight - fly.offsetHeight;
  
  // Si la mosca llega a un borde, se invierte la dirección en ese eje
  if (posX < 0 || posX > maxX) {
    velX *= -1;
  }
  if (posY < 0 || posY > maxY) {
    velY *= -1;
  }
  
  // Aplicamos la nueva posición a la imagen
  fly.style.left = posX + "px";
  fly.style.top = posY + "px";
  
  // Agregamos una pequeña variación aleatoria a la velocidad para simular el vuelo errático
  velX += Math.random() * 0.4 - 0.2;
  velY += Math.random() * 0.4 - 0.2;
  
  // Limitamos la velocidad para que no sea excesiva
  const maxSpeed = 5;
  velX = Math.max(Math.min(velX, maxSpeed), -maxSpeed);
  velY = Math.max(Math.min(velY, maxSpeed), -maxSpeed);
  
  // Solicitamos el siguiente frame para continuar la animación
  requestAnimationFrame(updateFly);
}

// Iniciamos la animación
updateFly();
