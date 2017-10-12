import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import {
	Switch,
} from 'react-router-dom';
import './App.css';
import base from '../helpers/base';
import sampleProducts from '../sample-data';


class App extends Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
		]),
	};

	constructor() {
		super();

		this.state = {
			products: {},
			order: {},
			orderList: {},
		};

		this.loadSamples = this.loadSamples.bind(this);
		this.updateGlobalState = this.updateGlobalState.bind(this);
	}

	componentWillMount() {
		this.ref = base.syncState('products', {
			context: this,
			state: 'products',
		});
	}

	loadSamples() {
		this.setState({
			products: sampleProducts,
		});
	}

	updateGlobalState(state, callback = () => {}) {
		const newState = lodash.merge(this.state, state);
		console.log('updated global state:', newState);
		this.setState(newState, callback);
	}

	render() {
		const { children } = this.props;
		const globalState = this.state;
		return (
			<Switch>
				{
					children.map((child, index) =>
						React.cloneElement(child, {
							key: index,
							globalState,
							updateGlobalState: this.updateGlobalState,
						}))
				}
			</Switch>
		);
	}
}

export default App;
