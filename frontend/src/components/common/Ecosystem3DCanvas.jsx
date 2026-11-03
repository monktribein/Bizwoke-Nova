import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Ecosystem3DCanvas
 * Interactive WebGL 3D Visualization of the Bizwoke Nova Ecosystem.
 * Renders a central NEP Platform core, concentric orbital tracks,
 * 4 orbiting partner nodes with dynamic laser vectors, and depth particles.
 * Includes graceful SVG fallback if WebGL is unavailable.
 */
export default function Ecosystem3DCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId;
    let renderer;
    let outerGeo, outerMat, innerGeo, innerMat, particlesGeo, particlesMat;

    try {
      const width = container.clientWidth || 540;
      const height = container.clientHeight || 500;

      // 1. Scene & Camera Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 16);

      // 2. Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // 3. Ambient & Point Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const orangeLight = new THREE.PointLight(0xf27a24, 2.5, 40);
      orangeLight.position.set(5, 5, 8);
      scene.add(orangeLight);

      const blueLight = new THREE.PointLight(0x2563eb, 2, 40);
      blueLight.position.set(-6, -4, 6);
      scene.add(blueLight);

      // 4. Central Core: Dual Geodesic Spheres
      const coreGroup = new THREE.Group();
      scene.add(coreGroup);

      outerGeo = new THREE.IcosahedronGeometry(2.3, 2);
      outerMat = new THREE.MeshStandardMaterial({
        color: 0x0f294a,
        wireframe: true,
        transparent: true,
        opacity: 0.75,
        roughness: 0.2
      });
      const outerSphere = new THREE.Mesh(outerGeo, outerMat);
      coreGroup.add(outerSphere);

      innerGeo = new THREE.SphereGeometry(1.2, 32, 32);
      innerMat = new THREE.MeshStandardMaterial({
        color: 0xf27a24,
        emissive: 0xde6713,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.8
      });
      const innerSphere = new THREE.Mesh(innerGeo, innerMat);
      coreGroup.add(innerSphere);

      // 5. Gimbal Orbit Rings
      const ringGroup = new THREE.Group();
      scene.add(ringGroup);

      const createRing = (radius, tube, color, rotX, rotY) => {
        const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.65
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = rotX;
        ring.rotation.y = rotY;
        return ring;
      };

      const ring1 = createRing(4.2, 0.035, 0xf27a24, Math.PI / 3, 0);
      const ring2 = createRing(5.4, 0.03, 0x2563eb, -Math.PI / 4, Math.PI / 6);
      const ring3 = createRing(6.5, 0.025, 0x0d9488, Math.PI / 6, -Math.PI / 4);
      ringGroup.add(ring1);
      ringGroup.add(ring2);
      ringGroup.add(ring3);

      // 6. 4 Orbiting Satellite Partner Nodes
      const satelliteNodes = [
        { name: 'Channel', radius: 4.2, speed: 0.012, phase: 0, color: 0xf27a24 },
        { name: 'SI Integration', radius: 5.4, speed: 0.008, phase: Math.PI / 2, color: 0x2563eb },
        { name: 'Government', radius: 6.5, speed: 0.006, phase: Math.PI, color: 0x0d9488 },
        { name: 'Technology ISV', radius: 5.0, speed: 0.010, phase: (Math.PI * 3) / 2, color: 0x1e5086 }
      ];

      const satellites = satelliteNodes.map((cfg) => {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.38, 24, 24),
          new THREE.MeshStandardMaterial({
            color: cfg.color,
            emissive: cfg.color,
            emissiveIntensity: 0.4,
            roughness: 0.2
          })
        );

        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 0, 0)
        ]);
        const lineMat = new THREE.LineBasicMaterial({
          color: cfg.color,
          transparent: true,
          opacity: 0.45
        });
        const line = new THREE.Line(lineGeo, lineMat);

        scene.add(mesh);
        scene.add(line);

        return { ...cfg, mesh, line };
      });

      // 7. Ambient Micro Data Particles
      const particlesCount = 180;
      const positions = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 22;
        positions[i + 1] = (Math.random() - 0.5) * 18;
        positions[i + 2] = (Math.random() - 0.5) * 16;
      }
      particlesGeo = new THREE.BufferGeometry();
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesMat = new THREE.PointsMaterial({
        size: 0.07,
        color: 0x2563eb,
        transparent: true,
        opacity: 0.5
      });
      const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
      scene.add(particlesMesh);

      // 8. Mouse Parallax & Tracking
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 1.5;
        targetY = y * 1.5;
      };
      container.addEventListener('mousemove', onMouseMove);

      // 9. Render Loop
      let angle = 0;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        angle += 0.01;

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        coreGroup.rotation.y += 0.007;
        coreGroup.rotation.x += 0.003;
        coreGroup.position.x = mouseX * 0.8;
        coreGroup.position.y = -mouseY * 0.8;

        const pulse = 1 + Math.sin(angle * 2) * 0.05;
        innerSphere.scale.set(pulse, pulse, pulse);

        ring1.rotation.z += 0.005;
        ring2.rotation.z -= 0.004;
        ring3.rotation.y += 0.003;
        ringGroup.rotation.x = mouseY * 0.4;
        ringGroup.rotation.y = mouseX * 0.4;

        satellites.forEach((sat) => {
          const theta = angle * sat.speed * 60 + sat.phase;
          const x = Math.cos(theta) * sat.radius;
          const y = Math.sin(theta * 0.8) * (sat.radius * 0.5);
          const z = Math.sin(theta) * sat.radius;

          sat.mesh.position.set(x, y, z);

          const posAttr = sat.line.geometry.attributes.position;
          if (posAttr) {
            posAttr.setXYZ(0, coreGroup.position.x, coreGroup.position.y, coreGroup.position.z);
            posAttr.setXYZ(1, x, y, z);
            posAttr.needsUpdate = true;
          }
        });

        particlesMesh.rotation.y += 0.0008;

        renderer.render(scene, camera);
      };
      animate();

      // 10. Resize Observer
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const newWidth = entry.contentRect.width;
          const newHeight = entry.contentRect.height;
          if (newWidth > 0 && newHeight > 0) {
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
          }
        }
      });
      resizeObserver.observe(container);

      return () => {
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener('mousemove', onMouseMove);
        resizeObserver.disconnect();
        if (renderer) renderer.dispose();
        if (outerGeo) outerGeo.dispose();
        if (outerMat) outerMat.dispose();
        if (innerGeo) innerGeo.dispose();
        if (innerMat) innerMat.dispose();
        if (particlesGeo) particlesGeo.dispose();
        if (particlesMat) particlesMat.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed, using SVG fallback:', err);
      setWebGLFailed(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center select-none overflow-hidden"
    >
      {!webGLFailed ? (
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
      ) : (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* SVG Ecosystem Rings Graphic */}
          <svg className="w-72 h-72 animate-spin-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="#F27A24" strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.6" />
            <circle cx="100" cy="100" r="60" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.4" />
            <circle cx="100" cy="100" r="40" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
            <circle cx="100" cy="100" r="22" fill="#F27A24" />
            <circle cx="100" cy="100" r="16" fill="#0F294A" />
          </svg>
        </div>
      )}

      {/* Floating HUD Badge 1: Top Left */}
      <div className="absolute top-4 left-4 pointer-events-none bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-bold text-[#0F294A]">NEP™ Core Interoperability</span>
      </div>

      {/* Floating HUD Badge 2: Bottom Right */}
      <div className="absolute bottom-4 right-4 pointer-events-none bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#F27A24]" />
        <span className="text-[11px] font-bold text-slate-700">4 Global Collaboration Tracks</span>
      </div>
    </div>
  );
}

