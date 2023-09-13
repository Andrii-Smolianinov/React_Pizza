import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={279}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="rgb(217, 249, 157)"
    foregroundColor="rgba(243, 42, 59, 0.445)"    
  >
    <rect x="2" y="224" rx="0" ry="0" width="272" height="29" /> 
    <rect x="2" y="283" rx="0" ry="0" width="275" height="75" /> 
    <rect x="28" y="391" rx="0" ry="0" width="95" height="41" /> 
    <rect x="77" y="432" rx="0" ry="0" width="1" height="0" /> 
    <rect x="155" y="380" rx="6" ry="6" width="110" height="61" /> 
    <rect x="230" y="395" rx="0" ry="0" width="5" height="6" /> 
    <rect x="0" y="0" rx="6" ry="6" width="275" height="184" />
  </ContentLoader>
)

export default Skeleton