function Canvas() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {

	constructor: Canvas,

	rect: function() {
		this.ctx.strokeStyle = "red";
		this.ctx.rect(0 ,0 , 200, 200);
		this.ctx.stroke();
	},

	arc: function() {
		this.ctx.fillStyle = "yellow";
		this.ctx.arc(200, 200, 100, 0, Math.PI*2);
		this.ctx.fill();
	},

	lineTo: function() {
		this.ctx.moveTo(0,0);
		this.ctx.lineTo(300,150);
		this.ctx.stroke();
	},

	moveTo: function() {
		this.ctx.moveTo(100, 100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
	},

	quadraticCurveTo: function() {
		this.ctx.moveTo(20, 20);
		this.ctx.quadraticCurveTo(20, 100, 200,20);
		this.ctx.stroke();
	},

	bezierCurveTo: function() {
		this.ctx.moveTo(0, 500);
		this.ctx.bezierCurveTo(0,250,500,250,500,0);
		this.ctx.stroke();
	},

	closePath: function() {
		this.ctx.moveTo(0, 500);
		this.ctx.bezierCurveTo(0,250,500,250,500,0);
		this.ctx.closePath();
		this.ctx.stroke();
	},

	lineWidth: function() {
		this.ctx.lineWidth = 10;
		this.ctx.moveTo(0, 500);
		this.ctx.lineTo(100,100);
		this.ctx.stroke();
	},

	lineCap: function(){
		this.ctx.lineWidth = 10;
		//this.ctx.lineCap = "round";
		//this.ctx.lineCap = "butt";
		this.ctx.lineCap = "square";
		this.ctx.moveTo(0, 500);
		this.ctx.lineTo(100,100);
		this.ctx.stroke();
	},

	font: function(){
		this.ctx.font = "40px Verdana";
		this.ctx.fillText("hello world", 100,100);
	},

	textAlign: function() {
		this.ctx.font = "40px Verdana";
		this.ctx.textAlign = "middle";
		this.ctx.fillText("hello world", 100,100);
	},

	textBaseline: function() {
		this.ctx.font = "40px Verdana";
		this.ctx.textAlign = "left";
		this.ctx.textBaseline = "bottom";
		this.ctx.fillText("hello world", 100,100);
	},

	fillText: function(){
		this.ctx.fillStyle = "red";
		this.ctx.font = "60px verdana";
		this.ctx.fillText("hello world", 100,100);
	},

	strokeText: function() {
		this.ctx.strokeStyle = "red";
		this.ctx.font = "60px verdana";
		this.ctx.strokeText("hello world", 100,100);
	},

	measureText: function() {
		this.ctx.font = "60px verdana";
		var text = "hello world";
		console.log(this.ctx.measureText(text).width);
	},

	drawImage: function() {
		this.ctx.fillStyle = "green";
		this.ctx.rect(0,0,500,500);
		this.ctx.fill();
		var img = new Image(),
			this_ = this;
		img.onload = function(){
			this_.ctx.drawImage(img, 0,0, 100,100,100,100,50, 50);
		}
		img.src = "http://img1.qunarzz.com/piao/fusion/1610/ee/e0a11aae72c93d02.png"
	},

	shadow: function() {
		this.ctx.shadowBlur = 20;
		this.ctx.shadowColor = "red";
		this.ctx.shadowOffsetX = 10;
		this.ctx.shadowOffsetY = 10;
		this.ctx.rect(100, 100, 100, 100);
		this.ctx.stroke();
	},

	linearGradient: function() {
		var gradient = this.ctx.createLinearGradient(0, 0, 100, 100);
		gradient.addColorStop(0,"red");
		gradient.addColorStop(1,"green");
		this.ctx.fillStyle= gradient;
		this.ctx.rect(0, 0, 100, 100);
		this.ctx.fill();
	},

	createRadialGradient: function() {
		var gradient = this.ctx.createRadialGradient(200,200,100,200,200,200);
		gradient.addColorStop(0, "green");
		gradient.addColorStop(1, "red");
		this.ctx.fillStyle = gradient;
		this.ctx.arc(200,200,200,0, Math.PI*2);
		this.ctx.fill();
	},

	clearRect: function() {
		var gradient = this.ctx.createRadialGradient(200,200,100,200,200,200);
		gradient.addColorStop(0, "green");
		gradient.addColorStop(1, "red");
		this.ctx.fillStyle = gradient;
		this.ctx.arc(200,200,200,0, Math.PI*2);
		this.ctx.fill();
		this.ctx.clearRect(200,200,50,50);
	},

	toDataURL: function() {
		this.ctx.fillStyle = "#ccc";
		this.ctx.rect(200,200,200,200);
		this.ctx.fill();
		console.log(this.canvas.toDataURL());
	},

	middle: function() {
		this.ctx.fillStyle = "red";
		this.ctx.moveTo(200,200);
		this.ctx.arc(200,200,100,0,Math.PI*1.5);
		
		this.ctx.closePath();
		this.ctx.fill();
	},
	
	translate: function() {
		this.ctx.translate(100,100);
		this.ctx.moveTo(0, 0);
		this.ctx.lineTo(100, 100);
		this.ctx.stroke();
	},

	rotate: function() {
		this.ctx.fillStyle = "green";
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(200, 0, 100, 100);
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(200, 0, 100, 100);
		this.ctx.fill();
	},

	save: function() {
		this.ctx.fillStyle = "green";
		this.ctx.rotate(Math.PI/6);
		this.ctx.save();
		this.ctx.rect(100,0,100,100);
		this.ctx.rotate(Math.PI/6);
		this.ctx.restore();
		this.ctx.rect(200,0,100,100);
		this.ctx.fill();
	}


}

var instance = new Canvas();

//instance.text();
//instance.save();
//instance.rotate();
//instance.translate();
//instance.middle();
instance.toDataURL();
//instance.clearRect();
//instance.createRadialGradient();
//instance.linearGradient();
//instance.shadow();
//instance.drawImage();
//instance.measureText();
//instance.strokeText();
//instance.fillText();
//instance.textBaseline()
//instance.textAlign();
//instance.font();
//instance.lineCap();
//instance.lineWidth();
//instance.closePath();
//instance.bezierCurveTo();
//instance.quadraticCurveTo();
//instance.lineTo();
//instance.moveTo();
//instance.rect();
//instance.arc();