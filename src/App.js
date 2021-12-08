import React from 'react';
import './App.css';

//componente con funcion flecha
const HelloWorld = (props) => {
  return(<div>Hellow World Div {props.saludar}</div>);
}
//componente de clase
// class Hello extends React.Component{
//   render(){
//     return(
//     <div>Hellow World Class</div>
//     )
//   }
// }

//componente con funcion simple
function App() {
  return (
    <div className="App">
      <h1>Hellow World! <HelloWorld saludar="hola como estas"></HelloWorld></h1>
    </div>
  );
}

export default App;
