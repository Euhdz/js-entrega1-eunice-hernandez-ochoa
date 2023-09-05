/* Curso de JavaScript en Coderhouse
 Mi proyecto final consistirá en una sección de cotización para el sitio web que hice en el curso de Desarrollo Web de Coderhouse: Workit-out Business Catering
  Workit-out Business Catering ofrecerá a empresas servicios de banquetes y paquetes que incluyen el lugar y/o mobiliario para eventos empresariales. Este sitio se encuentra en: https://workitout-business-catering.netlify.app/
 En ese sitio agregaré una sección en la que incluiré un cotizador de algunos paquetes especiales en Jardín Santa Ursula para que el interesado tengauna idea de en cuánto les costaría su evento y si está dentro del rango de su presupuesto y es de su interés,llenen una solicitud para tener más información.
 El cotizador solicitaría al cliente potencial/usuario que ingrese el número de personas (el cual deberá estar entre 10 y 200), la selección del paquete y tal vez, servicios adicionales, los cuales tendrán un descuento especial al contratar más de 1. 
  Los paquetes son los siguientes:
   Paquete 1. Paquete JSU Básico Plus (este paquete es de barra de coffee-break)
   Paquete 2. Paquete JSU Básico Plus con Desayuno. (Aquí habrán sub-opciones, las cuales iré agregando conforme aprenda más de JavaScript)
   Paquete 3. Paquete JSU Básico Plus con Comida. (Aquí habrán sub-opciones, las cuales iré agregando conforme aprenda más de JavaScript)
   Paquete 4. Paquete JSU Básico Plus con Desayuno y Comida. (Aquí habrán sub-opciones, las cuales iré agregando conforme aprenda más de JavaScript)
 Los servicios adicionales a elegir son los siguientes (Esto lo iré agregando conforme aprenda más de JavaScript):
   Pantalla de 150" y proyector
   Sala lounge. El número de salas lounge podrá ser entre 1 y 4
   Hora extra de evento con coffee break. El número de horas extra podrá ser entre 1 y 4.
*/

let nombreInteresado = prompt("Por favor, ingresa tu nombre");

for (i = 1; i <= 3; i++) {
  if (
    nombreInteresado == "" ||
    nombreInteresado == "." ||
    nombreInteresado == " "
  ) {
    alert("No ingresaste tu nombre, por favor ingresa tu nombre");
    nombreInteresado = prompt("Por favor ingresa tu nombre");
  } else {
  }
}

console.log(nombreInteresado);
