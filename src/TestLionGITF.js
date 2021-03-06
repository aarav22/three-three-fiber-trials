/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/TestLionGITF.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={[20, 20, 20]} />
      <mesh
        geometry={nodes['loewe-c'].geometry}
        material={materials.Loewe_O_Material_u1_v1}
        position={[0, -3.49, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/TestLionGITF.glb')
