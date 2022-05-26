import Counter from './components/Counter';
import {Fragment} from "react"
import Header from "./components/Header"
import UserProfile from "./components/UserProfile"


import Auth from "./components/Auth"
import {useSelector, useDispatch} from "react-redux"

function App() {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	
	 
  return (
	<Fragment>
	 <Header/>
	 {isAuthenticated ? <UserProfile /> : <Auth/>}
   	 <Counter />
	</Fragment>
  );
}

export default App;
