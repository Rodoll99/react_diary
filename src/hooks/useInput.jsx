//동일한 함수를 계속 불러내어 사용해야할때에 훅 파일을 만들어 저장해놓고 사용

import {useState} from "react";

function useInput (){
    const [input , setInput] = useState("");

    const onChange  = (e) =>{
        setInput(e.target.value);
    }
    return [input, onChange];
}

export default useInput;