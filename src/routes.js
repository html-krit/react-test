import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import App from './components/App';
import MainPage from './pages/MainPage';
import AddProduct from './components/AddProduct';
import NotFound from './components/NotFound';

const PassStateThruRoute = ({ component: Component, globalState, updateGlobalState, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			<Component {...props} updateGlobalState={updateGlobalState} globalState={globalState}/>
		}
	/>
);

export default (
	<Router>
		<App>
			<PassStateThruRoute exact path="/" component={MainPage}/>
			<PassStateThruRoute exact path="/add-product" component={AddProduct}/>
			<PassStateThruRoute component={NotFound}/>
		</App>
	</Router>
);
