export const calculatePriceAfterDiscount = (price: number, discount: number) => {
	let priceAfterDiscount = (price * (100 - discount)) / 100;
	let priceAfterDiscountWith2Decimals = FixPriceWith2DecimalsAndNoRound(priceAfterDiscount);
	return priceAfterDiscountWith2Decimals;
};
export const FixPriceWith2DecimalsAndNoRound = (price: number) => {
	let priceWith2Decimals = price.toString().slice(0, price.toString().indexOf(".") + 3);
	return parseFloat(priceWith2Decimals);
};

export const showPriceAfterDiscount = (price: number, discount: number) => {
	let priceAfterDiscount = calculatePriceAfterDiscount(price, discount);
	return priceAfterDiscount;
};

export const ShowDiscountPriceWithNoDecimals = (price: number, discount: number) => {
	let priceAfterDiscount = Math.floor(calculatePriceAfterDiscount(price, discount));
	return priceAfterDiscount;
};

export const ShowPriceDecimals = (price: number, discount: number) => {
	let priceAfterDiscount = calculatePriceAfterDiscount(price, discount);
	let decimals = priceAfterDiscount - Math.floor(priceAfterDiscount);
	return Math.floor(decimals * 100);
};

export const showDiscountAmount = (price: number, discount: number) => {
	let discountAmount = (price * discount) / 100;
	let discountAmountWith2Decimals = FixPriceWith2DecimalsAndNoRound(discountAmount);
	return discountAmountWith2Decimals;
};
