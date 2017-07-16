import React from "react";
import HeaderComponent from "./header.js";
import FooterComponent from "./footer.js";
import CarouselComponent from "../index/carousel.js";

export default class TemplateComponent extends React.Component{
	
	render(){
		return (
		<div>
				<HeaderComponent/>
				<CarouselComponent/>
				{this.props.children}
				<FooterComponent/>			
				</div>
				)
	}
}