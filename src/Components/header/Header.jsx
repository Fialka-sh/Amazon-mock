import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { updatTotalProducts } from "../../redux/slices/cartSlice";
import { toggleSignText } from "../../redux/slices/userSlice";

import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../Styles/header.css";

export default function Header() {
	const user = useSelector((state) => state.user.currentUser);
	const toggle = useSelector(toggleSignText);
	const numOfProducts = useSelector(updatTotalProducts);

	const handelAcountLog = async () => {
		if (user) {
			await signOut(auth);
		}
	};

	return (
		<div id='header'>
			<div className='header__top'>
				<Link to='/'>
					<img
						className='header__logo'
						width='150'
						height='35'
						src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
						alt='amazon logo'
					/>
				</Link>
				<div className='header__search centerIt'>
					<input type='text' className='header__search_input' />
					<SearchIcon className='header__search_icon' />
				</div>
				<div className='header__nav'>
					<div className='header__navOption centerIt'>
						<span className='header__navOption_LineOne'>Hello</span>

						<Link to='/Login'>
							<span onClick={handelAcountLog} className='header__navOption_LineTwo'>
								{toggle}
							</span>
						</Link>
					</div>
					<div className='header__navOption centerIt'>
						<span className='header__navOption_LineOne'>Returns</span>
						<span className='header__navOption_LineTwo'>& Orders</span>
					</div>
					<div className='header__navOption centerIt'>
						<span className='header__navOption_LineOne'>Your</span>
						<span className='header__navOption_LineTwo'>Prime</span>
					</div>
				</div>
				<div className='header__cart centerIt'>
					<p>{numOfProducts}</p>
					<Link to='checkout'>{<ShoppingCartIcon className='header__cart_icon' />}</Link>
				</div>
			</div>
			<div className='header__menuStripe'>
				<p>All</p>
				<p>Today's Deals</p>
				<p>Customer Service</p>
				<p>Registery</p>
				<p>Gift Cards</p>
				<p>Sell</p>
				<p>Local Dellivery In Israel</p>
			</div>
		</div>
	);
}
