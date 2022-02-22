import React from "react";

import ProductInCart from "Components/common/ProductInCart";

import "../Styles/cart.css";

export default function Cart({ cart, setCart, numOfProducts, setNumOfProducts, totalToPay, setTotalToPay }) {
	const removeFromCart = (index, productToRemove) => {
		let tempCart = cart.filter((product, i) => i !== index);
		setCart([...tempCart]);
		updatTotalProducts(0, productToRemove.amount);
		updateTotaleToPay(tempCart);
	};

	const updateProductAmount = (e, productToUpdate) => {
		let formetAmount = productToUpdate.amount;
		let newAmount = parseInt(e.target.value);

		let tempCart = cart.map((product, i) => {
			if (product.id === productToUpdate.id) {
				productToUpdate.amount = newAmount;
				return productToUpdate;
			} else return product;
		});
		setCart([...tempCart]);
		updatTotalProducts(newAmount, formetAmount);
		updateTotaleToPay(tempCart);
	};

	const updatTotalProducts = (newAmount, formetAmount) => {
		numOfProducts = numOfProducts - formetAmount + newAmount;
		setNumOfProducts(numOfProducts);
	};

	const updateTotaleToPay = (cart) => {
		let tempTotal = 0;
		cart.forEach((product) => {
			tempTotal += product.amount * product.price;
		});
		setTotalToPay(tempTotal);
	};

	return (
		<div className='cartContainer'>
			<div className='cartContainer__checkOut '>
				<p className='cartContainer__checkOut_subtotal'>
					Subtotel ({numOfProducts} items) : <strong>$ {totalToPay}</strong>
				</p>
				<div className='cartContainer__checkOut_btn'>
					<button className='checkoutBtn btn'>Proceed to checkout</button>
				</div>
			</div>
			<div className='cartConainer__cart'>
				<h1>Shopping Cart</h1>
				<span className='pPrice'>Price</span>
				<hr />
				{cart.map((product, i) => {
					return (
						<ProductInCart
							product={product}
							key={i}
							i={i}
							updateProductAmount={updateProductAmount}
							removeFromCart={removeFromCart}
						/>
					);
				})}

				<div className='cartContainer__total'>
					<p>
						Subtotel ( {numOfProducts} items) : <strong>$ {totalToPay}</strong>
					</p>
				</div>
			</div>
		</div>
	);
}
