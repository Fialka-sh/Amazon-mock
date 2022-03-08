import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { updatTotalProducts } from "../../redux/slices/cartSlice";
import { toggleSignText } from "../../redux/slices/userSlice";

import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";

// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../Styles/header.css";
import StyledInput from "../../Styles/Input.style";
import StyledHeader, {
	StyledHeaderMenuStripe,
	StyledHeaderTop,
	StyledHeaderTopLogo,
	StyledHeaderTopSearch,
	StyledHeaderTopcostumizedSearchIcon,
	StyledHeaderTopNav,
	StyledHeaderTopCart,
	StyledHeaderTopCostumizedCartIcon,
	StyleHeaderTopNavOptions,
} from "../../Styles/Header.style";

export default function Header() {
	const user = useAppSelector((state) => state.user.currentUser);
	const toggle: string = useAppSelector(toggleSignText);
	const numOfProducts: number = useAppSelector(updatTotalProducts);

	const handelAcountLog = async () => {
		if (user) {
			await signOut(auth);
		}
	};

	return (
		<StyledHeader>
			{/* <div id='header'> */}

			<StyledHeaderTop>
				{/* <div className='header__top'> */}
				<Link to='/'>
					<StyledHeaderTopLogo
						// <img
						// 	className='header__logo'
						width='150'
						height='35'
						src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
						alt='Amazon logo'
						//  />
					></StyledHeaderTopLogo>
				</Link>

				<StyledHeaderTopSearch>
					{/* <div className='header__search centerIt'> */}
					<StyledInput
						searchInput
						type='text'
						// className='header__search_input'
					></StyledInput>

					<StyledHeaderTopcostumizedSearchIcon>
						{/* <SearchIcon */}
						{/* className='header__search_icon' */}
						{/* /> */}
					</StyledHeaderTopcostumizedSearchIcon>
					{/* </div> */}
				</StyledHeaderTopSearch>

				<StyledHeaderTopNav>
					{/* <div className='header__nav'> */}

					<StyleHeaderTopNavOptions>
						{/* <div className='header__navOption centerIt'> */}
						<span
						// className='header__navOption_LineOne'
						>
							Hello
						</span>

						<Link to='/Login'>
							<span
								onClick={handelAcountLog}
								//  className='header__navOption_LineTwo'
							>
								{toggle}
							</span>
						</Link>
						{/* </div> */}
					</StyleHeaderTopNavOptions>
					<StyleHeaderTopNavOptions>
						{/* <div className='header__navOption centerIt'> */}
						<span
						// className='header__navOption_LineOne'
						>
							Returns
						</span>
						<span
						// className='header__navOption_LineTwo'
						>
							& Orders
						</span>
						{/* </div> */}
					</StyleHeaderTopNavOptions>
					<StyleHeaderTopNavOptions>
						{/* <div 
						className='header__navOption centerIt'
						> */}
						<span
						// className='header__navOption_LineOne'
						>
							Your
						</span>
						<span
						// className='header__navOption_LineTwo'
						>
							Prime
						</span>
						{/* </div> */}
					</StyleHeaderTopNavOptions>
					{/* </div> */}
				</StyledHeaderTopNav>

				<StyledHeaderTopCart>
					{/* <div className='header__cart centerIt'> */}
					<p>{numOfProducts}</p>
					<Link to='checkout'>
						{
							<StyledHeaderTopCostumizedCartIcon></StyledHeaderTopCostumizedCartIcon>
							// <ShoppingCartIcon className='header__cart_icon' />
						}
					</Link>
					{/* </div> */}
				</StyledHeaderTopCart>
				{/* </div> */}
			</StyledHeaderTop>
			<StyledHeaderMenuStripe>
				{/* <div className='header__menuStripe'> */}
				<p>All</p>
				<p>Today's Deals</p>
				<p>Customer Service</p>
				<p>Registery</p>
				<p>Gift Cards</p>
				<p>Sell</p>
				<p>Local Dellivery In Israel</p>
				{/* </div> */}
			</StyledHeaderMenuStripe>
			{/* </div> */}
		</StyledHeader>
	);
}
