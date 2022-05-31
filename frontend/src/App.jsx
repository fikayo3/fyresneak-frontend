
import Home from './pages/home';
import Signup from './pages/register';
 import Login from './pages/login';
import Product from './pages/product';
import ProductsPage from './pages/productsPage';
import Cart from './pages/cart';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Pay from './pages/pay';



function App() {
  return (
    <div className="App">  
      <Router>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="register" element={<Signup/>} />
        <Route path="home" element={<Home/>} />
        <Route path="product/:id" element={<Product/>} />
        <Route path="productsPage/:category" element={<ProductsPage/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="pay" element={<Pay/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
