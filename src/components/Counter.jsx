import { useState } from "react";
//카운터 컴포넌트
const Counter = ({}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
