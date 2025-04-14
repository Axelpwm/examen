
const panorama = new PANOLENS.ImagePanorama('img/test.png'); 
const viewer = new PANOLENS.Viewer({
  container: document.getElementById('panorama-container')
});
viewer.add(panorama);

//  hotspots
const crearHotspot = (x, y, z, contenido) => {
  const infospot = new PANOLENS.Infospot(10, PANOLENS.DataImage.Info);
  infospot.position.set(x, y, z);
  infospot.addHoverText(contenido.texto || "Info");

  if (contenido.html) {
    const div = document.createElement("div");
    div.innerHTML = contenido.html;
    div.className = "tooltip";
    infospot.addEventListener("click", () => {
      infospot.focus();
      infospot.element.innerHTML = div.outerHTML;
    });
  }

  panorama.add(infospot);
};

// Zona interactiva
const zonas = [
  
  { x: -200, y: -10, z: -350, texto: "Zona 1 - Monitor", html: "<h3>Monitor</h3>" },
  { x: 200, y: 80, z: -200, texto: "Zona 2 - decoracion con vegetacion", html: "<h3>Decoracion con vegetacion</h3>" },
  { x: 300, y: 50, z: 50, texto: "Zona 3 - Ventana", html:` <div class="text-frame"> "<p>Ventana.</p> </div>" `},
  {
    x: -80,
    y: -10,
    z: 250,
    texto: "Zona 4 - Cubículos", 
    html: `
      <div class="video-container">
        <h3>Cubículos</h3>
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/0ExwgiT_1Rc" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `
  },
  { x: 0, y: 150, z: 100, texto: "Zona 5 - Ventilacion", html: "<h3>Ventilacion</h3>" },
  { x: -180, y: -20, z: -100, texto: "Zona 6 - Silla", html: "<h3>Silla</h3>" },
  { x: 200, y: 110, z: 300, texto: "Zona 7 - Dibujo", html: "<h3>Dibujo</h3>" },
  { x: -250, y: -50, z: 100, texto: "Zona 8 - Impresora", html: "<h3>Impresora</h3>" },
  
  //Archivos con imagenes
  { x: 50, y: 200, z: -400, texto: "Zona 9 - Decoracion", html: "<h3>Decoracion</h3><img src='img/vegetacion.png' width='200' alt='deco'>" },
  
  // Archivos de audio
  { x: -980, y: -20, z: -100, texto: "Zona 10 - Puerta", html: "<h3>Música</h3><audio controls><source src='audios/audio1.mp3' type='audio/mpeg'></audio>" }
];

//  Crear las zonas
zonas.forEach((zona) => {
  crearHotspot(zona.x, zona.y, zona.z, {
    texto: zona.texto,
    html: zona.html
  });
});