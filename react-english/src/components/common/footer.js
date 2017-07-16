import React from "react";
import { Row, Col, BackTop } from 'antd';
export default class FooterComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			footernavItems : []
		}
	}
	componentDidMount(){
		fetch('../../../mock/footernov.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				footernavItems:json.data.footernav,
				
			})
		})
	}
	render(){
		return <div className = "footer">
					<h2 className="footertitle">LINK</h2>
					<Row>
					
						
					 {
					 	this.state.footernavItems.map((value, index)=>{
								return <Col span = {2} key = {'footernav_' + value.footernav_id} className="footercol">
								{value.footernav_name}
								</Col>
					 	})
					 }   
					 	
					 
					</Row>
					
				   
					<div className = "footerbottom">
						<p className="footerbanquan">&copy;版权所有，盗版必究</p>
					</div>


				</div>
	}



}
