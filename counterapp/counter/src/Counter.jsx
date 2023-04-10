import React, { useState } from "react";


const Counter = () =>{
    var [count,setCount] = useState(0);


return(
    <>
    <h1>{count}</h1>
    <button onClick={function(){setCount(count+1)}} >Increase</button>
    <button onClick={function(){setCount(count-1)}} >Decrease</button>
    </>
)
}

export default Counter;

