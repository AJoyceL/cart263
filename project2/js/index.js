import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

//texture loader
const textureLoader = new THREE.TextureLoader()
const bookTexture = textureLoader.load('texture/brown_leather_rough_4k.jpg')

//camera and scene setup
const scene = new THREE.Scene()
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//canvas setup
const canvas = document.querySelector('canvas#three-ex')

//camera setup
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
camera.position.y = -3;
// camera.rotation.z = 5;
scene.add(camera)

//renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//mesh setup => book
const geometry = new THREE.BoxGeometry(1, 1.5, 0.2)
const material = new THREE.MeshBasicMaterial({ map: bookTexture })
const book = new THREE.Mesh(geometry, material)
scene.add(book)
// book.position.z = 5;
book.rotation.z = 0.5;  

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target = book.position;
controls.enableDamping = true;

window.requestAnimationFrame(animate);

function animate(timer) {

    renderer.render(scene, camera); 
    window.requestAnimationFrame(animate);
}
controls.update()