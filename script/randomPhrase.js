let contenedor = document.querySelector('.random-Phrase');
let frases = [
    "Un pequeño gesto hoy puede ser el mañana de un animal sin hogar. ¡Dona y sé su esperanza!.",
    "Ellos no tienen voz, pero tú sí. Ayúdalos a tener una segunda oportunidad.",
    "Tu donación no solo alimenta cuerpos, sino también corazones rotos.",
    "Cada peso cuenta: un plato de comida, una vacuna, un abrigo cálido. ¡Dona y salva vidas!.",
    "¿Sabes qué tiene en común un animal rescatado y un ángel? Tú."
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

const indice = getRandomIndex(frases.length);
contenedor.textContent = frases[indice];
