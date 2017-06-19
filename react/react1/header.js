import React from "react";
export default class HeaderComponent extends React.Component{
	render(){
		return (
			<div>{this.props.title}</div>
		)
	}
}
