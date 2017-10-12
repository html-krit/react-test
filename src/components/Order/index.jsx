import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductList/ProductItem';

class Order extends Component {
	static propTypes = {
		globalState: PropTypes.object.isRequired,
	};

	constructor(props) {
		super(props);

		//this.renderProduct = this.renderProduct.bind(this);
	}

	//renderProduct(productId) {
	//	const product = this.props.globalState.products.find(product => product.id === productId);
	//	return <ProductItem product={product}/>;
	//}


	render() {
		const { id, descr, products, price } = { ...this.props.globalState.order };
		return (
			<div id="cmpOrder">
				<header>
					<h2>Сформировать заказ</h2>
				</header>

				<div className="order">
					<h3>Заказ</h3>
					<div className="descr">
						{descr}
					</div>
					<div className="price">
						{price} UAH
					</div>
				</div>
			</div>
		);
	}
}

export default Order;
