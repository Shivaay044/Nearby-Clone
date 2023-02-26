import './App.css';
import { AdminPage } from './Pages/AdminPage';
import Checkout from './Pages/Checkout/Checkout';

import AllRoutes from './Pages/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
    
     {/* <Checkout/> */}
     <AllRoutes/>
     <Navbar/>
    <Footer/>

    </div>
  );
}

export default App;
