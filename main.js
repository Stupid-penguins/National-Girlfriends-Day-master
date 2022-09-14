import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});




const light2 = new THREE.PointLight( 0xff0000, 1, 100 );
scene.add( light2 );



const HeartBackground = new THREE.TextureLoader().load('heart.png');
scene.background = HeartBackground;


const loader = new GLTFLoader();
loader.load('HeartJar/scene.gltf', (glftScene) => {
    glftScene.scene.scale.set(0.1,0.1,0.1);
    glftScene.scene.position.set(0,12,0)
    scene.add(glftScene.scene);
});

loader.load('CatDispencer/scene.gltf', (ben) => {
    ben.scene.scale.set(0.1,0.1,0.1)
    ben.scene.position.set(50,-20 , -10)
    ben.scene.rotation.set(0,3.7,-0.7)
    scene.add(ben.scene);
});


const light = new THREE.AmbientLight( 0xff0000 );
scene.add( light );



renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.z = 50
camera.position.y = 2.5
camera.position.x = 0


function animate() {

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();