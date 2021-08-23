import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import SimpleCart from './components/cart/SimpleCart';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      <Footer />
    </>
  );
}

export default App;
