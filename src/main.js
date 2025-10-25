import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// Camera setup
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Create a colorful cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const materials = [
    new THREE.MeshStandardMaterial({ color: 0xff0000 }), // red
    new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // green
    new THREE.MeshStandardMaterial({ color: 0x0000ff }), // blue
    new THREE.MeshStandardMaterial({ color: 0xffff00 }), // yellow
    new THREE.MeshStandardMaterial({ color: 0xff00ff }), // magenta
    new THREE.MeshStandardMaterial({ color: 0x00ffff })  // cyan
];
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Add a grid helper
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// Keyboard controls
const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Mouse controls
let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Keyboard rotation controls
    if (keys['w']) cube.rotation.x += 0.05;
    if (keys['s']) cube.rotation.x -= 0.05;
    if (keys['a']) cube.rotation.y += 0.05;
    if (keys['d']) cube.rotation.y -= 0.05;

    // Mouse-based camera movement
    camera.position.x = mouseX * 2;
    camera.position.y = mouseY * 2;
    camera.lookAt(scene.position);

    // Auto-rotation when no input
    if (!keys['w'] && !keys['s'] && !keys['a'] && !keys['d']) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

// Start animation
animate();

console.log('Three.js game initialized! Try moving your mouse and using WASD keys.');
