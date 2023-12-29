import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import Footer from './customer/Components/Footer/Footer';
import HomePage from './customer/pages/HomePage/HomePage';
// import Routers from './Routers/Routers';

function App() {
  
  return (
    <div className="">
      <Navigation/>
     <div>
      <HomePage/>
      </div>     
      <Footer/>
    </div>
  );
}

export default App;
