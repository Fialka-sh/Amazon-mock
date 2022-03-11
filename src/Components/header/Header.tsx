import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { updatTotalProducts } from "../../redux/slices/cartSlice";
import { toggleSignText } from "../../redux/slices/userSlice";

import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";

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
			<StyledHeaderTop>
				<Link to='/'>
					<StyledHeaderTopLogo
						width='150'
						height='35'
						src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
						alt='Amazon logo'
					></StyledHeaderTopLogo>
				</Link>

				<StyledHeaderTopSearch>
					<StyledInput searchInput type='text'></StyledInput>

					<StyledHeaderTopcostumizedSearchIcon></StyledHeaderTopcostumizedSearchIcon>
				</StyledHeaderTopSearch>

				<StyleHeaderTopNavOptions>
					<span>Hello {user.name}</span>

					<span onClick={handelAcountLog}>
						<Link to='/Login' style={{ color: "white", textDecoration: "none" }}>
							{toggle}
						</Link>
					</span>
				</StyleHeaderTopNavOptions>
				<StyledHeaderTopNav>
					<StyleHeaderTopNavOptions>
						<span>Returns</span>
						<span>& Orders</span>
					</StyleHeaderTopNavOptions>
					<StyleHeaderTopNavOptions>
						<span>Your</span>
						<span>Prime</span>
					</StyleHeaderTopNavOptions>
				</StyledHeaderTopNav>

				<StyledHeaderTopCart>
					<p>{numOfProducts}</p>
					<div>
						<Link to='checkout'>{<StyledHeaderTopCostumizedCartIcon></StyledHeaderTopCostumizedCartIcon>}</Link>
						<span>Cart</span>
					</div>
				</StyledHeaderTopCart>
			</StyledHeaderTop>
			<StyledHeaderMenuStripe>
				<p>All</p>
				<p>Today's Deals</p>
				<p>Customer Service</p>
				<p>Registery</p>
				<p>Gift Cards</p>
				<p>Sell</p>
				<p>Local Dellivery In Israel</p>
			</StyledHeaderMenuStripe>
		</StyledHeader>
	);
}
