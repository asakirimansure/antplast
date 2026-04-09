"use client";

import { useState, Suspense, useRef, useEffect, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";

function Model({ url, onLoaded }: { url: string; onLoaded: () => void }) {
  const { scene } = useGLTF(url);
  const { camera } = useThree();
  const fitted = useRef(false);

  useEffect(() => {
    if (fitted.current) return;

    const box = new THREE.Box3().setFromObject(scene);
    if (box.isEmpty()) return;

    fitted.current = true;

    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    if (maxDim === 0) return;

    const targetSize = 2.2;
    const scale = targetSize / maxDim;

    scene.scale.setScalar(scale);
    scene.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

    camera.position.set(0, 0.6, 4.5);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    onLoaded();
  });

  return <primitive object={scene} />;
}

function SceneControls({
  controlsRef,
}: {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}) {
  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      minDistance={1.5}
      maxDistance={8}
      autoRotate
      autoRotateSpeed={2}
      target={[0, 0, 0]}
    />
  );
}

interface ProductViewer3DProps {
  modelUrl: string;
  imageUrl: string;
  productName: string;
}

export default function ProductViewer3D({
  modelUrl,
  imageUrl,
  productName,
}: ProductViewer3DProps) {
  const [activeTab, setActiveTab] = useState<"3d" | "photo">("3d");
  const [loading, setLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const onLoaded = useCallback(() => {
    setLoading(false);
    setShowHint(true);
  }, []);
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  useEffect(() => {
    if (!showHint) return;
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, [showHint]);

  const zoomIn = () => {
    const controls = controlsRef.current;
    if (!controls) return;
    const camera = controls.object as THREE.PerspectiveCamera;
    const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
    camera.position.addScaledVector(dir, 0.5);
    controls.update();
  };

  const zoomOut = () => {
    const controls = controlsRef.current;
    if (!controls) return;
    const camera = controls.object as THREE.PerspectiveCamera;
    const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
    camera.position.addScaledVector(dir, -0.5);
    controls.update();
  };

  const toggleAutoRotate = () => {
    const controls = controlsRef.current;
    if (!controls) return;
    const next = !autoRotate;
    controls.autoRotate = next;
    setAutoRotate(next);
  };

  const rotateLeft = () => {
    const controls = controlsRef.current;
    if (!controls) return;
    controls.autoRotate = false;
    setAutoRotate(false);
    const angle = Math.PI / 8;
    const camera = controls.object;
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);
    spherical.theta -= angle;
    offset.setFromSpherical(spherical);
    camera.position.copy(controls.target).add(offset);
    controls.update();
  };

  const rotateRight = () => {
    const controls = controlsRef.current;
    if (!controls) return;
    controls.autoRotate = false;
    setAutoRotate(false);
    const angle = Math.PI / 8;
    const camera = controls.object;
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);
    spherical.theta += angle;
    offset.setFromSpherical(spherical);
    camera.position.copy(controls.target).add(offset);
    controls.update();
  };

  return (
    <div>
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex gap-1 bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("3d")}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeTab === "3d"
                ? "bg-primary text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            3D
          </button>
          <button
            onClick={() => setActiveTab("photo")}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeTab === "photo"
                ? "bg-primary text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Fotoğraf
          </button>
        </div>

        {activeTab === "3d" ? (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <Canvas camera={{ position: [0, 0.6, 4.5], fov: 40 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-3, 2, -3]} intensity={0.3} />
                <Model url={modelUrl} onLoaded={onLoaded} />
                <Environment preset="studio" />
                <SceneControls controlsRef={controlsRef} />
              </Suspense>
            </Canvas>
            {showHint && (
              <div
                className="lg:hidden animate-hint-fade"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  pointerEvents: "none",
                }}
              >
                <div className="bg-black/80 text-white rounded-2xl px-8 py-5 flex flex-col items-center gap-3 shadow-xl backdrop-blur-sm">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 013.15 0v3.15M10.05 4.575V7.5m3.15-2.925V7.5m0 0a1.575 1.575 0 013.15 0V10.5M13.2 7.5V5.625m3.15 4.875V10.5a1.575 1.575 0 013.15 0V12a6.3 6.3 0 01-6.3 6.3H12a6.3 6.3 0 01-6.3-6.3V7.725a1.575 1.575 0 013.15 0V10.5" />
                  </svg>
                  <span className="text-base font-semibold">{"Parmakla \u00C7evirebilirsiniz"}</span>
                  <span className="text-xs text-white/80">{"\u0130ki parmakla yak\u0131nla\u015Ft\u0131r\u0131n"}</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {activeTab === "3d" && !loading && (
        <div className="hidden lg:flex items-center justify-center gap-2 mt-3">
          <button
            onClick={toggleAutoRotate}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
              autoRotate
                ? "bg-primary text-white border-primary hover:bg-primary/90"
                : "text-gray-600 bg-white border-gray-200 hover:bg-gray-50"
            }`}
            title={autoRotate ? "Durdur" : "Otomatik döndür"}
          >
            {autoRotate ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            {autoRotate ? "Durdur" : "Döndür"}
          </button>
          <div className="w-px h-6 bg-gray-200 mx-1" />
          <button
            onClick={rotateLeft}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            title="Sola döndür"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Sola
          </button>
          <button
            onClick={rotateRight}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            title="Sağa döndür"
          >
            Sağa
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-200 mx-1" />
          <button
            onClick={zoomIn}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            title="Yakınlaştır"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Yakınlaştır
          </button>
          <button
            onClick={zoomOut}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            title="Uzaklaştır"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
            Uzaklaştır
          </button>
        </div>
      )}
    </div>
  );
}
