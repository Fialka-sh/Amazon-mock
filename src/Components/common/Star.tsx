import React, { useEffect, useState } from "react";
import StyledStar from "../../Styles/Star.style";

interface RatingProps {
	productRating: number;
}

export default function Star(props: RatingProps): JSX.Element {
	const [stars, setStars] = useState<string>("");

	useEffect(() => {
		console.log(props.productRating);

		let tempStars: string = "";
		for (let i = 0; i < props.productRating; i++) {
			console.log("enter 🌟");

			tempStars += "🌟";
		}

		setStars(tempStars);
	}, [props.productRating]);

	return (
		<StyledStar>
			<span role='img' aria-label='star'>
				{stars}
			</span>
		</StyledStar>
	);
}
