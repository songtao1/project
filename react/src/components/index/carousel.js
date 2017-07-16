import { Carousel } from 'antd';
import React from "react";
export default class CarouselComponent extends React.Component{

render(){
	return (
			<div>
				 <Carousel autoplay>
				    <div><img className = "bannerimg" src = "../../../img/2.png"/></div>
				    <div><img className = "bannerimg" src = "../../../img/1.png"/></div>
				    <div><img className = "bannerimg" src = "../../../img/3.png"/></div>
				    <div><img className = "bannerimg" src = "../../../img/4.png"/></div>
				  </Carousel>
			</div>



		)

}



}

 