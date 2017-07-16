import React from "react";
import {Button, notification} from "antd";
export default class TodoComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items :[],
			textvalue:""
		}
	}
	handleBtnClick(){

		let value =this.state.textvalue
		if(!value == ""){
		this.state.items.push(value);
		this.setState({
			items:this.state.items,

		});
		
			}else{
				alert("内容不能为空!")
			}
	}

handleChange(e){
	this.setState({
		textvalue:e.target.value
	})

}

	render(){
		return (
		<div className = "talkarea">
			<div className = "talklist">
					{
						this.state.items.map((value, index)=>{
							return <p key = {index+"tosolist"} className="todolistcontent"><img src = "../img/logo.png" className = "ico"/><span className = "todotext">{value}</span>
						
							</p>
						})
					}
			</div>
			<div>
			<textarea  className = "talkinput" onChange = {this.handleChange.bind(this)}></textarea>
			<Button type="primary" onClick = {this.handleBtnClick.bind(this)} className = "todobtn">评论</Button>
			</div>
		</div>

		)
	}
}




