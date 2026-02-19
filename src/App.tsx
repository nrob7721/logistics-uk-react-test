import './App.css';
// @ts-ignore
import Header from './components/header/header'
// @ts-ignore
import Menu from './components/menu/menu';
// @ts-ignore
import Home from './components/home'
// @ts-ignore
import Vehicles from './components/vehicles'
// @ts-ignore
import About from './components/about'
import Drivers from './components/drivers-page/drivers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { IDriverService } from './interfaces/service-interfaces';
import { JsonDriverService } from './services/json-driver-service'

function App() {
  const driverService: IDriverService = new JsonDriverService();

  return (
    <div className="App">
      <Header />      
      <Router>
        <div className="content">
          <Menu />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/drivers" element={<Drivers driverService={driverService} />} />
              <Route path="/vehicles" element={<Vehicles/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
