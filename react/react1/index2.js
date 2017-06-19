import React from "react";
import ReactDom from "react-dom";
class Root extends React.Component{
	constructor(){
		super();
		this.state = {
			list: [],
			inputvalue: ''
		}
	}
	handleButtonClick() {
		this.state.list.push(this.state.inputvalue);
		this.setState({
			list: this.state.list,
		});
	}
	handleInputChange(e) {
		this.setState({
			inputvalue: e.target.value
		})
	}
	
	
	render(){
		return (
			<div>
				<input type = "text" onChange = {this.handleInputChange.bind(this)}/> 
				<div>{this.state.inputvalue}</div>
				<button onClick = {this.handleButtonClick.bind(this)}>新增事项</button>
				<ol>
				{
					this.state.list.map((value, index) => {
						return  <li key={index+"_todolist"}>{value}</li>
					})
				}
				
				</ol>
			
			
			
			
			</div>
		)
	}
}
ReactDom.render(<Root/>, document.getElementById("root"));













