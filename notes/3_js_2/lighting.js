import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

//camera and scene setup
const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//controls setup
const controls = new OrbitControls(camera, canvas)


//lighting setup
// const ambientLight = new THREE.AmbientLight()
// scene.add(ambientLight)
// ambientLight.color = new THREE.Color(0xff0000)
// ambientLight.intensity = 1;


// const directionalLight = new THREE.DirectionalLight()
// scene.add(directionalLight)
// directionalLight.color = new THREE.Color(0x00ff00)
// directionalLight.intensity = 1;


  
// const pointLight = new THREE.PointLight(0xff9000, 1.5)
// scene.add(pointLight)
// console.log(pointLight.position) // default position is 0,0,0

const spotLight = new THREE.SpotLight(0x78ff00, 4.5, 10, Math.PI * 0.1, 0.25, 1)
spotLight.position.set(0, 2, 3)
scene.add(spotLight)

scene.add(spotLight.target)
spotLight.target.position.x = -2

//material setup
const material = new THREE.MeshStandardMaterial({}) 
//or
// const material = new THREE.MeshStandardMaterial({map:water_texture}) 
// material.roughness = 0.4
//supports lighting!


//NEW for casting shadows add a plane:)
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)

scene.add(plane)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = -.5;
plane.position.z = 1;
plane.position.x = -1;



window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();
    // let x = directionalLight.position.x
    // x+=.02
    // directionalLight.position.set(x,5, 0)

    // pointLight.position.set(0,1,0) //set y 
    // //or
    // //pointLight.position.set(1,1,1) 
    // //set the intensity too
    // pointLight.intensity = 5
    // pointLight.distance = 1
    // // pointLight.distance =0
    // pointLight.decay = .5


    renderer.render(scene, camera); 
    window.requestAnimationFrame(animate);
}