import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../Styles/header.css";

export default function Header({ numOfProducts }) {
	return (
		<div className='header centerIt'>
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
				<input type='text' className='header__searchInput' />
				<SearchIcon className='header__searchIcon' />
			</div>
			<div className='header__nav'>
				<div className='header__navOption centerIt'>
					<span className='header__navOption_LineOne'>Hello</span>
					<span className='header__navOption_LineTwo'>Sign In</span>
				</div>
				<div className='header__navOption centerIt'>
					<span className='header__navOption_LineOne'>Returns</span>
					<span className='header__navOption_LineTwo'>& Orders</span>
				</div>
				<div className='header__navOption centerIt'>
					<span className='header__navOption_LineOne'>Your</span>
					<span className='header__navOption_LineTwo'>Prime</span>
				</div>
				<div className='header__cart centerIt'>
					<Link to='checkout'>{<ShoppingCartIcon className='header__cart_icon' />}</Link>
					<p>{numOfProducts}</p>
				</div>
			</div>
		</div>
	);
}

// blockName-elemName_modName_modVal
