import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ProductItem from './ProductItem';

class ProductList extends Component {
	static propTypes = {
		globalState: PropTypes.object.isRequired,
		updateGlobalState: PropTypes.func.isRequired,
	};

	constructor() {
		super();

		this.renderList = this.renderList.bind(this);
	}

	renderList(key) {
		return (
			<li key={key}>
				<ProductItem
					product={this.props.globalState.products[key]}
					updateGlobalState={this.props.updateGlobalState}
					globalState={this.props.globalState}
				/>
			</li>
		);
	}

	render() {
		const productKeys = Object.keys(this.props.globalState.products);
		return (
			<div id="cmpProductList">
				<ul className="product-list">
					<li key="first">
						<NavLink
							to="/add-product"
							className="btn-add-product"
						>
							+ Добавить новый товар
						</NavLink>
					</li>
					{
						productKeys ? productKeys.map(this.renderList) : null
					}
				</ul>
			</div>
		);
	}
}

export default ProductList;
