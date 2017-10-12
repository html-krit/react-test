import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderList extends Component {
	static propTypes = {
		globalState: PropTypes.object.isRequired,
	};

	render() {
		return (
			<div id="cmpOrderList">
				<header>
					<h2>Список заказов</h2>
				</header>
			</div>
		);
	}
}

export default OrderList;
