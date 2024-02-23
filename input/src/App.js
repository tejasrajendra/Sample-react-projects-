import React, {useState} from 'react'
import Input from './Component/Input';
import EffectCounter from './Component/EffectCounter';
import EffectCount from './Component/EffectCount';
function App() {

  // const [display , setDisplay] = useState(false)


  //  const displayThis = () => {

  //     if(display === true)
  //       setDisplay(false)
  //     else 
  //       setDisplay(true)
  //  }

  return (
    <div >

      {/* <button onClick={()=>{
        displayThis()
      }}>display</button>
      {display && <EffectCounter/>} */}
    <EffectCount/>

      
    </div>
  );
}

export default App;
