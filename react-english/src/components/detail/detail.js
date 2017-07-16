import React from "react";
import TodoComponent from "./todolist.js";
import { BackTop } from 'antd';
import YouYanComponent from "../common/youyan.js";
export default class ContentComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:""
		}
	}
	componentDidMount(){
		var id = this.props.params.id;
		fetch("../../../mock/article.json?id="+id).then((response)=>{
			return response.json();
		}).then((json)=>{
			
			this.setState({
				title:json.data[0].title,
				time:json.data[0].time,
				count:json.data[0].count,
				content:json.data[0].content
				
			})
			
		})
	}
	handleCloseClick(e){
	
		$(".adv").css({"display":"none"});
		var timer = setTimeout(function(){
			$(".adv").css({"display":"block"});
		},3000);
		}
	
	
	render(){
		return (
					<div className="detailbody">
					<h1 className="detailtitle">{this.state.title}</h1>
					<div className="detaildown"><span className="detailtime">{this.state.time}</span>
					<span className="detailcount">下载次数{this.state.count}</span>
					</div>

						
					<div dangerouslySetInnerHTML={{__html:this.state.content}} className="detailcontent"></div>
					 <youyanComponent/>
					<h2 className = "comment">COMMENT</h2>
					<YouYanComponent/>
					<div className = "adv"><a href =  "http://www.sohu.com/a/129036618_565827"><img src = "../img/adv.jpg" className = "advimg"/></a><p className = "advclose" onClick = {this.handleCloseClick.bind(this)}>关闭x</p></div>
									  <div>
				    <BackTop  visibilityHeight = "300">
       					 <div className = "ant-back-top-inner">Top</div>
   					 </BackTop>
				   
				 	 </div>
				 	
					</div>
			
			)
	}
}
// 
// <div className="todolist">
// 			<TodoComponent/>		
					
// 					</div>