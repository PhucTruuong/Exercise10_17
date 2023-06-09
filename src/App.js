import './App.css';
import Navigation from './components/Navigation';
// import Main from './components/Main';
import Footer from './Footer/Footer';
import {Routes, Route} from "react-router-dom";
import Players from './components/Players';
import Detail from './components/Detail';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      {/* <Main/> */}
      <Routes>
          <Route path='/' element={<Players/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>

      <Footer/>
      
    </div>
  );
}
export default App;
