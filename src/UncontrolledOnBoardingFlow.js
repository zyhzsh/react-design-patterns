import React, { useState } from 'react'

const UncontrolledOnBoardingFlow = ({children,onFinish}) => {
  const [onboardingData,setOnboardingData] = useState({})
  const [currentIndex,setCurrentIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentIndex];
  
  const ToNext= stepData =>{
    const nextIndex = currentIndex +1 ;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    }
    console.log(stepData)
    if(nextIndex<children.length){
      setCurrentIndex(nextIndex);
    }
    if(nextIndex===children.length){
      onFinish(updatedData)
    }
    setOnboardingData(updatedData)
  }

  if(React.isValidElement(currentChild)){
    return React.cloneElement(currentChild,{ToNext});
  }
  return currentChild
}

export default UncontrolledOnBoardingFlow