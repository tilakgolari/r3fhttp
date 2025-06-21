import React, { useRef,useEffect} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/Addons.js';
import { useThree } from '@react-three/fiber';
import { CameraControls, ContactShadows } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';
import { useSelector } from 'react-redux';
import { Decal } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { MeshStandardMaterial } from 'three';



import { addOrUpdateMesh } from '../Slices/ModelSlice'; 



const ShowRoom = () => {

 const {raycaster} =useThree();
 const dispatch=useDispatch ();
 const Gltf= useLoader(GLTFLoader, './models/custom.glb')
 const cameraControlsRef=useRef(null)
 const modelRef=useRef();
 
 const color=useSelector((state) => state.color.color)
 const Objname=useSelector((state) =>state.model.model )

 



 useFrame(() => {

    const rightShoes=Gltf.scene.children[0];
    const leftShoes=Gltf.scene.children[1];


    rightShoes.rotation.y=THREE.MathUtils.degToRad(10);
    leftShoes.rotation.y=THREE.MathUtils.degToRad(335);
    leftShoes.rotation.z=THREE.MathUtils.degToRad(-30);

    leftShoes.position.x=-0.25;
    leftShoes.position.y=.45;
    leftShoes.position.z=0.5;

    


 })
 
//link


 



// update import

const shoesClick = () => {
  const intersects = raycaster.intersectObjects(Gltf.scene.children, true);
  if (intersects.length > 0) {
    const firstObj = intersects[0].object;
    const name = firstObj.name;
    //console.log(name);
    // Clone and apply material
    const firstMat = firstObj.material.clone();
    firstMat.color = new THREE.Color(color);
    firstObj.material = firstMat;

    // Update Redux store
    dispatch(addOrUpdateMesh({ name, color: color}));
  }
};








const selectedMeshes = useSelector((state) => state.model.selectedMeshes);

useEffect(() => {
  if (!Gltf || !Gltf.scene ) return;

  

  selectedMeshes.forEach(({ name, color }) => {
    const mesh = Gltf.scene.getObjectByName(name);
    if (mesh && mesh.material) {
      const clonedMaterial = mesh.material.clone();
      clonedMaterial.color = new THREE.Color(color);
      mesh.material = clonedMaterial;
    }
  });
}, [selectedMeshes, Gltf]);




 
 




  return (
    <>
        
        <ambientLight intensity={.5} />
        <pointLight
        position={[0,1,0]}
       
        intensity={2.2}/>
        <directionalLight position={[3,3,3]} />


        <CameraControls
         ref={cameraControlsRef}
        // dollyToCursor={true}
        minDistance={1}
        maxDistance={3}
        azimuthRotateSpeed={1.5}
        truckSpeed={0.05}
       />

        
        
        <primitive object={Gltf.scene} 
        onClick={shoesClick}
        ref={modelRef}>
        </primitive>
        
           
        <ContactShadows
        position={[0,0,0]}
        scale={6}
        resolution={512}
        blur={.55}
        opacity={.4}
        color="#000000"
        />    

    
    </>



    
  )
}

export default ShowRoom;
