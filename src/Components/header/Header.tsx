import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { updatTotalProducts } from "../../redux/slices/cartSlice";
import { toggleSignText } from "../../redux/slices/userSlice";
import { SHOW_PRODUCTS, SHOW_PRODUCT_INFO } from "../../redux/slices/productsSlice";

import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";

import { categories } from "../../Assets/categoryList";
import products from "../../Assets/productsList";

import Popup from "../common/Popup";
import { Search } from "../common/Search";

import StyledHeaderContainer, {
	StyledHeader,
	StyledLogoContainer,
	StyledLogo,
	StyledSearchContainer,
	StyledCategoryMenu,
	StyledSearchArea,
	StyledNavContainer,
	StyledNavSignAccountOption,
	StyledNavOptions,
	StyleNavOption,
	StyledCart,
	StyledCartIcon,
	StyledHeaderMenuStripe,
} from "../../Styles/Header.style";
import { StyledCategorySelect } from "../../Styles/Select.style";
import { StyledHeaderSearchPopUp } from "../../Styles/Popup.style";

type ProductData = {
	id: string;
	title: string;
	name: string;
	primery_price: number;
	discount: number;
	rating: number;
	imgSrc: string;
	category: string;
	quantity: number;
};

export default function Header() {
	const user = useAppSelector((state) => state.user.currentUser);
	const categoryToShow = useAppSelector((state) => state.products.categoryToShow);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const toggle: string = useAppSelector(toggleSignText);
	const numOfProducts: number = useAppSelector(updatTotalProducts);

	const [displayPopupState, setDisplayPopupState] = useState<string>("none");
	const [valueInSearchInput, setValueInSearchInput] = useState("");
	const [searchPopupDisplay, setSearchPopupDisplay] = useState<string>("none");
	const [searchPopupResults, setSearchPopupResults] = useState<ProductData[]>([]);

	const handelAcountLog = async (): Promise<void> => {
		if (user) {
			await signOut(auth);
		}
	};

	const getCategoryToShow = (value: string): void => {
		dispatch(SHOW_PRODUCTS(value));
		navigate("/");

		if (displayPopupState === "block") setDisplayPopupState("none");
	};

	const changePopupDisplay = (value: string): void => {
		setDisplayPopupState(value);
	};

	const searchMatchedProducts = (value: string): void => {
		setSearchPopupDisplay("block");
		setValueInSearchInput(value);

		if (value === "") {
			setSearchPopupDisplay("none");
			setSearchPopupResults(products);
		} else {
			if (categoryToShow === "All") {
				let searchMatchedProducts: ProductData[] = products.filter(
					(product) => product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
				);
				setSearchPopupResults(searchMatchedProducts);
			} else {
				let searchMatchedProducts: ProductData[] = products.filter(
					(product) =>
						product.category === categoryToShow && product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
				);

				setSearchPopupResults(searchMatchedProducts);
			}
		}
	};

	const showProductInfo = (product: ProductData) => {
		setValueInSearchInput("");
		dispatch(SHOW_PRODUCT_INFO(product));
		navigate("/ProductInfo");
		setSearchPopupDisplay("none");
	};

	return (
		<StyledHeaderContainer>
			<StyledHeader>
				<StyledLogoContainer>
					<StyledCategoryMenu
						onClick={() => {
							changePopupDisplay("block");
						}}
					>
						<hr />
						<hr />
						<hr />
					</StyledCategoryMenu>
					<Popup
						displayPopup={displayPopupState}
						changePopupDisplay={changePopupDisplay}
						getCategoryToShow={getCategoryToShow}
					/>
					<Link to='/'>
						<StyledLogo
							width='150'
							height='35'
							src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
							alt='Amazon logo'
						></StyledLogo>
					</Link>
				</StyledLogoContainer>

				<StyledSearchContainer>
					<StyledSearchArea>
						<StyledCategorySelect
							name='category '
							value={categoryToShow}
							onChange={(e: React.FormEvent<HTMLSelectElement>) => {
								getCategoryToShow(e.currentTarget.value);
							}}
						>
							{categories.map((category, i) => {
								return (
									<option key={i} value={category}>
										{category}
									</option>
								);
							})}
						</StyledCategorySelect>
						<Search searchMatchedProducts={searchMatchedProducts} value={valueInSearchInput} />
					</StyledSearchArea>

					<StyledHeaderSearchPopUp display={searchPopupDisplay}>
						{searchPopupResults.map((result, i) => {
							return (
								<p
									onClick={() => {
										showProductInfo(result);
									}}
									key={i}
								>
									{result.name}
								</p>
							);
						})}
					</StyledHeaderSearchPopUp>
				</StyledSearchContainer>

				<StyledNavContainer>
					<StyledNavSignAccountOption>
						<StyleNavOption>
							<span>Hello {user.name}</span>

							<span onClick={handelAcountLog}>
								<Link to='/Login' style={{ color: "white", textDecoration: "none" }}>
									{toggle}
								</Link>
							</span>
						</StyleNavOption>
					</StyledNavSignAccountOption>

					<StyledNavOptions>
						<StyleNavOption>
							<span>Returns</span>
							<span>& Orders</span>
						</StyleNavOption>
						<StyleNavOption>
							<span>Your</span>
							<span>Prime</span>
						</StyleNavOption>
					</StyledNavOptions>

					<StyledCart>
						<p>{numOfProducts}</p>
						<div>
							<Link to='checkout'>{<StyledCartIcon></StyledCartIcon>}</Link>
							<span>Cart</span>
						</div>
					</StyledCart>
				</StyledNavContainer>
			</StyledHeader>

			<StyledHeaderMenuStripe>
				<p>All</p>
				<p>Today's Deals</p>
				<p>Customer Service</p>
				<p>Registery</p>
				<p>Gift Cards</p>
				<p>Sell</p>
				<p>Local Dellivery In Israel</p>
			</StyledHeaderMenuStripe>
		</StyledHeaderContainer>
	);
}
