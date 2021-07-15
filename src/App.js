import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <MainSection />
      <Cards />
      <Footer />
    </Router>
    </>
  );
}

export default App;
