import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    //[변수 , 함수 ] = useState(기본값) 
    const [name , setName] = useState("이름");
    const [birth , setBirth] = useState("")
    const [country , setCountry] =useState("")
    // 매개변수(e)를 넘김
    const onChangeName = (e) => {
        // 매개변수의 target.value 에 입력된값이 저장되기때문
        setName(e.target.value);
    }
    const onChageBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    } 
    return (
        <div>
            <div>
                {/* onChange로 입력된 값을 받고 onChangeName으로 값을 전달함 */}
                <input value={name} onChange={onChangeName} placeholder="이름" />
                </div>
            <div>
                {/* date = 날짜를 입력받는 함수 */}
                <input value={birth} type="date" onChange={onChageBirth}></input>
            </div>
            <div>
                {/* select , option */}
               <select value={country} onChange={onChangeCountry}>
                    <option>
                        한국
                    </option>
                    <option>
                        중국
                    </option>
                    <option>
                        미국
                    </option>
               </select>
            </div>
        </div>
      
    )
}

export default Register;