// Configura la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Agrega luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Controles de la cámara
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.update();

// Función para cargar y mostrar modelos STL
const loadModel = (file) => {
  const fileReader = new FileReader();

  fileReader.onload = (e) => {
    const loader = new THREE.STLLoader();
    const geometry = loader.parse(e.target.result);

    // Crea el material y la malla
    const material = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.5, roughness: 0.1 });
    const mesh = new THREE.Mesh(geometry, material);

    // Limpia la escena antes de añadir un nuevo modelo
    scene.clear();
    scene.add(mesh);

    // Ajusta la posición y la escala para que el modelo sea visible
    geometry.center();
    geometry.computeBoundingBox();

    const boundingBox = geometry.boundingBox;
    const maxDim = Math.max(
      boundingBox.max.x - boundingBox.min.x,
      boundingBox.max.y - boundingBox.min.y,
      boundingBox.max.z - boundingBox.min.z
    );

    camera.position.z = maxDim * 2;
    controls.update();
  };

  fileReader.readAsArrayBuffer(file);
};

// Evento para cargar archivos
document.getElementById('file-input').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && file.name.endsWith('.stl')) {
    loadModel(file);
  } else {
    alert('Por favor, selecciona un archivo STL válido.');
  }
});

// Ajustar el renderizador al redimensionar la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animación
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
