# 📌 Mini Entrega 3 – María Verónica Rebolleda

# 📨 Formulario de Contacto con Prompts y Alerts

Este proyecto muestra cómo simular un formulario de contacto usando **JavaScript puro** con `prompt` y `alert`, ideal para practicar validaciones y lógica básica sin necesidad de HTML avanzado.

---

## 🌐 Vista de la Página de Contacto

Además, el proyecto incluye un **ejemplo visual de una página de contacto** realizada con [Bootstrap](https://getbootstrap.com/), para que puedas ver cómo se estructura un formulario moderno y responsivo en HTML y CSS.

<p align="center">
  <img src="https://github.com/user-attachments/assets/28608daf-1c3a-4301-8787-161963bbf764"/>
</p>


---

## 🚀 ¿Cómo funciona la versión con prompts?

1. **Ingreso de datos:**  
   Al ejecutar el script, se abrirán ventanas emergentes (`prompt`) solicitando tu nombre, email y mensaje.

   <details>
     <summary>Ver ejemplo de prompts</summary>
     <ul>
       <li><b>Prompt de nombre:</b> <code>Ingresa tu nombre:</code></li>
       <li><b>Prompt de email:</b> <code>Ingresa tu email:</code></li>
       <li><b>Prompt de mensaje:</b> <code>Ahora ingresa tu mensaje:</code></li>
     </ul>
   </details>

2. **Validación:**  
   El script valida que:
   - Ningún campo esté vacío.
   - El email contenga `@` y `.`

   Si hay un error, se muestra un mensaje con `alert` (ventana emergente).

3. **Éxito:**  
   Si todo es correcto, verás una alerta de éxito.

---

## 👨‍💻 Código principal

```javascript
const nombre = prompt("Ingresa tu nombre: ");
const email = prompt("Ingresa tu email: ");
const mensaje = prompt("Ahora ingresa tu mensaje: ");

console.log("Nombre:", nombre);
console.log("Email:", email);
console.log("Mensaje:", mensaje);

if (nombre === "") {
  alert("Por favor ingresa tu nombre");
} else if (email === "") {
  alert("Por favor ingresa tu correo electrónico");
} else if (!email.includes("@") || !email.includes(".")) {
  alert("Por favor ingresa un correo válido");
} else if (mensaje === "") {
  alert("Por favor ingresa tu mensaje");
} else {
  alert("Formulario enviado con éxito!");
}
```

---

## 🛠️ ¿Cómo probarlo?

1. Clona este repositorio.
2. Abre el archivo `contacto.html` para ver el formulario visual con Bootstrap.
3. Ejecuta el archivo `scripts.js` en tu navegador o usa una extensión como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para probar la versión con prompts y alerts.
4. Observa las ventanas emergentes y sigue las instrucciones.

---

## 📋 Notas

- Este ejemplo es para fines educativos del curso de Frontend Ingenias YPF.
- Puedes ver los datos ingresados en la consola del navegador (`F12` > Consola).

---

¡JavaScript y Bootstrap! 🚀
