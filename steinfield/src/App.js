import './App.css';
import { AdminPage } from './Pages/AdminPage';
import Checkout from './Pages/Checkout/Checkout';

import AllRoutes from './Pages/AllRoutes';

import NavScrollExample from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



import { Product } from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
           <NavScrollExample/>
    
     <AllRoutes/>
     <Navbar/>
    <Footer/>

    </div>
  );
}

export default App;
