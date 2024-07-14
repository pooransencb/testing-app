import "./styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";
import { TouchBackend } from "react-dnd-touch-backend";
import { useEffect, useState } from "react";

// import Example from './example.ts'


export default function App() {
  const [test,setTest] = useState("");

function myFunction() {
  let event = new CustomEvent('myCustomEvent', { })

  if (window.confirm("Press a button!")) {
    setTest("You pressed OK!");
    window.parent.postMessage(JSON.stringify({
      event_code: "test",
      data: "data"
  }), '*');
  } else {
    window.parent.document.dispatchEvent(event);
    setTest("You pressed Cancel!");
  }
} 

useEffect(()=>{
  window.addEventListener("message", (eventData)=>{
    console.log("EventData::",eventData);
  });
},[])

  return (
    <div>
      <div onClick={()=>{myFunction()}} style={{background:'red', height:'500px', display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{background:'yellow',height:'50px', width:'30px' }}>abc</div>
        <div style={{background:'orange',height:'50px', width:'30px'}}>123</div>
        {test}
      </div>
      {/* <DndProvider backend={TouchBackend}> */}
      {/* <Container/> */}
      {/* <Example /> */}
      {/* abc */}
      {/* </DndProvider> */}
    </div>
  );
}
