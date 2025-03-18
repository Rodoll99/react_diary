import './App.css'
import { useState } from 'react';

const Bulbe = ({light}) => {
  return (
  <div>{light === "ON" ? (<h1 style={{backgroundColor : 'orange'}}>ON</h1>) : (
    <h1 style={{backgroundColor : 'gray'}}>OFF</h1>
  )}</div>)
}
function App() {
  // 일반적 함수 
  // [A,B] = UseState(기본값)
  // A는 변수(State) 설정 , B는 A의 상태를 변화시킬 함수 설정

  //props는 컴포넌트에 전달되는 부모데이터 , state는 컴포넌트 안에서 관리되는 데이터
  const [count, setCount] = useState(0);
  const [light , setLight] = useState("OFF")
  return (
    // 컴포넌트의 집합
    <>
    <div>
      {/* 컴포넌트에 props 전달 */}
    <Bulbe light={light}></Bulbe>
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
