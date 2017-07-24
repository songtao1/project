var express = require('express');
var router = express.Router();
var http = require("http");
var cheerio = require("cheerio");
var fs = require("fs");
var mongo = require("mongodb");
/* GET home page. */
router.get('/', function(request, resonse, next) {

 http.get("http://www.sina.com.cn", function(res){
 	if(resonse.statusCode == 200){
 		var html = "";
 		res.on("data", function(data){
 			html += data;
 		})
 		res.on("end", function(){
 			$ = cheerio.load(html);
 			var result = {
 				ret: true,
 				data:{
 					list:[]
 				}
 			}
 			

			
			var navs = $(".nav-mod-1>ul>li>a");
 			var l =navs.length;
 			var title;
 			for(var i = 0; i < l; i++ ){ 
 				var item = navs.eq(i);
 				title = item.text();
 				console.log(title);
 				result.data.list.push(title);
 	// 		mongo.MongoClient.connect("mongodb://127.0.0.1:27017/test", function(err, db){
		// 	var ku = db.collection("song");
		// 	ku.insert(result,function(){
		// 		// console.log("ok");
		// 		// console.log(title)
				
		// 	});
		// })
			}resonse.json(result);
	
 			
 			





 			var value = JSON.stringify(result);
 			fs.writeFile("nav.json", value, 'utf8', function(err){
 				if(err){
 					console.log("err");
 				}else{
 					console.log("succ");
 				}

 			})

 		})
 	}
 })
});

module.exports = router;
