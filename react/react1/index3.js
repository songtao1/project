import React from "react";
import ReactDom from "react-dom";
import Header from "./header.js";
import Content from "./content.js";

class Root extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:"123",
			title: "222"
		}
	}
	render(){
		let title = "这是标题";
		let content = "<h1>lalal</h1>";
		return (
			<div>
			<Header title = {title}/>
			<Content/>
			<div dangerouslySetInnerHTML={{__html: content}}></div>
			</div>
		)
	}
}

ReactDom.render(<Root/>, document.getElementById("root"));




