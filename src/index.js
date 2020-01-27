/*import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
	render(){
		return(
			<h2>HEYYYY</h2>
		);
	}
}
ReactDOM.render(<Hello />, document.getElementById('root'));*/

/*import React, { Component } from 'react';
class App extends Component {
render()
{
return(
<div className="App">
<h1>Hello World!</h1>
</div>
);
}
}
export default App;
*/
 
/*import React from 'react';
import ReactDOM from 'react-dom';
const myfirstelement = <h1>Hello React!</h1>
ReactDOM.render(myfirstelement, document.getElementById('root'));
*/


/*import React from 'react';
import ReactDOM from 'react-dom';
class Car extends React.Component{
render()
{
return <h2>I Am a {this.props.brand}!</h2>;
}
}
class Garage extends React.Component{
render(){
return(
<div>
<h1>Who lives in my Garage?</h1>
<Car brand="Ford"/>
</div>
);
}
}
ReactDOM.render(<Garage />,document.getElementById('root'));*/


/*import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));





