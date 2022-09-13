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