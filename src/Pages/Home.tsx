import React, { useState } from "react";

import Product from "../Components/common/Product";
import Slider from "../Components/common/Slider";
import Footer from "../Components/footer/Footer";

import bannersList from "../Assets/bannersList";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
			<StyledBannerContainer>
				<Slider banner={chosenBanner} />

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
			</StyledBannerContainer>

			<StyledProductsContainer>
				<StyledRow>
					<Product {...products[0]} />
					<Product {...products[1]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[2]} />
					<Product {...products[3]} />
					<Product {...products[4]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[5]} />
					<Product {...products[6]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[7]} />
					<Product {...products[8]} />
					<Product {...products[9]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[10]} />
					<Product {...products[11]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[12]} />
					<Product {...products[13]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[14]} />
				</StyledRow>

				<StyledRow>
					<Product {...products[15]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[16]} />
					<Product {...products[17]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[18]} />
				</StyledRow>
				<StyledRow>
					<Product {...products[19]} />
				</StyledRow>
			</StyledProductsContainer>
			<Footer />
		</StyledHome>
	);
}
