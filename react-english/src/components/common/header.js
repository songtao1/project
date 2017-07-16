import React from "react";
import { Row, Col ,Menu, Icon, Button, Modal, Tabs, Form, Input, notification } from 'antd';

const MeunItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import LoginComponent from "./login.js";
import RegisterComponent from "./register.js";
export default class HeaderComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			categoryItems: [],
			isLogin:false,
			selectKey: [],
			showModdal:false
		}
	}
	handleCategoryClick(e){
		this.setState ({
			selectKey: [e.key]
		})
	}
	componentDidMount(){
		fetch('/mock/category.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				categoryItems:json.data.categories,
				selectKey: ['category_' + json.data.categories[0].category_id],
			})
		})
	}
	handleLoginClick(){
		this.setState({
			showModdal:true
		})
	}
	handleCancleClick(){
		this.setState({
			showModdal:false
		})
	}
	handleExitClick(){
		this.setState({
			isLogin: false
		})
		// window.localStorage.login = false;
	}
	handleLogin(){
		this.setState({
			isLogin:true,
			showModdal:false
				})
	}
	handleRegister(){
		this.setState({
			showModdal:false
		})
	}
	
	render(){
		// const { getFieldDecorator } = this.props.form;
		var loginArea = this.state.isLogin ? <Button type="primary" className = "exit" onClick= {this.handleExitClick.bind(this)}>注销</Button> : 
		<Button type="primary" className = "log-reg-btn" onClick = {this.handleLoginClick.bind(this)}>登录/注册</Button>
		return (
				<div className = "headerbody">
				 <Row>
    		 	 <Col span={4}>
    		 	 	<a href = "index.html"><img className = "imglogo" src = "../../../img/logo1.png"/></a>
    		 	 </Col>
    		 	 <Col span={15}>
					<Menu mode = "horizontal" className = "category-menu" selectedKeys = {this.state.selectKey} onSelect = {this.handleCategoryClick.bind(this)}>
					 {
					 	this.state.categoryItems.map((value, index)=>{
								return <MeunItem key = {'category_' + value.category_id}>
								{value.category_name}</MeunItem>
					 	})
					 }   

					</Menu>
    		 	 </Col>
    		 	  <Col span={5}>
    		 	 	{loginArea}
    		 	 </Col>
    			</Row>
				 <Modal title = "登录/注册"
			         visible={this.state.showModdal}
			         footer = {null}
			         onCancel = {this.handleCancleClick.bind(this)}
			         onSubmit = {this.handleLoginClick.bind(this)}
			         onClick = {this.handleCancleClick.bind(this)}
			         // onSubmit = {this.handleRegisterClick.bind(this)}
       				 >
       				  <Tabs defaultActiveKey="login" >
					    <TabPane tab="登录" key="login">
						<LoginComponent login={()=>{this.handleLogin()}}/>

					    </TabPane>
					    <TabPane tab="注册" key="register">
							
 						<RegisterComponent  register={()=>{this.handleRegister()}}/>


					    </TabPane>
    
  					</Tabs>
       		 </Modal>
				</div>
				)
	}



}

