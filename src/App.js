import React from 'react';
import './App.css';


const HelloWorld = () =>{
  return(<div>Hellow World Div</div>);
}
// class Hello extends React.Component{
//   render(){
//     return(
//     <div>Hellow World Class</div>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <h1>Hellow World! <HelloWorld></HelloWorld></h1>
    </div>
  );
}

export default App;
