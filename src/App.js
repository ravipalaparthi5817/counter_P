import {useState} from 'react';
import './App.css';

function App()
 {
  const [text, settext] = useState(0);
  const incval=()=>
  {
    settext(text+1)
  }
  const decval=()=>
  {
    settext(text-1)
  }
  return (
    <div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <h1>Number Counter</h1>
       <b><button onClick={incval}>
        <h1>press</h1>
        <h1>To</h1>INCREMENT</button></b>
       <h2>{text}</h2>
      <b><button onClick={decval}><h1>press</h1><h1>To</h1>DECREMENT</button></b>
    </div>

  );
}
export default App;
