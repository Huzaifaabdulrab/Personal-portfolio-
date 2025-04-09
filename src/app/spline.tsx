'use client'
import React, { useEffect } from 'react'

const SplineItem = () => {
    useEffect(() => {
        import("@splinetool/viewer");
      }, []);
    
    return (
<>

    {/* Spline 3D Model */}
        {/* <spline-viewer url="https://prod.spline.design/qkfDJF1hEQKhmIu8/scene.splinecode"></spline-viewer>   */}
    <spline-viewer url="https://prod.spline.design/qkfDJF1hEQKhmIu8/scene.splinecode"  width={550} 
height={500} alpha></spline-viewer>
    </>
  )
}

export default SplineItem
