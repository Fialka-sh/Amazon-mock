interface ProductData {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
}

const products: ProductData[] = [
	{
		id: "1atv",
		title:
			'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
		price: 200,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg",
		imgAlt: "T.V screen",
		quantity: 0,
	},
	{
		id: "22bchair",
		title:
			"Gaming Chair 350lb Big and Tall High Back Office Chair Ergonomic Racing Reclining Chair with 4D Armrests Swivel Tilt Rocker (White) ",
		price: 150,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/51kgTjI3RBL._AC_UL640_QL65_.jpg",
		imgAlt: "Gaming chair",
		quantity: 0,
	},
	{
		id: "33webcam",
		title: "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction ",
		price: 100,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg",
		imgAlt: "Webcam",
		quantity: 0,
	},
	{
		id: "44watch",
		title: "FITVII Smart Fitness Tracker Watch, Smartwatch with Heart Rate, Blood Pressure Monitor ",
		price: 200,
		rating: 1,
		imgSrc: "https://m.media-amazon.com/images/I/61sXk7iPfYL._AC_UY436_QL65_.jpg",
		imgAlt: "Fitness Tracker Watch",
		quantity: 0,
	},
	{
		id: "55ringtoy",
		title: "Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set",
		price: 50,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL640_QL65_.jpg",
		imgAlt: "circles",
		quantity: 0,
	},
	{
		id: "6keyboard",
		title: "MK270 Wireless Keyboard and Mouse Combo",
		price: 100,
		rating: 2,
		imgSrc: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL640_QL65_.jpg",
		imgAlt: "wireless keyboard",
		quantity: 0,
	},
	{
		id: "77pilatise",
		title:
			"ProBody Pilates Ball Exercise Ball Yoga Ball, Multiple Sizes. Fitness, Balance, Workout at Home, Office and Physical Therapy w/ Pump",
		price: 50,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/817GBemAdHL._AC_UL320_.jpg",
		imgAlt: "wireless keyboard",
		quantity: 0,
	},
	{
		id: "2atv",
		title:
			'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
		price: 200,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg",
		imgAlt: "T.V screen",
		quantity: 0,
	},
	{
		id: "23bchair",
		title:
			"Gaming Chair 350lb Big and Tall High Back Office Chair Ergonomic Racing Reclining Chair with 4D Armrests Swivel Tilt Rocker (White) ",
		price: 150,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/51kgTjI3RBL._AC_UL640_QL65_.jpg",
		imgAlt: "Gaming chair",
		quantity: 0,
	},
	{
		id: "23webcam",
		title: "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction ",
		price: 100,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg",
		imgAlt: "Webcam",
		quantity: 0,
	},
	{
		id: "414watch",
		title: "FITVII Smart Fitness Tracker Watch, Smartwatch with Heart Rate, Blood Pressure Monitor ",
		price: 200,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/61sXk7iPfYL._AC_UY436_QL65_.jpg",
		imgAlt: "Fitness Tracker Watch",
		quantity: 0,
	},
	{
		id: "515ringtoy",
		title: "Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set",
		price: 50,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL640_QL65_.jpg",
		imgAlt: "circles",
		quantity: 0,
	},
	{
		id: "16keyboard",
		title: "MK270 Wireless Keyboard and Mouse Combo",
		price: 100,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL640_QL65_.jpg",
		imgAlt: "wireless keyboard",
		quantity: 0,
	},
	{
		id: "17pilatise",
		title:
			"ProBody Pilates Ball Exercise Ball Yoga Ball, Multiple Sizes. Fitness, Balance, Workout at Home, Office and Physical Therapy w/ Pump",
		price: 50,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/817GBemAdHL._AC_UL320_.jpg",
		imgAlt: "wireless keyboard",
		quantity: 0,
	},
	{
		id: "3atv",
		title:
			'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
		price: 200,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg",
		imgAlt: "T.V screen",
		quantity: 0,
	},
	{
		id: "3bchair",
		title:
			"Gaming Chair 350lb Big and Tall High Back Office Chair Ergonomic Racing Reclining Chair with 4D Armrests Swivel Tilt Rocker (White) ",
		price: 150,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/51kgTjI3RBL._AC_UL640_QL65_.jpg",
		imgAlt: "Gaming chair",
		quantity: 0,
	},
	{
		id: "33webcam",
		title: "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction ",
		price: 100,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg",
		imgAlt: "Webcam",
		quantity: 0,
	},
	{
		id: "4164watch",
		title: "FITVII Smart Fitness Tracker Watch, Smartwatch with Heart Rate, Blood Pressure Monitor ",
		price: 200,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/61sXk7iPfYL._AC_UY436_QL65_.jpg",
		imgAlt: "Fitness Tracker Watch",
		quantity: 0,
	},
	{
		id: "151ringtoy",
		title: "Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set",
		price: 50,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL640_QL65_.jpg",
		imgAlt: "circles",
		quantity: 0,
	},
	{
		id: "26keyboard",
		title: "MK270 Wireless Keyboard and Mouse Combo",
		price: 100,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL640_QL65_.jpg",
		imgAlt: "wireless keyboard",
		quantity: 0,
	},
	{
		id: "7cpilatise",
		title:
			"ProBody Pilates Ball Exercise Ball Yoga Ball, Multiple Sizes. Fitness, Balance, Workout at Home, Office and Physical Therapy w/ Pump",
		price: 50,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/817GBemAdHL._AC_UL320_.jpg",
		imgAlt: "wireless keyboard",
		quantity: 0,
	},
];

export default products;
