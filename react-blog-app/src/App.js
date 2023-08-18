import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blogs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Blogs' element={<Blog />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/home' element={<Navigate to= "/"/>}/>
          <Route path='/Blog/:id' element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
