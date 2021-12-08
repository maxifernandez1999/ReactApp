import './App.css';
import React from 'react';

class Helloworld extends React.Component{
  state = {
    show: true
  }
  toggle = () => {
    // funcion para setear valores de estados
    this.setState({show: !this.state.show})
  }
  render(){
    if (this.state.show) {
      return (
        <div> {/* siempre tiene que estar encerrado en un elemento */}
          <h1>Hello World Div {this.props.saludar}</h1>
          <button onClick={this.toggle}>Show</button> {/* evento click */}
        </div>
      );
    }else{
      return (
        <div> {/* siempre tiene que estar encerrado en un elemento */}
          <button onClick={this.toggle}>Show</button>
        </div>
      )
    }
    
  } 
}
function App() {
  return (
    <div className="App">
      <Helloworld saludar="hola como estas"></Helloworld>
    </div>
  );
}

export default App;
