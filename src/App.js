
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import Admin from './screens/Admin';

import NewHome from './screens/NewHome.js';
import AddCategory from './screens/AddCategory.js'; 
import AddFoodItems from './screens/AddFoodItems.js';
import ShowOrders from './screens/ShowOrders.js';
import AdminOptions from './screens/AdminOptions.js';
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            {/*<Route exact path="/" element={<Home />} />*/}
            <Route exact path="/" element={<NewHome />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/buyer" element={<Home />} />
            <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/add-food-items" element={<AddFoodItems />} />
          <Route path="/admin/show-orders" element={<ShowOrders />} />
          <Route path="/admin/options" element={<AdminOptions />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
