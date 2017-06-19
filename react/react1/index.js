import React from 'react';
import ReactDom from 'react-dom';

class Root extends React.Component{
	constructor(){
		super();
		this.state = {
			list: []
		}
		
	}
	handleButtonClick() {
		this.state.list.push(this.refs.input.value);
		this.setState({
			list: this.state.list
		})
	}
	handleDeleteClick(e) {
		let num = $(e.target).parent().index();
		this.state.list.splice(num, 1);
		this.setState({
			list: this.state.list
		})
	}
	render(){
		return (
			<div>
			<input type = "text" ref = "input"/>
			<button onClick = {this.handleButtonClick.bind(this)}>新增事项</button>
			<ul> 
				{
				    this.state.list.map((value,index)=>{
				    	return <li key = {index+ "_todolist"}>{value}
				    	<button onClick = {this.handleDeleteClick.bind(this)}>delete</button></li>
				    
				    })
				    
				    
				}
			</ul>
			</div>
			
		)
	}
}



ReactDom.render(<Root/>, document.getElementById("root"));

