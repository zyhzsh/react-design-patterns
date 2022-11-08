import { SplitScreen } from "./SplitScreen";

const LeftHand = ()=>{
  return <h1>Left</h1>
}
const RightHand = ()=>{
  return <p>Right</p>
}

function App() {
  return (
    <SplitScreen
      // left={LeftHand}
      // right={RightHand}
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHand/>
      <RightHand/>
    </SplitScreen>
  );
}

export default App;
