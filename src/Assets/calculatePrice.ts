export const ShowPriceWithNoDecimals = (price: number) => {
	let priceAfterDiscount = (price * 0.8 + 35 - price).toFixed(2);
	let priceAfterDiscountParsed = parseInt(priceAfterDiscount);
	return Math.floor(priceAfterDiscountParsed);
};
export const ShowPriceDecimals = (price: number) => {
	let priceAfterDiscount = (price * 0.8 + 35 - price).toFixed(2);
	let priceAfterDiscountParsed = parseInt(priceAfterDiscount);
	let decimals = priceAfterDiscountParsed - Math.floor(priceAfterDiscountParsed);
	return (decimals * 100).toFixed();
};

export const showPrimeryPrice = (price: number) => {
	return price;
};

export const showDiscount = (price: number) => {
	let priceAfterDiscount = (price * 0.8 + 35 - price).toFixed(2);
	let priceAfterDiscountParsed = parseInt(priceAfterDiscount);
	return price - priceAfterDiscountParsed;
};
export const showDiscountPrecentage = (price: number) => {
	let priceAfterDiscount = (price * 0.8 + 35 - price).toFixed(2);
	let priceAfterDiscountParsed = parseInt(priceAfterDiscount);

	let discountPrecentage = 100 - (priceAfterDiscountParsed * 100) / price;

	return discountPrecentage;
};
