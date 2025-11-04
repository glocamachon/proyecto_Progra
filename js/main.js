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


function avisarMissing(id) {
  alert(`⚠️ No se encontró el elemento con el selector o id: "${id}"`);
}

/* 1. textContent */
function ejemploTextContent() {
  const el = document.getElementById("demoTextContent");
  if (!el) return avisarMissing("demoTextContent");
  el.textContent = "Texto nuevo sin formato (modificado con textContent).";
}

/* 2. innerHTML */
function ejemploInnerHTML() {
  const el = document.getElementById("demoInnerHTML");
  if (!el) return avisarMissing("demoInnerHTML");
  el.innerHTML = '<strong>Reemplazado con <em>innerHTML</em></strong>';
}

/* 3. outerHTML */
function ejemploOuterHTML() {
  const el = document.getElementById("demoOuterHTML");
  if (!el) return avisarMissing("demoOuterHTML");
  // Nota: outerHTML reemplaza TODO el elemento, así que no podemos referirnos más a `el` después
  el.outerHTML = '<div id="demoOuterHTML" class="dom-demo"><h4>Reemplazado por outerHTML</h4></div>';
}

/* 4. innerText */
function ejemploInnerText() {
  const el = document.getElementById("demoInnerText");
  if (!el) return avisarMissing("demoInnerText");
  // innerText devuelve el texto visible (sin elementos ocultos por CSS)
  console.log("#demoInnerText innerText:", el.innerText);
  alert("Revisa la consola para ver innerText del elemento.");
}

/* 5. insertAdjacentHTML */
function ejemploInsertAdjacentHTML() {
  const el = document.getElementById("demoInsertAdjacentHTML");
  if (!el) return avisarMissing("demoInsertAdjacentHTML");
  el.insertAdjacentHTML("beforeend", "<p class='insertado'>Elemento agregado con insertAdjacentHTML()</p>");
}

/* 6. parentElement / children / first/last */
function ejemploNavegacionDOM() {
  const el = document.querySelector("#demoNavegacion .item");
  if (!el) return avisarMissing("demoNavegacion .item");
  console.log("Elemento:", el);
  console.log("parentElement:", el.parentElement);
  console.log("children del padre:", el.parentElement.children);
  alert("Ver consola: parentElement y children mostrados.");
}

/* 7. nextElementSibling / previousElementSibling */
function ejemploHermanos() {
  const el = document.querySelector("#demoHermanos .item");
  if (!el) return avisarMissing("demoHermanos .item");
  console.log("Elemento:", el);
  console.log("nextElementSibling:", el.nextElementSibling);
  alert("Ver consola para siblings (hermanos).");
}

/* 8. setAttribute / getAttribute / removeAttribute */
function ejemploAtributos() {
  const img = document.getElementById("demoAtributos");
  if (!img) return avisarMissing("demoAtributos");

  // Mostrar los atributos actuales en consola
  console.log("Antes:", {
    src: img.getAttribute("src"),
    alt: img.getAttribute("alt"),
    title: img.getAttribute("title"),
  });

  // Cambiar y agregar atributos
  img.setAttribute("title", "Imagen modificada con setAttribute()");
  img.setAttribute("data-demo", "atributo-personalizado");

  // Quitar un atributo (solo para demostrar removeAttribute)
  img.removeAttribute("data-demo");

  // Mostrar resultado final en consola
  console.log("Después:", {
    src: img.getAttribute("src"),
    alt: img.getAttribute("alt"),
    title: img.getAttribute("title"),
    dataDemo: img.getAttribute("data-demo"),
  });

  alert("✅ Atributos modificados.\nPasa el cursor sobre la imagen para ver el título.\nMira la consola (F12 → Consola).");
}
/* 9. classList (toggle/add/remove) */
function ejemploClassList() {
  const el = document.getElementById("demoClassList");
  if (!el) return avisarMissing("demoClassList");
  // alterna la clase 'resaltado' (defínela en tu CSS)
  el.classList.toggle("resaltado");
  alert("Clase 'resaltado' alternada en el cuadro de prueba.");
}

/* 10. style (estilos en línea) */
function ejemploStyle() {
  const el = document.getElementById("demoStyle");
  if (!el) return avisarMissing("demoStyle");
  // aplicamos estilos en línea — recuerda estos tienen prioridad sobre CSS externo
  el.style.backgroundColor = "var(--secondary)";
  el.style.padding = "1rem";
  el.style.borderRadius = "8px";
  el.style.border = "1px solid var(--primary)";
  alert("Estilos en línea aplicados al cuadro de prueba.");
}

/* 11. remove / append / prepend / replaceChild */
function ejemploModificacionNodos() {
  const cont = document.getElementById("demoNodos");
  if (!cont) return avisarMissing("demoNodos");

  // prepend: crear y añadir al inicio
  const nuevo = document.createElement("p");
  nuevo.textContent = "Nodo PREPEND agregado";
  cont.prepend(nuevo);

  // append: crear y añadir al final
  const nuevo2 = document.createElement("p");
  nuevo2.textContent = "Nodo APPEND agregado";
  cont.append(nuevo2);

  // replaceChild: reemplazar el segundo hijo por otro nodo (si existe)
  if (cont.children.length >= 2) {
    const reemplazo = document.createElement("p");
    reemplazo.textContent = "Nodo REEMPLAZADO";
    cont.replaceChild(reemplazo, cont.children[1]);
  }

  // remove: eliminar el último hijo (si hay más de 0)
  if (cont.lastElementChild) cont.lastElementChild.remove();

  alert("Operaciones remove/append/prepend/replaceChild ejecutadas.");
}

/* 12. cloneNode */
function ejemploCloneNode() {
  const original = document.querySelector("#demoCloneNode .item");
  if (!original) return avisarMissing("demoCloneNode .item");
  const copia = original.cloneNode(true);
  copia.textContent += " (copia)";
  document.getElementById("demoCloneNode").appendChild(copia);
  alert("Elemento clonado.");
}

/* 13. createTextNode */
function ejemploCreateTextNode() {
  const cont = document.getElementById("demoCreateTextNode");
  if (!cont) return avisarMissing("demoCreateTextNode");
  const texto = document.createTextNode("Hola desde createTextNode()");
  const p = document.createElement("p");
  p.appendChild(texto);
  cont.appendChild(p);
  alert("Texto creado y añadido sin innerHTML.");
}

/* 14. querySelectorAll + forEach */
function ejemploQuerySelectorAll() {
  const container = document.getElementById("demoQuerySelectorAll");
  if (!container) return avisarMissing("demoQuerySelectorAll");
  const items = container.querySelectorAll(".item");
  if (!items.length) {
    console.warn("No se encontraron elementos con clase .item dentro de #demoQuerySelectorAll");
    alert("No hay elementos '.item' dentro del contenedor (ver consola).");
    return;
  }
  items.forEach((it, idx) => {
    it.style.color = "var(--dark)";
    it.textContent = `Item ${idx + 1} (modificado)`;
  });
  alert("querySelectorAll + forEach ejecutado.");
}

/* 15. getBoundingClientRect */
function ejemploGetBoundingClientRect() {
  const el = document.getElementById("demoGetBoundingClientRect");
  if (!el) return avisarMissing("demoGetBoundingClientRect");
  const r = el.getBoundingClientRect();
  alert(
    `Rectángulo del elemento — ancho: ${Math.round(r.width)}px, alto: ${Math.round(
      r.height
    )}px, top: ${Math.round(r.top)}px (desde la ventana)`
  );
}
