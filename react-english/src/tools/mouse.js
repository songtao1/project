function Page(){
	this.timer;
}

$.extend(Page.prototype, {
	init:function(){
		this.bindevents();
	

	},
	bindevents:function(){
		$(".btnleft").text("<");
		$(".btnright").text(">");
		$(".btnleft").on("mouseover",  $.proxy(this.handleMouseOver, this));
		$(".btnleft").on("mouseleave",  $.proxy(this.handleMouseLeave, this));
		$(".btnright").on("mouseover",  $.proxy(this.handleMouseOver1, this));
		$(".btnright").on("mouseleave",  $.proxy(this.handleMouseLeave, this));
		// $(".talkbtn").on("click",  $.proxy(this.sport, this));
	},
	handleMouseOver:function() {

		
		this.timer = setInterval(function(){
			var leftnum = $(".imgbody").css("left")+"";
			leftnum = parseInt(leftnum, 10)-10;
			if(leftnum <= -290){
				leftnum = -290;
			clearInterval(this.timer);
				
			}
				$(".imgbody").css({
			
			"left":leftnum
		})
		},200)


	},
	handleMouseOver1:function(){
		this.timer = setInterval(function(){
			var leftnum = $(".imgbody").css("left")+"";
			leftnum = parseInt(leftnum, 10)+10;
			if(leftnum >= 0){
				leftnum = 0;
			clearInterval(this.timer);
		
				
			}
				$(".imgbody").css({
			
			"left":leftnum
		})
		},200)
	},
	handleMouseLeave:function(){
		clearInterval(this.timer);
	},
	sport:function(){
		var rightnum =0;
		var topnum = Math.random()*300
		this.timer = setInterval(function(){
			
			rightnum +=10;
			$(".dan").css({
				"right":rightnum,
				"top":topnum
			})
			// if(rightnum == 1024){
				
			// 	clearInterval(this.timer);
			// }
		},50);
	}


})

var page = new Page();
page.init();

	

















