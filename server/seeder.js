const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const products = [
  { name: 'Premium Wireless Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', category: 'Electronics', description: 'Experience pure sound with our noise-cancelling headphones.', countInStock: 10 },
  { name: 'Minimalist Watch', price: 150, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', category: 'Accessories', description: 'Elegant timekeeping for the modern professional.', countInStock: 25 },
  { name: 'Smart Home Speaker', price: 199, image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800', category: 'Electronics', description: 'Voice-controlled assistant for your home.', countInStock: 15 },
  { name: 'Leather Carryall', price: 350, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800', category: 'Fashion', description: 'Spacious and durable bag for daily essentials.', countInStock: 5 },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123',
      role: 'seller'
    });

    const sampleProducts = products.map((product) => {
      return { ...product, seller: createdUser._id };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
