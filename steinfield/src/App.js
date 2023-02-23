import './App.css';
import AllRoutes from './Pages/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     <Navbar/>
    </div>
  );
}

export default App;
