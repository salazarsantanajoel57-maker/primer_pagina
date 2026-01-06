let music = document.getElementById("music");
let playing = false;

function toggleMusic() {
    if (playing) {
        music.pause();
    } else {
        music.play();
    }
    playing = !playing;
}
function playPause() {
    const audio = document.getElementById("music");
    const select = document.getElementById("listaCanciones");
    const texto = document.getElementById("cancion-actual");
    const boton = document.getElementById("btnPlay");

    
    if (select.value === "") {
        alert("Primero selecciona una canción");
        return;
    }

    
    if (!audio.src) {
        audio.src = select.value;
        texto.textContent = select.options[select.selectedIndex].text;
    }

    if (audio.paused) {
        audio.play();
        boton.textContent = "⏸️ Pausar";
    } else {
        audio.pause();
        boton.textContent = "▶️ Reproducir";
    }
}
