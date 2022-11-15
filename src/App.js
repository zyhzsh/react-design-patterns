import DataSource from './DataSource'
import { UserInfo } from './UserInfo';
import axios from 'axios';


const getServerData = url => async () =>{
	const res = await axios.get(url);
	return res.data;
}
const getLocalStorageData = key =>()=>{
	return localStorage.getItem(key);
}
const Text = ({message})=> <h1>{message}</h1>

function App() {

	return (
		<>
		<DataSource getDataFunc={getServerData('/users/234')} resourceName='user'>
			<UserInfo />
		</DataSource>
		<DataSource getDataFunc={getLocalStorageData('message')} resourceName='message'>
			<Text/>
		</DataSource>
		</>
	);
}

export default App;
