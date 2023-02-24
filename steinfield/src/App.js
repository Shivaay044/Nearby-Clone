import './App.css';
import AllRoutes from './Pages/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Components/Navbar';
import { Crousel } from './Pages/Home/Crousel';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     <NavScrollExample/>
     {/* <Crousel/> */}
    </div>
  );
}

export default App;
