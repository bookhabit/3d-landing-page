import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Environment, Lightformer, OrbitControls} from "@react-three/drei"
import styled from 'styled-components';
import  Model  from '../components/Scene';
import { Suspense } from 'react';

const Container = styled.section`
  width:100vw;
  height:100vh;

  position: fixed;
  top:0;
  z-index: 1;
  background-color:transparent;
`

const PhoneModel = () => {
  return (
    <Container id='phone-model'>
      <Canvas camera={{fov:14}}>
        <ambientLight intensity={1.25}/>
        <directionalLight position={[0.4]}/>
        <Suspense fallback={null}>
            <Model/>
        </Suspense>
        <Environment>
           <Lightformer form="ring" />
        </Environment>
        {/* <OrbitControls/> */}
      </Canvas>
    </Container>
  )
}

export default PhoneModel
