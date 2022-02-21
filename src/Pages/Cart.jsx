import React from "react";
import InfoIcon from "@mui/icons-material/Info";

import ProductInCart from "Components/common/ProductInCart";

import "../Styles/cart.css";

export default function Cart({ cart, setCart, numOfProducts, setNumOfProducts, totalToPay, setTotalToPay }) {
	const removeFromCart = (index, productToRemove) => {
		let tempCart = cart.filter((product, i) => i !== index);
		// console.log(tempCart);
		setCart([...tempCart]);

		updatTotalProducts(0, productToRemove.amount);
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
	};

	const updatTotalProducts = (newAmount, formetAmount) => {
		// console.log(numOfProducts, "-", formetAmount, "+", newAmount);
		numOfProducts = numOfProducts - formetAmount + newAmount;
		// console.log(numOfProducts);
		setNumOfProducts(numOfProducts);
		updateTotaleToPay();
	};

	const updateTotaleToPay = () => {
		console.log(cart);
		let tempTotal = 0;
		cart.forEach((product) => {
			console.log(tempTotal, product.amount * product.price);
			tempTotal += product.amount * product.price;
		});
		console.log(tempTotal);
		setTotalToPay(tempTotal);
	};

	return (
		<div className='cartContainer'>
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
			<div className='cartContainer__checkOut '>
				<div>
					<InfoIcon className='infoIcon' />
					<small>
						<strong>Free shipping</strong>
					</small>
				</div>
				<p className='cartContainer__checkOut_subtotal'>
					Subtotel ({numOfProducts} items) : <strong>$ {totalToPay}</strong>
				</p>
				<div className='cartContainer__checkOut_btn'>
					<button className='checkoutBtn btn'>Proceed to checkout</button>
				</div>
			</div>
		</div>
	);
}
