// button의 인자 두개를 text , color로 받아옴 기본값을 설정해주고 싶을땐

// 받아온 인자에 기본값을 설정해주고싶다면 저렇게 color = "black"으로 설정해줌
const Button = ({children , text ,color ="black"}) =>{
    return <button style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
}


export default Button;
