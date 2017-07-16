
import React from "react";
import { Row, Col ,Menu, Icon, Button, Modal, Tabs, Form, Input, notification } from 'antd';

const MeunItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class RegisterComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	handleResigerSubmit(e){
		e.preventDefault();
		// this.props.form.validateField((err, values) => {
  //    	 if (!err) {
  //     		this.props.register();
  //       console.log('Received values of form: ', values);
  //     }else{
      	
  //     }
  //   });
	}
	 
	handleRegisterClick(){
		this.props.register();
	}
	render(){
			const { getFieldDecorator } = this.props.form;
		return (
		<div>
	
		<Form >
				<FormItem hasFeedback label="email">
			         {getFieldDecorator('email', {
				          rules: [{
			              type: 'email', message: '邮箱格式不正确!',
			            }, {
			              required: true, message: '邮箱不能为空!',
			            }],
				      })(
				    <Input/>
				         )}
				</FormItem>
				<FormItem label="Password" hasFeedback>
         			 {getFieldDecorator('password', {
            			rules: [{
           			   required: true, message: '请输入密码!',
           			 }, {
             		 validator: this.checkConfirm,
       			   			  }],
         			 })(
           			 <Input type="password" />
         			 )}
       					</FormItem>
       					<FormItem>
				        
				            </FormItem>
				        </Form>
				         <Button type="primary"  htmlType="submit" 
				        className="resiger-form-button" 
				     	onClick = {this.handleRegisterClick.bind(this)}
				        >
				            注册
				          </Button>
				        </div>
				        )

	}
}
 

export default Form.create()(RegisterComponent);





