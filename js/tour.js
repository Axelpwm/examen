const panorama = new PANOLENS.ImagePanorama('img/test.png'); // Reemplaza con tu imagen
const viewer = new PANOLENS.Viewer({
  container: document.getElementById('panorama-container')
});
viewer.add(panorama);

const crearHotspot = (x, y, z, contenido) => {
  const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
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

// Ejemplo de 10 zonas interactivas (puedes modificar coordenadas y contenido)
for (let i = 0; i < 10; i++) {
  crearHotspot(
    Math.random() * 1000 - 500,
    Math.random() * 500,
    Math.random() * 1000 - 500,
    {
      texto: `Zona ${i + 1}`,
      html: `<h3>Zona ${i + 1}</h3><p>Descripción, imagen, video o audio aquí.</p>`
    }
  );
}
