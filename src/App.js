// 4. Redux ! 
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from './page/Box';

// 자식 간 props는 공유가 불가해 루트 컴포넌트에서 매번 props를 넘겨야 하는 불편함 , 페이지&기능 수가 많아질 수록 상태관리하기가 매우 불편해짐(단방향 통신)
// => 그래서 탄생한 것이 redux !
// component는 action(행동)을 던짐(ex.상품정보 가져오기) => reducer라는 곳으로 이동(행동 지침에 따라 store에 있는 값을 업데이트 함) => store의 값이 바뀌면 component에 반영이 됨
// useDispatch, useSelector 라는 리액트 훅
// useDispatch : 액션을 던질 때 사용하는 훅
// useSelector : store에 있는 값을 사용할 때 
// react-redux : 리덕스를 리액트 어플리케이션에서 활용할 수 있게 하기위한 라이브러리
const App = () => {
  // dispatch 가져오기
  const dispatch = useDispatch()
  // count값을 useSelector를 통해 받아옴
  const count = useSelector((state) => state.count)
  const increaseNum=()=>{
    // payload : optional(내가 필요한 값을 보내줌), type : 지정해주어야 함
    dispatch({type:"INCREMENT", payload : {num:5}})
  }

  const decreaseNum=()=>{
    dispatch({type:"DECREMENT"})
  }
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={increaseNum}>click</button>
    <button onClick={decreaseNum}>click</button>
    <Box/>
   </div> 
  )
};
export default App;