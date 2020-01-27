import React, { Component } from "react";
import "./App.css";
import Keypad from "./Keypad";
import Output from "./Output";


class App extends Component {
state={
result:""
};

buttonPressed= buttonName =>{
if(buttonName === "="){
this.calculate()
}

else
if(buttonName === "c"){
this.reset()
}

else {
 this.setState({result: this.state.result + buttonName});
}
}

reset = () =>{
this.setState({result:""})
}

calculate = () => {
try {
this.setState({
result:(eval(this.state.result) ||  "") + "" });
}
 	
catch(e){
this.setstate({
result: "error"
});
}
};

render(){
	return(
		<div className="App">
			<div classname="calc-body">
				<Output result= {this.state.result}/>
				<Keypad buttonPressed={this.buttonPressed}/>
			</div>
		</div>
	);
}
}
export default App;
