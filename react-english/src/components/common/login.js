
import React from "react";
import { Row, Col ,Menu, Icon, Button, Modal, Tabs, Form, Input, notification } from 'antd';

const MeunItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class LoginComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	 handleLoginSubmit(e){
				e.preventDefault();
		    	this.props.form.validateFields((err, values) => {
		      	if (!err) {
		      		var link = '?username=' + values.userName +'&password' + values.password;
		        	fetch('/mock/login.json' + link).then((response)=>{
					return response.json();
				}).then((json)=>{
					if(json.data.login){
						this.props.login();
						try{
						window.localStorage.login = false;
					}catch(e){}
				}
					
					
				})
				
		      }else{
		      	notification.open({
		   		message: '信息不对呦',
		    	description: '再来一次吧',
		  		});
		      }
		    });
		}
	 

	render(){
			const { getFieldDecorator } = this.props.form;
		return (
		<div>
	
		<Form  className="login-form" onSubmit={this.handleLoginSubmit.bind(this)}>
				        <FormItem>
				          {getFieldDecorator('userName', {
				            rules: [{ required: true, message: '请输入用户名!' }],
				          })(
				            <Input placeholder="Username" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: '请输入密码!' }],
				          })(
				            <Input type="password" placeholder="Password" />
				          )}
				        </FormItem>
				          <FormItem>
				         <Button type="primary" htmlType="submit" className="login-form-button">
				            登录
				          </Button>
				            </FormItem>
				        </Form>
				        
				        </div>
				        )

	}
}
 

export default Form.create()(LoginComponent);





