import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Offcanvas from './Pages/Shared/NavOffcanvas/NavOffcanvas';

function App() {
  return (
    <div className="App bg-gradient-to-r from-slate-200 to-pink-200">
      <Offcanvas />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        {/* <Route path='*' element={<NotFound />}></Route> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
