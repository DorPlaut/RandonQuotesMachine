import { createRoot } from 'react-dom/client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Stars,
  ArcballControls,
  PointMaterial,
  PerspectiveCamera,
  OrbitControls,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Camera } from 'three';

let threeDcolor;

function Background({ changeColors }) {
  const myMesh = React.useRef();

  return (
    <div className="background">
      <Canvas>
        <PerspectiveCamera makeDefault position={[160, 0, 0]} />
        <OrbitControls autoRotate={true} autoRotateSpeed="0.1" />

        <mesh ref={myMesh}>
          <Stars
            radius={20}
            depth={50}
            count={9000}
            factor={4}
            saturation={0}
            fade
            speed={2}
          />
        </mesh>
        <ambientLight args={['#ffffff', 1]} />
      </Canvas>
    </div>
  );
}

export default Background;
