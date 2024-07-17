import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Three.js scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setClearColor('#ffffff'); // Set background color to white
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const torusGeometry = new THREE.TorusGeometry(3,1.5,16,100)
        const torusMaterial = new THREE.MeshBasicMaterial({color: 0x0E5ACF, wireframe:true})
        const torus = new THREE.Mesh(torusGeometry, torusMaterial)
        scene.add(torus)

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 , wireframe:true});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;

        // Animation/render loop
        let direction = 1
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            torus.rotation.z += 0.001
            torus.rotation.x += 0.001
            renderer.render(scene, camera);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Move the cube back and forth
            cube.position.x += 0.003 * direction;

            // Check boundaries to reverse direction
            if (cube.position.x >= 0.7) {
                direction = -1; // Reverse direction
            } else if (cube.position.x <= -0.7) {
                direction = 1; // Reverse direction
            }
        };

        animate();

        return () => {
            // Clean up Three.js renderer
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene;