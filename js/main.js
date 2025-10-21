// ======== IF / ELSE ========
function ejemploIf() {
  let numero = parseFloat(prompt("Ingresa un número:"));
  if (isNaN(numero)) {
    alert("No ingresaste un número válido.");
  } else if (numero > 0) {
    alert("El número es positivo.");
  } else if (numero < 0) {
    alert("El número es negativo.");
  } else {
    alert("El número es cero.");
  }
}

// ======== SWITCH ========
function ejemploSwitch() {
  let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));
  switch (dia) {
    case 1:
      alert("Lunes");
      break;
    case 2:
      alert("Martes");
      break;
    case 3:
      alert("Miércoles");
      break;
    case 4:
      alert("Jueves");
      break;
    case 5:
      alert("Viernes");
      break;
    case 6:
      alert("Sábado");
      break;
    case 7:
      alert("Domingo");
      break;
    default:
      alert("Número inválido. Debe ser del 1 al 7.");
  }
}

// ======== FOR ========
function ejemploFor() {
  console.clear();
  for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
  }
  alert("Se mostraron los números 1 al 5 en la consola (F12 → Consola).");
}

// ======== WHILE ========
function ejemploWhile() {
  console.clear();
  let i = 1;
  while (i <= 5) {
    console.log("Contador: " + i);
    i++;
  }
  alert("Se mostraron números con while (ver consola).");
}

// ======== DO...WHILE ========
function ejemploDoWhile() {
  console.clear();
  let i = 1;
  do {
    console.log("Número: " + i);
    i++;
  } while (i <= 5);
  alert("Se mostraron números con do...while (ver consola).");
}

// ======== TRY / CATCH / FINALLY ========
function ejemploTryCatch() {
  try {
    let resultado = noExiste + 10; // Esto generará un error
  } catch (error) {
    alert("Ocurrió un error: " + error.message);
  } finally {
    alert("Bloque finally ejecutado (ocurra o no error).");
  }
}

// ======== PROMPT / ALERT / CONFIRM ========
function ejemploPromptAlertConfirm() {
  let nombre = prompt("¿Cuál es tu nombre?");
  if (!nombre) {
    alert("No ingresaste un nombre.");
    return;
  }

  let confirmar = confirm("¿Deseas recibir un saludo?");
  if (confirmar) {
    alert("¡Hola, " + nombre + "! 😊");
  } else {
    alert("Operación cancelada 😢");
  }
}
