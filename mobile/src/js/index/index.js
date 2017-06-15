var iscroll = require("../common/iscroll.js");
var classifyTemp = require("./classify.mustache");
var productsTemp = require("./goods.mustache");
function Page() {
	
}
$.extend(Page.prototype, {
	init: function() {
		this.getProductsInfo();
		
		
	},
	
	getProductsInfo: function() {
		$.ajax({
			method: "get",
			url: "/index/getProducts",
			success: $.proxy(this.handleGetProductsInfoSucc, this),
			error: $.proxy(this.handleGetProductsInfoError, this)
		})
	},
	
	handleGetProductsInfoSucc: function(res) {
		this.res = res;
		this.createProducts();
		this.initProductScroll();
		this.initNavScroll();
		this.createClassify();
	},
	
	handleGetProductsInfoError: function() {
		alert("网络连接出错，请刷新页面");
		
	},
	
	createClassify: function() {
		var classifyCon = $(".nav"),
			html = classifyTemp({
				"classify": this.res.data.classify
			});
			classifyCon.append(html);
			this.bindExtends();
	},
	
	createProducts: function() {
		var content = $(".content"),
			html = productsTemp({
				"products": this.res.data.products
			});

			content.append(html);
			
	},
	
	initProductScroll:function() {
		new iscroll("#content-wraper");

	},
	initNavScroll: function() {
		/*横向滚动时，要根据尺寸算出宽度*/
		//console.log($("#nav-wraper").css("width"))
		new iscroll('#nav-wraper', { scrollX: true, scrollY: false, mouseWheel: true });
	},
	bindExtends: function() {
		$(".nav li").eq(0).addClass("nav-iconfonthorn");
		$(".nav li").on("click", $.proxy(this.handleNavitemsClick, this));
	},
		handleNavitemsClick: function(e) {
		$(".nav li").removeClass("nav-iconfonthorn");
		$(e.target).addClass("nav-iconfonthorn");
	}
});
var page = new Page();
page.init();









