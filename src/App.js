import { Route, Routes } from 'react-router';
import './App.css';
import { AppLayout } from './layout/AppLayout';
import { Moviesl } from './pages/Movies/Moviesl';
import { Homepage } from './pages/Homepage/Homepage';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import { NotFound } from './pages/NotFound/NotFound';
const App = () => {
  // navigation bar 
  // homepage ; url=/
  // movie detatil ; url=/movie/?search=~~ 
  // movie main url=/movie/:id
  // route안에 index는 상위 컴포넌트의 path값을그대로 쓰겠다는 말
  // 페이지별 공통 url은 같이 묶을 수 있음 ; nested route => @requestmapping이랑 같은 작용이라고 생각하면 될듯
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='movies'>
          <Route index element={<Moviesl />} />
          <Route path=':id' element={<MovieDetail />} />
        </Route>
      </Route>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
};
export default App;