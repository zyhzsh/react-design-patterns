import DataSource from './DataSource'
import { UserInfo } from './UserInfo';
import axios from 'axios';


const getServerData = url => async () =>{
	const res = await axios.get(url);
	return res.data;
}


function App() {

	return (
		<>
		<DataSource getDataFunc={getServerData('/users/234')} resourceName='user'>
			<UserInfo />
		</DataSource>
		</>
	);
}

export default App;
