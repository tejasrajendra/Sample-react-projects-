
import { useState } from 'react';
import Inputa from './Component/Inputa';
import Table from './Component/table';
import Inputb from './Component/Inputb';

function App() {


  const x = 12;
  let text = "GoodBye"

  const myElement = (
    <div>
      <p> i am a paragraph </p>
    </div>
  )


  const [tableData, setTableData] = useState([]);

  const handleDisplayData = (formData) => {
    console.log(JSON.stringify(formData, null, 2));
    setTableData((prevTableData) => [...prevTableData, formData]);
  }



  return (
    <div >
      {/* <Input/> */}
      {/* {myElement} */}
       {/* {x > 10 ? "hello" : text }  */}
      {/* <Inputa  getdisplayData={handleDisplayData} />
       <Table tableData={tableData} /> */}

       <Inputb />
       
    </div>
  );
}

export default App;
