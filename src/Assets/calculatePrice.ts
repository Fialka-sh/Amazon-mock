export const showPriceAfterDiscount = (price: number) => {
	let priceAfterDiscount = (price * 0.65 + 35).toFixed(2);

	return parseFloat(priceAfterDiscount);
};

export const ShowPriceWithNoDecimals = (price: number) => {
	let priceAfterDiscount = Math.floor(price * 0.65 + 35);
	return priceAfterDiscount;
};

export const ShowPriceDecimals = (price: number) => {
	let priceAfterDiscount = price * 0.65 + 35;
	let decimals = priceAfterDiscount - Math.floor(priceAfterDiscount);
	return (decimals * 100).toFixed();
};

export const showPrimeryPrice = (price: number) => {
	return price;
};

export const showDiscount = (price: number) => {
	let discountAmount = (price - price * 0.65 + 35).toFixed(2);
	let discountAmountParsed = parseInt(discountAmount);
	return (price - discountAmountParsed).toFixed(2);
};
export const showDiscountPrecentage = (price: number) => {
	let priceAfterDiscount = (price - price * 0.65 + 35).toFixed(2);
	let priceAfterDiscountParsed = parseInt(priceAfterDiscount);

	let discountPrecentage = (100 - (priceAfterDiscountParsed * 100) / price).toFixed(2);

	return discountPrecentage;
};

// export const parsePrice = (price) => {
// 	return
// }
