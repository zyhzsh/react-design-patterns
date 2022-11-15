import React from 'react'

const ControlledOnboardingFlow = ({children,onFinish,currentIndex,onNext}) => {

  const currentChild = React.Children.toArray(children)[currentIndex];
  
  const ToNext = stepData =>{
    onNext(stepData);
  }

  if(React.isValidElement(currentChild)){
    return React.cloneElement(currentChild,{ToNext});
  }
  return currentChild
}

export default ControlledOnboardingFlow