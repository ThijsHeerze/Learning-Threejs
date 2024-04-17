import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 2, 5);
orbit.update();

renderer.setSize(window.innerWidth - 1, window.innerHeight - 1);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// const cHelper = new THREE.CameraHelper(camera);
// scene.add(cHelper);

const gridHelper = new THREE.GridHelper(5)
scene.add(gridHelper);
gridHelper.position.y -= 0.01;

const boxGeometry = new THREE.BoxGeometry(0.5, 6, 2);
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x991100});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(5, 5);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

function animate(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);