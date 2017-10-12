import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductItem extends Component {
	static propTypes = {
		product: PropTypes.object.isRequired,
		updateGlobalState: PropTypes.func.isRequired,
		globalState: PropTypes.object.isRequired,
	};

	addToOrder(e) {
		e.preventDefault();

		const order = { ...this.props.globalState.order };
		//действия для добавления товаров в ордер
		this.props.updateGlobalState({ order });
	}

	render() {
		const { id, image, name, vendor, description, price } = { ...this.props.product };
		return (
			<div className="product-item">
				<div className="image">
					<div className="image-wrap">
						<img src={image} alt={name}/>
						<button onClick={e => this.addToOrder(e)}>📦</button>
					</div>
				</div>
				<div className="text">
					<div className="name">{name}</div>
					<div className="price">Цена: {price}</div>
					<div className="vendor">Артикул {vendor}</div>
					<div className="descr">{description}</div>
				</div>
			</div>
		);
	}
}

export default ProductItem;
