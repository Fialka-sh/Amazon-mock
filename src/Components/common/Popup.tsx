import React from "react";
import { categories } from "../../Assets/categoryList";
import {
	StyledCategoryPopUp,
	StyledCategoryPopUpClose,
	StyledCategoryPopUpHeader,
	StyledCategoryPopUpBody,
} from "../../Styles/Popup.style";

export default function Popup(props: { displayPopup: string; changePopupDisplay: any; getCategoryToShow: any }) {
	return (
		<StyledCategoryPopUp display={props.displayPopup}>
			<StyledCategoryPopUpClose
				onClick={() => {
					props.changePopupDisplay("none");
				}}
			>
				<p>X</p>
			</StyledCategoryPopUpClose>
			<StyledCategoryPopUpHeader>
				<div>
					<span>Browse</span>
					<h2>Amazon</h2>
				</div>
			</StyledCategoryPopUpHeader>
			<h3>All Departments</h3>
			<StyledCategoryPopUpBody>
				{categories.map((category, i) => {
					return (
						<p
							onClick={() => {
								props.getCategoryToShow(category);
							}}
							key={i}
						>
							{category}
						</p>
					);
				})}
			</StyledCategoryPopUpBody>
		</StyledCategoryPopUp>
	);
}
