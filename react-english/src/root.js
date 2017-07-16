import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import IndexComponent from './components/index/index.js';
import DetailComponent from './components/detail/detail.js';
import MediaQuery from "react-responsive";
import TemplateComponent from './components/common/template.js';
import AudioComponent from './components/detail/audio.js';
class Root extends React.Component {

    constructor(props) {

        super(props);
        this.state = { }

    }
   handleEnter(nextState, replaceState){
  
    try{
        if(window.localStorage && !window.localStorage.login){
            replaceState({pathname: "/"})
        }
    }catch(e){

    }
   }

    render() {
    	return (
            <div className = "indexbody">
    		<div className="main">
            
	    	<Router history = {hashHistory}>
	    	<Route path = '/'  component = {TemplateComponent}>
            <IndexRoute component={IndexComponent}/>
                <Route path="/detail/:id" onEnter = {this.handleEnter.bind(this)} component={DetailComponent}></Route>
                <Route path="/audio/:id" component={AudioComponent}></Route>
            </Route>
	    	</Router>
             </div>
             </div>
    	)
    }
}

ReactDom.render( <Root/> , document.getElementById("root") );
// <Route path = '/detail/:id' component = {DetailComponent}></Route>