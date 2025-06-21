import React from 'react'
import { Canvas} from '@react-three/fiber'
import ShowRoom from './ShowRoom'
import { OrbitControls,Center, PivotControls } from '@react-three/drei'
import ColorComponent from './ColorComponent'
import { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner'
import { useRef } from 'react';
import Buttons from './Buttons'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../Slices/CartItmeSlice'
import Stripe from './Stripe'


const Home = () => {

  const targetPosition = {x: 0, y: 0, z: 3.25};
  const meshRef = useRef();
  
  const dispatch=useDispatch();
  const ref = useRef()

  function downloadScreenshot() {
      const image = ref.current.toDataURL('image/png')
      const a = document.createElement('a')
     // a.setAttribute('download', 'screenshot.png')
      a.setAttribute('href', image)
      a.click()
      
      localStorage.setItem("Image",image);
      dispatch(addtoCart({
      quantity:1,
      name:"productA",
      price: 850,
    image:image}))
      
  }


 

  
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>  
      <Canvas camera={{position:[-1.5,0.65,1.65]}}
             gl={{preserveDrawingBuffer:true}}
             ref={ref} >

        {/* <axesHelper args={[1]}/> 
        <gridHelper
        position={[0,0,0]}/> */}


       

      
        <OrbitControls
         enableDamping
         dampingFactor={0.05}
         minDistance={1}
         maxDistance={5}
         enablePan={false}
        
       />

        
      
      
        
        <ShowRoom position={targetPosition} ref={meshRef}/>
        
        
       
        
       
        {/* <color attach={'background'} args={['#ADD8E6']}/> */}

        

      </Canvas>
      </Suspense>
        
     
       
      <ColorComponent/>

      <Buttons handleClick={downloadScreenshot}/>   
      
      

      
    </>
  )
}

export default Home
