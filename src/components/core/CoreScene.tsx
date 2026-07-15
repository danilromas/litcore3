/**
 * Интерактивное WebGL-ядро (Stone & Signal).
 * Dynamic import three — не блокирует основной бандл.
 * Poster/фолбэк снаружи; reduced-motion / слабый GPU → без WebGL.
 */
import { useEffect, useRef, useState } from 'react';

export interface CoreSceneProps {
  className?: string;
}

function canUseWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  // На мобайле оставляем статичный poster — ядро декоративное за текстом
  if (matchMedia('(max-width: 767px)').matches) return false;
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl') || c.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

export default function CoreScene({ className }: CoreSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = mountRef.current;
    if (!el || !canUseWebGL()) return;

    let disposed = false;
    let raf = 0;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import('three');
      if (disposed || !mountRef.current) return;

      const root = mountRef.current;
      const w = root.clientWidth || 400;
      const h = root.clientHeight || 400;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(w, h, false);
      renderer.domElement.className = 'hero-core__canvas';
      root.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.z = 3.2;

      const group = new THREE.Group();
      scene.add(group);

      const coreGeo = new THREE.IcosahedronGeometry(0.85, 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E8A33D'),
        emissive: new THREE.Color('#8F5015'),
        emissiveIntensity: 0.45,
        metalness: 0.55,
        roughness: 0.35,
        flatShading: true,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      const shellGeo = new THREE.IcosahedronGeometry(1.15, 1);
      const shellMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#E8A33D'),
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      });
      const shell = new THREE.Mesh(shellGeo, shellMat);
      group.add(shell);

      const ringGeo = new THREE.TorusGeometry(1.45, 0.018, 12, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#C4842A'),
        transparent: true,
        opacity: 0.55,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.4;
      group.add(ring);

      const key = new THREE.PointLight(0xe8a33d, 2.2, 12);
      key.position.set(2.2, 1.4, 2.5);
      scene.add(key);
      scene.add(new THREE.AmbientLight(0x46545f, 0.55));

      const pointer = { x: 0, y: 0, tx: 0, ty: 0, dragging: false };
      const onMove = (e: PointerEvent) => {
        const r = root.getBoundingClientRect();
        pointer.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
      };
      const onDown = () => {
        pointer.dragging = true;
      };
      const onUp = () => {
        pointer.dragging = false;
      };

      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerdown', onDown);
      window.addEventListener('pointerup', onUp);

      const onResize = () => {
        const nw = root.clientWidth || 400;
        const nh = root.clientHeight || 400;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh, false);
      };
      window.addEventListener('resize', onResize);

      let t0 = performance.now();
      const tick = (now: number) => {
        if (disposed) return;
        const dt = (now - t0) / 1000;
        t0 = now;
        pointer.x += (pointer.tx - pointer.x) * 0.08;
        pointer.y += (pointer.ty - pointer.y) * 0.08;

        const spin = pointer.dragging ? 1.6 : 0.35;
        core.rotation.y += dt * spin;
        core.rotation.x += dt * (spin * 0.35);
        shell.rotation.y -= dt * 0.22;
        shell.rotation.z += dt * 0.12;
        ring.rotation.z += dt * 0.4;

        group.rotation.y = pointer.x * 0.45;
        group.rotation.x = pointer.y * 0.28;
        group.position.x = pointer.x * 0.12;
        group.position.y = pointer.y * 0.1;

        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      renderer.domElement.classList.add('is-ready');
      setReady(true);

      cleanup = () => {
        cancelAnimationFrame(raf);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('resize', onResize);
        coreGeo.dispose();
        coreMat.dispose();
        shellGeo.dispose();
        shellMat.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === root) root.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      data-ready={ready ? '1' : '0'}
      role="img"
      aria-label="Interactive kinetic core"
      style={{ position: 'absolute', inset: 0 }}
    />
  );
}
