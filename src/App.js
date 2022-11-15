import ControlledOnboardingFlow from './ControlledOnboardingFlow';
import { useState } from 'react';
const StepOne = ({ToNext})=>
<>
	<h1>Step - 1</h1>
	<button onClick={()=>ToNext({name:'Tom'})}>Next</button>
</>
const StepTwo = ({ToNext})=>
<>
	<h1>Step - 2</h1>
	<button onClick={()=>ToNext({age:32})}>Next</button>
</>
const StepThree = ({ToNext})=>
<>
	<h1>Step - 3</h1>
	<button onClick={()=>ToNext({hairColor:'Black'})}>Next</button>
</>


function App() {

	const [onboardingData,setOnboardingData] = useState({})
  const [currentIndex,setCurrentIndex] = useState(0);

  const ToNext= stepData =>{
		setOnboardingData({...onboardingData,...stepData});
		setCurrentIndex(prev=>prev+1);
  }



	return (
			<ControlledOnboardingFlow 
				currentIndex={currentIndex}
				onNext={ToNext}
			>
				<StepOne />
				<StepTwo />
				<StepThree />
			</ControlledOnboardingFlow>
	);
}

export default App;
