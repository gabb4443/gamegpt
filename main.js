// main.js

let scene, camera, renderer, player;
let shootButton, reloadButton, crouchButton, jumpButton, aimButton;

init();
animate();

function init() {
    // Cena
    scene = new THREE.Scene();

    // Câmera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 5); // Posição inicial da câmera

    // Renderizador
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('game-container').appendChild(renderer.domElement);

    // Jogador
    player = new THREE.Object3D();
    scene.add(player);

    // Chão
    const floorGeometry = new THREE.PlaneGeometry(500, 500);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Botões
    shootButton = document.getElementById('shoot');
    reloadButton = document.getElementById('reload');
    crouchButton = document.getElementById('crouch');
    jumpButton = document.getElementById('jump');
    aimButton = document.getElementById('aim');

    // Eventos dos botões
    shootButton.addEventListener('click', shoot);
    reloadButton.addEventListener('click', reload);
    crouchButton.addEventListener('click', crouch);
    jumpButton.addEventListener('click', jump);
    aimButton.addEventListener('click', aim);

    // Redimensionar
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function shoot() {
    console.log('Shoot');
}

function reload() {
    console.log('Reload');
}

function crouch() {
    console.log('Crouch');
}

function jump() {
    console.log('Jump');
}

function aim() {
    console.log('Aim');
}