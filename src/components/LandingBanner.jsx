import React from 'react'

const LandingBanner = ({onEnter}) => {
  return (
    <div className="landing-banner">
       <h1>Welcome to My 3D Store</h1>
      <p>Explore your product in 3D</p>
      <button onClick={onEnter}>Enter</button>
    </div>
  )
}

export default LandingBanner
