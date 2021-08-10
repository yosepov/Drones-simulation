import React, { useRef } from 'react'


const Terrain = (props) => {
  const terrain = useRef();

  return (
    <mesh
      visible
      position={props.position}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrain}
    >
      <planeBufferGeometry attach="geometry" args={props.args} />
      <meshStandardMaterial
        attach="material"
        color={props.color}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default Terrain;