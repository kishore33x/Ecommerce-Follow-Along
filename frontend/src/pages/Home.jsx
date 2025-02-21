import React from 'react';
import ProductCard from '../components/auth/Productcard';

const productDetails = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661963005592-182d602c6a3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 1',
    price: 100,
    description: 'This is a product'
  },
  {
    image: 'https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 2',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661869085660-3252fcd3e505?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 3',
    price: 300,
    description: 'This is a product'
  },
  {
    image: 'https://images.unsplash.com/photo-1675962470888-ac38cedeceb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 4',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://images.unsplash.com/photo-1621967390503-e3cd1f6b27fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Product 5',
    price: 300,
    description: 'This is a product'
  }
];

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Products</h1>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productDetails.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;