import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import Order from '../components/Order';
import OrderList from '../components/OrderList';

class MainPage extends Component {
	static propTypes = {
		globalState: PropTypes.object.isRequired,
		updateGlobalState: PropTypes.func.isRequired,
	};

	render() {
		return (
			<div className="main">
				<ProductList
					globalState={this.props.globalState}
					updateGlobalState={this.props.updateGlobalState}
				/>
				<Order globalState={this.props.globalState}/>
				<OrderList globalState={this.props.globalState}/>
			</div>
		);
	}
}

export default MainPage;
