import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    //[변수 , 함수 ] = useState(기본값) 
        // const [name , setName] = useState("이름");
        // const [birth , setBirth] = useState("")
        // const [country , setCountry] =useState("")
        // const [bio , setBio] = useState("")
        const [input , setInput] =useState({
            name:"" ,
            birth:"",
            country:"",
            bio:"",
        })
    console.log(input)
    // 매개변수(e)를 넘김
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
    }
    // const onChangeName = (e) => {
    //     // 매개변수의 target.value 에 입력된값이 저장되기때문
    //     // setName(e.target.value);
    //     setInput({
    //         ...input , 
    //         name : e.target.value ,
    //     });
    // }
    // const onChageBirth = (e) => {
    //     // setBirth(e.target.value);
    //     setInput({
    //         ...input , 
    //         birth : e.target.value ,
    //     });
    // }
    // const onChangeCountry = (e) => {
    //     // setCountry(e.target.value);
    //     setInput({
    //         ...input , 
    //         country : e.target.value ,
    //     });
    // } 
    // const onChangeBio = (e)=>{
    //     setInput({
    //         ...input , 
    //         bio : e.target.value ,
    //     });
    // }
    return (
        <div>
            <div>
                {/* onChange로 입력된 값을 받고 onChangeName으로 값을 전달함 */}
                <input name="name" value={input.name} onChange={onChange} placeholder="이름" />
                </div>
            <div>
                {/* date = 날짜를 입력받는 함수 */}
                <input name="birth" value={input.birth} type="date" onChange={onChange}></input>
            </div>
            <div>
                {/* select , option */}
               <select name ="country"value={input.country} onChange={onChange}>
                    <option value="KR">
                        한국
                    </option>
                    <option value="CH">
                        중국
                    </option>
                    <option value="US">
                        미국
                    </option>
               </select>
            </div>
            <div>
                {/* textarea = 글자입력 폼 */}
                <textarea name="bio"onChange={onChange} value={input.bio}>
                </textarea>
    
            </div>
        </div>
      
    )
}

export default Register;