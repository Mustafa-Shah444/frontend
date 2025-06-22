
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Page/Navbar'
import './App.css';
import Home from './Page/Home';
import ProductDetails from './Page/ProductDetails'
import { Provider } from 'react-redux';
import {store} from './App/store'

function App() {
  return (
    <Provider store={store}>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/courseList" element={<Home/>}/>
     <Route path="/product" element={<ProductDetails/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
