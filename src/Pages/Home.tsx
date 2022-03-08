import React, { useState } from "react";

import Product from "../Components/common/Product";
import Slider from "../Components/common/Slider";
import Footer from "../Components/footer/Footer";

import bannersList from "../Assets/bannersList";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../Styles/home.css";
import StyledHome, { StyledProductsContainer, StyledRow } from "../Styles/Home.style";
import StyledBannerContainer, { StyledArrowsContainer } from "../Styles/Banner.style";

type ProductData = {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
};

export default function Home(products: ProductData[]) {
	const [bannerIToShow, setBannerIToShow] = useState<number>(0);
	let chosenBanner: string = bannersList[bannerIToShow];

	const changeBanner = (i: number) => {
		if (i === 1 && bannerIToShow === bannersList.length - 1) {
			setBannerIToShow(0);
		} else if (i === -1 && bannerIToShow === 0) {
			setBannerIToShow(bannersList.length - 1);
		} else setBannerIToShow(bannerIToShow + i);
	};
	return (
		<StyledHome>
			{/* <div className='homeContainer'> */}

			<StyledBannerContainer>
				{/* <div className='home__topBanner'> */}

				{/* <div className='home__topBanner_banner'> */}
				<Slider banner={chosenBanner} />
				{/* </div> */}

				<StyledArrowsContainer>
					{/* <div className='home__topBanner_arrows'> */}
					<span
						// className='home__topBanner_arrow'
						onClick={() => {
							changeBanner(1);
						}}
					>
						<ArrowBackIosIcon />
					</span>

					<span
						// className='home__topBanner_arrow'
						onClick={() => {
							changeBanner(-1);
						}}
					>
						<ArrowForwardIosIcon />{" "}
					</span>
					{/* </div> */}
				</StyledArrowsContainer>
				{/* </div> */}
			</StyledBannerContainer>

			<StyledProductsContainer>
				{/* <div className='home__rows'> */}
				{/* <div */}
				{/* className='centerIt home__rows_row' */}
				{/* > */}
				<StyledRow>
					<Product {...products[0]} />
					<Product {...products[1]} />
					{/* </div> */}
				</StyledRow>
				<StyledRow>
					{/* <div */}
					{/* className='centerIt home__rows_row' */}
					{/* > */}
					<Product {...products[2]} />
					<Product {...products[3]} />
					<Product {...products[4]} />
					{/* </div> */}
				</StyledRow>
				<StyledRow>
					{/* <div */}
					{/* className='home__rows_row centerIt' */}
					{/* > */}
					<Product {...products[5]} />
					<Product {...products[6]} />
					{/* </div> */}
				</StyledRow>
				{/* </div> */}
			</StyledProductsContainer>
			<Footer />
			{/* </div> */}
		</StyledHome>
	);
}
