import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
