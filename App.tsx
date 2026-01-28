import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <FeaturedProducts />
          <Categories />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;