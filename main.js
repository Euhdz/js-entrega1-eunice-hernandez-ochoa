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

for (i = 1; i <= 2; i++) {
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

let numPersonas = 0;

numPersonas = parseInt(
  prompt(
    "Hola, " +
      nombreInteresado +
      " por favor ingresa el número de personas de tu evento (mínimo 10 y máximo 200 personas"
  )
);

// En el HTML tendría la descripción de cada uno de los paquetes y para este ejercicio les asigno un número a cada uno de ellos para que los seleccionen
//Estos son los precios por persona de los paquetes

const paqCofBrPx = parseInt(180);
const paqDesEmpPx = parseInt(320);
const paqComEmpPx = parseInt(465);
const paqDesComPx = parseInt(605);

const iva = parseFloat(0.16);

let precioPaquete = 0;

let subtotalpaquete = numPersonas * precioPaquete;

let paqueteEspecial = prompt(
  "Ingresa el número del paquete de tu interés: \n 1 - Paquete JSU Básico Plus \n 2 - Paquete JSU Básico Plus con Desayuno \n 3 - Paquete JSU Básico Plus con Comida \n 4 - Paquete JSU Básico Plus con Desayuno y Comida"
);

if (paqueteEspecial != "ESC") {
  switch (paqueteEspecial) {
    case "1":
      alert("Seleccionaste el paquete #1 JSU Básico Plus");
      precioPaquete = paqCofBrPx;
      break;
    case "2":
      alert("Seleccionaste el paquete #2 JSU Básico Plus con Desayuno");
      precioPaquete = paqDesEmpPx;
      break;
    case "3":
      alert("Seleccionaste el paquete #3 JSU Básico Plus con Comida");
      precioPaquete = paqComEmpPx;
      break;
    case "4":
      alert(
        "Seleccionaste el paquete #4 JSU Básico Plus con Desayuno y Comida"
      );
      precioPaquete = paqDesComPx;
      break;
    default:
      alert(
        "No seleccionaste ninguno de nuestros paquetes. Si deseas más información o tienes alguna pregunta o comentario llena nuestro solicitud de cotización"
      );
      break;
  }
}

if (
  (paqueteEspecial == "1" ||
    paqueteEspecial == "2" ||
    paqueteEspecial == "3" ||
    paqueteEspecial == "4") &&
  numPersonas >= 10 &&
  numPersonas <= 200
) {
  subtotalpaquete = precioPaquete * numPersonas;

  console.log(subtotalpaquete);

  calcularIVA = subtotalpaquete * iva;

  console.log(calcularIVA);

  totalpaquete = subtotalpaquete + calcularIVA;

  console.log(totalpaquete);

  alert(
    nombreInteresado +
      ", el costo del paquete que seleccionaste para " +
      numPersonas +
      " personas es el siguiente: \n Subtotal = $ " +
      subtotalpaquete +
      "\n IVA = $ " +
      calcularIVA +
      "\n Total = $ " +
      totalpaquete
  );
  alert(
    "Si quieres contratar este paquete o requieres más información, llena nuestro formulario de contacto / cotización"
  );
} else {
  alert(
    "Lo sentimos, no podemos darte una cotización porque el número de personas ingresado no estaba en el rango establecido o no elegiste una opción válida de paquete."
  );
}
