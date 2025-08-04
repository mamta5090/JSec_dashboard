import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Globe(props) {
  const globeRef = useRef();
  const { scene } = useGLTF('/models/earth.glb');

  // Rotate the globe slowly on Y axis
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.010; // Adjust speed here
    }
  });

  return <primitive ref={globeRef} object={scene} {...props} />;
}
