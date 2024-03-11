import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/products/:id" element={<ProductDetails/>}/>
          <Route exact path ="/" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
