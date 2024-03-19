// 1. 가위바위보 게임 페이지 만들기
import { useState } from "react";
import { Box } from "./component/Box";
import './App.css';
// 설명 : 
// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위바위보 버튼이 있음
// 3. 버튼 클릭하면 그 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 선택이 됨
// 5. 결과를 가지고 승패를 따짐
// 6. 이기면 초록, 지면 빨강, 비기면 검은색
const App = () => {

    // user가 선택한 값에 따라 상태 변경
    const [select, setSelect] = useState(null);
    
    const choice = {
        rock : {
          name : 'Rock',
          img : 'https://cdn-icons-png.flaticon.com/128/3562/3562093.png'
          
        },
        scissors : {
          name : 'Scissors',
          img : "https://cdn-icons-png.flaticon.com/128/7218/7218725.png"
        },
        paper : {
          name : 'Paper',
          img : "https://cdn-icons-png.flaticon.com/128/2717/2717361.png"
        }
      }
  
      const clickBtn = (selectChoice) => {
        setSelect(choice[selectChoice])
      }

  return (
    <div>
      <div className="main">
        <Box title="YOU" item={select}/>
        <Box title="COMPUTER" item={select}/>
      </div>
      <div className="main">
          {/* 콜백 함수로 넣어줘야 리액트가 처음렌더링하면서 함수가 실행하는 것이 방지됨 */}
          <button onClick={() => clickBtn("rock")}>Rock</button>
          <button onClick={() => clickBtn("scissors")}>Scissors</button>
          <button onClick={() => clickBtn("paper")}>Paper</button>
        </div>
    </div>
  );
};
export default App;