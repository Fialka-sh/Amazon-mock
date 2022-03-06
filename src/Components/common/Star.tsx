import React, { useEffect, useState } from "react";

export default function Star(rating: number) {
	const [stars, setStars] = useState<string>("");

	useEffect(() => {
		let tempStars: string = "";
		for (let i = 0; i < rating; i++) {
			tempStars += "🌟";
		}
		setStars(tempStars);
	}, [rating]);

	return (
		<div>
			<span role='img' aria-label='star'>
				{stars}
			</span>
		</div>
	);
}
