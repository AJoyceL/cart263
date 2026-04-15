import * as THREE from 'three';


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
   raycaster setup
*/
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let zooming = false; //zooming state
let targetPosition = new THREE.Vector3(-0.1, -0.6, 0.6); //target position => used AI to help calculate the exact coordinates




/*
   canvas setup
*/
const canvas = document.querySelector('canvas#three-ex')



/*
   camera setup
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
camera.position.y = -1.5;
camera.position.x = -0.5;
camera.rotation.y = -0.2;
camera.rotation.x = 0.5;
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



window.requestAnimationFrame(animate);

function animate() {
    window.requestAnimationFrame(animate);

    //handles zooming animation
    if (zooming) {
        camera.position.lerp(targetPosition, 0.08);
        camera.lookAt(book.position);

        //hanbdles redirection
        if (camera.position.distanceTo(targetPosition) < 0.05) {
            window.location.href = "diary.html";
        }
    }
    
    renderer.render(scene, camera);
}

//event listener
//reference: https://discourse.threejs.org/t/zoom-into-object-and-open-popup-on-click/40337
window.addEventListener("click", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(book);

    //zoom if book is clicked
    if (intersects.length > 0) {
        zooming = true;
    }
});