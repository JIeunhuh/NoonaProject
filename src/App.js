// 3. 쇼핑몰 웹페이지 만들기
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductAll } from './page/ProductAll';
import { Login } from './page/Login';
import { ProductDetail } from './page/ProductDetail';
import './App.css';
import { NavBar } from './component/NavBar';
import { useState } from 'react';
import { PrivateRoute } from './route/PrivateRoute';
// 설명 : 
// 1. 전체상품 페이지, 로그인, 상세설명창
// 2. 전 상품 볼 수 잇는 곳
// 3. 로그인 페이지 -> 로그인(버튼 로그아웃으로)
// 4. 상세설명창(로그인x)-> login page
// 5. 상세설명창(로그인o)-> 설명창으로
// 6. logout click -> 로그아웃 됨(버튼 로그인으로)
// 7. 설명창에서 로그아웃 할 경우 -> login page
// 8. 상품검색 가능
const App = () => {
  const [status, setStatus] = useState(false)
  console.log(status)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setStatus={setStatus} />} />
        <Route path="/product/:id" element={<PrivateRoute status={status} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;