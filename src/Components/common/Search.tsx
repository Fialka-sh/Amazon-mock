import React from "react";

import StyledInput from "../../Styles/Input.style";
import { StyledSearchContainer } from "../../Styles/Search.style";
import { StyledHeaderTopcostumizedSearchIcon } from "../../Styles/Search.style";

export const Search = (props: { searchMatchedProducts: any; value: string }) => {
	return (
		<StyledSearchContainer>
			<StyledInput
				value={props.value}
				searchInput
				type='text'
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					props.searchMatchedProducts(e.currentTarget.value);
				}}
			></StyledInput>

			<StyledHeaderTopcostumizedSearchIcon></StyledHeaderTopcostumizedSearchIcon>
		</StyledSearchContainer>
	);
};
