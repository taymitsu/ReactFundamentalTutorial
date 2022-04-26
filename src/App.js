//import logo from './logo.svg';
import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Title'
import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

// ADD LOGO: <img src={logo} />

