// 1. 가위바위보 게임 페이지 만들기
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "./page/Homepage";
import { AboutPage } from "./page/AboutPage";
import { ProductPage } from './page/ProductPage';
import { ProductDetailPage } from './page/ProductDetailPage';
import { Login } from './page/Login';
import { useState } from 'react';
import { UserPage } from './page/UserPage';

const App = () => {
  const [isLogin] = useState(false)
  const PrivateRoute=()=>{
    return(
      // Navigate component : help redirect // navigate hook과 다름 
      isLogin===true ? <UserPage/> : <Navigate to='/login'/>
    )
  }
  // crud (get, post, put, delete) 방식으로 url을 restful하게 만듦
  return (
    <BrowserRouter>
      <Routes>
        {/* 라우트 속성값 path='페이지별 주소값을 주어야 함', element */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/products' element= {<ProductPage/>} />
        {/* url에 파라미터를 던져 보낼 수 있음 */}
        <Route path='/products/:id' element= {<ProductDetailPage/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;