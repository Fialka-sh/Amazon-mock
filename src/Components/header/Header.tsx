import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { updatTotalProducts } from "../../redux/slices/cartSlice";
import { toggleSignText } from "../../redux/slices/userSlice";
import { SHOW_PRODUCTS, SHOW_PRODUCT_INFO } from "../../redux/slices/productsSlice";

import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";

import { categories } from "../../Assets/categoryList";

import StyledHeader, {
	StyledHeaderTopCategoryMenu,
	StyledHeaderTop,
	StyledHeaderTopLogo,
	StyledHeaderTopSearchArea,
	StyledHeaderTopNav,
	StyledHeaderTopNavSign,
	StyledHeaderTopCart,
	StyledHeaderTopCostumizedCartIcon,
	StyledHeaderMenuStripe,
	StyleHeaderTopNavOption,
	StyledHeaderTopSearchContainer,
	StyledHeaderTopNavOptions,
	StyledHeaderTopLogoArea,
} from "../../Styles/Header.style";
import { StyledSearchAreaSelect } from "../../Styles/Select.style";
import Popup from "../common/Popup";
import { Search } from "../common/Search";
import { StyledSearchAreaPopUp } from "../../Styles/Popup.style";
import products from "../../Assets/productsList";

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

	const handelAcountLog = async () => {
		if (user) {
			await signOut(auth);
		}
	};

	const getCategoryToShow = (value: string) => {
		dispatch(SHOW_PRODUCTS(value));
		navigate("/");

		if (displayPopupState === "block") setDisplayPopupState("none");
	};

	const changePopupDisplay = (value: string) => {
		setDisplayPopupState(value);
	};

	const [ValueInSearchInput, setValueInSearchInput] = useState("");
	const [searchPopupDisplay, setSearchPopupDisplay] = useState<string>("none");
	const [searchPopupResults, setSearchPopupResults] = useState<ProductData[]>([]);

	const searchMatchedProducts = (value: string) => {
		setSearchPopupDisplay("block");
		setValueInSearchInput(value);

		if (value === "") {
			setSearchPopupDisplay("none");
			setSearchPopupResults([]);
		} else {
			let ProductsResults: ProductData[] = products.filter(
				(product) => product.category === categoryToShow && product.name.toLowerCase().indexOf(value) !== -1
			);
			setSearchPopupResults(ProductsResults);
		}
	};

	const showProductInfo = (product: ProductData) => {
		setValueInSearchInput("");
		dispatch(SHOW_PRODUCT_INFO(product));
		navigate("/ProductInfo");
		setSearchPopupDisplay("none");
	};

	return (
		<StyledHeader>
			<StyledHeaderTop>
				<StyledHeaderTopLogoArea>
					<StyledHeaderTopCategoryMenu
						onClick={() => {
							changePopupDisplay("block");
						}}
					>
						<hr />
						<hr />
						<hr />
					</StyledHeaderTopCategoryMenu>
					<Popup
						displayPopup={displayPopupState}
						changePopupDisplay={changePopupDisplay}
						getCategoryToShow={getCategoryToShow}
					/>
					<Link to='/'>
						<StyledHeaderTopLogo
							width='150'
							height='35'
							src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
							alt='Amazon logo'
						></StyledHeaderTopLogo>
					</Link>
				</StyledHeaderTopLogoArea>

				<StyledHeaderTopSearchArea>
					<StyledHeaderTopSearchContainer>
						<StyledSearchAreaSelect
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
						</StyledSearchAreaSelect>
						<Search searchMatchedProducts={searchMatchedProducts} value={ValueInSearchInput} />
					</StyledHeaderTopSearchContainer>
					<StyledSearchAreaPopUp display={searchPopupDisplay}>
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
					</StyledSearchAreaPopUp>
				</StyledHeaderTopSearchArea>

				<StyledHeaderTopNav>
					<StyledHeaderTopNavSign>
						<StyleHeaderTopNavOption>
							<span>Hello {user.name}</span>

							<span onClick={handelAcountLog}>
								<Link to='/Login' style={{ color: "white", textDecoration: "none" }}>
									{toggle}
								</Link>
							</span>
						</StyleHeaderTopNavOption>
					</StyledHeaderTopNavSign>

					<StyledHeaderTopNavOptions>
						<StyleHeaderTopNavOption>
							<span>Returns</span>
							<span>& Orders</span>
						</StyleHeaderTopNavOption>
						<StyleHeaderTopNavOption>
							<span>Your</span>
							<span>Prime</span>
						</StyleHeaderTopNavOption>
					</StyledHeaderTopNavOptions>

					<StyledHeaderTopCart>
						<p>{numOfProducts}</p>
						<div>
							<Link to='checkout'>{<StyledHeaderTopCostumizedCartIcon></StyledHeaderTopCostumizedCartIcon>}</Link>
							<span>Cart</span>
						</div>
					</StyledHeaderTopCart>
				</StyledHeaderTopNav>
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
