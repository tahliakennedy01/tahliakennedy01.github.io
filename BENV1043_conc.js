(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BENV1043_conc_atlas_1", frames: [[0,0,3256,2384],[3258,0,609,609]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.leafcharacter1 = function() {
	this.initialize(ss["BENV1043_conc_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rightpngcopy = function() {
	this.initialize(ss["BENV1043_conc_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(229,210,184,0.6)").s().p("EgwCAGvQh8AAhYhYQhYhYAAh8IAAkFQAAh8BYhYQBYhYB8AAMBgFAAAQB8AABYBYQBYBYAAB8IAAEFQAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0,0.001,1,1.9756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.5,-85.1,675,170.2);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg+kgvLMB9JAAAMAAABeXMh9JAAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E0D8").s().p("Eg+kAvMMAAAheXMB9JAAAMAAABeXg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.4,-302.9,802.9,605.9);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leafcharacter1();
	this.instance.setTransform(0,0,0.2002,0.2002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,651.8,477.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leafcharacter1();
	this.instance.setTransform(0,0,0.2002,0.2002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,651.8,477.2), null);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rightpngcopy();
	this.instance.setTransform(0,0,0.0409,0.0409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.9);


// stage content:
(lib.BENV1043_conc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	// timeline functions:
	this.frame_119 = function() {
		this.stop();
		
		function playAnimation(){
			this.play();
		}
		
		this.play_btn.addEventListener("click",playAnimation.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(241));

	// STOP_idn
	this.play_btn = new lib.play();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(692.5,155.5,1,1,0,0,0,12.5,12.5);
	this.play_btn._off = true;
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(119).to({_off:false},0).to({_off:true},29).wait(212));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgGA2IAAgPIANAAIAAAPgAgDAcIgDgtIAAgkIANAAIAAAkIgDAtg");
	this.shape.setTransform(699.875,261.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AAZA2IgZhYIgYBYIgPAAIgchrIAPAAIAVBXIAYhXIAPAAIAYBXIAUhXIAQAAIgcBrg");
	this.shape_1.setTransform(690.375,261.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_2.setTransform(677.425,261.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_3.setTransform(666.175,261.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgnA2IAAhrIBNAAIAAANIg+AAIAAAhIA6AAIAAALIg6AAIAAAlIA/AAIAAANg");
	this.shape_4.setTransform(651.9,261.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AghAsQgOgPAAgbQAAgaAOgQQAOgQAUAAQAPAAALAGQAQAJAEAVIgPAAQgCgMgIgFQgJgGgMAAQgOAAgKALQgKAMAAAVQAAATAJAMQAIAMASAAQAOAAAJgIQAKgJAAgTIgiAAIAAgLIAvAAIAAA5IgJAAIgDgOQgIAIgFADQgKAGgNAAQgTAAgOgNg");
	this.shape_5.setTransform(640.575,261.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgHAOQgKAZgbAAgAgcApIAZAAQAGAAAFgBQAIgDAGgIQAEgHACgKIABgLQAAgTgIgLQgHgLgRAAIgZAAg");
	this.shape_6.setTransform(629.8,261.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgmA2IAAhrIBNAAIAAANIhAAAIAAAhIA6AAIAAALIg6AAIAAAlIBBAAIAAANg");
	this.shape_7.setTransform(619.45,261.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_8.setTransform(610.475,261.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AAZA2IgZhYIgYBYIgPAAIgchrIAPAAIAVBXIAYhXIAPAAIAYBXIAUhXIAQAAIgcBrg");
	this.shape_9.setTransform(598.875,261.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_10.setTransform(585.925,261.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_11.setTransform(574.675,261.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AAZA2Iglg2IgSAQIAAAmIgOAAIAAhrIAOAAIAAA1IA1g1IAVAAIgtAsIAuA/g");
	this.shape_12.setTransform(564.925,261.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIAAgSQgBgLgHgDQgEgCgJAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACAEAFQACAEABAJIAAAPIACAJQAAAFAEABIAAADgAgcgEIAgAAQAJAAAGgEQAGgEAAgKQAAgMgIgEQgFgCgGAAIgiAAg");
	this.shape_13.setTransform(550.05,261.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AgkAkQgFgLgBgUIAAg7IAPAAIAABBQAAAMAEAIQAHALAQAAQASAAAGgMQAEgHAAgMIAAhBIAPAAIAAA7QAAAUgGALQgKATgbAAQgbAAgJgTg");
	this.shape_14.setTransform(539.05,261.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_15.setTransform(527.725,261.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AgGA2IAAgsIgpg/IARAAIAeA0IAfg0IARAAIgoA/IAAAsg");
	this.shape_16.setTransform(517,261.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AgGA2IAAheIgkAAIAAgNIBWAAIAAANIgkAAIAABeg");
	this.shape_17.setTransform(503.75,261.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_18.setTransform(494.0739,261.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgnA2IAAhrIBOAAIAAANIg/AAIAAAhIA5AAIAAALIg5AAIAAAlIA/AAIAAANg");
	this.shape_19.setTransform(484.4,261.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AgGA2IAAheIglAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_20.setTransform(474.6,261.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_21.setTransform(461.0239,261.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgDAVIgDgpIANAAIgDApg");
	this.shape_22.setTransform(455.075,257.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_23.setTransform(448.7,261.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AgmA2IAAhrIBMAAIAAANIg/AAIAAAhIA7AAIAAALIg7AAIAAAlIBBAAIAAANg");
	this.shape_24.setTransform(439.35,261.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_25.setTransform(430.375,261.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},209).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},150).wait(1));

	// Layer_4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_26.setTransform(628.525,116.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AgUAzQgIgFgBgNIANAAQABAFACAEQAEAEAJAAQAOAAAEgLQADgGgBgRQgDAHgGACQgFAEgHAAQgMgBgJgIQgJgKAAgUQAAgTAJgLQAJgMANABQAHgBAHAFIAHAHIAAgJIALAAIAABGQAAAPgEAJQgIAPgUAAQgMABgIgGgAgQgeQgCAGAAAMQAAAMAFAHQAFAHAIAAQAMAAAGgNQADgHAAgJQAAgPgGgGQgFgIgJAAQgMABgFANg");
	this.shape_27.setTransform(622.475,115.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgCgEQgDgIgIABIgGABQgGABgDAFQgEAEgBAEIgBAMIAAAoIgMAAIAAhOIAMAAIAAAMQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_28.setTransform(614.95,113.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_29.setTransform(609.475,112.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_30.setTransform(603.975,113.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("AgMAzQgEgDgEgFIAAAKIgLAAIAAhrIAMAAIAAAnQAEgGAGgDQAFgDAFAAQAPAAAIAKQAJAKAAATQAAATgJAMQgIAMgQAAQgHAAgFgEgAgNgIQgHAGAAAPQAAALACAHQAFANANAAQAKAAAFgJQAFgIAAgOQAAgNgFgHQgFgIgKAAQgIAAgFAHg");
	this.shape_31.setTransform(596.4,112.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663300").s().p("AgQAHIAAgNIAhAAIAAANg");
	this.shape_32.setTransform(586.175,113.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_33.setTransform(578.425,112.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_34.setTransform(575.325,112.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_35.setTransform(569.775,113.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AAPAnIgPg7IgOA7IgNAAIgVhNIAOAAIAOA9IAOg9IANAAIAOA8IAPg8IANAAIgWBNg");
	this.shape_36.setTransform(560.875,113.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgCgEQgEgIgJABIgFABQgGABgDAFQgEAEgBAEIgBAMIAAAoIgMAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAPAAAGAMQADAGAAAMIAAAxg");
	this.shape_37.setTransform(548.05,113.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgMAHgFQAGgFALgCIASgCQAFgBABgEIABgEQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDAEAAAFIgMAAQABgOAIgFQAJgHALAAQAMABAIAFQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgEQgEAFgHAEQgGADgIAAQgLABgGgHgAAJACIgHABIgHABQgHABgDACQgGAEAAAHQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFACg");
	this.shape_38.setTransform(540.375,113.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AAlAoIAAg2QAAgHgEgDQgEgDgFAAQgHAAgFAFQgGAFAAAMIAAAtIgLAAIAAgyQgBgIgBgEQgDgGgIABQgHAAgFAFQgGAGAAAQIAAAoIgMAAIAAhOIAMAAIAAAMQAEgGAEgCQAGgFAIAAQAIAAAGAFQACACADAFQADgGAGgDQAGgDAGAAQAQAAAFALQACAGABALIAAAzg");
	this.shape_39.setTransform(530.55,113.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IAMAAIAAAzQABAGABAEQAEAHAIAAQALAAAGgNQACgGAAgLIAAgmIAMAAIAABNIgLAAIAAgLQgDAEgEADQgGAGgJAAQgQAAgFgLg");
	this.shape_40.setTransform(520.7,113.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AARA2IAAgxQAAgIgCgEQgDgHgJABQgHgBgHAGQgFAFAAAQIAAApIgNAAIAAhrIANAAIAAAoQAEgGADgCQAHgEAHgBQARABAFAMQADAGAAALIAAAyg");
	this.shape_41.setTransform(513,112.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_42.setTransform(501.275,113.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AgWAeQgJgLAAgRQAAgUAKgLQAJgMAOAAQAMAAAIAHQAIAGABAQIgLAAQgBgIgFgEQgEgFgIAAQgLAAgFANQgEAHABALQAAAMAEAIQAFAIAJAAQAIAAAEgFQAFgFACgJIALAAQgCAQgIAHQgIAIgNgBQgOABgIgMg");
	this.shape_43.setTransform(493.95,113.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgCgEQgEgIgJABIgFABQgGABgDAFQgEAEgBAEIgBAMIAAAoIgMAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAPAAAGAMQADAGAAAMIAAAxg");
	this.shape_44.setTransform(486.5,113.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgMAHgFQAGgFALgCIASgCQAFgBABgEIABgEQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDAEAAAFIgMAAQABgOAIgFQAJgHALAAQAMABAIAFQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgEQgEAFgHAEQgGADgIAAQgLABgGgHgAAJACIgHABIgHABQgHABgDACQgGAEAAAHQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFACg");
	this.shape_45.setTransform(478.875,113.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("AARA2IAAgxQAAgIgBgEQgEgHgJABQgHgBgGAGQgGAFgBAQIAAApIgMAAIAAhrIAMAAIAAAoQAFgGADgCQAHgEAHgBQARABAFAMQADAGAAALIAAAyg");
	this.shape_46.setTransform(470.95,112.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("AASAoIAAgwQgBgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_47.setTransform(463.15,113.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_48.setTransform(455.325,113.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AgXAtQgJgMAAgSQAAgQAJgNQAIgNAPABQAHAAAGADQAEACAEAGIAAgnIALAAIAABrIgLAAIAAgMQgEAIgGADQgGADgHABQgLAAgKgLgAgNgHQgGAHABAOQAAANAEAJQAFAIALAAQAIAAAFgIQAGgIAAgPQAAgOgGgGQgGgIgIAAQgIAAgGAIg");
	this.shape_49.setTransform(443.45,112.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgCgEQgEgIgJABIgGABQgFABgEAFQgDAEAAAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_50.setTransform(435.9,113.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgMAHgFQAGgFALgCIASgCQAFgBABgEIABgEQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDAEAAAFIgMAAQABgOAIgFQAJgHALAAQAMABAIAFQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgEQgEAFgHAEQgGADgIAAQgLABgGgHgAAJACIgHABIgHABQgHABgDACQgGAEAAAHQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFACg");
	this.shape_51.setTransform(428.275,113.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_52.setTransform(416.375,113.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("AgRAoIAAhOIAMAAIAAAOQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAGAAAJIAAAsg");
	this.shape_53.setTransform(410.625,113.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IAMAAIAAAzQAAAGACAEQAEAHAIAAQAMAAAFgNQACgGAAgLIAAgmIAMAAIAABNIgMAAIAAgLQgCAEgDADQgHAGgJAAQgQAAgFgLg");
	this.shape_54.setTransform(403.9,113.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_55.setTransform(398.125,112.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgMAHgFQAGgFALgCIASgCQAFgBABgEIABgEQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDAEAAAFIgMAAQABgOAIgFQAJgHALAAQAMABAIAFQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgEQgEAFgHAEQgGADgIAAQgLABgGgHgAAJACIgHABIgHABQgHABgDACQgGAEAAAHQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFACg");
	this.shape_56.setTransform(392.475,113.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgBgEQgEgIgIABIgGABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgMAAIAAhOIAMAAIAAAMQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_57.setTransform(384.55,113.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAJgMAPAAQAOAAAJAKQAKAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_58.setTransform(372.8,113.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_59.setTransform(366.975,112.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_60.setTransform(357.3,113.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAJgMAPAAQAOAAAJAKQAKAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_61.setTransform(349.4,113.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_62.setTransform(344.075,112.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_63.setTransform(340.525,112.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("AgWAeQgIgLAAgRQAAgUAJgLQAKgMANAAQANAAAHAHQAIAGACAQIgMAAQgCgIgDgEQgEgFgJAAQgLAAgFANQgEAHAAALQABAMAFAIQAEAIAJAAQAIAAAFgFQAEgFACgJIAMAAQgCAQgJAHQgIAIgNgBQgNABgJgMg");
	this.shape_64.setTransform(335.15,113.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_65.setTransform(327.625,113.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_66.setTransform(319.95,113.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgCgEQgEgIgJABIgGABQgFABgEAFQgDAEAAAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_67.setTransform(312.15,113.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAJgLQAKgMAOAAQAOAAALAKQAJAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_68.setTransform(304.25,113.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AgWAeQgJgLAAgRQAAgUAKgLQAKgMANAAQAMAAAIAHQAIAGABAQIgMAAQAAgIgEgEQgFgFgIAAQgLAAgFANQgDAHAAALQAAAMAEAIQAFAIAJAAQAIAAAEgFQAFgFABgJIAMAAQgCAQgIAHQgIAIgNgBQgNABgJgMg");
	this.shape_69.setTransform(296.95,113.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AggA4IAAhsIANAAIAAAKQADgGAFgDQAGgEAHAAQANAAAJALQAJAKAAASQAAAZgNALQgIAHgLAAQgHAAgFgDQgEgDgEgFIAAAogAgRgdQgDAGABAMQgBAJADAFQAFANAMAAQAJAAAFgIQAGgIAAgOQAAgJgCgIQgFgNgNABQgNAAgEAOg");
	this.shape_70.setTransform(285.8,115.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_71.setTransform(277.775,113.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_72.setTransform(269.975,113.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("AgWAtQgJgMAAgSQAAgQAHgNQAIgNAQABQAIAAAFADQADACAEAGIAAgnIANAAIAABrIgMAAIAAgMQgEAIgGADQgGADgGABQgNAAgIgLgAgNgHQgFAHAAAOQgBANAGAJQAFAIAJAAQAJAAAGgIQAFgIAAgPQAAgOgGgGQgGgIgIAAQgIAAgGAIg");
	this.shape_73.setTransform(262.05,112.35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgMAHgFQAGgFALgCIASgCQAFgBABgEIABgEQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDAEAAAFIgMAAQABgOAIgFQAJgHALAAQAMABAIAFQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgEQgEAFgHAEQgGADgIAAQgLABgGgHgAAJACIgHABIgHABQgHABgDACQgGAEAAAHQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFACg");
	this.shape_74.setTransform(250.725,113.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_75.setTransform(239.325,113.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#663300").s().p("AgRAoIAAhOIAMAAIAAAOQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAGAAAJIAAAsg");
	this.shape_76.setTransform(233.875,113.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_77.setTransform(227.175,113.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_78.setTransform(221.325,112.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_79.setTransform(215.925,113.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAQAAQAOAAAJAKQAKAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_80.setTransform(208.45,113.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#663300").s().p("AgGA3IAAhDIgKAAIAAgKIAKAAIAAgNQAAgIACgEQAEgHAMABIACAAIAEAAIAAAMIgEAAIgBAAQgGAAgBACQgBADAAAOIANAAIAAAKIgNAAIAABDg");
	this.shape_81.setTransform(202.7,112.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_82.setTransform(194.825,112.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgMAHgFQAGgFALgCIASgCQAFgBABgEIABgEQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDAEAAAFIgMAAQABgOAIgFQAJgHALAAQAMABAIAFQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgEQgEAFgHAEQgGADgIAAQgLABgGgHgAAJACIgHABIgHABQgHABgDACQgGAEAAAHQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFACg");
	this.shape_83.setTransform(189.175,113.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#663300").s().p("AASA2IAAgxQAAgIgCgEQgEgHgKABQgGgBgGAGQgHAFABAQIAAApIgNAAIAAhrIANAAIAAAoQAEgGAEgCQAFgEAIgBQAQABAGAMQADAGAAALIAAAyg");
	this.shape_84.setTransform(181.3,112.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_85.setTransform(175.375,112.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_86.setTransform(166.075,113.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_87.setTransform(160.525,112.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_88.setTransform(154.8,113.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_89.setTransform(146.925,113.75);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#663300").s().p("AAlAoIAAg2QAAgHgEgDQgEgDgFAAQgHAAgFAFQgGAFAAAMIAAAtIgLAAIAAgyQgBgIgBgEQgDgGgIABQgHAAgFAFQgGAGAAAQIAAAoIgMAAIAAhOIAMAAIAAAMQAEgGAEgCQAGgFAIAAQAIAAAGAFQACACACAFQAEgGAGgDQAGgDAGAAQAQAAAFALQACAGAAALIAAAzg");
	this.shape_90.setTransform(137.25,113.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgDgEQgDgIgJABIgGABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_91.setTransform(127.55,113.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAJgLQAKgMAPAAQANAAALAKQAJAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_92.setTransform(119.65,113.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#663300").s().p("AgRAoIAAhOIAMAAIAAAOQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAGAAAJIAAAsg");
	this.shape_93.setTransform(113.925,113.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_94.setTransform(109.625,112.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#663300").s().p("AgGAnIgbhNIAOAAIATA/IAUg/IAOAAIgcBNg");
	this.shape_95.setTransform(104.55,113.675);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhOIAMAAIAAAMQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_96.setTransform(97.2,113.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEABgFABQgNAAgKgLgAAVgGQgBgJgDgFQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_97.setTransform(89.325,113.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#663300").s().p("AgUAzQgIgFgBgNIANAAQABAGACADQAEAEAJAAQAOAAAEgLQADgGgBgQQgDAFgGAEQgFADgHAAQgMAAgJgJQgJgKAAgTQAAgUAJgMQAJgLANABQAHAAAHAEIAHAHIAAgJIALAAIAABGQAAAPgEAJQgIAPgUAAQgMABgIgGgAgQgeQgCAGAAAMQAAAMAFAHQAFAHAIAAQAMAAAGgNQADgGAAgKQAAgOgGgIQgFgHgJAAQgMABgFANg");
	this.shape_98.setTransform(713.325,98.25);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgDgEQgDgIgJABIgGABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_99.setTransform(705.8,96.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_100.setTransform(700.325,95.225);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_101.setTransform(696.775,95.625);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgLAHgHQAGgEALgCIASgCQAFgBABgDIABgFQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDADAAAGIgMAAQABgOAIgFQAJgGALgBQAMAAAIAGQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgFQgEAGgHAEQgGAEgIAAQgLAAgGgHgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFABg");
	this.shape_102.setTransform(691.125,96.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEACgFgBQgNABgKgLgAAVgGQgBgIgDgGQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_103.setTransform(683.175,96.75);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAHAAAIIAAAsg");
	this.shape_104.setTransform(677.425,96.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#663300").s().p("AgWAeQgIgLAAgRQAAgUAJgLQAKgMANAAQANABAHAGQAIAGACAQIgNAAQgBgIgDgEQgEgFgJAAQgLAAgFANQgDAIgBAKQAAAMAGAIQAEAIAJAAQAIAAAFgFQAEgFABgJIANAAQgCAQgJAHQgIAIgNAAQgNAAgJgMg");
	this.shape_105.setTransform(671.2,96.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAHAAAIIAAAsg");
	this.shape_106.setTransform(658.975,96.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAJgLQAKgMAPAAQAOAAAJAKQAKAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_107.setTransform(652.25,96.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AgGA3IAAhDIgLAAIAAgLIALAAIAAgMQAAgIADgEQADgHAMABIADAAIACAAIAAAMIgCAAIgCAAQgGAAgBACQgBAEAAAMIAMAAIAAALIgMAAIAABDg");
	this.shape_108.setTransform(646.55,95.15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AAPA2IgXgoIgKAKIAAAeIgLAAIAAhrIALAAIAAA+IAfghIAPAAIgcAcIAfAyg");
	this.shape_109.setTransform(634.75,95.225);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAHAAAIIAAAsg");
	this.shape_110.setTransform(628.875,96.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAPAAQAOAAALAKQAJAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_111.setTransform(622.15,96.725);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#663300").s().p("AAPAnIgPg7IgOA7IgNAAIgVhNIAOAAIAOA9IAOg9IANAAIAOA8IAPg8IANAAIgWBNg");
	this.shape_112.setTransform(613.275,96.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEACgFgBQgNABgKgLgAAVgGQgBgIgDgGQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_113.setTransform(604.275,96.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("AAkAoIAAg2QABgHgEgDQgDgDgGAAQgHAAgGAFQgEAFAAAMIAAAtIgNAAIAAgyQAAgIgBgEQgDgGgIABQgGAAgGAFQgGAGAAAQIAAAoIgMAAIAAhNIAMAAIAAALQAEgGAEgCQAGgFAHAAQAJAAAGAFQACACADAFQAEgGAFgDQAGgDAGAAQAPAAAFALQAEAHAAAKIAAAzg");
	this.shape_114.setTransform(594.6,96.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgLAHgHQAGgEALgCIASgCQAFgBABgDIABgFQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDADAAAGIgMAAQABgOAIgFQAJgGALgBQAMAAAIAGQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgFQgEAGgHAEQgGAEgIAAQgLAAgGgHgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFABg");
	this.shape_115.setTransform(585.025,96.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAHAAAIIAAAsg");
	this.shape_116.setTransform(579.075,96.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#663300").s().p("AgGA3IAAhDIgKAAIAAgLIAKAAIAAgMQAAgIACgEQAEgHAMABIACAAIAEAAIAAAMIgEAAIgBAAQgGAAgBACQgBAEAAAMIANAAIAAALIgNAAIAABDg");
	this.shape_117.setTransform(574.4,95.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#663300").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_118.setTransform(564.175,95.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgLAHgHQAGgEALgCIASgCQAFgBABgDIABgFQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDADAAAGIgMAAQABgOAIgFQAJgGALgBQAMAAAIAGQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgFQgEAGgHAEQgGAEgIAAQgLAAgGgHgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFABg");
	this.shape_119.setTransform(558.825,96.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#663300").s().p("AASAoIAAgwQgBgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_120.setTransform(550.9,96.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAPAAQAOAAAKAKQAKAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_121.setTransform(543.05,96.725);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_122.setTransform(537.675,95.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_123.setTransform(534.125,95.625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgLAHgHQAGgEALgCIASgCQAFgBABgDIABgFQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDADAAAGIgMAAQABgOAIgFQAJgGALgBQAMAAAIAGQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgFQgEAGgHAEQgGAEgIAAQgLAAgGgHgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFABg");
	this.shape_124.setTransform(528.475,96.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#663300").s().p("AgWAtQgKgMAAgSQAAgQAJgNQAHgNAQABQAIAAAFADQAEACAEAGIAAgnIALAAIAABrIgLAAIAAgLQgEAHgGADQgGADgHAAQgLABgJgLgAgNgHQgGAHAAAOQABANAFAJQAEAIALAAQAIAAAFgIQAGgIAAgPQAAgNgGgHQgGgIgIAAQgIAAgGAIg");
	this.shape_125.setTransform(520.3,95.35);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgBgEQgEgIgIABIgGABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAALQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_126.setTransform(512.8,96.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGABAEQAEAHAIAAQAMAAAEgNQADgGAAgLIAAgmIAMAAIAABNIgMAAIAAgLQgCAEgDADQgHAGgJAAQgQAAgFgLg");
	this.shape_127.setTransform(504.9,96.775);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAJgLQAKgMAPAAQAOAAAKAKQAJAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_128.setTransform(497.1,96.725);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#663300").s().p("AgHA3IAAhDIgJAAIAAgLIAJAAIAAgMQABgIACgEQAEgHAMABIADAAIADAAIAAAMIgDAAIgCAAQgGAAgBACQgBAEAAAMIANAAIAAALIgNAAIAABDg");
	this.shape_129.setTransform(491.35,95.15);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#663300").s().p("AgbAjQgHgGAAgKQAAgLAHgHQAGgEALgCIASgCQAFgBABgDIABgFQAAgHgFgDQgEgDgIAAQgJAAgEAFQgDADAAAGIgMAAQABgOAIgFQAJgGALgBQAMAAAIAGQAIAFAAAMIAAAsIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgEABIgFAAQgGABgDgFQgBgDgBgFQgEAGgHAEQgGAEgIAAQgLAAgGgHgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFgBQAHABAFgEQAKgFAAgMIAAgKIgFABg");
	this.shape_130.setTransform(478.925,96.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_131.setTransform(464.625,96.725);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEACgFgBQgNABgKgLgAAVgGQgBgIgDgGQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_132.setTransform(457.125,96.75);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663300").s().p("AgXAtQgIgMgBgSQABgQAHgNQAJgNAPABQAIAAAFADQADACAEAGIAAgnIANAAIAABrIgMAAIAAgLQgEAHgGADQgGADgGAAQgMABgKgLgAgNgHQgFAHAAAOQAAANAEAJQAGAIAJAAQAJAAAGgIQAFgIAAgPQAAgNgGgHQgGgIgIAAQgIAAgGAIg");
	this.shape_133.setTransform(449.15,95.35);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_134.setTransform(443.975,95.225);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#663300").s().p("AgGAnIgbhNIAOAAIATA/IAUg/IAOAAIgcBNg");
	this.shape_135.setTransform(438.9,96.675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAJgLQAKgMAPAAQAOAAAKAKQAJAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_136.setTransform(431.4,96.725);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAHAAAIIAAAsg");
	this.shape_137.setTransform(425.675,96.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("AggA4IAAhtIANAAIAAALQAEgFADgEQAHgEAHAAQANAAAJAKQAJALgBASQAAAZgMALQgIAHgKAAQgIAAgGgDQgDgDgEgFIAAAogAgRgdQgCAGAAAMQAAAJACAFQAFAMAMABQAIAAAGgIQAGgIAAgOQAAgKgCgGQgGgNgMgBQgMABgFAOg");
	this.shape_138.setTransform(419.25,98.15);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgCgEQgDgIgIABIgHABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAFgHAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_139.setTransform(404.55,96.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("AgUAzQgIgFgBgNIANAAQABAGACADQAEAEAJAAQAOAAAEgLQADgGgBgQQgDAFgGAEQgFADgHAAQgMAAgJgJQgJgKAAgTQAAgUAJgMQAJgLANABQAHAAAHAEIAHAHIAAgJIALAAIAABGQAAAPgEAJQgIAPgUAAQgMABgIgGgAgQgeQgCAGAAAMQAAAMAFAHQAFAHAIAAQAMAAAGgNQADgGAAgKQAAgOgGgIQgFgHgJAAQgMABgFANg");
	this.shape_140.setTransform(396.475,98.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_141.setTransform(391.275,95.225);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_142.setTransform(386.225,96.725);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEACgFgBQgNABgKgLgAAVgGQgBgIgDgGQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_143.setTransform(378.775,96.75);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("AgoA2IAAhrIAoAAQATAAAMAQQAKAOAAAWQAAAQgGAOQgLAZgYAAgAgbApIAZAAQAFAAAFgBQAIgDAEgIQAEgHACgKIABgLQAAgTgHgLQgIgLgOAAIgZAAg");
	this.shape_144.setTransform(370.05,95.225);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#663300").s().p("AgWAeQgJgLAAgRQAAgUAKgLQAKgMANAAQAMABAIAGQAIAGABAQIgMAAQAAgIgEgEQgFgFgIAAQgLAAgFANQgDAIAAAKQAAAMAEAIQAFAIAJAAQAIAAAEgFQAFgFABgJIAMAAQgCAQgIAHQgIAIgNAAQgNAAgJgMg");
	this.shape_145.setTransform(354.55,96.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_146.setTransform(349.425,95.225);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#663300").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_147.setTransform(346.375,95.225);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_148.setTransform(343.275,95.225);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#663300").s().p("AARA2IAAgxQAAgIgCgEQgDgHgJABQgHgBgHAGQgFAFgBAQIAAApIgMAAIAAhrIAMAAIAAAoQAFgGADgCQAHgFAHAAQAQAAAGANQADAGAAALIAAAyg");
	this.shape_149.setTransform(337.85,95.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#663300").s().p("AgfA4IAAhtIALAAIAAALQAEgFAFgEQAGgEAIAAQAMAAAJAKQAIALABASQgBAZgMALQgIAHgKAAQgIAAgFgDQgEgDgEgFIAAAogAgRgdQgCAGgBAMQABAJACAFQAFAMAMABQAJAAAFgIQAGgIAAgOQAAgKgDgGQgFgNgMgBQgNABgEAOg");
	this.shape_150.setTransform(330.2,98.15);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAJgLQAKgMAPAAQANAAALAKQAJAKAAAUQAAASgIAMQgJANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAFgKQAEgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_151.setTransform(322.15,96.725);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_152.setTransform(316.825,95.225);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#663300").s().p("AgmA2IAAhrIArAAQASAAAHALQAFAHgBAJQABAKgGAHIgIAGQAIADAEADQAGAHAAAMQAAALgGAIQgJANgUAAgAgYApIAcAAQANAAAFgHQAEgFgBgHQABgMgLgEQgFgDgIAAIgaAAgAgYgHIAYAAQAIAAAFgDQAIgEAAgKQgBgLgHgEQgFgCgIAAIgYAAg");
	this.shape_153.setTransform(310.85,95.225);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#663300").s().p("AgGA3IAAhDIgKAAIAAgLIAKAAIAAgMQAAgIACgEQAEgHAMABIACAAIAEAAIAAAMIgEAAIgBAAQgGAAgBACQgBAEAAAMIANAAIAAALIgNAAIAABDg");
	this.shape_154.setTransform(297.2,95.15);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAQAAQAOAAAJAKQAKAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_155.setTransform(291.25,96.725);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_156.setTransform(277.175,96.725);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEACgFgBQgNABgKgLgAAVgGQgBgIgDgGQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_157.setTransform(269.725,96.75);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#663300").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_158.setTransform(264.375,95.225);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#663300").s().p("AggA4IAAhtIANAAIAAALQAEgFADgEQAHgEAHAAQANAAAJAKQAJALgBASQAAAZgMALQgIAHgKAAQgIAAgGgDQgDgDgEgFIAAAogAgRgdQgCAGAAAMQAAAJACAFQAFAMAMABQAIAAAGgIQAGgIAAgOQAAgKgCgGQgGgNgMgBQgMABgFAOg");
	this.shape_159.setTransform(259.05,98.15);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_160.setTransform(253.425,95.225);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#663300").s().p("AgWAeQgIgLgBgRQAAgUAKgLQAJgMAOAAQANABAHAGQAIAGACAQIgMAAQgCgIgEgEQgDgFgJAAQgLAAgFANQgEAIAAAKQABAMAFAIQAEAIAJAAQAIAAAEgFQAFgFACgJIAMAAQgCAQgJAHQgIAIgNAAQgNAAgJgMg");
	this.shape_161.setTransform(248.4,96.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgBgEQgEgIgIABIgGABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAALQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_162.setTransform(241,96.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_163.setTransform(235.525,95.225);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgFQAGgGAHAAIABAAIADAAIAAAOIgCAAIgCAAQgJAAgFAGQgEAHAAAIIAAAsg");
	this.shape_164.setTransform(232.075,96.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#663300").s().p("AgfA4IAAhtIAMAAIAAALQADgFAFgEQAGgEAHAAQANAAAJAKQAJALAAASQAAAZgNALQgIAHgLAAQgHAAgFgDQgEgDgEgFIAAAogAgRgdQgDAGABAMQgBAJADAFQAFAMAMABQAJAAAFgIQAGgIAAgOQAAgKgDgGQgEgNgNgBQgNABgEAOg");
	this.shape_165.setTransform(225.6,98.15);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#663300").s().p("AgXArQgKgLAAgaQAAgTAFgNQAIgbAWAAQAQAAAHAJQAGAKAAAJIgMAAQgBgGgCgEQgFgGgJAAQgJAAgGAKQgGAKgBATQAEgGAHgDQAFgEAHAAQAMAAAJAJQAKAHAAARQAAAOgJALQgJALgQAAQgNAAgKgLgAgNACQgGAFAAAMQAAAKAGAHQAFAGAJABQAKAAAFgHQAEgIAAgJQAAgIgEgIQgEgFgMAAQgHgBgGAFg");
	this.shape_166.setTransform(210.925,95.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#663300").s().p("AgXAfQgJgLAAgTQAAgSAJgMQAKgLAOAAQAIAAAHADQAIAEADAGQAEAHABAHIABARIg0AAQAAALAFAIQAFAHAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEACgFgBQgNABgKgLgAAVgGQgBgIgDgGQgFgJgMAAQgHAAgGAHQgFAGgBAKIAoAAIAAAAg");
	this.shape_167.setTransform(196.325,96.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#663300").s().p("AASA2IAAgxQAAgIgCgEQgEgHgKABQgGgBgGAGQgHAFAAAQIAAApIgMAAIAAhrIAMAAIAAAoQAFgGAEgCQAFgFAIAAQAQAAAGANQADAGAAALIAAAyg");
	this.shape_168.setTransform(188.6,95.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_169.setTransform(182.675,95.625);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#663300").s().p("AgHAMQAGgBABgGIAAgFIAAgBIAAgBIgHAAIAAgQIAPAAIAAAPQgBAHgDAHQgDAGgIACg");
	this.shape_170.setTransform(172.05,100.925);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#663300").s().p("AASAoIAAgwQAAgIgDgEQgDgIgJABIgGABQgFABgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAALQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_171.setTransform(166.25,96.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAQAAQANAAAKAKQAKAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_172.setTransform(158.4,96.725);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#663300").s().p("AgFA2IAAhNIALAAIAABNgAgFgmIAAgPIALAAIAAAPg");
	this.shape_173.setTransform(153.025,95.225);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#663300").s().p("AgWAiQgHgIgBgMIAMAAQABAHACADQAFAHALAAQAHAAAFgEQAGgDAAgGQAAgFgFgDIgKgEIgJgCQgKgDgFgCQgIgFAAgKQAAgLAIgHQAIgHAMAAQAQAAAIALQAEAGAAAIIgLAAQgBgFgCgDQgFgFgKAAQgHAAgDACQgEADAAAFQAAAFAFADIAIADIAHACQAOAEAFACQAHAFAAALQAAALgIAHQgHAIgQAAQgPAAgHgIg");
	this.shape_174.setTransform(147.975,96.725);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IAMAAIAAAzQABAGABAEQAEAHAIAAQALAAAGgNQACgGAAgLIAAgmIAMAAIAABNIgMAAIAAgLQgCAEgEADQgGAGgJAAQgQAAgFgLg");
	this.shape_175.setTransform(140.45,96.775);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#663300").s().p("AgFA2IAAhrIALAAIAABrg");
	this.shape_176.setTransform(135.175,95.225);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#663300").s().p("AgWAeQgJgLABgRQgBgUAKgLQAKgMANAAQAMABAIAGQAIAGACAQIgNAAQgBgIgDgEQgFgFgIAAQgLAAgFANQgDAIAAAKQgBAMAGAIQAEAIAJAAQAIAAAFgFQAEgFABgJIANAAQgDAQgIAHQgIAIgNAAQgOAAgIgMg");
	this.shape_177.setTransform(130.1,96.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgBgEQgEgIgIABIgGABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAALQAFgHAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_178.setTransform(122.65,96.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAQAAQANAAAKAKQAKAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_179.setTransform(114.75,96.725);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#663300").s().p("AgWAeQgJgLAAgRQAAgUAKgLQAKgMANAAQAMABAIAGQAIAGABAQIgMAAQAAgIgEgEQgFgFgIAAQgLAAgFANQgDAIAAAKQAAAMAEAIQAFAIAJAAQAIAAAEgFQAFgFABgJIAMAAQgCAQgIAHQgIAIgNAAQgNAAgJgMg");
	this.shape_180.setTransform(107.5,96.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#663300").s().p("AARAoIAAgwQAAgIgBgEQgEgIgIABIgGABQgGABgDAFQgDAEgCAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAALQAFgHAGgDQAFgDAHAAQAPAAAGAMQADAGAAAMIAAAxg");
	this.shape_181.setTransform(93.3,96.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#663300").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_182.setTransform(87.575,95.225);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#663300").s().p("AgXA3IgDgBIAAgMIAFACIACAAIAFgBIADgDIACgGIADgIIgbhQIAOAAIATA/IAUg/IAOAAIgMAiIgLAgQgLAegDAHQgFAGgLAAg");
	this.shape_183.setTransform(391.875,115.225);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_184.setTransform(384.575,113.65);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGABAEQAEAHAIAAQAMAAAEgNQADgGAAgLIAAgmIAMAAIAABNIgMAAIAAgLQgCAEgDADQgHAGgJAAQgPAAgGgLg");
	this.shape_185.setTransform(355.5,113.725);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJABgFAGQgEAGAAAJIAAAsg");
	this.shape_186.setTransform(338.925,113.55);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_187.setTransform(332.425,113.65);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#663300").s().p("AASAoIAAgxQAAgGgCgFQgEgHgJAAIgFAAQgGACgDAFQgEAEgBAEIAAAMIAAAoIgNAAIAAhNIAMAAIAAAKQAFgGAGgDQAGgDAGAAQAPAAAGAMQADAGAAAMIAAAxg");
	this.shape_188.setTransform(313.6,113.55);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#663300").s().p("AgXAsQgJgLAAgSQAAgQAJgMQAIgNAPgBQAHAAAGAFQAEACAEAFIAAgoIALAAIAABrIgLAAIAAgKQgEAHgGADQgGADgHAAQgLAAgKgLgAgNgHQgGAHABAOQAAANAEAIQAFAJALAAQAIAAAFgIQAGgIAAgOQAAgOgGgIQgGgHgIAAQgIAAgGAIg");
	this.shape_189.setTransform(298.55,112.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEABgFAAQgNAAgKgLgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_190.setTransform(290.975,113.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#663300").s().p("AggA4IAAhtIANAAIAAALQADgFAFgDQAGgFAHAAQANAAAJAKQAJAKAAAUQAAAYgNALQgIAHgLAAQgHAAgFgDQgEgDgEgGIAAApgAgRgdQgDAHABALQgBAJADAGQAFAMAMgBQAJAAAFgHQAGgIAAgOQAAgJgCgHQgFgOgNAAQgNAAgEAPg");
	this.shape_191.setTransform(279.5,115.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_192.setTransform(271.675,113.65);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#663300").s().p("AgXAsQgIgLgBgSQABgQAHgMQAJgNAPgBQAHAAAGAFQAEACADAFIAAgoIAMAAIAABrIgLAAIAAgKQgEAHgGADQgGADgGAAQgMAAgKgLgAgNgHQgGAHABAOQAAANAEAIQAGAJAKAAQAIAAAGgIQAFgIAAgOQAAgOgGgIQgFgHgJAAQgIAAgGAIg");
	this.shape_193.setTransform(263.55,112.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_194.setTransform(256.125,113.65);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#663300").s().p("AgWAsQgJgLAAgSQAAgQAHgMQAIgNAQgBQAIAAAFAFQADACAEAFIAAgoIANAAIAABrIgMAAIAAgKQgEAHgGADQgGADgGAAQgNAAgIgLgAgNgHQgFAHAAAOQgBANAGAIQAFAJAJAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgIAAQgIAAgGAIg");
	this.shape_195.setTransform(244.05,112.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#663300").s().p("AASAoIAAgxQAAgGgCgFQgEgHgJAAIgGAAQgFACgEAFQgDAEAAAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAFgGAGgDQAFgDAHAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_196.setTransform(236.55,113.55);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_197.setTransform(228.875,113.65);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#663300").s().p("AgWAsQgKgLABgSQgBgQAJgMQAHgNAQgBQAHAAAGAFQAEACAEAFIAAgoIAMAAIAABrIgMAAIAAgKQgEAHgGADQgGADgHAAQgMAAgIgLgAgNgHQgFAHgBAOQAAANAGAIQAEAJALAAQAIAAAFgIQAGgIAAgOQAAgOgGgIQgFgHgJAAQgIAAgGAIg");
	this.shape_198.setTransform(216.8,112.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEABgFAAQgNAAgKgLgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_199.setTransform(209.225,113.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_200.setTransform(197.725,113.65);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJABgFAGQgEAGAAAJIAAAsg");
	this.shape_201.setTransform(191.775,113.55);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#663300").s().p("AgUAzQgIgGgBgMIANAAQABAFACADQAEAFAJAAQAOAAAEgLQADgGgBgQQgDAFgGAEQgFACgHAAQgMABgJgKQgJgIAAgUQAAgUAJgMQAJgKANgBQAHABAHAEIAHAIIAAgKIALAAIAABGQAAAPgEAJQgIAPgUABQgMgBgIgFgAgQgeQgCAHAAALQAAAMAFAHQAFAGAIABQAMAAAGgNQADgGAAgKQAAgOgGgIQgFgGgJAAQgMAAgFANg");
	this.shape_202.setTransform(184.875,115.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEABgFAAQgNAAgKgLgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_203.setTransform(177.325,113.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#663300").s().p("AASAoIAAgxQgBgGgCgFQgDgHgIAAIgHAAQgFACgEAFQgCAEgBAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAFgGAGgDQAGgDAGAAQAQAAAFAMQADAGAAAMIAAAxg");
	this.shape_204.setTransform(165.7,113.55);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAJIgGAJQgFAGgJACQgEABgFAAQgNAAgKgLgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_205.setTransform(150.875,113.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#663300").s().p("AgNAzQgDgDgEgFIAAAKIgMAAIAAhrIAMAAIAAAnQAFgGAGgDQAFgDAGAAQANAAAJAKQAJAKgBATQABATgJAMQgJAMgOAAQgIAAgGgEgAgOgIQgGAGAAAPQAAALADAHQAEANANAAQAKAAAFgJQAFgIAAgOQAAgNgFgHQgFgIgKAAQgHAAgHAHg");
	this.shape_206.setTransform(143.3,112.275);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#663300").s().p("AARAoIAAgxQABgGgCgFQgEgHgJAAIgFAAQgGACgDAFQgEAEgBAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAAKQAFgGAGgDQAGgDAGAAQAPAAAGAMQADAGAAAMIAAAxg");
	this.shape_207.setTransform(131.45,113.55);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_208.setTransform(123.825,113.65);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#663300").s().p("AgWAeQgJgLAAgRQAAgUAKgLQAJgLAOAAQAMAAAIAFQAIAHABAQIgLAAQgBgHgFgFQgDgFgJAAQgLAAgFAMQgEAJABAKQAAAMAEAIQAFAIAJAAQAIAAAEgFQAFgFACgJIALAAQgCAQgIAHQgIAHgNABQgOAAgIgMg");
	this.shape_209.setTransform(116.3,113.65);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgHQAGgFALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgGQgEAGgHAEQgGADgIABQgLgBgGgGgAAJABIgHACIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEAEAFAAQAHAAAFgEQAKgFAAgNIAAgJIgFABg");
	this.shape_210.setTransform(101.225,113.65);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#663300").s().p("AARA2IAAgyQAAgHgBgEQgEgGgKAAQgGAAgGAFQgHAGAAAPIAAApIgMAAIAAhrIAMAAIAAAoQAFgGADgCQAHgFAHABQAQAAAGAMQADAGAAAKIAAAzg");
	this.shape_211.setTransform(93.3,112.15);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_212.setTransform(706.925,96.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#663300").s().p("AgWAsQgJgLAAgSQAAgQAHgMQAIgOAQAAQAHAAAGAFQADACAEAFIAAgoIANAAIAABrIgMAAIAAgKQgEAHgGADQgGAEgGAAQgNAAgIgMgAgNgHQgFAHgBAOQAAANAGAIQAFAJAJAAQAJAAAGgIQAFgIAAgOQAAgOgGgIQgGgHgIAAQgIAAgGAIg");
	this.shape_213.setTransform(699,95.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IANAAIAAAzQgBAGACAEQADAHAJAAQAMAAAEgNQADgGAAgLIAAgmIAMAAIAABNIgLAAIAAgLQgDAEgDADQgHAGgJAAQgPAAgGgLg");
	this.shape_214.setTransform(688.25,96.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#663300").s().p("AgUAzQgIgGgBgMIANAAQABAFACADQAEAFAJAAQAOAAAEgLQADgGgBgQQgDAFgGAEQgFACgHAAQgMAAgJgJQgJgIAAgUQAAgUAJgLQAJgMANAAQAHAAAHAFIAHAIIAAgKIALAAIAABGQAAAPgEAIQgIAQgUABQgMgBgIgFgAgQgfQgCAIAAAKQAAANAFAHQAFAGAIAAQAMAAAGgMQADgGAAgKQAAgOgGgIQgFgGgJAAQgMAAgFAMg");
	this.shape_215.setTransform(680.275,98.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_216.setTransform(668.175,96.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#663300").s().p("AgNAzQgDgDgEgFIAAAKIgMAAIAAhrIAMAAIAAAnQAFgGAFgDQAGgDAGAAQANAAAJAKQAIAKAAATQAAATgIAMQgJAMgOAAQgIAAgGgEgAgNgIQgHAGAAAPQAAALADAHQAEANANAAQAKAAAFgJQAFgIAAgOQAAgNgFgHQgFgIgKAAQgIAAgFAHg");
	this.shape_217.setTransform(657.55,95.275);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#663300").s().p("AASAnIgSgdIgRAdIgQAAIAagnIgYgmIAPAAIAQAbIARgbIAQAAIgZAmIAaAng");
	this.shape_218.setTransform(646.8,96.625);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_219.setTransform(639.375,96.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#663300").s().p("AgGA2IAAhCIgKAAIAAgKIAKAAIAAgNQAAgIACgEQAEgGAMgBIACAAIAEAAIAAAMIgEAAIgBAAQgGABgBADQgBADAAANIANAAIAAAKIgNAAIAABCg");
	this.shape_220.setTransform(630.55,95.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_221.setTransform(622.175,96.55);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_222.setTransform(615.475,96.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#663300").s().p("AARA2IAAgyQAAgHgCgEQgDgGgJgBQgHABgGAFQgGAGgBAOIAAAqIgMAAIAAhrIAMAAIAAAoQAFgGADgCQAHgFAHABQARgBAFAMQADAHAAAKIAAAzg");
	this.shape_223.setTransform(607.75,95.15);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgGQAGgGALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgFQgEAFgHAEQgGADgIABQgLgBgGgGgAAJACIgHABIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEADAFABQAHgBAFgDQAKgFAAgNIAAgJIgFACg");
	this.shape_224.setTransform(596.225,96.65);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_225.setTransform(590.275,96.55);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IAMAAIAAAzQABAGABAEQAEAHAIAAQALAAAGgNQACgGAAgLIAAgmIAMAAIAABNIgLAAIAAgLQgDAEgEADQgGAGgJAAQgPAAgGgLg");
	this.shape_226.setTransform(575.15,96.725);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#663300").s().p("AgNAzQgDgDgEgFIAAAKIgMAAIAAhrIAMAAIAAAnQAFgGAGgDQAFgDAGAAQANAAAJAKQAIAKAAATQAAATgIAMQgJAMgOAAQgIAAgGgEgAgOgIQgGAGAAAPQAAALADAHQAEANANAAQAKAAAFgJQAFgIAAgOQAAgNgFgHQgFgIgKAAQgHAAgHAHg");
	this.shape_227.setTransform(567.65,95.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_228.setTransform(548.075,96.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#663300").s().p("AgZAdQgDgGAAgKIAAg0IANAAIAAAzQAAAGABAEQADAHAJAAQAMAAAEgNQADgGAAgLIAAgmIAMAAIAABNIgLAAIAAgLQgDAEgEADQgGAGgJAAQgPAAgGgLg");
	this.shape_229.setTransform(537.15,96.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_230.setTransform(531.475,96.55);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#663300").s().p("AgWAsQgKgLABgSQAAgQAIgMQAHgOAQAAQAHAAAGAFQAEACAEAFIAAgoIAMAAIAABrIgMAAIAAgKQgEAHgGADQgGAEgHAAQgMAAgIgMgAgNgHQgFAHgBAOQAAANAGAIQAEAJALAAQAIAAAFgIQAGgIAAgOQAAgOgGgIQgFgHgJAAQgIAAgGAIg");
	this.shape_231.setTransform(520.1,95.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#663300").s().p("AgUAzQgIgGgBgMIANAAQABAFACADQAEAFAJAAQAOAAAEgLQADgGgBgQQgDAFgGAEQgFACgHAAQgMAAgJgJQgJgIAAgUQAAgUAJgLQAJgMANAAQAHAAAHAFIAHAIIAAgKIALAAIAABGQAAAPgEAIQgIAQgUABQgMgBgIgFgAgQgfQgCAIAAAKQAAANAFAHQAFAGAIAAQAMAAAGgMQADgGAAgKQAAgOgGgIQgFgGgJAAQgMAAgFAMg");
	this.shape_232.setTransform(509.175,98.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_233.setTransform(500.525,96.55);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#663300").s().p("AgYAfQgJgLAAgTQAAgTAKgLQAIgMAPAAQAOAAAKAKQAKAKAAAUQAAASgJAMQgIANgRAAQgPAAgJgLgAgPgUQgFAJAAAMQAAAMAFAJQAFAIAKAAQAMAAAEgKQAFgKAAgLQAAgLgDgHQgFgKgNAAQgKAAgFAJg");
	this.shape_234.setTransform(485.45,96.675);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#663300").s().p("AASAoIAAgxQAAgGgCgFQgEgHgJgBIgGABQgFACgEAFQgDAEAAAEIgBAMIAAAoIgNAAIAAhNIAMAAIAAAKQAFgGAGgDQAFgDAHAAQAQAAAFALQADAHAAALIAAAyg");
	this.shape_235.setTransform(477.75,96.55);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_236.setTransform(465.375,96.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_237.setTransform(459.625,96.55);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgGQAGgGALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgFQgEAFgHAEQgGADgIABQgLgBgGgGgAAJACIgHABIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEADAFABQAHgBAFgDQAKgFAAgNIAAgJIgFACg");
	this.shape_238.setTransform(453.175,96.65);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_239.setTransform(433.625,96.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#663300").s().p("AgfA4IAAhsIALAAIAAAKQAFgFADgDQAHgFAIAAQAMAAAJAKQAIAKAAAUQAAAYgMALQgIAHgKAAQgIAAgGgEQgDgCgEgGIAAApgAgRgeQgCAIgBALQABAJACAGQAFAMAMgBQAIAAAGgHQAGgIAAgOQAAgJgDgHQgFgNgMAAQgNAAgEANg");
	this.shape_240.setTransform(423,98.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#663300").s().p("AgWAeQgJgLABgRQAAgUAJgLQAKgLANAAQANAAAHAFQAIAHACAQIgNAAQgBgIgDgEQgFgFgIAAQgLAAgFAMQgDAIgBALQAAAMAGAIQAEAIAJAAQAIAAAFgFQAEgFABgJIANAAQgCAQgJAHQgIAHgNABQgNAAgJgMg");
	this.shape_241.setTransform(412.35,96.65);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#663300").s().p("AARAoIAAgxQAAgGgCgFQgDgHgIgBIgGABQgGACgDAFQgDAEgBAEIgCAMIAAAoIgMAAIAAhNIAMAAIAAAKQAFgGAGgDQAGgDAGAAQAPAAAGALQADAHAAALIAAAyg");
	this.shape_242.setTransform(404.9,96.55);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_243.setTransform(395.975,96.55);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#663300").s().p("AggA4IAAhsIANAAIAAAKQAEgFADgDQAHgFAHAAQANAAAJAKQAJAKgBAUQAAAYgMALQgIAHgKAAQgIAAgGgEQgDgCgEgGIAAApgAgRgeQgCAIAAALQAAAJACAGQAFAMAMgBQAIAAAGgHQAGgIAAgOQAAgJgCgHQgGgNgMAAQgMAAgFANg");
	this.shape_244.setTransform(389.55,98.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_245.setTransform(377.025,96.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_246.setTransform(362.225,96.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#663300").s().p("AARA2IAAgyQAAgHgCgEQgDgGgJgBQgHABgHAFQgFAGgBAOIAAAqIgMAAIAAhrIAMAAIAAAoQAFgGADgCQAHgFAHABQAQgBAGAMQADAHAAAKIAAAzg");
	this.shape_247.setTransform(354.5,95.15);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgGQAGgGALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgFQgEAFgHAEQgGADgIABQgLgBgGgGgAAJACIgHABIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEADAFABQAHgBAFgDQAKgFAAgNIAAgJIgFACg");
	this.shape_248.setTransform(334.525,96.65);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#663300").s().p("AASA2IAAgyQAAgHgCgEQgEgGgKgBQgGABgGAFQgHAGAAAOIAAAqIgMAAIAAhrIAMAAIAAAoQAFgGAEgCQAFgFAIABQAQgBAGAMQADAHAAAKIAAAzg");
	this.shape_249.setTransform(326.65,95.15);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_250.setTransform(320.725,95.575);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_251.setTransform(310.375,96.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#663300").s().p("AgeAnIAAgKIArg3IgnAAIAAgMIA4AAIAAALIgrA2IAsAAIAAAMg");
	this.shape_252.setTransform(302.925,96.625);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#663300").s().p("AASAoIAAgxQAAgGgCgFQgEgHgJgBIgFABQgGACgDAFQgEAEgBAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAAKQAFgGAGgDQAGgDAGAAQAPAAAGALQADAHAAALIAAAyg");
	this.shape_253.setTransform(292.55,96.55);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#663300").s().p("AgUAzQgIgGgBgMIANAAQABAFACADQAEAFAJAAQAOAAAEgLQADgGgBgQQgDAFgGAEQgFACgHAAQgMAAgJgJQgJgIAAgUQAAgUAJgLQAJgMANAAQAHAAAHAFIAHAIIAAgKIALAAIAABGQAAAPgEAIQgIAQgUABQgMgBgIgFgAgQgfQgCAIAAAKQAAANAFAHQAFAGAIAAQAMAAAGgMQADgGAAgKQAAgOgGgIQgFgGgJAAQgMAAgFAMg");
	this.shape_254.setTransform(284.475,98.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#663300").s().p("AgWAeQgJgLABgRQgBgUAKgLQAKgLANAAQAMAAAIAFQAIAHACAQIgNAAQgBgIgDgEQgFgFgIAAQgLAAgFAMQgDAIgBALQAAAMAGAIQAEAIAJAAQAIAAAFgFQAEgFABgJIANAAQgDAQgIAHQgIAHgNABQgOAAgIgMg");
	this.shape_255.setTransform(269.6,96.65);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_256.setTransform(262.075,96.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_257.setTransform(256.325,96.55);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_258.setTransform(239.275,95.575);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_259.setTransform(230.875,95.575);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#663300").s().p("AARAoIAAgxQAAgGgBgFQgEgHgIgBIgGABQgGACgDAFQgDAEgCAEIgBAMIAAAoIgMAAIAAhNIAMAAIAAAKQAFgGAGgDQAFgDAHAAQAPAAAGALQADAHAAALIAAAyg");
	this.shape_260.setTransform(225.15,96.55);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#663300").s().p("AgbAjQgHgHAAgKQAAgKAHgGQAGgGALgBIASgDQAFAAABgDIABgGQAAgGgFgDQgEgDgIAAQgJAAgEAGQgDACAAAHIgMAAQABgPAIgGQAJgFALAAQAMgBAIAGQAIAFAAALIAAAsIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgGgBgDgEQgBgCgBgFQgEAFgHAEQgGADgIABQgLgBgGgGgAAJACIgHABIgHABQgHABgDACQgGADAAAIQAAAGAEADQAEADAFABQAHgBAFgDQAKgFAAgNIAAgJIgFACg");
	this.shape_261.setTransform(217.475,96.65);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_262.setTransform(211.425,95.575);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_263.setTransform(207.625,96.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#663300").s().p("AgfA4IAAhsIALAAIAAAKQAEgFAFgDQAGgFAIAAQAMAAAJAKQAIAKABAUQAAAYgNALQgIAHgKAAQgIAAgFgEQgEgCgEgGIAAApgAgRgeQgCAIgBALQABAJACAGQAFAMAMgBQAJAAAFgHQAGgIAAgOQAAgJgDgHQgFgNgMAAQgNAAgEANg");
	this.shape_264.setTransform(193.4,98.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#663300").s().p("AAkAoIAAg1QAAgIgDgEQgEgCgFAAQgHAAgFAFQgGAFAAANIAAAsIgLAAIAAgyQAAgIgCgEQgDgFgIgBQgHAAgFAHQgGAFAAAPIAAApIgMAAIAAhNIAMAAIAAAKQAEgFAEgDQAGgEAIAAQAIAAAGAEQACADADAFQADgGAGgDQAGgDAGAAQAPAAAGALQADAHAAAKIAAAzg");
	this.shape_265.setTransform(183.5,96.55);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#663300").s().p("AAIAzQgIAAgDgFQgDgEAAgIIAAgzIgKAAIAAgLIAKAAIAAgWIALAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEADACIAFABIACgBIACAAIAAALIgEABg");
	this.shape_266.setTransform(153.425,95.575);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#663300").s().p("AgGAMQAFgBABgGIABgFIAAgBIgBgBIgGAAIAAgQIAOAAIAAAPQAAAHgEAHQgDAGgHACg");
	this.shape_267.setTransform(141.95,100.875);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#663300").s().p("AgRAoIAAhNIAMAAIAAANQABgEAFgGQAGgFAHAAIABAAIADAAIAAAOIgCAAIgCgBQgJAAgFAHQgEAHAAAIIAAAsg");
	this.shape_268.setTransform(138.875,96.55);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_269.setTransform(132.175,96.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#663300").s().p("AgGAnIgbhNIAOAAIATA/IAVg/IANAAIgcBNg");
	this.shape_270.setTransform(124.85,96.625);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#663300").s().p("AgXAeQgJgKAAgTQAAgSAJgMQAKgMAOAAQAIAAAHAFQAIADADAHQAEAFABAIIABAQIg0AAQAAANAFAGQAFAIAJAAQAKAAAGgHQADgEABgFIAMAAIgDAKIgGAIQgFAGgJACQgEACgFAAQgNAAgKgMgAAVgGQgBgJgDgEQgFgKgMAAQgHAAgGAGQgFAHgBAKIAoAAIAAAAg");
	this.shape_271.setTransform(117.375,96.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#663300").s().p("AAaA2IAAgzIgzAAIAAAzIgOAAIAAhrIAOAAIAAAtIAzAAIAAgtIAOAAIAABrg");
	this.shape_272.setTransform(90.575,95.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:147.975,y:96.725}},{t:this.shape_173,p:{x:153.025,y:95.225}},{t:this.shape_172,p:{x:158.4,y:96.725}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:182.675,y:95.625}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163,p:{x:235.525,y:95.225}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160,p:{x:253.425,y:95.225}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:277.175,y:96.725}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{x:316.825,y:95.225}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148,p:{x:343.275,y:95.225}},{t:this.shape_147,p:{x:346.375,y:95.225}},{t:this.shape_146,p:{x:349.425,y:95.225}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:386.225,y:96.725}},{t:this.shape_141,p:{x:391.275,y:95.225}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134,p:{x:443.975,y:95.225}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131,p:{x:464.625,y:96.725}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:497.1,y:96.725}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:534.125,y:95.625}},{t:this.shape_122,p:{x:537.675,y:95.225}},{t:this.shape_121,p:{x:543.05,y:96.725}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:564.175,y:95.225}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:613.275,y:96.675}},{t:this.shape_111,p:{x:622.15,y:96.725}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:696.775,y:95.625}},{t:this.shape_100,p:{x:700.325,y:95.225}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:104.55,y:113.675}},{t:this.shape_94,p:{x:109.625,y:112.225}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:160.525,y:112.625}},{t:this.shape_86,p:{x:166.075,y:113.725}},{t:this.shape_85,p:{x:175.375,y:112.625}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:194.825,y:112.625}},{t:this.shape_81},{t:this.shape_80,p:{x:208.45,y:113.725}},{t:this.shape_79,p:{x:215.925,y:113.725}},{t:this.shape_78,p:{x:221.325,y:112.625}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:239.325,y:113.725}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:340.525,y:112.625}},{t:this.shape_62,p:{x:344.075,y:112.225}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:366.975,y:112.625}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:398.125,y:112.625}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:560.875,y:113.675}},{t:this.shape_35},{t:this.shape_34,p:{x:575.325,y:112.225}},{t:this.shape_33,p:{x:578.425,y:112.225}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:609.475,y:112.225}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:628.525,y:116.8}}]},59).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:147.975,y:96.725}},{t:this.shape_173,p:{x:153.025,y:95.225}},{t:this.shape_172,p:{x:158.4,y:96.725}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:182.675,y:95.625}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163,p:{x:235.525,y:95.225}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160,p:{x:253.425,y:95.225}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:277.175,y:96.725}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{x:316.825,y:95.225}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148,p:{x:343.275,y:95.225}},{t:this.shape_147,p:{x:346.375,y:95.225}},{t:this.shape_146,p:{x:349.425,y:95.225}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:386.225,y:96.725}},{t:this.shape_141,p:{x:391.275,y:95.225}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134,p:{x:443.975,y:95.225}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131,p:{x:464.625,y:96.725}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:497.1,y:96.725}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:534.125,y:95.625}},{t:this.shape_122,p:{x:537.675,y:95.225}},{t:this.shape_121,p:{x:543.05,y:96.725}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:564.175,y:95.225}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:613.275,y:96.675}},{t:this.shape_111,p:{x:622.15,y:96.725}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:696.775,y:95.625}},{t:this.shape_100,p:{x:700.325,y:95.225}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:104.55,y:113.675}},{t:this.shape_94,p:{x:109.625,y:112.225}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:160.525,y:112.625}},{t:this.shape_86,p:{x:166.075,y:113.725}},{t:this.shape_85,p:{x:175.375,y:112.625}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:194.825,y:112.625}},{t:this.shape_81},{t:this.shape_80,p:{x:208.45,y:113.725}},{t:this.shape_79,p:{x:215.925,y:113.725}},{t:this.shape_78,p:{x:221.325,y:112.625}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:239.325,y:113.725}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:340.525,y:112.625}},{t:this.shape_62,p:{x:344.075,y:112.225}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:366.975,y:112.625}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:398.125,y:112.625}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:560.875,y:113.675}},{t:this.shape_35},{t:this.shape_34,p:{x:575.325,y:112.225}},{t:this.shape_33,p:{x:578.425,y:112.225}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:609.475,y:112.225}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:628.525,y:116.8}}]},45).to({state:[{t:this.shape_272},{t:this.shape_172,p:{x:99.45,y:96.675}},{t:this.shape_112,p:{x:108.425,y:96.625}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_173,p:{x:149.975,y:95.175}},{t:this.shape_266},{t:this.shape_163,p:{x:161.475,y:95.175}},{t:this.shape_174,p:{x:166.575,y:96.675}},{t:this.shape_160,p:{x:176.075,y:95.175}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_111,p:{x:200.95,y:96.675}},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_128,p:{x:245.1,y:96.675}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_80,p:{x:276.85,y:96.675}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_152,p:{x:297.925,y:95.175}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_169,p:{x:340.175,y:95.575}},{t:this.shape_123,p:{x:348.575,y:95.575}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_156,p:{x:369.675,y:96.675}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_148,p:{x:399.425,y:95.175}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_146,p:{x:417.375,y:95.175}},{t:this.shape_240},{t:this.shape_147,p:{x:428.275,y:95.175}},{t:this.shape_239},{t:this.shape_142,p:{x:441.125,y:96.675}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_101,p:{x:491.275,y:95.575}},{t:this.shape_233},{t:this.shape_141,p:{x:503.975,y:95.175}},{t:this.shape_232},{t:this.shape_134,p:{x:514.875,y:95.175}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_118,p:{x:542.725,y:95.175}},{t:this.shape_228},{t:this.shape_131,p:{x:555.575,y:96.675}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_87,p:{x:581.025,y:95.575}},{t:this.shape_225},{t:this.shape_224},{t:this.shape_85,p:{x:601.825,y:95.575}},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_34,p:{x:634.075,y:95.175}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_122,p:{x:651.925,y:95.175}},{t:this.shape_217},{t:this.shape_33,p:{x:662.825,y:95.175}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_100,p:{x:693.775,y:95.175}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_86,p:{x:714.425,y:96.675}},{t:this.shape_82,p:{x:87.375,y:112.575}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_78,p:{x:106.825,y:112.575}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_94,p:{x:160.225,y:112.175}},{t:this.shape_204},{t:this.shape_63,p:{x:171.475,y:112.575}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_59,p:{x:203.375,y:112.575}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_55,p:{x:285.125,y:112.575}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_62,p:{x:308.125,y:112.175}},{t:this.shape_188},{t:this.shape_95,p:{x:324.85,y:113.625}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_29,p:{x:342.375,y:112.175}},{t:this.shape_121,p:{x:347.75,y:113.675}},{t:this.shape_185},{t:this.shape_79,p:{x:363.025,y:113.675}},{t:this.shape_36,p:{x:375.475,y:113.625}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_75,p:{x:398.925,y:113.675}},{t:this.shape_26,p:{x:404.325,y:116.75}}]},45).to({state:[{t:this.shape_272},{t:this.shape_172,p:{x:99.45,y:96.675}},{t:this.shape_112,p:{x:108.425,y:96.625}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_173,p:{x:149.975,y:95.175}},{t:this.shape_266},{t:this.shape_163,p:{x:161.475,y:95.175}},{t:this.shape_174,p:{x:166.575,y:96.675}},{t:this.shape_160,p:{x:176.075,y:95.175}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_111,p:{x:200.95,y:96.675}},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_128,p:{x:245.1,y:96.675}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_80,p:{x:276.85,y:96.675}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_152,p:{x:297.925,y:95.175}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_169,p:{x:340.175,y:95.575}},{t:this.shape_123,p:{x:348.575,y:95.575}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_156,p:{x:369.675,y:96.675}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_148,p:{x:399.425,y:95.175}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_146,p:{x:417.375,y:95.175}},{t:this.shape_240},{t:this.shape_147,p:{x:428.275,y:95.175}},{t:this.shape_239},{t:this.shape_142,p:{x:441.125,y:96.675}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_101,p:{x:491.275,y:95.575}},{t:this.shape_233},{t:this.shape_141,p:{x:503.975,y:95.175}},{t:this.shape_232},{t:this.shape_134,p:{x:514.875,y:95.175}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_118,p:{x:542.725,y:95.175}},{t:this.shape_228},{t:this.shape_131,p:{x:555.575,y:96.675}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_87,p:{x:581.025,y:95.575}},{t:this.shape_225},{t:this.shape_224},{t:this.shape_85,p:{x:601.825,y:95.575}},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_34,p:{x:634.075,y:95.175}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_122,p:{x:651.925,y:95.175}},{t:this.shape_217},{t:this.shape_33,p:{x:662.825,y:95.175}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_100,p:{x:693.775,y:95.175}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_86,p:{x:714.425,y:96.675}},{t:this.shape_82,p:{x:87.375,y:112.575}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_78,p:{x:106.825,y:112.575}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_94,p:{x:160.225,y:112.175}},{t:this.shape_204},{t:this.shape_63,p:{x:171.475,y:112.575}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_59,p:{x:203.375,y:112.575}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_55,p:{x:285.125,y:112.575}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_62,p:{x:308.125,y:112.175}},{t:this.shape_188},{t:this.shape_95,p:{x:324.85,y:113.625}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_29,p:{x:342.375,y:112.175}},{t:this.shape_121,p:{x:347.75,y:113.675}},{t:this.shape_185},{t:this.shape_79,p:{x:363.025,y:113.675}},{t:this.shape_36,p:{x:375.475,y:113.625}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_75,p:{x:398.925,y:113.675}},{t:this.shape_26,p:{x:404.325,y:116.75}}]},210).wait(1));

	// speech_bubble
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(400.2,120.15,1,0.6475,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({startPosition:0},315).wait(1));

	// leaf_guy
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(17.9,302.6,1,1,0,0,0,325.9,238.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(17.9,302.6,1,1,0,0,0,325.9,238.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(118).to({_off:true},1).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).wait(211));

	// background
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(399.5,302);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},359).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(92,299.1,709,305.9);
// library properties:
lib.properties = {
	id: '98EBFD134B9DFE48A07E325B7DCF4099',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BENV1043_conc_atlas_1.png", id:"BENV1043_conc_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['98EBFD134B9DFE48A07E325B7DCF4099'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;