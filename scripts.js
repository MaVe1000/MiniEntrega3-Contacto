// FORMULARIO CONTACTO:
// Obtener los valores de los campos por medio de prompts
const nombre = prompt("Ingresa tu nombre: ");
const email = prompt("Ingresa tu email: ");
const mensaje = prompt("Ahora ingresa tu mensaje: ");

console.log("Nombre:", nombre);
console.log("Email:", email);
console.log("Mensaje:", mensaje);
// Validación por condicionales:
if (nombre === "") {
  alert("Por favor ingresa tu nombre");
} else if (email === "") {
  alert("Por favor ingresa tu correo electrónico");
} else if (!email.includes("@") || !email.includes(".")) {
  alert("Por favor ingresa un correo válido");
} else if (mensaje === "") {
  alert("Por favor ingresa tu mensaje");
} else {
  // Si pasó todas las validaciones:
  alert("Formulario enviado con éxito!");
  form.reset(); // Limpiar los campos una vez finalizado el proceso.
}
