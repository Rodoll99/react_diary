import './App.css'
//Header 컴포넌트를 컴포넌츠 폴더에 따로 넣어놓았고 그 컴포넌츠를 임포트하여 붙여넣고있음
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/main'

function App() {
  return (
    // 컴포넌트의 집합
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App;
