function inherit(child, parent) {
	function tempCtor() {};
	tempCtor.prototype = parent.prototype;
	child.superClass_ = parent.prototype;
	child.prototype = new tempCtor();
	child.prototype.constructor = child;
	console.log(child);
	console.log(parent);
}

function Canvas(canvas) {
	this.canvas = canvas;
}

Canvas.prototype = {
	
	constructor: Canvas,

	init: function() {
		this.ctx = this.canvas.getContext("2d");
		var this_ = this;

		setInterval(function() {
			var date = new Date();
			this_.hour = date.getHours();
			this_.minute = date.getMinutes();
			this_.second = date.getSeconds();
			this_.ctx.clearRect(0,0,500,500);
			this_.createClock();
		}, 1000)

	},

	createClock: function() {
		this.createCircle();
		this.craeteCenterPoint();
		this.createMinuteDash();
		this.drawText();
		this.drawHour();
		this.drawMinute();
		this.drawSecond();
	},

	createCircle: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.strokeStyle = "#aaa";
		this.ctx.arc(250, 250, 100, 0, Math.PI*2);
		this.ctx.stroke();
		this.ctx.restore();
	},

	craeteCenterPoint: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = "#ccc";
		this.ctx.arc(250, 250, 5, 0, Math.PI*2);
		this.ctx.fill();
		this.ctx.restore();
	},

	createMinuteDash: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for (var i = 0; i < 60; i++) {
			this.ctx.moveTo(0, -98);
			if (i % 5 == 0) {
				this.ctx.lineTo(0, -92);
			}else {
				this.ctx.lineTo(0, -96);
			}
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 30);
		}
		this.ctx.restore();
	},

	drawText: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for (var i = 0; i < 12; i++) {
			var x = Math.sin(Math.PI/6 * (i+1)) * 80,
				y = -Math.cos(Math.PI/6 * (i+1)) * 80;

			this.ctx.textAlign = "middle";
			this.ctx.fillText(i+1, x-5, y+6);
		}
		this.ctx.restore();
	},

	drawHour: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		var hour = (this.hour + (this.minute / 60)).toFixed(2),
			angle = hour * (Math.PI/6);
		this.ctx.rotate(angle);
		this.ctx.moveTo(0, 0);
		this.ctx.rect(-1, -1, 2, -60);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinute: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = this.minute * (Math.PI/30);
		this.ctx.strokeStyle = "green";
		this.ctx.rotate(angle);
		this.ctx.moveTo(0, 0);
		this.ctx.lineTo(0, -70);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecond: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = this.second * (Math.PI/30);
		this.ctx.strokeStyle = "red";
		this.ctx.rotate(angle);
		this.ctx.moveTo(0, 0);
		this.ctx.lineTo(0, -70);
		this.ctx.stroke();
		this.ctx.restore();
	}
}





function newCanvas(canvas) {
	this.canvas = canvas;
}


inherit(newCanvas, Canvas);
newCanvas.prototype =Canvas.prototype;

newCanvas.prototype.drawSecond = function() {
	this.ctx.save();
	this.ctx.beginPath();
	this.ctx.translate(250, 250);
	var angle = this.second * (Math.PI/30);
	this.ctx.strokeStyle = "blue";
	this.ctx.rotate(angle);
	this.ctx.moveTo(0, 0);
	this.ctx.lineTo(0, -80);
	this.ctx.stroke();
	this.ctx.restore();
}