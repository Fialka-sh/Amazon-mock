import React, { useState, useMemo } from "react";
import { useAppSelector } from "../hooks";

import Product from "../Components/common/Product";
import Slider from "../Components/common/Slider";
import Footer from "../Components/footer/Footer";

import bannersList from "../Assets/bannersList";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import StyledHome, { StyledProductsContainer } from "../Styles/Home.style";
import StyledBannerContainer, { StyledArrowsContainer } from "../Styles/Banner.style";

export default function Home() {
	const productsToShow = useAppSelector((state) => state.products.productsToShow);

	const [bannerIToShow, setBannerIToShow] = useState<number>(0);
	let chosenBanner: string = bannersList[bannerIToShow];

	const changeBanner = (i: number) => {
		if (i === 1 && bannerIToShow === bannersList.length - 1) {
			setBannerIToShow(0);
		} else if (i === -1 && bannerIToShow === 0) {
			setBannerIToShow(bannersList.length - 1);
		} else setBannerIToShow(bannerIToShow + i);
	};

	const shuffledProductsList = useMemo(() => {
		let tempProducts = [...productsToShow];

		let currentIndex = tempProducts.length;
		let randomIndex = 0;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[tempProducts[currentIndex], tempProducts[randomIndex]] = [tempProducts[randomIndex], tempProducts[currentIndex]];
		}
		return tempProducts;
	}, [productsToShow]);

	return (
		<StyledHome>
			<StyledBannerContainer>
				<Slider banner={chosenBanner} />

				<StyledArrowsContainer>
					<span
						onClick={() => {
							changeBanner(1);
						}}
					>
						<ArrowBackIosIcon />
					</span>

					<span
						onClick={() => {
							changeBanner(-1);
						}}
					>
						<ArrowForwardIosIcon />{" "}
					</span>
				</StyledArrowsContainer>
			</StyledBannerContainer>

			<StyledProductsContainer>
				{shuffledProductsList.map((product, i: number) => {
					return <Product {...product} key={i} />;
				})}
			</StyledProductsContainer>
			<Footer />
		</StyledHome>
	);
}
