import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { updatTotalProducts } from "../../redux/slices/cartSlice";
import { toggleSignText } from "../../redux/slices/userSlice";
import { SHOW_PRODUCTS } from "../../redux/slices/productsSlice";

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
	StyledHeaderTopNavSign,
	StyledHeaderTopCart,
	StyledHeaderTopCostumizedCartIcon,
	StyleHeaderTopNavOptions,
} from "../../Styles/Header.style";
import { StyledSearchSelect } from "../../Styles/Select.style";

export default function Header() {
	const user = useAppSelector((state) => state.user.currentUser);
	const categoryToShow = useAppSelector((state) => state.products.categoryToShow);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const toggle: string = useAppSelector(toggleSignText);
	const numOfProducts: number = useAppSelector(updatTotalProducts);

	const handelAcountLog = async () => {
		if (user) {
			await signOut(auth);
		}
	};

	const getCategoryToShow = (value: string) => {
		dispatch(SHOW_PRODUCTS(value));
		navigate("/");
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
					<StyledSearchSelect
						name='category '
						value={categoryToShow}
						onChange={(e: React.FormEvent<HTMLSelectElement>) => {
							getCategoryToShow(e.currentTarget.value);
						}}
					>
						<option value='All'>All</option>
						<option value='Sport'>Sport</option>
						<option value='Kitchen'>Kitchen</option>
						<option value='Furniture'>Furniture</option>
						<option value='Kids'>Kids</option>
						<option value='Outdoor'>Outdoor</option>
						<option value='Electronics'>Electronics</option>
						<option value='Gadgets'>Gadgets</option>
					</StyledSearchSelect>

					<StyledInput searchInput type='text'></StyledInput>

					<StyledHeaderTopcostumizedSearchIcon></StyledHeaderTopcostumizedSearchIcon>
				</StyledHeaderTopSearch>

				<StyledHeaderTopNavSign>
					<StyleHeaderTopNavOptions>
						<span>Hello {user.name}</span>

						<span onClick={handelAcountLog}>
							<Link to='/Login' style={{ color: "white", textDecoration: "none" }}>
								{toggle}
							</Link>
						</span>
					</StyleHeaderTopNavOptions>
				</StyledHeaderTopNavSign>

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
