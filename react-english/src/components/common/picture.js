import React from "react";
import {Link} from "react-router";
export default class PictureComponent extends React.Component{
constructor(props){
	
	super(props);
	this.state = {
		picture:[]
	}


}
componentDidMount(){
		
		$(".btnleft").text("<");
		$(".btnright").text(">");
		$(".btnleft").on("click",  $.proxy(this.handleleftclick, this));
		$(".btnright").on("click",  $.proxy(this.handlerightclick, this));
		
		fetch("/mock/picture.json").then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				picture:json.data.picture
			})
		})
	}

handleLink(){
	try{
	if(window.localStorage.count){
		var num = parseInt(window.localStorage.count, 10);
		num += 1;
		window.localStorage.count = num;
		}else{
		window.localStorage.count = 0;
		}
	}catch(e){}
}
handleleftclick() {
			var leftnum = $(".imgbody").css("left")+"";
			leftnum = parseInt(leftnum, 10)-10;
			if(leftnum <= -290){
				leftnum = -290;
				
			}
				$(".imgbody").css({
			
			"left":leftnum
		})
		


	}
	handlerightclick(){
			var leftnum = $(".imgbody").css("left")+"";
			leftnum = parseInt(leftnum, 10)+10;
			if(leftnum >= 0){
				leftnum = 0;
			
			}
				$(".imgbody").css({
			
			"left":leftnum
		})
	return false;
	}

	render(){
		return (
				<div className = "picture">
				<p className = "btnleft" ></p>
				
				<div className = "pictureimgbody">
						 <div className = "imgbody">
						 	{

						 		this.state.picture.map((value, index)=>{
						 			return (
						 				<Link key = {"picture"+value.article_id} to={"/audio/" + value.article_id} onClick = {this.handleLink.bind(this)}>
						 				<img src = {value.src} className = "pictureimg"/> 

						 				</Link>



						 				)

						 		})
						 	}
     					 
   						 </div>
   			    </div>
   						 
   				<p className = "btnright"></p>
				</div>
			)
	}
}






// <img src = "../img/r1.png" className = "pictureimg"/>
// <img src = "../img/r2.png" className = "pictureimg"/>
// <img src = "../img/r3.png" className = "pictureimg"/>
// <img src = "../img/r4.png" className = "pictureimg"/>
// <img src = "../img/r1.png" className = "pictureimg"/>