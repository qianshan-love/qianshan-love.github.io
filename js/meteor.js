// 引入 Three.js 库
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

let scene, camera, renderer, meteors;

function init() {
  // 创建场景
  scene = new THREE.Scene();
  // 创建相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('meteor-container').appendChild(renderer.domElement);

  // 创建流星
  const geometry = new THREE.SphereGeometry(0.1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  meteors = [];
  for (let i = 0; i < 100; i++) {
    const meteor = new THREE.Mesh(geometry, material);
    meteor.position.set(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 100 - 50);
    meteor.velocity = new THREE.Vector3(0, -Math.random() * 5, 0);
    scene.add(meteor);
    meteors.push(meteor);
  }

  camera.position.z = 50;
}

function animate() {
  requestAnimationFrame(animate);
  meteors.forEach(meteor => {
    meteor.position.add(meteor.velocity);
    if (meteor.position.y < -window.innerHeight) {
      meteor.position.y = window.innerHeight;
      meteor.position.x = Math.random() * window.innerWidth;
      meteor.position.z = Math.random() * 100 - 50;
    }
  });
  renderer.render(scene, camera);
}

init();
animate();
