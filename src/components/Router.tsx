import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Best from '../pages/Best';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<Best />}></Route>
        <Route path="/detail/:bookId" element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
