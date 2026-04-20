import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

// Komponen internal untuk meload model
function Model({ path }: { path: string }) {
  const { scene } = useGLTF(window.location.origin + path);
  return <primitive object={scene} />;
}

export default function ThreeRenderer({ modelPath }: { modelPath: string }) {
  return (
    <div className="w-full h-full bg-[#eeeeee]">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.6}
            shadows={{ type: "contact", opacity: 0.7, blur: 2 }}
            adjustCamera={true}
          >
            <Model path={modelPath} />
          </Stage>
          <OrbitControls
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
