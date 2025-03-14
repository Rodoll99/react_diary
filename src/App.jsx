import './App.css'
//Header 컴포넌트를 컴포넌츠 폴더에 따로 넣어놓았고 그 컴포넌츠를 임포트하여 붙여넣고있음
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Button from './components/button'

function App() {

  const buttonProps ={
    text : "메일" ,
    color : "red" ,
    a : 1 ,
    b : 2,
    c : 3,
  };
  return (
    // 컴포넌트의 집합
    <>
      {/* <Button text={"메일"} color ="red"> </Button> */}
      {/* 줄에 길게 쓸 필요없이 buttonProps를 따로 만들어 값을 넣어주어 표현 가능 */}
      <Button {...buttonProps}></Button>
      <Button text={"카페"}> </Button>
      <Button text={"블로그"}>
        {/* 값을 넣으면 children 으로 자동으로 값이 저장되어있음 */}
        <Header></Header>
         </Button>
    </>
  )
}

export default App;
