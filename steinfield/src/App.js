import './App.css';
import AllRoutes from './Pages/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     <Navbar/>
    <Footer/>

    </div>
  );
}

export default App;
