import React from "react";
import ReactDOM from 'react-dom'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
export default class AudioComponent extends React.Component{
constructor(props){
	super(props);
	this.state = {
		value:[],
		top:0,
		count:0
		
	
	}

}
componentDidMount(){
	try{
		// if( window.location.reload()){
			
		// }
		var countnum = window.localStorage.count;
		this.setState({
			count:countnum
		})
	}catch(e){}
 }
handlebtnClick(){
	this.state.value.push(this.refs.input.value);
	this.setState({
		value:this.state.value
		
	})
	  if (this.state.top <= 305) {
       this.setState({ top: this.state.top + 55 });
     } else if (this.state.top > 305) {
       this.setState({ top: 0 });
      }
	
}
	render(){
		return (

				<div className = "videobody">
				<div className = "downcount">访问次数已达<span className = "countnum">{this.state.count}</span>次</div>
					<div className = "danbody">
					<video src="../../../img/4.mp4" controls="controls" autoPlay className = "video">
					您的浏览器不支持 video 标签。
					</video>
					 <ReactCSSTransitionGroup
             transitionName={{
                 enter: 'bullet-enter',
                }}
               transitionEnterTimeout={5000}
               transitionLeave={false}
             >
						{
							this.state.value.map((value, index)=>{
								return(
										<div key = {index+"talk"} className = "dan" 
										style = {{top: `${this.state.top}px`, color: `#${((1 << 24) * Math.random() | 0).toString(16)}`}}
										>{value}</div>
									)
							})
						}
						 </ReactCSSTransitionGroup>
					</div>
                  
               
					
					
				<div className = "talkbody">
					<input type = "text" className = "talkinput" ref = "input"/>
					<button className = "talkbtn" onClick = {this.handlebtnClick.bind(this)}>吐槽</button>
				</div>

				</div>

			)
	}



}






