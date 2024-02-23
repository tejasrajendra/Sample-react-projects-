import React, { useEffect, useState } from 'react';


const EffectCount = () => {
    // const [counter, setCounter] = useState(0);
    const [IsVisisble, setIsVisible] = useState(true);
    const [pause , setPause]=useState(true)
    useEffect( ()=>{
        if(pause)
        {
            setInterval(()=>{
            setIsVisible(prevVisible => !prevVisible )
            },1000)
        }
            
    },[])

    const handleVisibility =()=>{
        setPause(false);
    }


    return(
        <div>
            {pause && <h1 style={{visibility : IsVisisble ? 'visible':'hidden'}}> Blinking text </h1>}
            


            <button onClick={handleVisibility}>pause</button>
        </div>
    )

}

export default EffectCount;