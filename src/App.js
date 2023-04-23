import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputarr, SetInputarr] = useState([])

  const [inputdata, SetInputdata] = useState({
    name: "",
    rollNo: ""
  })



  function changehandle(e) {
    SetInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }




  let { name, rollNo } = inputdata;
  function changhandle() {
    SetInputarr([...inputarr, {name, rollNo}])
    
    
    SetInputdata({ name: "", rollNo: "" })
  }
  return (
    <div className="App">
      <input type='text' autoComplete='off' name='name' value={inputdata.name} onChange={changehandle} placeholder='Enter Your Name' /> <br />
      <input type='text' autoComplete='off' name='rollNo' value={inputdata.rollNo} onChange={changehandle} placeholder='Enter Your RollNo' /><br />

      <button className='btn' onClick={changhandle}>Add It</button>


      <table border={1} width="30%" cellPadding={10}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
          </tr>

          {
            inputarr.map(
            (info, ind) => {
              return (
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.rollNo}</td>
                </tr>
              )
            }
            )
         }
        </tbody>
      </table>
    </div>
  );
}

export default App;
