import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/*
   texture loader
*/
//from : https://polyhaven.com/a/brown_leather
const textureLoader = new THREE.TextureLoader()
const bookTexture = textureLoader.load('texture/brown_leather_rough_4k.jpg')

/*
   scene setup
*/
const scene = new THREE.Scene()
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/*
   canvas setup
*/
const canvas = document.querySelector('canvas#three-ex')



/*
   camera setup
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2;
camera.position.y = -1.5;
scene.add(camera)



/*
   render setup
*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)



/*
   mesh setup
*/

//book
const bookgeometry = new THREE.BoxGeometry(1, 1.5, 0.2)
const material = new THREE.MeshBasicMaterial({ map: bookTexture })
material.color = new THREE.Color('#492904') 

const book = new THREE.Mesh(bookgeometry, material)
scene.add(book)
book.rotation.z = 0.5;  

//table
const tablegeometry = new THREE.BoxGeometry(20, 0.5, 10)
const tablematerial = new THREE.MeshBasicMaterial({ color: 0x654321 })
const table = new THREE.Mesh(tablegeometry, tablematerial)
scene.add(table)
table.rotation.x = -1.6;
table.position.z = -.3;

//room wall
const wallgeometry = new THREE.BoxGeometry(50, 10, 0.5)
const wallmaterial = new THREE.MeshBasicMaterial({ color: 0x654321 })
const wall = new THREE.Mesh(wallgeometry, wallmaterial)
scene.add(wall)
wall.position.z = -5;
wall.position.y = 20;
wall.rotation.x = 20;


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