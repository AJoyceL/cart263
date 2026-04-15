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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;



/*
   lighting setup
*/
//directional light
const directionalLight = new THREE.DirectionalLight(0xffd6a5, 2);
directionalLight.position.set(4, 6, 2); 
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.intensity = 1.5;

directionalLight.shadow.camera.left = -2;
directionalLight.shadow.camera.right = 2;
directionalLight.shadow.camera.top = 2;
directionalLight.shadow.camera.bottom = -2;
scene.add(directionalLight);


//ambient light
const ambientLight = new THREE.AmbientLight(0xffe8c3, 0.3);
scene.add(ambientLight);





/*
   mesh setup
*/

//book
const bookgeometry = new THREE.BoxGeometry(1, 1.5, 0.2)
const material = new THREE.MeshStandardMaterial({ map: bookTexture })
material.color = new THREE.Color('#492904') 
material.roughness = 0.5;

const book = new THREE.Mesh(bookgeometry, material)
scene.add(book)
book.rotation.z = 0.5;
book.castShadow = true;
book.receiveShadow = true;  


//table
const tablegeometry = new THREE.BoxGeometry(20, 0.5, 10)
const tablematerial = new THREE.MeshStandardMaterial({ color: 0x654321 })
tablematerial.roughness = 0.8;
const table = new THREE.Mesh(tablegeometry, tablematerial)
scene.add(table)
table.rotation.x = -1.6;
table.position.z = -.3;
table.castShadow = true;
table.receiveShadow = true;

//room wall
const wallgeometry = new THREE.BoxGeometry(50, 10, 0.5)
const wallmaterial = new THREE.MeshStandardMaterial({ color: 0x654321 })
const wall = new THREE.Mesh(wallgeometry, wallmaterial)
scene.add(wall)
wall.position.z = -5;
wall.position.y = 20;
wall.rotation.x = 20;
wall.castShadow = true;
wall.receiveShadow = true;


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