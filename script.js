let scene, camera, renderer, player, weapon;
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

    // Arma
    const weaponGeometry = new THREE.BoxGeometry(0.5, 0.2, 1);
    const weaponMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    weapon = new THREE.Mesh(weaponGeometry, weaponMaterial);
    weapon.position.set(0, -0.5, -1); // Posição relativa ao jogador
    player.add(weapon);

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
    // Animação de tiro
    weapon.position.z -= 0.1;
    setTimeout(() => weapon.position.z += 0.1, 100);
}

function reload() {
    console.log('Reload');
    // Animação de recarregar
    weapon.rotation.x -= Math.PI / 4;
    setTimeout(() => weapon.rotation.x += Math.PI / 4, 500);
}

function crouch() {
    console.log('Crouch');
    // Animação de agachar
    player.position.y -= 0.5;
    setTimeout(() => player.position.y += 0.5, 500);
}

function jump() {
    console.log('Jump');
    // Animação de pular
    player.position.y += 1;
    setTimeout(() => player.position.y -= 1, 500);
}

function aim() {
    console.log('Aim');
    // Animação de mira
    camera.fov = 30;
    camera.updateProjectionMatrix();
    setTimeout(() => {
        camera.fov = 75;
        camera.updateProjectionMatrix();
    }, 1000);
}
