//스타일시트 임포트
import "./Main.css";

const Main = () => {
    // const number = 9;

    // JSX주의 사항
    // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.( if 문 , for 문 사용 불가 )
    // 2. 숫자, 문자열, 배열값만 렌더링 된다.
    // 3. 모든 태그는 닫혀있어야한다.
    // 4. 최상위 태그는 반드시 하나여야만 한다. ex) div 와 main 등이 같은 위치에 있으면 안됨
    const user = {
        name: "박영석",
        isLogin: true,
    };
    
    // 1번 방법: 삼항연산자
    // return (
    //     <>
    //     {/* isLogin이 false라면 로그인버튼 , true라면 로그아웃버튼으로 만들기 */}
    //     {user.isLogin ? (<div> 로그아웃</div>) : (<div> 로그인 </div>)}
    //     </>
    // )

    // 2번 방법: 조건문
    if(user.isLogin)
    {
        // return <div style={{
        //   인라인 스타일 적용
        //   backgroundColor:"red",
        //   borderBottom : "5px solid blue"
        // }}> 

        // 스타일시트 적용 ( 클래스네임 적용 , 최상단에 임포트 필수)
        return <div className="logout">
            로그아웃
        </div>
    }else{
        return <div> 로그인 </div>
    }
    

};

export default Main;
