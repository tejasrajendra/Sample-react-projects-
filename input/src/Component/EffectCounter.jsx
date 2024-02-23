import React, { useEffect, useState } from 'react';


const EffectCounter = () => {

    useEffect(()=>{
        console.log('this is rendered ');
        return  () => {
                console.log('this is being returned ')
        };
    },[])

    const [count , setCount ] = useState(0);

    return(
        <div>
            <h1> this is the Effective counter here </h1>
            <h1> Counter </h1>
            <p> current count :  {count}</p>
            <button onClick={()=>{setCount(count + 1 )}} >increment the count </button>
            <button onClick={()=>{setCount(0)}}>reset</button>



        </div>
    )


}


export default EffectCounter ;