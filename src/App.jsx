import './App.css'

//헤더 컴포넌트(컴포넌트의 이름 앞글자를 대문자로 넣어서 암묵적으로 컴포넌트로 표시)
//App컴포넌트의 자식 컴포넌트
function Header(){
  return(
    <header>
      <h1>header</h1>
    </header>
  );
};

function App() {
  return (
    <>
    {/* 이렇게 header태그를 해주어야 화면에 렌더링이됨 */}
    <Header></Header>
    <h1>안녕 리액트!</h1>
    </>
  )
}

export default App
