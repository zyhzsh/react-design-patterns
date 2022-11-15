import UncontrolledOnBoardingFlow from './UncontrolledOnBoardingFlow';

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

	return (
			<UncontrolledOnBoardingFlow onFinish={data =>{
				console.log(data);
				alert('Finshed all step')
			}}>
				<StepOne />
				<StepTwo />
				<StepThree />
			</UncontrolledOnBoardingFlow>
	);
}

export default App;
