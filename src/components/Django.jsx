import React, { useEffect } from 'react'
import axios from 'axios';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'




import * as THREE from 'three';
import { color } from 'three/src/nodes/TSL.js';
const Django = () => {


  const Gltf= useLoader(GLTFLoader, './models/custom.glb')

   

    useEffect(() =>{

      const postData= setInterval(async () =>{
        try{

          const resp=await axios.get('http://127.0.0.1:8000/movie/api/read-mesh/');
          //console.log(resp)
          const name = resp.data.mesh_name;
          const color=resp.data.color;
          // console.log(Gltf.meshes)
          //console.log(name);
          
          Gltf.scene.traverse((child) =>{

          // console.log('✅ Mesh found:', child.name);

            if(child.isMesh && child.name==name){

              const newMaterial=child.material.clone();
              newMaterial.color=new THREE.Color(color);
              child.material=newMaterial;

              console.log('🎨 Color applied:', color);

            }

          });

         

      }catch(e){
          console.error(e);
      }

      },2000);
      
      //postData();
      return () => clearInterval(postData);

    },[Gltf])









  return (
    <div>
      
    </div>
  )
}

export default Django
