import './App.css';
import AllRoutes from './Pages/AllRoutes';

import NavScrollExample from './Components/Navbar';

import { Product } from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
           <NavScrollExample/>
     <AllRoutes/>

    </div>
  );
}

export default App;
