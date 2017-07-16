import React from "react";
import { Card, BackTop  } from 'antd';
import {Link} from "react-router";
import PictureComponent from "../common/picture.js";
export default class ContentComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			articles:[]
		}
	}

	componentDidMount(){
		fetch("./mock/articles.json").then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				articles:json.data.article
			})
		})
	}

    handleclose(){

    
        $(".indexadvdiv").css({"display":"none"});
        var timer = setTimeout(function(){
            $(".indexadvdiv").css({"display":"block"});
        },3000);
       
    }

    handleref(){
          window.location.reload();
        
    }
render(){
	return (
		<div className = "content">
    <Card title="article list" bordered={false} style={{ width: 1024 }}>
    {
    	this.state.articles.map((value, index)=>{
    		return (
    		<Link key = {index+"article_"} to={"/detail/" + value.article_id} onClick = {this.handleref.bind(this)} >
    		<p className="article_item" >
    		<span className = "article-item-categroy">[{value.category_title}]
    		</span>{value.title}
    		{
    		value.is_new ? <span className = "article_item_new">new</span>:""
    		}
    		
    		</p>
    		</Link>
    		)
    	})
    }
     <div className = "indexadvdiv"><a href = "http://tianjie.game2.cn/"><img src = "../img/adv1.gif" className = "indexadvdivimg"/></a><p className = "indexcloseadv" onClick = {this.handleclose.bind(this)}>关闭x</p></div>
 
     <BackTop  visibilityHeight = "300">
        <div className = "ant-back-top-inner">Top</div>
    </BackTop>
    </Card>
      
     
        <PictureComponent/>
        <img src = "../img/erweima.png" className = "erweima"/>
  </div>
	)
}



}





