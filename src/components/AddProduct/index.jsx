import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class AddProduct extends Component {
	static propTypes = {
		globalState: PropTypes.object.isRequired,
		updateGlobalState: PropTypes.func.isRequired,
	};

	constructor() {
		super();

		this.state = {
			name: '',
			image: '',
			description: '',
			vendor: '',
			price: '',
		};

		this.clickHandler = this.clickHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(e) {
		const fieldName = e.target.name;
		this.setState({
			[fieldName]: e.target.value,
		});
	}

	clickHandler(e) {
		e.preventDefault();

		const products = { ...this.props.globalState.products };

		products[this.state.vendor] = {
			name: this.state.name,
			image: this.state.image,
			description: this.state.description,
			price: this.state.price,
			vendor: this.state.vendor,
		};

		this.props.updateGlobalState({ products });
	}

	render() {
		return (
			<div id="cmpAddProduct">
				<h2>Добавление товара</h2>
				<div className="row">
					<input type="text" name="name" onChange={e => this.onChangeHandler(e)} placeholder="Название"/>
				</div>
				<div className="row">
					<input type="text" name="image" onChange={e => this.onChangeHandler(e)} placeholder="Ссылка на картинку"/>
				</div>
				<div className="row">
					<textarea name="description" onChange={e => this.onChangeHandler(e)} placeholder="Описание"></textarea>
				</div>
				<div className="row">
					<input type="text" name="vendor" onChange={e => this.onChangeHandler(e)} placeholder="Артикул"/>
				</div>
				<div className="row">
					<input type="number" name="price" onChange={e => this.onChangeHandler(e)} placeholder="Цена"/>
				</div>

				<button onClick={this.clickHandler}>Добавить</button>
				<NavLink to="/" className="btn-back">&larr; Вернуться</NavLink>
			</div>
		);
	}
}

export default AddProduct;
