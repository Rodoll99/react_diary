import "./App.css";
import { useState } from "react";

import Counter from "./components/Counter";
import Bulbe from "./components/bulbe";
function App() {
  // 일반적 함수
  // [A,B] = UseState(기본값)
  // A는 변수(State) 설정 , B는 A의 상태를 변화시킬 함수 설정

  //props는 컴포넌트에 전달되는 부모데이터 , state는 컴포넌트 안에서 관리되는 데이터
  return (
    // 호출된 컴포넌트의 집합
    <>
      <Counter />
      <Bulbe />
    </>
  );
}

export default App;
