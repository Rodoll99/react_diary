import './App.css'
import { useState } from 'react';

function App() {
  // 일반적 함수 
  // [A,B] = UseState(기본값)
  // A는 변수 설정 , B는 A의 상태를 변화시킬 함수 설정
  const [count, setCount] = useState(0);
  const [light , setLight] = useState("OFF")
  return (
    // 컴포넌트의 집합
    <>
    <div>
    <h1>{count}</h1>
      <button onClick= {()=>{
        setCount(count + 1)
      }}> + </button>
    </div>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light == "OFF" ? "ON" : "OFF")
      }}> {light === "ON" ? "끄기" : "켜기"} </button>
    </div>
     
    </>
  )
}

export default App;
