// 📄 server/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  rating: Number,
  category: String
});

const Product = mongoose.model('Product', productSchema, 'ecommerce');

const seedData = [
  [{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7de"
  },
  "name": "wireless headphone",
  "price": 113,
  "description": "High-quality wireless headphones for immersive sound and hands-free convenience.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWxJ6o8m47uHduGfxg8Rj2NXmcvjTOMTrkA&s",
  "rating": 4.5,
  "category": "electronics",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7df"
  },
  "name": "flower clips",
  "price": 103,
  "description": "Cute and colorful flower hair clips to add charm to any hairstyle.",
  "imageUrl": "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-hair-accessory/3/h/z/3-pcs-hawaiian-flower-hair-clips-for-women-flower-hair-claw-original-imahb98gbu7tg2zy.jpeg?q=20&crop=false",
  "rating": 4.3,
  "category": "women",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e0"
  },
  "name": "ballpoint pen(10)",
  "price": 108,
  "description": "Smooth-writing ballpoint pen ideal for everyday use at home or office.",
  "imageUrl": "https://images.meesho.com/images/products/375280963/kiahw_512.webp",
  "rating": 4.2,
  "category": "stationary",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e1"
  },
  "name": "Flipflops (Pack of 3)",
  "price": 193,
  "description": "Comfortable flipflops for everyday use.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQJYoItRJRiZu-wSicwzVT-1VOvZqL9lYCQ&s",
  "rating": 4.1,
  "category": "footwear",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e2"
  },
  "name": "printed bedsheet",
  "price": 250,
  "description": "Soft and stylish printed bedcover to brighten up your bedroom décor.",
  "imageUrl": "https://tiimg.tistatic.com/fp/1/007/539/pink-and-orange-double-shaded-beautiful-cotton-bed-sheet-with-extra-comfort-164.jpg",
  "rating": 4.4,
  "category": "home",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e3"
  },
  "name": "jhumka",
  "price": 199,
  "description": "Traditional jhumka earrings with intricate design for a classic ethnic look.",
  "imageUrl": "https://jewelemarket.com/cdn/shop/files/E3313OX_1_701a836f-ca88-4a1d-99b7-6bd18ae1cbf1.jpg?v=1742548834",
  "rating": 4.6,
  "category": "women",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e4"
  },
  "name": "Analog Watch Combo",
  "price": 349,
  "description": "Combo of elegant analog watches.",
  "imageUrl": "https://rukminim2.flixcart.com/image/750/900/kidgnm80-0/watch/1/x/i/gents-exclusive-3-designer-combo-casual-partywear-formal-original-imafy6zgjbuqjkwg.jpeg?q=90&crop=false",
  "rating": 4,
  "category": "men",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e5"
  },
  "name": "Women’s Bracelet Set",
  "price": 179,
  "description": "Trendy bracelets for modern women.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FInPP_st8l6m0Wv2UO5oXYP1FxsG6Peqsg&s",
  "rating": 4.2,
  "category": "women",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e6"
  },
  "name": "Bluetooth Speaker",
  "price": 499,
  "description": "Portable Bluetooth speaker with deep bass and long battery life.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToG4ogKlt8MYoof_eB5uZQOCGBhAbscQ5l6w&s",
  "rating": 4.4,
  "category": "electronics",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e7"
  },
  "name": "Kurtis Combo Pack",
  "price": 599,
  "description": "Combo pack of 2 stylish cotton kurtis perfect for daily wear.",
  "imageUrl": "https://images.meesho.com/images/products/352326940/npgrq_512.webp",
  "rating": 4.3,
  "category": "women",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e8"
  },
  "name": "Men’s Casual Shirt",
  "price": 399,
  "description": "Smart casual checked shirt for men. Ideal for office or outing.",
  "imageUrl": "https://image.made-in-china.com/202f0j00YMAilfGzupra/Silk-Satin-Floral-Printed-Fashion-Shirts-Party-Casual-Man-Shirt.webp",
  "rating": 4.2,
  "category": "men",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7e9"
  },
  "name": "Study Table Lamp",
  "price": 299,
  "description": "Adjustable LED study lamp with soft lighting and USB charging.",
  "imageUrl": "https://rukminim3.flixcart.com/image/850/1000/xif0q/table-lamp/l/9/2/touch-switch-desk-night-study-lamp-for-children-reading-office-original-imah54fazkfmhv2q.jpeg?q=90&crop=false",
  "rating": 4.5,
  "category": "home",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7ea"
  },
  "name": "Color Gel Pens (Pack of 20)",
  "price": 149,
  "description": "Smooth gel pens in assorted colors for art and notes.",
  "imageUrl": "https://m.media-amazon.com/images/I/81bRYqgdqXL._UF1000,1000_QL80_.jpg",
  "rating": 4.6,
  "category": "stationary",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7eb"
  },
  "name": "Men’s Sports Shoes",
  "price": 799,
  "description": "Durable and lightweight running shoes for men.",
  "imageUrl": "https://baccabucci.com/cdn/shop/products/MG_3873.jpg?v=1618647090",
  "rating": 4.3,
  "category": "footwear",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7ec"
  },
  "name": "Scented Candles Set",
  "price": 199,
  "description": "Set of 4 scented candles to create a soothing ambiance.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMQqiw4oJx7MKAgGxRhoQF9Fls93ttaBNRQ&s",
  "rating": 4.7,
  "category": "home",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7ed"
  },
  "name": "Hair Accessories Kit",
  "price": 129,
  "description": "Complete set of colorful clips, bands, and pins for girls.",
  "imageUrl": "https://m.media-amazon.com/images/I/71quDK1POAL._UF1000,1000_QL80_.jpg",
  "rating": 4.2,
  "category": "women",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7ee"
  },
  "name": "Smart Fitness Band",
  "price": 599,
  "description": "Track your steps, heart rate, and sleep with this sleek fitness band.",
  "imageUrl": "https://www.jiomart.com/images/product/original/rvvfu07jkk/drumstone-id-119-round-shape-smartwatch-fitness-tracker-heart-rate-monitor-smart-wristband-blood-pressure-pedometer-activity-tracker-smartwatch-for-men-women-black-product-images-orvvfu07jkk-p594706641-0-202210202235.png?im=Resize=(1000,1000)",
  "rating": 4.4,
  "category": "electronics",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7ef"
  },
  "name": "Women’s Sling Bag",
  "price": 289,
  "description": "Trendy and compact sling bag perfect for casual outings.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAX4MeHIDkrbCTlflq5OHQ2k59sbV3iSR9Q&s",
  "rating": 4.5,
  "category": "women",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7f0"
  },
  "name": "Casual Men’s T-Shirt",
  "price": 299,
  "description": "Comfortable cotton t-shirt for everyday wear.",
  "imageUrl": "https://images.meesho.com/images/products/292212496/r5jj4_512.webp",
  "rating": 4.1,
  "category": "men",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7f1"
  },
  "name": "Decorative Wall Clock",
  "price": 399,
  "description": "Stylish wall clock for living room or office decor.",
  "imageUrl": "https://m.media-amazon.com/images/I/51UWqBTa1rL._UF894,1000_QL80_.jpg",
  "rating": 4.4,
  "category": "home",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7f2"
  },
  "name": "Women’s Heeled Sandals",
  "price": 499,
  "description": "Elegant heeled sandals for festive or formal occasions.",
  "imageUrl": "https://m.media-amazon.com/images/I/61yQqiiZqhL._UY1000_.jpg",
  "rating": 4.3,
  "category": "footwear",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7f3"
  },
  "name": "Notebook Combo Set",
  "price": 120,
  "description": "Set of 6 colorful notebooks for school or journaling.",
  "imageUrl": "https://m.media-amazon.com/images/I/61TDGCKwg4L._UF1000,1000_QL80_.jpg",
  "rating": 4.2,
  "category": "stationary",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7f4"
  },
  "name": "Men's Leather Wallet",
  "price": 299,
  "description": "Premium leather wallet with multiple compartments for men.",
  "imageUrl": "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390",
  "rating": 4.3,
  "category": "men",
  "__v": 0
},
{
  "_id": {
    "$oid": "6864a566558c56e1eb5de7f5"
  },
  "name": "Makeup Brush Set",
  "price": 299,
  "description": "Premium quality makeup brushes for smooth application.",
  "imageUrl": "https://m.media-amazon.com/images/I/51ED-mvq-JL._AC_.jpg",
  "rating": 4.5,
  "category": "women",
  "__v": 0
}]
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected ✅");
    await Product.insertMany(seedData);
    console.log("Data inserted 🚀");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Connection failed ❌", err);
  });