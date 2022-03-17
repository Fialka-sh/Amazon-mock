interface ProductData {
	id: string;
	title: string;
	name: string;
	primery_price: number;
	discount: number;
	rating: number;
	imgSrc: string;
	category: string;
	quantity: number;
}

const products: ProductData[] = [
	{
		id: "1atv",
		title:
			'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
		name: "T.V screen",
		primery_price: 200.01,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg",
		category: "Electronics",
		quantity: 0,
	},
	{
		id: "22bchair",
		title:
			"Gaming Chair 350lb Big and Tall High Back Office Chair Ergonomic Racing Reclining Chair with 4D Armrests Swivel Tilt Rocker (White) ",
		name: "Gaming chair",
		primery_price: 150.3,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/51kgTjI3RBL._AC_UL640_QL65_.jpg",
		category: "Gadgets",
		quantity: 0,
	},
	{
		id: "33webcam",
		title: "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction ",
		name: "Webcam",
		primery_price: 100.34,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg",
		category: "Gadgets",
		quantity: 0,
	},
	{
		id: "44watch",
		title: "FITVII Smart Fitness Tracker Watch, Smartwatch with Heart Rate, Blood Pressure Monitor ",
		name: "Fitness Tracker Watch",
		primery_price: 200.23,
		discount: 15,
		rating: 1,
		imgSrc: "https://m.media-amazon.com/images/I/61sXk7iPfYL._AC_UY436_QL65_.jpg",
		category: "Gadgets",
		quantity: 0,
	},
	{
		id: "55ringtoy",
		title: "Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set",
		name: "circles",
		primery_price: 50.09,
		discount: 15,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL640_QL65_.jpg",
		category: "Kids",
		quantity: 0,
	},
	{
		id: "6keyboard",
		title: "MK270 Wireless Keyboard and Mouse Combo",
		name: "wireless keyboard",
		primery_price: 100.54,
		discount: 15,
		rating: 2,
		imgSrc: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL640_QL65_.jpg",
		category: "Gadgets",
		quantity: 0,
	},
	{
		id: "77pilatise",
		title:
			"ProBody Pilates Ball Exercise Ball Yoga Ball, Multiple Sizes. Fitness, Balance, Workout at Home, Office and Physical Therapy w/ Pump",
		name: "wireless keyboard",
		primery_price: 50.34,
		discount: 15,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/817GBemAdHL._AC_UL320_.jpg",
		category: "Sport",
		quantity: 0,
	},
	{
		id: "24DoorCabinet",
		title: "Create-a-Cart White 4 Door Cabinet Kitchen Cart with Gray Granite Top by Home Styles",
		name: "4 Door Cabinet",
		primery_price: 202.93,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/61b3WBoA2KL._AC_UL640_QL65_.jpg",
		category: "Furniture",
		quantity: 0,
	},
	{
		id: "23bMacBookProCharger",
		title:
			"Mac Book Pro Charger - 100W USB C Charger Power Adapter Compatible with MacBook Pro 16, 15, 14, 13 Inch, MacBook Air 13 Inch, iPad Pro ",
		name: "Mac Book Pro Charger",
		primery_price: 35.99,
		discount: 15,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/51R2zL77DzL._AC_UY436_QL65_.jpg",
		category: "Gadgets",
		quantity: 0,
	},
	{
		id: "23ChildCarrier",
		title: "Deuter Kid Comfort Child Carrier and Backpack",
		name: "Child Carrier",
		primery_price: 320.34,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/81nXcaa9W1L._AC_UL640_QL65_.jpg",
		category: "Kids",
		quantity: 0,
	},
	{
		id: "41IndoorDoorwayGym",
		title:
			"Gym1 - 6 Piece Indoor Doorway Gym Set for Kids - Indoor Swing for Kids Includes Kids Swing Chair, Rings, Hanging Trapeze, Ladder, Swinging Rope & Pullup Bar - Sensory Swing Set Accessory Playground",
		name: "Indoor Doorway Gym",
		primery_price: 200.43,
		discount: 15,
		rating: 6,
		imgSrc: "https://m.media-amazon.com/images/I/61ArPVMP0rL._AC_UL640_QL65_.jpg",
		category: "Sports",
		quantity: 0,
	},
	{
		id: "51SpacePuzzle",
		title:
			"Solar System Space Puzzle for Adults, 1000 Piece Jigsaw Puzzle & Bonus Space Fact Poster by A2PLAY, Premium Materials, 27.5 x 19.7 in",
		name: "Space Puzzle",
		primery_price: 19.97,
		discount: 15,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/91pjXpQkk8L._AC_UL640_QL65_.jpg",
		category: "Kids",
		quantity: 0,
	},
	{
		id: "16Puzzles",
		title:
			"Kids Puzzle,100 Pieces Puzzles for Kids,Cardboard Kids Puzzles for Ages 5-12 Year olds,Educational Jigsaw Puzzle Kids Toy",
		name: "Puzzles",
		primery_price: 19.99,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/71uVgwkpo-L._AC_UL640_QL65_.jpg",
		category: "Kids",
		quantity: 0,
	},
	{
		id: "17xerciseStrap",
		title:
			"MJIYA Yoga Stretch Exercise Strap with 10 Flexible Loops Thicken Exercise Band Gravity Fitness Stretching Strap Physical Therapist Recommended Exercises and Pilates Workouts",
		name: "exercise Strap",
		primery_price: 8.25,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/71wIouI5G-L._AC_UY436_QL65_.jpg",
		category: "Sport",
		quantity: 0,
	},
	{
		id: "3Salomon Womens",
		title: "Salomon Women's Quest",
		name: "Salomon Women",
		primery_price: 229.95,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/61N+F3sIz2S._AC_UY695_.jpg",
		category: "Outdoor",
		quantity: 0,
	},
	{
		id: "3bTents ",
		title:
			"UNP Tents 6 Person Waterproof Windproof Easy Setup,Double Layer Family Camping Tent with 1 Mesh Door & 5 Large Mesh Windows -10'X9'X78in(H)",
		name: "Tents",
		primery_price: 149.35,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/61dAlGwKxEL._AC_UY436_QL65_.jpg",
		category: "Outdoor",
		quantity: 0,
	},
	{
		id: "33SalomonMen",
		title: "Salomon Men's X Ultra 3 Mid GTX Hiking",
		name: "Salomon Men",
		primery_price: 145.73,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/81zbIt0p5qL._AC_UX695_.jpg",
		category: "Outdoor",
		quantity: 0,
	},
	{
		id: "416Yoga Dome",
		title:
			"The Hot Inflatable Yoga Dome | Portable, Lightweight & Easy Set Up Home Yoga Studio | Hot Air Bubble Tent | Personal Hot Yoga Equipment for Indoor & Outdoor",
		name: "Yoga Dome",
		primery_price: 899.54,
		discount: 15,
		rating: 3,
		imgSrc: "https://m.media-amazon.com/images/I/51W0m0c-43L._AC_UY436_QL65_.jpg",
		category: "Sport",
		quantity: 0,
	},

	{
		id: "41DeepFryer",
		title:
			"Professional-style Deep Fryer with Dual Baskets, 3600W 2x6L Stainless Steel Electric Commercial Deep Fryers, for Turkey French Fries Home Kitchen Restaurant",
		name: "Deep Fryer",
		primery_price: 174.99,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/71V9-iEwmkL._AC_UL640_QL65_.jpg",
		category: "Kitchen",
		quantity: 0,
	},

	{
		id: "41BarnDoor",
		title:
			"Autumn Alley Barn Door Rustic Toilet Paper Holder Wall Mount with Shelf – Rustic Farmhouse Home Décor – Shabby Chic Bathroom Decorations – Versatile and Functional Towel Holder with Shelf (Brown)",
		name: "Barn Door",
		primery_price: 21.99,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/41yhLeVymcL._AC_UL640_QL65_.jpg",
		category: "Furniture",
		quantity: 0,
	},

	{
		id: "1CandleHolders",
		title:
			"Wall Candle Holders Decorative Set of 2, Wall-Mount Candle Sconces, Rustic Wall Decor Floating Shelves for Home Decoration, Gothic DéCor",
		name: "Candle Holders",
		primery_price: 23.99,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/61cMFoUubiL._AC_UL640_QL65_.jpg",
		category: "Furniture",
		quantity: 0,
	},

	{
		id: "2PenneRigatePasta",
		title: "Barilla Penne Rigate Pasta, 8 Pound",
		name: "Penne Rigate Pasta",
		primery_price: 23.39,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/61qbuPPQqyL._AC_UL640_QL65_.jpg",
		category: "Kitchen",
		quantity: 0,
	},

	{
		id: "3PastaBowls",
		title:
			"Getstar Pasta Bowls, Large Salad Serving Bowls (8.5 inch 35 oz), Pasta Bowls Set of 6, Microwave Dishwasher Safe Shallow Bowl (White)lder with Shelf (Brown)",
		name: "Pasta Bowls",
		primery_price: 32.99,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/61rViSAqspL._AC_UL640_QL65_.jpg",
		category: "Kitchen",
		quantity: 0,
	},

	{
		id: "41ServingCart",
		title:
			"Hadulcet Bar Cart, Serving Cart with Wheels, Industrial Style Wine Cart for Home Kitchen & Dinning Room Rustic Brown ",
		name: "Serving Cart",
		primery_price: 79.99,
		discount: 15,
		rating: 2,
		imgSrc: "https://m.media-amazon.com/images/I/71a6iogzbZL._AC_UL640_QL65_.jpg",
		category: "Kitchen",
		quantity: 0,
	},

	{
		id: "15Dome Tent",
		title:
			"Pacific Pass 4 Person Family Dome Tent with Removable Rain Fly, Easy Set Up for Camp Backpacking Hiking Outdoor, 108.3 x 82.7 x 59.8 inches, Navy Blue",
		name: "Dome Tent",
		primery_price: 58.19,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/61NvuMCSaRL._AC_UY436_QL65_.jpg",
		category: "Outdoor",
		quantity: 0,
	},
	{
		id: "2Bike",
		title:
			"SND Indoor Cycling Bike Stationary - Exercise Bike for Home Cardio Gym, Workout Bike with Comfortable Seat Cushion, Silent Belt Drive, iPad Holder",
		name: "Indoor Cycling Bike",
		primery_price: 219.99,
		discount: 15,
		rating: 5,
		imgSrc: "https://m.media-amazon.com/images/I/61KE1ohGXRL._AC_SX679_.jpg",
		category: "Sport",
		quantity: 0,
	},
	{
		id: "7Ramen",
		title: "Maruchan Ramen Chicken, 3.0 Oz, Pack of 24",
		name: "Ramen",
		primery_price: 29.93,
		discount: 15,
		rating: 4,
		imgSrc: "https://m.media-amazon.com/images/I/91xajJWygpL._AC_UL640_QL65_.jpg",
		category: "Kitchen",
		quantity: 0,
	},
];

export default products;
