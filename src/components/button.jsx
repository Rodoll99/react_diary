// button의 인자 두개를 text , color로 받아옴 기본값을 설정해주고 싶을땐

// 받아온 인자에 기본값을 설정해주고싶다면 저렇게 color = "black"으로 설정해줌
const Button = ({children , text ,color ="black"}) =>{

    // 이벤트 객체
    const onClickButton= (e)=>{
        
        console.log(text)
    }
    return (
        <button
            // 이벤트핸들러 onClick -> 클릭시 발생
            // 인라인 형식으로 안에 함수를 넣어줘도 가능하고
            // onClick={()=> {
            //     console.log(text);
            // }}

            // 함수를 따로 만들어 추가도 가능함 (함수의 이름만 적어놓기 , () 등 적어놓는 실수 X)
            onClick = {onClickButton}
            // 이벤트핸들러 onMouseEnter -> 커서를 올려놓았을때 발생
            // onMouseEnter={onClickButton}
        style={{color: color}}>

        {text} - {color.toUpperCase()}
        {children}
        </button>
    )
}


export default Button;
