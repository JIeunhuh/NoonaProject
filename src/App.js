// 2. 날씨 앱 만들기
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherApp } from "./WeatherApp";
// 설명 : 
// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보임
// 2. 현재 위치의 도시, 섭씨&화씨 온도
// 3. 하단에 5개의 버튼이 있음, 1개는 현재 도시, 나머지는 내가 좋아하는 도시
// 4. 버튼을 누르면 도시 별 날씨가 보임
// 5. 현재 버튼 누르면 현재 위치 기반의 날씨가 나오도록
// 6. 버튼 클릭했을때 로딩 스피너 걸리는거 
const App = () => {

   
  return (
    <WeatherApp/>
  );
};
export default App;