import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

//camera and scene setup
const scene = new THREE.Scene()
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//create mesh:book
const geometry = new THREE.BoxGeometry(1, 1.5, 0.2)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const book = new THREE.Mesh(geometry, material)
scene.add(book)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target = book.position;
controls.enableDamping = true;

window.requestAnimationFrame(animate);

function animate(timer) {
    // // book.rotation.x = Math.sin(timer/1000)
    // book.rotation.y = Math.sin(timer/1000)
    // controls.target.y = 0.5

    renderer.render(scene, camera); 
    window.requestAnimationFrame(animate);
}
controls.update()