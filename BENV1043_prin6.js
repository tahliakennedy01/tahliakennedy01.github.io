(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BENV1043_prin6_atlas_1", frames: [[0,0,7900,2633],[0,2635,6929,3000],[0,5637,3256,2384],[3258,5637,3256,2384]]},
		{name:"BENV1043_prin6_atlas_2", frames: [[3258,862,512,512],[3258,1376,512,512],[0,0,3256,2384],[3258,0,623,860],[3258,1890,512,512]]}
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



(lib._3033 = function() {
	this.initialize(ss["BENV1043_prin6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._48b6ff3067494d58bdf280397bdc4875 = function() {
	this.initialize(ss["BENV1043_prin6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.attractive = function() {
	this.initialize(ss["BENV1043_prin6_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.exchange = function() {
	this.initialize(ss["BENV1043_prin6_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeafPull = function() {
	this.initialize(ss["BENV1043_prin6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.LeafSad = function() {
	this.initialize(ss["BENV1043_prin6_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.LeafStand = function() {
	this.initialize(ss["BENV1043_prin6_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Louvre = function() {
	this.initialize(ss["BENV1043_prin6_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.question = function() {
	this.initialize(ss["BENV1043_prin6_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween30 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(229,210,184,0.6)").s().p("EgeeAm2Qh8AAhYhYQhYhYAAh8MAAAhETQAAh8BYhYQBYhYB8AAMA89AAAQB8AABYBYQBYBYAAB8MAAABETQAAB8hYBYQhYBYh8AAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-248.5,450.1,497.1);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#6D3D0C").ss(10,1,1).p("AheiLIC9CLIi9CM");
	this.shape.setTransform(9.5,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,29,38);


// stage content:
(lib.BENV1043_prin6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [20,81,192];
	// timeline functions:
	this.frame_20 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(50);
		}
	}
	this.frame_81 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Arrow_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(106);
		}
	}
	this.frame_192 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(61).call(this.frame_81).wait(111).call(this.frame_192).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(715,511.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQADADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_1.setTransform(710.15,508.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgBgCgFAAQgGAAgLAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQAMgJAKAAQAHAAAFAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_2.setTransform(701.5,508.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_3.setTransform(693.125,508.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHgBgJQABgIAEgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAHgGAFQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgEgBgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_4.setTransform(686.75,508.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgGgEgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_5.setTransform(681.725,507.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_6.setTransform(672.775,508.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_7.setTransform(667.5,507.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_8.setTransform(660.05,508.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_9.setTransform(651.075,508.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_10.setTransform(643.675,508.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AgYAsIAAgKIAMAAIAIgSIgUgwIgKAAIAAgMIAeAAIAAAMIgHAAIAMAhIANghIgIAAIAAgMIAeAAIAAAMIgJAAIgeBMg");
	this.shape_11.setTransform(636.15,510.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_12.setTransform(628.525,507.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAKAAAHADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgJAFQgIAEgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_13.setTransform(617.35,508.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_14.setTransform(610.975,508.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_15.setTransform(604.575,508.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_16.setTransform(598.825,507.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AgkAtIAAgKIAKAAIAAhDIgKAAIAAgLIAWAAIAAAKQAGgGAFgDQAFgCAGAAQAJAAAGAEQAHAFAEAHQADAIAAAIQAAAIgDAHQgFAHgGAFQgIAEgHABQgMAAgKgKIAAAZIANAAIAAAKgAgEgeQgEADgDAFQgDAFAAAFQABAKAFAFQAHAFAIAAQAFAAAFgDQADgDADgDQACgFAAgHQAAgFgCgFQgDgEgEgEQgFgCgFAAQgGAAgEADg");
	this.shape_17.setTransform(592.7,510.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_18.setTransform(585.525,508.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_19.setTransform(578.575,508.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_20.setTransform(774.225,494.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_21.setTransform(767.125,494.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_22.setTransform(760.175,494.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_23.setTransform(749.775,493.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_24.setTransform(744.525,494.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_25.setTransform(737.1,493.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_26.setTransform(731.425,493.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_27.setTransform(721.5,494.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_28.setTransform(714.725,494.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_29.setTransform(707.025,496.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_30.setTransform(701,493.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAEADQAEADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_31.setTransform(696.2,494.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAHgIAFQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_32.setTransform(689.45,494.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_33.setTransform(681.875,493.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDABgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_34.setTransform(669.7,494.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_35.setTransform(662.95,494.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_36.setTransform(657.325,493.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_37.setTransform(652.075,494.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIAKAGQgEAHgIAFQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_38.setTransform(644.7,494.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_39.setTransform(638.325,494.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_40.setTransform(632.325,494.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_41.setTransform(621.925,493.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_42.setTransform(616.225,494.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIAKAGQgEAHgIAFQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_43.setTransform(608.7,494.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_44.setTransform(599.4,494.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAHgIAFQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_45.setTransform(590,494.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_46.setTransform(584.35,493.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_47.setTransform(578.8,494.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAKAAAHADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgFIALAEQgFAJgJADQgIAFgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_48.setTransform(774.4,480.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AgEAfIgTgyIgLAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAeAAIAAALIgKAAIgUAyg");
	this.shape_49.setTransform(767,480.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_50.setTransform(761.45,479.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_51.setTransform(757.675,479.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_52.setTransform(752.425,480.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgDgCgEAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_53.setTransform(743.15,480.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_54.setTransform(734.775,480.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgIgBgHgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAFADAEABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_55.setTransform(728.4,480.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgHgEAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_56.setTransform(723.375,479.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_57.setTransform(718,480.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_58.setTransform(711.225,480.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_59.setTransform(704.125,480.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_60.setTransform(697.775,480.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_61.setTransform(693.125,479.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_62.setTransform(680.95,480.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_63.setTransform(673.5,479.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("AgRAsIAAgLIALAAIAAhBIgSAAIAAAVIgLAAIAAggIBHAAIAAAgIgLAAIAAgVIgSAAIAABBIALAAIAAALg");
	this.shape_64.setTransform(665.825,479.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_65.setTransform(653.5,483.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_66.setTransform(649.675,479.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_67.setTransform(643.975,480.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAIQAEAIABAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIALAEQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_68.setTransform(636.45,480.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgCgCgFAAQgGAAgLAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_69.setTransform(627.15,480.775);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_70.setTransform(617.725,480.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHgBgJQABgJAEgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFADAEABQAFgBAFgDQAEgCADgFQADgEgBgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_71.setTransform(610.25,480.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_72.setTransform(603.875,480.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_73.setTransform(599.35,479.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AgDAfIgUgyIgMAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgTAyg");
	this.shape_74.setTransform(593.8,480.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_75.setTransform(586.325,480.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_76.setTransform(578.8,480.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_77.setTransform(774.225,468.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_78.setTransform(766.275,466.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_79.setTransform(760.65,465.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_80.setTransform(754.925,465.525);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_81.setTransform(746.975,466.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_82.setTransform(739.475,466.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEACgDAGQgCAFAAAEQAAAGACAEQADAFAEADQAFADAEAAQAGAAAEgDQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_83.setTransform(732,466.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_84.setTransform(725.625,466.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_85.setTransform(720.225,466.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_86.setTransform(713.825,466.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDgBgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_87.setTransform(707.05,466.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAGgDADgGIALAGQgGAIgIAEQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_88.setTransform(696.85,466.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_89.setTransform(689.4,465.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_90.setTransform(683.725,465.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_91.setTransform(674.425,465.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_92.setTransform(666.475,466.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_93.setTransform(659.375,466.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_94.setTransform(649.3,466.825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_95.setTransform(642.525,466.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_96.setTransform(635.425,466.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgDgCgEAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_97.setTransform(626.15,466.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_98.setTransform(616.775,466.875);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgGAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_99.setTransform(609.2,465.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_100.setTransform(598.25,465.475);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_101.setTransform(592.575,465.85);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAEAHABAIQgBAJgEAHQgFAIgGAEQgIAFgJgBQgIABgIgFgAgJgRQgFACgCAGQgCAFgBAEQABAGACAEQACAFAFADQAEADAFAAQAFAAAFgDQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_102.setTransform(586.95,466.85);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#663300").s().p("AgFAqQgFgDgEgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAGAEAFAHQADAHAAAIQAAAJgDAIQgFAHgHAEQgGAFgIAAQgIAAgFgDgAgEgFQgEADgDAEQgDAFAAAGQAAAGADAFQADAFAEACQAEADAFAAQAFAAAFgDQAEgDADgFQADgFAAgGQAAgGgDgEQgDgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_103.setTransform(579.1,465.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_104.setTransform(775.425,452.775);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgEQAIgDAIAAQAJAAAHADQAIAFAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAFQgDAEAAAFQAAAFADAFQADAFAEACQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgFQAAgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_105.setTransform(769.05,452.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgLIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEADQAEAEACAHIgLACQgBgHgEAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAALIgLAAIAAAnIAMAAIAAALg");
	this.shape_106.setTransform(764.025,451.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_107.setTransform(753.7,451.475);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_108.setTransform(748.575,452.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_109.setTransform(742.225,452.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_110.setTransform(735.825,452.875);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_111.setTransform(730.075,451.85);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_112.setTransform(724.825,452.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_113.setTransform(717.425,452.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_114.setTransform(704.7,452.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgCgCg");
	this.shape_115.setTransform(699.85,451.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_116.setTransform(688.175,451.525);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_117.setTransform(680.225,452.775);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_118.setTransform(673.125,452.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_119.setTransform(659.625,454.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_120.setTransform(651.675,452.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDgBgDQABgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_121.setTransform(646.05,451.425);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_122.setTransform(640.325,454.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_123.setTransform(632.375,452.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_124.setTransform(625.275,452.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_125.setTransform(617.85,451.475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_126.setTransform(610.825,452.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#663300").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_127.setTransform(605.05,452.85);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_128.setTransform(600.075,452.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIAKAFQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_129.setTransform(593.65,452.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#663300").s().p("AgDAfIgUgyIgMAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgUAyg");
	this.shape_130.setTransform(586.25,452.875);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIAKAFQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_131.setTransform(578.8,452.85);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_132.setTransform(775.1,438.825);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_133.setTransform(770.25,437.425);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_134.setTransform(755.925,437.525);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_135.setTransform(749.75,437.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_136.setTransform(745.225,438.775);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgFgHAAgJQAAgJAFgHQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAHgGAFQgIAFgJgBQgIABgIgFgAgJgRQgEACgDAFQgDAGABAEQgBAGADAEQADAFAEADQAFADAEAAQAFAAAFgDQAFgDACgFQADgEgBgGQABgEgDgGQgCgEgFgDQgFgDgFAAQgEAAgFADg");
	this.shape_137.setTransform(738.85,438.85);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_138.setTransform(729.975,438.875);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgHAIgFQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_139.setTransform(712.45,438.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_140.setTransform(705,437.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_141.setTransform(699.325,437.85);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgPIAPAAIAAAOQAAAGgCAEQgBAEgDABQgCACgHAAg");
	this.shape_142.setTransform(686.9,442);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgJAEgFQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_143.setTransform(683.675,437.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_144.setTransform(679.3,437.475);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgHAIgFQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_145.setTransform(673.75,438.85);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_146.setTransform(667.1,438.825);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_147.setTransform(662.125,437.85);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_148.setTransform(658.35,437.425);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAHgFQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgGAIgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_149.setTransform(644.2,438.85);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_150.setTransform(637.825,438.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_151.setTransform(631.425,438.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_152.setTransform(625.675,437.85);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_153.setTransform(620.425,438.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_154.setTransform(613.025,438.775);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgKABgHgFgAAUgFQgCgIgGgEQgFgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_155.setTransform(596.9,438.85);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#663300").s().p("AATAsIgegfIAAAUIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAA3IAWgSIgKAAIAAgKIAiAAIAAAKIgKAAIgWASIAVAVIALAAIAAALg");
	this.shape_156.setTransform(589.5,437.475);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_157.setTransform(584,437.425);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#663300").s().p("AgfAsIAAgLIALAAIAAhBIgLAAIAAgLIAjAAIAAALIgLAAIAABBIAcAAIAAgbIALAAIAAAmg");
	this.shape_158.setTransform(578.525,437.475);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQAAAIAEAEQAEAEAFAAQAEAAADgDQACgCAAgEQAAgEgDgEQgDgDgGgDQgOgGgGgGQgFgGAAgJQAAgHACgFQADgGAGgDQAFgDAHAAQAFAAADACQAFACACAEIAAgHIAQAAIAAAbIgQAAQgBgHgDgDQgDgDgEAAQgEAAgDACQgCACAAADQAAADACACIAEADIAGAEIAEABQAMAFAGAGQAGAHgBAKQAAAMgGAHQgHAHgMAAQgLAAgGgIg");
	this.shape_159.setTransform(694.4,423.475);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_160.setTransform(688.325,423.475);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQABAIADAEQADAEAGAAQAEAAACgDQADgCABgEQAAgEgEgEQgDgDgHgDQgNgGgFgGQgHgGAAgJQAAgHAEgFQADgGAFgDQAFgDAHAAQAFAAAEACQADACAEAEIAAgHIAOAAIAAAbIgOAAQgBgHgEgDQgDgDgEAAQgEAAgCACQgDACAAADQAAADABACIAFADIAHAEIADABQAMAFAGAGQAFAHABAKQAAAMgHAHQgHAHgMAAQgKAAgHgIg");
	this.shape_161.setTransform(682.2,423.475);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgKAAgOQAAgMAGgKQAGgLAMgGQAKgFAOgBQAOABALAFQAMAGAGALQAGAKAAAMQAAAOgGAKQgGAKgMAGQgLAGgOAAQgNAAgLgGgAgMgYQgGAEgDAHQgCAGAAAHQAAAJACAGQADAHAGADQAFAFAHAAQAIAAAFgFQAGgDADgHQACgGAAgJQAAgHgCgGQgDgHgGgEQgFgEgIAAQgHAAgFAEg");
	this.shape_162.setTransform(673.2,423.45);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgrAAIAAgPIAMAAIAAg5IgMAAIAAgPIArAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIAqAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_163.setTransform(662.75,423.475);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AgnAsIAAgPIALAAIAAg5IgLAAIAAgPIAqAAQATAAAJAHQAJAHAAAOQAAAOgJAGQgJAHgTAAIgIAAIAAARIALAAIAAAPgAgFgCIAEAAQAGAAAEgBQAEgCABgCQACgDAAgFQAAgFgCgDQgDgDgEgBIgIgBIgEAAg");
	this.shape_164.setTransform(653.575,423.475);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAxAAQAPAAAJAGQAHAGABAMQAAAIgEAGQgEAFgHADIAOAaIALAAIAAAPgAgKgIIAIAAQANAAAAgKQAAgFgCgDQgEgCgFAAIgKAAg");
	this.shape_165.setTransform(644.6,423.475);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgKAAgOQAAgMAGgKQAGgLAMgGQALgFANgBQAPABAKAFQAMAGAGALQAGAKAAAMQAAAOgGAKQgGAKgMAGQgKAGgPAAQgNAAgLgGgAgMgYQgGAEgDAHQgCAGAAAHQAAAJACAGQADAHAGADQAGAFAGAAQAIAAAFgFQAGgDACgHQADgGAAgJQAAgHgDgGQgCgHgGgEQgFgEgIAAQgGAAgGAEg");
	this.shape_166.setTransform(634.15,423.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#663300").s().p("AAUAsIAAgPIAKAAIAAg5IgCAAIgbBIIgJAAIgbhIIgCAAIAAA5IALAAIAAAPIglAAIAAgPIALAAIAAg5IgLAAIAAgPIAsAAIATAzIATgzIAtAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_167.setTransform(621.875,423.475);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIALAAIAAAPIgmAAIAAgPIAKAAIASg5IgMAAIAAgPIA4AAIAAAPIgLAAIASA5IALAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_168.setTransform(610.6,423.475);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_169.setTransform(601.65,423.475);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_170.setTransform(592.925,423.475);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#663300").s().p("AAUAsIAAgPIAKAAIAAg5IgCAAIgbBIIgJAAIgbhIIgCAAIAAA5IALAAIAAAPIglAAIAAgPIALAAIAAg5IgLAAIAAgPIAsAAIATAzIATgzIAtAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_171.setTransform(581.875,423.475);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#663300").s().p("AgvAsIAAgPIAOAAIAAg5IgOAAIAAgPIAwAAQANAAAKAFQALAEAGAKQAHALAAAOQAAAOgHAKQgFAJgLAFQgKAFgNAAgAgKAdIAGAAQAKAAAHgEQAGgEADgGQABgGAAgJQABgNgIgIQgGgHgMAAIgIAAg");
	this.shape_172.setTransform(772.75,409.475);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABJg");
	this.shape_173.setTransform(762.825,409.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIARg5IgLAAIAAgPIA4AAIAAAPIgMAAIATA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_174.setTransform(753.1,409.475);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_175.setTransform(629.675,409.475);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#663300").s().p("AgYAoQgMgGgGgJQgGgLAAgOQAAgMAHgLQAGgJAKgGQALgHANABQARgBAKAKIAAgIIAPAAIAAAgIgPAAQgDgJgHgEQgGgFgIABQgHgBgGAEQgGADgDAHQgDAGAAAJQAAANAHAIQAHAIALAAQAIABAFgEQAFgEADgHIgQAAIAAgPIAqAAQAAAOgGALQgGAKgLAFQgKAFgPABQgOgBgLgFg");
	this.shape_176.setTransform(619.925,409.45);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABJg");
	this.shape_177.setTransform(609.375,409.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIARg5IgLAAIAAgPIA4AAIAAAPIgMAAIATA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_178.setTransform(599.65,409.475);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgrAAIAAgPIALAAIAAg5IgLAAIAAgPIArAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIAqAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_179.setTransform(590.2,409.475);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#663300").s().p("AgWAoQgLgGgGgKQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANABQAQAAAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAEgEAHQgDAHAAAIQAAAIADAGQADAGAGAFQAFADAHAAQAJAAAGgGQAHgGACgKIASAIQgKAegiABQgNgBgLgFg");
	this.shape_180.setTransform(580.325,409.45);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_181.setTransform(633.5,385.125);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#663300").s().p("AgYAsIAAgKIANAAIAHgSIgVgwIgKAAIAAgMIAgAAIAAAMIgIAAIAMAhIANghIgIAAIAAgMIAdAAIAAAMIgJAAIgdBMg");
	this.shape_182.setTransform(627.9,384.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_183.setTransform(622.225,381.85);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_184.setTransform(618.45,381.425);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#663300").s().p("AgDAfIgUgyIgLAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAdAAIAAALIgJAAIgUAyg");
	this.shape_185.setTransform(612.9,382.875);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_186.setTransform(607.35,381.425);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_187.setTransform(603.575,381.85);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_188.setTransform(598.325,382.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJABQgJgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_189.setTransform(590.95,382.85);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_190.setTransform(584.575,382.775);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_191.setTransform(578.575,382.85);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_192.setTransform(774.175,367.525);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_193.setTransform(766.225,368.775);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_194.setTransform(759.125,368.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgPIAPAAIAAAPQAAAFgCAEQgBADgDACQgCACgHABg");
	this.shape_195.setTransform(728.3,372);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#663300").s().p("AgXAtIAAgLIALAAIAIgSIgUgxIgKAAIAAgKIAeAAIAAAKIgHAAIANAiIAMgiIgIAAIAAgKIAdAAIAAAKIgJAAIgdBOg");
	this.shape_196.setTransform(722.7,370.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_197.setTransform(717.025,367.85);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_198.setTransform(713.25,367.425);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_199.setTransform(708.45,368.825);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgCAFAAAEQAAAGACAEQADAFAEADQAEACAFAAQAGAAAEgCQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_200.setTransform(701.75,368.85);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_201.setTransform(696.25,367.425);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_202.setTransform(691.725,368.775);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_203.setTransform(685.325,368.875);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_204.setTransform(678.225,368.85);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgPIAPAAIAAAPQAAAFgBAEQgCADgEACQgCACgGABg");
	this.shape_205.setTransform(647.6,372);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_206.setTransform(641.975,368.775);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAHAAAIQAAAJgEAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgDAFAAAEQAAAGADAEQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgEAAgGQAAgEgDgFQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_207.setTransform(634.5,368.85);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_208.setTransform(629,367.425);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_209.setTransform(625.225,367.85);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_210.setTransform(619.975,368.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_211.setTransform(612.575,368.775);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_212.setTransform(606.95,367.425);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_213.setTransform(601.225,370.225);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_214.setTransform(593.725,368.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_215.setTransform(584.45,368.775);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_216.setTransform(576.95,367.425);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_217.setTransform(775.375,354.775);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgFIALAEQgFAJgIADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_218.setTransform(768.95,354.85);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_219.setTransform(763.325,353.85);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_220.setTransform(758.4,354.825);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAEADAFABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_221.setTransform(751.7,354.85);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgHgEAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_222.setTransform(746.675,353.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFADAEABQAFgBAFgDQAEgCADgFQACgEAAgGQAAgFgCgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_223.setTransform(735.7,354.85);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_224.setTransform(730.075,353.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIALAEQgFAJgJADQgIAFgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_225.setTransform(719.5,354.85);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_226.setTransform(713.85,353.475);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAJAAAHAEQAHAFADAHQAFAIAAAIQAAAIgFAHQgEAIgGAEQgIAEgIABQgLAAgJgKIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAFQgBAKAHAFQAFAFAJAAQAFAAAEgDQAFgCACgFQACgEAAgHQAAgFgCgFQgDgFgFgDQgEgCgGAAQgFAAgEADg");
	this.shape_227.setTransform(707.85,356.15);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHgBgJQABgJADgHQAFgIAHgEQAHgDAJAAQAJAAAHADQAIAFAEAHQAFAIgBAIQAAAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAFADAEABQAGgBAEgDQAFgCACgFQADgEAAgGQAAgFgDgFQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_228.setTransform(700.3,354.85);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgFIALAEQgFAJgIADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_229.setTransform(692.9,354.85);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#663300").s().p("AglAtIAAgKIALAAIAAhDIgKAAIAAgLIAXAAIAAAKQAFgGAFgDQAFgCAFAAQAKAAAGAEQAHAFAEAHQADAIAAAIQAAAIgDAHQgEAIgHAEQgHAEgJABQgLAAgJgKIAAAZIAMAAIAAAKgAgEgeQgFADgCAFQgCAFAAAFQAAAKAFAFQAHAFAIAAQAFAAAFgDQAEgCACgFQACgEAAgHQAAgFgCgFQgDgFgEgDQgFgCgFAAQgGAAgEADg");
	this.shape_230.setTransform(685.05,356.15);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_231.setTransform(673.575,354.775);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAFADAEABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_232.setTransform(667.2,354.85);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgHgEAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_233.setTransform(662.175,353.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_234.setTransform(651.9,354.825);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAFgCAEgFIAKAEQgEAJgIADQgJAFgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_235.setTransform(645.15,354.85);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_236.setTransform(639.65,353.425);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_237.setTransform(635.875,353.85);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_238.setTransform(632.1,353.425);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_239.setTransform(626.525,354.775);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_240.setTransform(619.025,354.875);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_241.setTransform(613.275,353.85);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_242.setTransform(608.625,354.775);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIAAAIQAAAJgFAHQgEAIgHAEQgIAEgJABQgIgBgIgEgAgJgRQgFADgCAEQgCAFgBAFQABAGACAEQACAFAFACQAEADAFABQAFgBAFgDQAEgCADgFQACgEAAgGQAAgFgCgFQgDgEgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_243.setTransform(602.25,354.85);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#663300").s().p("AgkAtIAAgKIALAAIAAhDIgKAAIAAgLIAVAAIAAAKQAGgGAFgDQAEgCAHAAQAIAAAHAEQAHAFAEAHQADAIAAAIQAAAIgDAHQgFAIgHAEQgHAEgHABQgMAAgKgKIAAAZIANAAIAAAKgAgEgeQgEADgDAFQgDAFAAAFQABAKAFAFQAHAFAIAAQAFAAAFgDQADgCACgFQADgEAAgHQAAgFgDgFQgCgFgEgDQgFgCgFAAQgGAAgEADg");
	this.shape_244.setTransform(594.4,356.15);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAJAAAHAEQAHAFADAHQAFAIAAAIQAAAIgFAHQgEAIgGAEQgIAEgIABQgLAAgJgKIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAFQgBAKAHAFQAFAFAJAAQAFAAAEgDQAFgCACgFQACgEAAgHQAAgFgCgFQgDgFgFgDQgEgCgGAAQgFAAgEADg");
	this.shape_245.setTransform(586.35,356.15);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHgBgJQABgJADgHQAFgIAHgEQAHgDAJAAQAJAAAHADQAIAFAEAHQAFAIgBAIQAAAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAFADAEABQAGgBAEgDQAFgCACgFQADgEAAgGQAAgFgDgFQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_246.setTransform(578.8,354.85);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_247.setTransform(775.1,340.825);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAIgHAEQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_248.setTransform(768.35,340.85);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_249.setTransform(762.725,339.85);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_250.setTransform(757.475,340.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAHAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgFAIgJAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_251.setTransform(750.1,340.85);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_252.setTransform(743.725,340.775);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_253.setTransform(737.725,340.85);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_254.setTransform(724.25,340.825);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_255.setTransform(719.4,339.425);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_256.setTransform(713.8,339.475);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#663300").s().p("AgRAsIAAgLIALAAIAAhBIgSAAIAAAVIgLAAIAAggIBHAAIAAAgIgLAAIAAgVIgSAAIAABBIALAAIAAALg");
	this.shape_257.setTransform(706.125,339.475);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_258.setTransform(693.25,343.125);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAJAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_259.setTransform(688.4,340.825);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgFAIgIAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_260.setTransform(681.65,340.85);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#663300").s().p("AgYAtIAAgLIANAAIAHgSIgVgwIgKAAIAAgLIAgAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAdAAIAAALIgJAAIgdBNg");
	this.shape_261.setTransform(674.25,342.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgGIAKAGQgEAIgIAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_262.setTransform(666.8,340.85);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAKAAAHAFQAHAEAEAIQAFAIgBAKIgyAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAFgDAEgGIAKAGQgEAIgJAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_263.setTransform(652.35,340.85);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_264.setTransform(644.9,339.475);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_265.setTransform(639.225,339.85);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_266.setTransform(626.475,340.775);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_267.setTransform(620.85,339.425);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_268.setTransform(609,340.825);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_269.setTransform(600.775,340.875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_270.setTransform(592.275,340.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_271.setTransform(585.925,340.775);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_272.setTransform(579.325,339.525);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_273.setTransform(774.125,325.525);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_274.setTransform(766.175,326.775);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_275.setTransform(759.075,326.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDABgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_276.setTransform(739.45,326.825);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIAKAFQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_277.setTransform(732.7,326.85);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_278.setTransform(726.325,326.775);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_279.setTransform(719.925,326.875);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_280.setTransform(714.175,325.85);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#663300").s().p("AgkAtIAAgLIALAAIAAhCIgKAAIAAgLIAVAAIAAAKQAFgFAGgDQAEgDAHAAQAIAAAHAEQAHAEADAIQAFAHAAAJQAAAIgFAHQgDAHgIAFQgGAEgIABQgMAAgKgKIAAAYIAMAAIAAALgAgEgeQgFADgCAFQgCAFgBAFQAAALAHAEQAFAFAJAAQAFAAAFgDQAEgCABgFQADgEAAgHQAAgFgDgEQgCgFgFgEQgEgCgGAAQgFAAgEADg");
	this.shape_281.setTransform(708.05,328.15);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_282.setTransform(700.875,326.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_283.setTransform(693.925,326.85);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_284.setTransform(675.525,325.85);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_285.setTransform(670.275,326.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_286.setTransform(662.85,325.475);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_287.setTransform(657.175,325.85);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#663300").s().p("AgYAsIAAgKIANAAIAHgSIgVgxIgJAAIAAgLIAeAAIAAALIgHAAIAMAiIANgiIgIAAIAAgLIAeAAIAAALIgJAAIgeBNg");
	this.shape_288.setTransform(638.5,328.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_289.setTransform(632.825,325.85);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_290.setTransform(627.175,326.875);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_291.setTransform(620.075,326.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAGgCADgGIALAFQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_292.setTransform(612.7,326.85);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#663300").s().p("AgFAqQgGgDgDgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAGAEAFAHQADAHAAAIQAAAJgDAIQgFAHgGAEQgHAFgIAAQgIAAgFgDgAgEgFQgEADgDAEQgDAFAAAGQAAAGADAFQADAFAEACQAEADAFAAQAGAAAEgDQAFgDACgFQACgFABgGQgBgGgCgEQgDgEgEgDQgEgCgGAAQgFAAgEACg");
	this.shape_293.setTransform(604.85,325.525);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_294.setTransform(585.175,326.775);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHgBgJQABgJADgHQAFgIAHgEQAHgDAJAAQAJAAAHADQAIAFAEAHQAFAIgBAIQAAAJgEAHQgEAHgIAFQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAFQgDAEAAAFQAAAFADAFQADAFAEACQAFADAEAAQAGAAAEgDQAFgCACgFQADgFAAgFQAAgFgDgEQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_295.setTransform(578.8,326.85);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKgBAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGgBQgEABgEACQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_296.setTransform(774.725,312.85);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_297.setTransform(769.45,311.425);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_298.setTransform(765.675,311.85);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAGgDADgFIALAEQgFAIgJAFQgIADgKAAQgJABgHgFgAAUgFQgCgIgGgEQgFgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_299.setTransform(760,312.85);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAJAAIAAALg");
	this.shape_300.setTransform(752.55,311.475);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_301.setTransform(746.875,311.85);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAADgCQAEgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_302.setTransform(741.95,312.825);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_303.setTransform(735.2,312.85);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_304.setTransform(728.225,312.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_305.setTransform(713.925,312.775);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_306.setTransform(706.825,312.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAGgDADgFIAKAEQgFAIgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_307.setTransform(692.55,312.85);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#663300").s().p("AgDAfIgUgyIgMAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgUAyg");
	this.shape_308.setTransform(685.15,312.875);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_309.setTransform(678.125,312.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_310.setTransform(670.7,311.475);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_311.setTransform(657.1,312.825);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_312.setTransform(648.45,312.775);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_313.setTransform(640.075,312.775);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgEgHABgJQgBgJAEgHQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAFAHgBAIQABAJgFAHQgEAHgIAFQgHAFgJgBQgJABgGgFgAgJgRQgEACgDAFQgDAGAAAEQAAAGADAEQADAFAEADQAFADAEAAQAFAAAFgDQAFgDACgFQACgEABgGQgBgEgCgGQgCgEgFgDQgFgDgFAAQgEAAgFADg");
	this.shape_314.setTransform(633.7,312.85);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgJAEgFQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_315.setTransform(628.675,311.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_316.setTransform(617.4,311.475);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_317.setTransform(612.275,312.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_318.setTransform(605.925,312.775);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_319.setTransform(599.525,312.875);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_320.setTransform(593.775,311.85);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_321.setTransform(588.525,312.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#663300").s().p("AAUAtIgqhLIAAA/IANAAIAAALIgkAAIAAgLIAMAAIAAhCIgMAAIAAgLIAeAAIAmBEIAAg5IgNAAIAAgLIAkAAIAAALIgNAAIAABOg");
	this.shape_322.setTransform(579.975,311.525);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#663300").s().p("AgXAsIAAgPIANAAIAAgYIgYghIgKAAIAAgPIAsAAIAAAPIgJAAIAMAWIANgWIgKAAIAAgPIAoAAIAAAPIgLAAIgXAhIAAAYIAMAAIAAAPg");
	this.shape_323.setTransform(750.8,297.475);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_324.setTransform(741.85,297.475);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#663300").s().p("AgRAqQgHgDgDgIQgDgHAAgNIAAgoIgLAAIAAgPIApAAIAAAPIgIAAIAAApQAAAHACAEQABAEADABQACACADAAQAGAAADgEQADgEAAgLIAAgoIgIAAIAAgPIAjAAIAAAPIgLAAIAAAsQAAAQgHAHQgHAHgQAAQgLAAgHgDg");
	this.shape_325.setTransform(733.075,297.525);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIAMAAIAAAPIgnAAIAAgPIAKAAIASg5IgNAAIAAgPIA6AAIAAAPIgNAAIATA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_326.setTransform(724.15,297.475);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_327.setTransform(715.275,297.475);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#663300").s().p("AgnAsIAAgPIALAAIAAg5IgLAAIAAgPIAoAAQASAAAJAGQAIAFAAAMQAAANgMAFQAIACAEAGQAEAFAAAHQAAAagnAAgAgFAdIAIAAQAGAAAEgDQADgCAAgGQAAgHgDgCQgEgDgJAAIgFAAgAgFgIIAGAAQAGAAADgDQADgCAAgGQAAgFgDgCQgEgCgGAAIgFAAg");
	this.shape_328.setTransform(706.325,297.475);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#663300").s().p("AguAsIAAgPIANAAIAAg5IgNAAIAAgPIAvAAQANAAALAFQAKAEAGAKQAHALgBAOQABAOgHAKQgGAJgJAFQgLAFgNAAgAgKAdIAFAAQALAAAHgEQAGgEACgGQACgGAAgJQAAgNgGgIQgHgHgMAAIgIAAg");
	this.shape_329.setTransform(693.3,297.475);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABJg");
	this.shape_330.setTransform(683.375,297.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIASg5IgNAAIAAgPIA6AAIAAAPIgNAAIATA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_331.setTransform(673.65,297.475);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABJg");
	this.shape_332.setTransform(660.825,297.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#663300").s().p("AgZAoQgKgGgHgKQgGgKAAgOQAAgMAGgKQAGgLALgGQAMgFANgBQAOABALAFQAMAGAGALQAGAKAAAMQAAAOgGAKQgGAKgMAGQgLAGgOAAQgNAAgMgGgAgMgYQgFAEgDAHQgDAGAAAHQAAAJADAGQADAHAFADQAGAFAGAAQAHAAAGgFQAFgDAEgHQACgGABgJQgBgHgCgGQgEgHgFgEQgGgEgHAAQgGAAgGAEg");
	this.shape_333.setTransform(650.05,297.45);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_334.setTransform(641.875,297.475);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_335.setTransform(634.8,297.475);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#663300").s().p("AgWAoQgLgGgGgKQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANgBQAQAAAKAJIAAgHIAPAAIAAAfIgPAAQgGgQgQgBQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_336.setTransform(625.475,297.45);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIAMAAIAAAPIgnAAIAAgPIALAAIARg5IgLAAIAAgPIA4AAIAAAPIgLAAIASA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_337.setTransform(615.75,297.475);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAyAAQAOAAAIAGQAJAGAAAMQgBAIgDAGQgEAFgIADIAPAaIALAAIAAAPgAgKgIIAJAAQAMAAAAgKQAAgFgCgDQgEgCgFAAIgKAAg");
	this.shape_338.setTransform(606.65,297.475);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IANAAIAAAPg");
	this.shape_339.setTransform(597.35,297.475);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_340.setTransform(588.55,297.475);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIAMAAIAAAPIgmAAIAAgPIAKAAIARg5IgLAAIAAgPIA4AAIAAAPIgLAAIASA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_341.setTransform(579.65,297.475);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_342.setTransform(698.55,273.125);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_343.setTransform(692.925,270.775);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_344.setTransform(687.3,269.425);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_345.setTransform(678.525,270.875);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHgBgJQABgIADgIQAFgIAHgDQAHgFAJAAQAJAAAHAFQAIAEAEAHQAFAIgBAIQAAAJgEAHQgEAHgIAFQgHAFgJAAQgJAAgGgFgAgJgRQgEADgDAFQgDAEAAAFQAAAFADAFQADAFAEADQAFACAEAAQAGAAAEgCQAFgDACgFQADgFAAgFQAAgFgDgEQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_346.setTransform(671.05,270.85);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#663300").s().p("AgXAtIAAgLIAMAAIAHgSIgUgxIgLAAIAAgKIAgAAIAAAKIgIAAIANAiIAMgiIgIAAIAAgKIAdAAIAAAKIgJAAIgdBOg");
	this.shape_347.setTransform(663.65,272.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_348.setTransform(651.475,270.875);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_349.setTransform(642.975,270.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_350.setTransform(636.625,270.775);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_351.setTransform(630.025,269.525);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#663300").s().p("AgQAcQgHgFgFgHQgDgHAAgJQAAgIADgIQAFgIAHgDQAHgFAJAAQAJAAAHAFQAIAEAEAHQAFAIAAAIQAAAJgFAHQgFAHgHAFQgHAFgJAAQgIAAgIgFgAgJgRQgFADgCAFQgCAEAAAFQAAAFACAFQACAFAFADQAEACAFAAQAFAAAFgCQAEgDADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_352.setTransform(618.9,270.85);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#663300").s().p("AgDAmQgEgEAAgJIAAgiIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_353.setTransform(613.275,269.85);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAIgDQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgGIAKAGQgFAHgHAEQgJAEgJABQgJAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_354.setTransform(604.35,270.85);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgFAHAAQAKABAHAGIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_355.setTransform(597.375,270.85);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_356.setTransform(590.625,270.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_357.setTransform(585,269.475);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#663300").s().p("AgkAtIAAgLIALAAIAAhCIgKAAIAAgLIAVAAIAAAKQAGgFAFgDQAEgDAHAAQAIAAAHAFQAHADAEAIQAEAIAAAIQAAAJgEAGQgFAHgHAFQgHAFgHAAQgMAAgKgKIAAAYIANAAIAAALgAgEgeQgFADgCAFQgCAFgBAFQAAALAHAEQAFAFAJAAQAFAAAFgCQADgEACgEQADgFAAgFQAAgGgDgEQgCgGgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_358.setTransform(579,272.15);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_359.setTransform(774.825,256.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_360.setTransform(763.125,256.775);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_361.setTransform(757.5,255.425);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgEAAQgGAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_362.setTransform(751.9,255.475);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_363.setTransform(746.225,255.85);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_364.setTransform(742.45,255.425);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_365.setTransform(735.425,256.875);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_366.setTransform(722.175,256.775);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgEgHABgJQgBgIAEgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAFAHgBAIQABAJgFAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAFgCACgFQACgFABgFQgBgFgCgFQgCgEgFgDQgFgDgFAAQgEAAgFADg");
	this.shape_367.setTransform(714.7,256.85);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_368.setTransform(709.2,255.425);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_369.setTransform(705.425,255.85);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_370.setTransform(700.175,256.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_371.setTransform(692.775,256.775);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_372.setTransform(687.15,255.425);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_373.setTransform(681.425,258.225);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_374.setTransform(673.925,256.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_375.setTransform(664.65,256.775);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_376.setTransform(657.15,255.425);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_377.setTransform(649.075,255.85);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_378.setTransform(643.825,256.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_379.setTransform(636.4,255.475);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_380.setTransform(630.725,255.85);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_381.setTransform(621.775,256.775);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJABQgKgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_382.setTransform(615.35,256.85);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_383.setTransform(609.725,255.85);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAEADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_384.setTransform(604.8,256.825);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHgBgJQABgIAEgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgFgBgFQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_385.setTransform(598.1,256.85);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgGgEgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_386.setTransform(593.075,255.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQACgFAAgFQAAgFgCgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_387.setTransform(582.7,256.85);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_388.setTransform(577.075,255.85);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgFAHgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_389.setTransform(774.35,242.85);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_390.setTransform(766.925,242.775);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgCAFAAAEQAAAGACAEQADAFAEADQAFACAEAAQAGAAAEgCQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_391.setTransform(759.45,242.85);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_392.setTransform(744.975,244.225);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_393.setTransform(737.025,242.775);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_394.setTransform(731.4,241.425);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_395.setTransform(726.275,242.85);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_396.setTransform(721,241.425);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_397.setTransform(717.225,241.85);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_398.setTransform(711.525,242.775);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#663300").s().p("AgkAsIAAgLIAMAAIAAhBIgMAAIAAgLIBJAAIAAAaIgLAAIAAgPIglAAIAAAaIAgAAIAAAKIggAAIAAAdIAlAAIAAgQIALAAIAAAbg");
	this.shape_399.setTransform(703.625,241.475);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_400.setTransform(691,245.125);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAJAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_401.setTransform(686.15,242.825);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgFAHgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_402.setTransform(679.4,242.85);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_403.setTransform(672.425,242.85);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_404.setTransform(665.675,242.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#663300").s().p("AgkAtIAAgLIALAAIAAhCIgKAAIAAgLIAVAAIAAAKQAGgFAFgDQAEgDAHAAQAIAAAHAFQAHADAEAIQADAIAAAIQAAAJgDAGQgFAIgHAEQgHAFgHgBQgMABgKgKIAAAYIANAAIAAALgAgEgeQgEADgDAFQgDAFAAAGQABAKAFAEQAHAFAIAAQAFAAAFgCQADgEACgDQADgFAAgGQAAgGgDgEQgCgGgEgCQgFgDgFAAQgGAAgEADg");
	this.shape_405.setTransform(657.85,244.15);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_406.setTransform(651,242.825);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_407.setTransform(638.1,242.825);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_408.setTransform(631.375,242.875);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgCAFAAAEQAAAGACAEQACAFAFADQAEACAFAAQAGAAAEgCQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_409.setTransform(623.9,242.85);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_410.setTransform(618.4,241.425);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_411.setTransform(613.875,242.775);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAHAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgGIALAGQgGAHgIAFQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_412.setTransform(607.45,242.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_413.setTransform(601.825,241.85);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_414.setTransform(596.9,242.825);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#663300").s().p("AgXAtIAAgLIALAAIAIgSIgUgxIgKAAIAAgKIAeAAIAAAKIgHAAIANAiIAMgiIgIAAIAAgKIAeAAIAAAKIgJAAIgeBOg");
	this.shape_415.setTransform(590.15,244.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgBgCgFAAQgGAAgLAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQAMgJAKAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_416.setTransform(580.8,242.775);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_417.setTransform(774.125,227.525);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_418.setTransform(766.175,228.775);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_419.setTransform(759.075,228.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_420.setTransform(733.6,228.85);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#663300").s().p("AgDAfIgUgyIgMAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgUAyg");
	this.shape_421.setTransform(726.2,228.875);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_422.setTransform(720.65,227.425);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_423.setTransform(716.875,227.85);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_424.setTransform(711.625,228.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_425.setTransform(704.25,228.85);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_426.setTransform(697.875,228.775);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgDgGAAQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_427.setTransform(691.875,228.85);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_428.setTransform(666.55,227.475);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_429.setTransform(660.875,227.85);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgCgCg");
	this.shape_430.setTransform(657.1,227.425);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_431.setTransform(650.075,228.875);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#663300").s().p("AgXAsIAAgKIAMAAIAHgSIgVgwIgKAAIAAgMIAgAAIAAAMIgIAAIAMAhIANghIgIAAIAAgMIAdAAIAAAMIgJAAIgdBMg");
	this.shape_432.setTransform(623.05,230.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_433.setTransform(617.375,227.85);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAKAAIAAALgAgEgfQgCgDgBgDQABgDACgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_434.setTransform(613.6,227.425);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_435.setTransform(608.8,228.825);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgJADgHQAFgIAHgEQAIgDAIAAQAJAAAHADQAIAFAEAHQAEAIAAAIQAAAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAFADAEABQAFgBAFgDQAEgCADgFQADgEAAgGQAAgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_436.setTransform(602.1,228.85);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_437.setTransform(596.6,227.425);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_438.setTransform(592.075,228.775);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_439.setTransform(585.675,228.875);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgDgGAAQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_440.setTransform(578.575,228.85);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAFQgFAIgIAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_441.setTransform(774.35,214.85);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_442.setTransform(766.975,214.875);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#663300").s().p("AADAtIAAgKIALAAIAAgaQgJAKgLAAQgJABgHgFQgHgEgEgIQgDgHAAgIQAAgJADgHQAEgHAHgEQAHgFAJAAQAMAAAIALIAAgKIAXAAIAAALIgKAAIAABDIALAAIAAAKgAgSgbQgGAGAAAJQAAAKAGAEQAFAGAJAAQAEAAAFgCQAEgDADgEQACgEAAgGQAAgGgCgFQgDgFgEgDQgFgDgFAAQgJAAgEAGg");
	this.shape_443.setTransform(759.35,216.15);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_444.setTransform(753.35,213.425);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#663300").s().p("AglAtIAAgKIALAAIAAhDIgKAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAKAAAGAFQAHAEADAHQAEAIABAIQgBAIgEAHQgEAIgGAEQgIAFgIgBQgLAAgJgJIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAGQAAAKAFAEQAHAFAIAAQAFAAAEgCQAEgDADgEQACgFAAgGQAAgGgCgEQgDgGgFgCQgEgDgFAAQgGAAgEADg");
	this.shape_445.setTransform(747.35,216.15);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#663300").s().p("AgQAcQgHgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAFgJgBQgIABgIgFgAgJgRQgFACgCAGQgCAFgBAEQABAGACAEQACAFAFADQAEADAFAAQAGAAAEgDQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_446.setTransform(734.2,214.85);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_447.setTransform(728.575,213.85);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_448.setTransform(719.075,213.85);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_449.setTransform(713.825,214.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgEAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_450.setTransform(706.4,213.475);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_451.setTransform(700.725,213.85);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAFQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_452.setTransform(689.45,214.85);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_453.setTransform(682.8,214.825);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_454.setTransform(676.075,214.875);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAFAHAAAIQAAAJgFAHQgEAIgHAEQgIAFgJgBQgIABgIgFgAgJgRQgFACgCAGQgCAFgBAEQABAGACAEQACAFAFADQAEADAFAAQAFAAAFgDQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_455.setTransform(663,214.85);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_456.setTransform(657.375,213.85);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_457.setTransform(645.925,213.525);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_458.setTransform(637.975,214.775);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_459.setTransform(630.875,214.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAFQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_460.setTransform(617.9,214.85);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_461.setTransform(611.525,214.775);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgFACgCAGQgCAFgBAEQABAGACAEQACAFAFADQAEADAFAAQAGAAAEgDQAFgDACgFQADgEAAgGQAAgEgDgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_462.setTransform(605.15,214.85);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_463.setTransform(599.5,213.475);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#663300").s().p("AgkAtIAAgKIALAAIAAhDIgKAAIAAgLIAVAAIAAAKQAGgGAFgDQAEgCAHAAQAIAAAHAFQAHAEAEAHQADAIAAAIQAAAIgDAHQgFAIgHAEQgHAFgHgBQgMAAgKgJIAAAZIANAAIAAAKgAgEgeQgEADgDAFQgDAFAAAGQABAKAGAEQAFAFAJAAQAFAAAFgCQADgDACgEQADgFAAgGQAAgGgDgEQgCgGgEgCQgFgDgFAAQgGAAgEADg");
	this.shape_464.setTransform(593.5,216.15);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#663300").s().p("AAEAfIAAgLIAIAAIgMgOIgLAOIAIAAIAAALIgeAAIAAgLIAJAAIATgUIgSgTIgIAAIAAgLIAdAAIAAALIgIAAIAKAMIALgMIgHAAIAAgLIAeAAIAAALIgLAAIgQASIAUAVIAHAAIAAALg");
	this.shape_465.setTransform(586.075,214.825);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAFQgFAIgHAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_466.setTransform(578.8,214.85);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgFgHAAgJQAAgJAFgHQAEgIAHgDQAIgEAIAAQAJAAAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAHQgFAHgGAFQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAFQgDAEABAFQgBAFADAFQADAFAEACQAFADAEAAQAFAAAFgDQAEgCADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_467.setTransform(774.4,200.85);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_468.setTransform(768.775,199.85);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_469.setTransform(755.775,199.85);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_470.setTransform(750.075,200.775);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_471.setTransform(742.975,200.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_472.setTransform(734.125,200.875);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#663300").s().p("AgPAcQgIgFgEgHQgFgHAAgJQAAgJAFgHQAEgIAHgDQAHgEAJAAQAJAAAIAEQAHAEAEAHQAFAIgBAIQABAJgFAHQgFAHgGAFQgIAEgJABQgJgBgGgEgAgJgRQgEADgDAFQgCAEAAAFQAAAFACAFQACAFAFACQAEADAFAAQAGAAAEgDQAFgCACgFQACgFABgFQgBgFgCgEQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_473.setTransform(716.15,200.85);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_474.setTransform(710.525,199.85);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgJAFgHQAEgIAHgDQAIgEAIAAQAJAAAIAEQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAGQgGAIgIADQgIAFgKAAQgJgBgHgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_475.setTransform(695.75,200.85);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_476.setTransform(689.375,200.775);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_477.setTransform(682.975,200.875);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_478.setTransform(677.225,199.85);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_479.setTransform(671.975,200.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_480.setTransform(664.575,200.775);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_481.setTransform(647.925,200.775);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_482.setTransform(640.825,200.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgCgCgFAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_483.setTransform(631.55,200.775);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_484.setTransform(622.175,200.875);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_485.setTransform(614.6,199.475);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_486.setTransform(598.8,200.825);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_487.setTransform(593.95,199.425);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_488.setTransform(581.075,199.85);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#663300").s().p("AgPAsIAAgLIAJAAIAAhBIgJAAIAAgLIAfAAIAAALIgJAAIAABBIAJAAIAAALg");
	this.shape_489.setTransform(577.125,199.475);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_490.setTransform(663.7,185.475);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABKg");
	this.shape_491.setTransform(654.275,185.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_492.setTransform(644.725,185.475);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#663300").s().p("AAUAsIAAgPIAKAAIAAg5IgCAAIgbBIIgJAAIgbhIIgCAAIAAA5IALAAIAAAPIglAAIAAgPIALAAIAAg5IgLAAIAAgPIAsAAIATAzIATgzIAtAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_493.setTransform(633.675,185.475);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_494.setTransform(622.575,185.475);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANABQAQAAAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAFgEAGQgDAHAAAHQAAAJADAGQADAHAGAEQAFADAHAAQAJABAGgHQAHgGACgKIASAIQgKAegiAAQgNAAgLgFg");
	this.shape_495.setTransform(613.325,185.45);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_496.setTransform(605.475,185.475);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_497.setTransform(598.4,185.475);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABKg");
	this.shape_498.setTransform(588.975,185.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_499.setTransform(579.425,185.475);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#663300").s().p("AgvAsIAAgPIAOAAIAAg5IgOAAIAAgPIAwAAQANAAAKAFQALAEAGAKQAHALAAAOQAAAOgHAKQgFAJgLAFQgKAFgNAAgAgKAdIAGAAQAKAAAHgEQAGgEADgGQABgGAAgJQABgNgIgIQgGgHgMAAIgIAAg");
	this.shape_500.setTransform(772.75,171.475);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_501.setTransform(762.825,171.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIARg5IgLAAIAAgPIA4AAIAAAPIgMAAIATA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_502.setTransform(753.1,171.475);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#663300").s().p("AgWAsIAAgPIAMAAIAAgYIgYghIgLAAIAAgPIAsAAIAAAPIgIAAIALAWIAOgWIgJAAIAAgPIAmAAIAAAPIgKAAIgXAhIAAAYIAMAAIAAAPg");
	this.shape_503.setTransform(645.45,171.475);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_504.setTransform(636.5,171.475);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_505.setTransform(629.475,171.475);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQABAIADAEQADAEAGAAQAEAAACgDQAEgCAAgEQAAgEgEgEQgDgDgHgDQgNgGgFgGQgGgGgBgJQAAgHAEgFQADgGAFgDQAGgDAGAAQAFAAAEACQAEACADAEIAAgHIAOAAIAAAbIgOAAQgBgHgEgDQgDgDgEAAQgEAAgCACQgDACAAADQAAADACACIAEADIAHAEIADABQAMAFAGAGQAFAHABAKQAAAMgIAHQgGAHgMAAQgLAAgGgIg");
	this.shape_506.setTransform(623.35,171.475);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgKAAgOQAAgMAGgKQAGgLAMgGQALgFANgBQAPABAKAFQAMAGAGALQAGAKAAAMQAAAOgGAKQgGAKgMAGQgKAGgPAAQgNAAgLgGgAgMgYQgGAEgDAHQgCAGAAAHQAAAJACAGQADAHAGADQAGAFAGAAQAIAAAFgFQAGgDACgHQADgGAAgJQAAgHgDgGQgCgHgGgEQgFgEgIAAQgGAAgGAEg");
	this.shape_507.setTransform(614.35,171.45);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_508.setTransform(606.175,171.475);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAyAAQAOAAAJAGQAHAGAAAMQAAAIgDAGQgEAFgHADIANAaIAMAAIAAAPgAgKgIIAIAAQANAAABgKQAAgFgEgDQgDgCgFAAIgKAAg");
	this.shape_509.setTransform(598.95,171.475);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#663300").s().p("AgRAqQgHgDgDgIQgDgHAAgNIAAgoIgLAAIAAgPIApAAIAAAPIgIAAIAAApQAAAHACAEQABAEADABQACACADAAQAGAAADgEQADgEAAgLIAAgoIgIAAIAAgPIAjAAIAAAPIgLAAIAAAsQAAAQgHAHQgHAHgQAAQgLAAgHgDg");
	this.shape_510.setTransform(589.675,171.525);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#663300").s().p("AgWAoQgLgGgGgKQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANgBQAQAAAKAJIAAgHIAPAAIAAAfIgPAAQgGgQgQgBQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_511.setTransform(580.325,171.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},165).wait(28));

	// Pics
	this.instance = new lib.attractive();
	this.instance.setTransform(501,310,0.1172,0.1172);

	this.instance_1 = new lib.exchange();
	this.instance_1.setTransform(503,436,0.1062,0.118);

	this.instance_2 = new lib.question();
	this.instance_2.setTransform(503,187,0.1369,0.1369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},155).wait(38));

	// Precedent
	this.instance_3 = new lib.Louvre();
	this.instance_3.setTransform(318,180,0.2789,0.3079);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#663300").s().p("AgKAcIAAADIgPAAIAAgVIAPAAQAAAEAEACQAEADAEAAIAIgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgEIgEgCIgIgCQgOgCgGgEQgHgEABgJQgBgIAHgFQAGgFAKAAQAIAAAHADIAAgCIAOAAIAAASIgOAAQgCgHgLAAQgIAAAAAFQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAGACQALABAHADQAHADADAEQADADAAAHQAAAJgIAFQgGAGgMAAQgKAAgDgEg");
	this.shape_512.setTransform(445.8,482.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#663300").s().p("AgDAUIgFgVIAAgSIARAAIAAASIgFAVg");
	this.shape_513.setTransform(440.925,478.65);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#663300").s().p("AgSAsIAAgOIAKAAIAAg7IgKAAIAAgOIAcAAIAABJIAJAAIAAAOg");
	this.shape_514.setTransform(437,481.025);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#663300").s().p("AgPAcQgIgDgEgHQgFgIAAgJQAAgIAFgIQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAFAEAIQADAIABAKIgtAAQAAAHAFAEQAEAEAFAAQAIAAAHgHIAPAFQgFAIgIADQgHAEgKAAQgJAAgIgEgAANgGQgBgFgEgEQgDgDgFAAQgFAAgDADQgDADgBAGIAZAAIAAAAg");
	this.shape_515.setTransform(431.275,482.375);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#663300").s().p("AgHAfIgUgvIgJAAIAAgOIAkAAIAAAOIgHAAIAJAbIALgbIgIAAIAAgOIAhAAIAAAOIgJAAIgUAvg");
	this.shape_516.setTransform(423.65,482.425);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#663300").s().p("AgWAaQgGgFAAgJIAAgcIgJAAIAAgOIAdAAIAAAlQAAAFACABQABACADAAQAEAAAGgEIAAgbIgIAAIAAgOIAcAAIAAAuIAKAAIAAAOIgeAAIAAgFQgIAGgJAAQgIAAgFgFg");
	this.shape_517.setTransform(415.7,482.425);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#663300").s().p("AgQAcQgHgEgEgHQgFgIAAgJQABgIAEgIQAEgHAIgEQAHgEAIAAQAJAAAIAEQAHAEAEAHQAFAIgBAIQABAJgFAIQgEAHgIAEQgHAEgJAAQgIAAgIgEgAgIgMQgEAFAAAHQAAAIAEAEQAEAFAEAAQAGAAADgFQADgEAAgIQAAgHgDgFQgEgEgFAAQgFAAgDAEg");
	this.shape_518.setTransform(408,482.375);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#663300").s().p("AAUAsIAAgPIAKAAIAAg5IgCAAIgbBIIgJAAIgbhIIgCAAIAAA5IALAAIAAAPIglAAIAAgPIALAAIAAg5IgLAAIAAgPIAsAAIATAzIATgzIAtAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_519.setTransform(397.575,481.025);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#663300").s().p("AAIAfIAAgkQABgFgCgCQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAgBAAQgEAAgGAEIAAAbIAJAAIAAAOIglAAIAAgOIAJAAIAAggIgJAAIAAgOIAcAAIAAAFQAIgGAJAAQAJAAAGAGQAEAGAAALIAAAYIAJAAIAAAOg");
	this.shape_520.setTransform(383.55,482.325);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#663300").s().p("AgbAbQgGgGAAgJQAAgIAHgFQAGgGAMAAIAHABIAGACIAAgEQAAgFgDgDQgCgCgGAAQgGAAgFAEIgQgCQAHgPAXAAQAOAAAHAGQAGAHAAANIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgFgAgMAGQgCACAAADQAAAJAHgBQAGABAGgHIAAgFQgGgEgFAAQgEAAgCACg");
	this.shape_521.setTransform(375.675,482.35);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#663300").s().p("AgPAcQgIgDgEgHQgFgIAAgJQAAgIAFgIQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAFAEAIQADAIABAKIgtAAQAAAHAFAEQAEAEAFAAQAIAAAHgHIAPAFQgFAIgIADQgHAEgKAAQgJAAgIgEgAANgGQgBgFgEgEQgDgDgFAAQgFAAgDADQgDADgBAGIAZAAIAAAAg");
	this.shape_522.setTransform(368.275,482.375);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#663300").s().p("AgZA4IAAgQIAHABQAGAAACgDQACgDAAgGIAAhHIgNAAIAAgPIAvAAIAAAPIgMAAIAABIQAAAcgZAAIgOgCg");
	this.shape_523.setTransform(361.775,482.375);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#663300").s().p("AgSAtIAAgOIAJAAIAAggIgJAAIAAgOIAcAAIAAAuIAJAAIAAAOgAgGgZQgEgDAAgFQAAgFAEgDQADgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEACgEAAQgDAAgDgCg");
	this.shape_524.setTransform(459.35,466.95);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#663300").s().p("AgGAlIAAAHIgeAAIAAgOIALAAIAAg7IgLAAIAAgPIAeAAIAAAiQAHgIAKAAQAHAAAHAEQAGAEADAIQADAGAAAJQAAAIgDAIQgDAHgGAEQgGAFgIAAQgKAAgHgIgAgDABQgDAFAAAHQAAAHADAFQADAEAFAAQAGAAADgEQADgFAAgIQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_525.setTransform(452.825,467.075);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_526.setTransform(445.175,468.35);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#663300").s().p("AAJAsIAAgoIgBgEQgCgCgEAAQgDAAgGADIAAAdIAIAAIAAAOIglAAIAAgOIAKAAIAAg7IgKAAIAAgOIAdAAIAAAgQAIgHAJAAQAJAAAFAGQAEAGAAAJIAAAbIAJAAIAAAOg");
	this.shape_527.setTransform(437.35,467.025);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#663300").s().p("AguAsIAAgPIANAAIAAg5IgNAAIAAgPIAuAAQAOAAALAFQAKAEAHAKQAFALAAAOQAAAOgFAKQgGAJgKAFQgLAFgOAAgAgKAdIAFAAQAMAAAGgEQAGgEACgGQADgGAAgJQgBgNgGgIQgHgHgMAAIgIAAg");
	this.shape_528.setTransform(428,467.025);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#663300").s().p("AgXAaQgEgFAAgJIAAgcIgKAAIAAgOIAdAAIAAAlQAAAFABABQABACAFAAQADAAAGgEIAAgbIgIAAIAAgOIAcAAIAAAuIAKAAIAAAOIgeAAIAAgFQgIAGgIAAQgKAAgFgFg");
	this.shape_529.setTransform(415.85,468.425);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#663300").s().p("AgGAlIAAAHIgeAAIAAgOIALAAIAAg7IgLAAIAAgPIAeAAIAAAiQAHgIAKAAQAHAAAHAEQAGAEADAIQADAGAAAJQAAAIgDAIQgDAHgGAEQgGAFgIAAQgKAAgHgIgAgDABQgDAFAAAHQAAAHADAFQADAEAFAAQAGAAADgEQADgFAAgIQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_530.setTransform(407.625,467.075);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIASg5IgNAAIAAgPIA6AAIAAAPIgNAAIATA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_531.setTransform(399.15,467.025);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#663300").s().p("AgPAcQgIgDgEgHQgFgIAAgJQAAgIAFgIQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAFAEAIQADAIABAKIgtAAQAAAHAFAEQAEAEAFAAQAIAAAHgHIAPAFQgFAIgIADQgHAEgKAAQgJAAgIgEgAANgGQgBgFgEgEQgDgDgFAAQgFAAgDADQgDADgBAGIAZAAIAAAAg");
	this.shape_532.setTransform(387.775,468.375);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#663300").s().p("AgaAfIAAgOIALAAIAAggIgKAAIAAgOIAbAAIAAAPQADgHAFgEQAHgFAIAAIACAAIAAASQgIABgFACQgEACgDAFQgDAEAAAJIAAAGIANAAIAAAOg");
	this.shape_533.setTransform(381.1,468.325);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#663300").s().p("AgHAfIgUgvIgJAAIAAgOIAkAAIAAAOIgHAAIAJAbIALgbIgIAAIAAgOIAhAAIAAAOIgJAAIgUAvg");
	this.shape_534.setTransform(374.25,468.425);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#663300").s().p("AgWAaQgFgFgBgJIAAgcIgJAAIAAgOIAdAAIAAAlQAAAFACABQABACADAAQAEAAAGgEIAAgbIgIAAIAAgOIAcAAIAAAuIAKAAIAAAOIgeAAIAAgFQgIAGgJAAQgIAAgFgFg");
	this.shape_535.setTransform(366.3,468.425);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#663300").s().p("AgQAcQgHgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgEAIAAQAJAAAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAIQgFAHgHAEQgHAEgJAAQgIAAgIgEgAgIgMQgDAFAAAHQAAAIADAEQAEAFAEAAQAGAAADgFQADgEAAgIQAAgHgDgFQgEgEgFAAQgFAAgDAEg");
	this.shape_536.setTransform(358.6,468.375);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#663300").s().p("AgnAsIAAgPIANAAIAAg5IgNAAIAAgPIAwAAIAAAPIgMAAIAAA5IAZAAIAAgbIARAAIAAAqg");
	this.shape_537.setTransform(350.85,467.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.instance_3}]},141).wait(52));

	// Characteristics
	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_538.setTransform(664.1239,112.725);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#663300").s().p("AgnA2IAAhrIAvAAQAOAAAJAIQAJAIAAAPQAAANgIAJQgIAIgQAAIggAAIAAAugAgYgDIAbAAQAKAAAGgEQAGgEAAgLQAAgMgIgEQgGgCgIAAIgbAAg");
	this.shape_539.setTransform(654.5,112.725);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#663300").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_540.setTransform(647.25,112.725);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_541.setTransform(639.675,112.725);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_542.setTransform(629.1739,112.725);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_543.setTransform(618.825,112.725);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_544.setTransform(607.625,112.725);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#663300").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_545.setTransform(599.85,112.725);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#663300").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_546.setTransform(593.1,112.725);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#663300").s().p("AAgA2IgLggIgpAAIgMAgIgPAAIAphrIAPAAIAnBrgAAQAKIgPgvIgRAvIAgAAg");
	this.shape_547.setTransform(584.65,112.725);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_548.setTransform(575.925,112.725);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#663300").s().p("AgmA2IAAhrIBMAAIAAANIg/AAIAAAhIA7AAIAAALIg7AAIAAAlIBAAAIAAANg");
	this.shape_549.setTransform(566.6,112.725);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIAAgSQgBgLgHgDQgFgCgIAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACAEAFQADAEAAAJIAAAPIABAJQABAFAEABIAAADgAgcgEIAfAAQALAAAFgEQAGgEAAgKQAAgMgIgEQgFgCgGAAIgiAAg");
	this.shape_550.setTransform(556.25,112.725);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#663300").s().p("AgnA2IAAhrIBNAAIAAANIg+AAIAAAhIA6AAIAAALIg6AAIAAAlIA/AAIAAANg");
	this.shape_551.setTransform(541.65,112.725);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIgBgSQAAgLgHgDQgFgCgIAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACAEAFQACAEABAJIAAAPIABAJQABAFAEABIAAADgAgcgEIAfAAQALAAAGgEQAFgEAAgKQAAgMgIgEQgEgCgIAAIghAAg");
	this.shape_552.setTransform(531.3,112.725);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#663300").s().p("AgkAkQgFgLAAgUIAAg7IAOAAIAABBQAAAMAFAIQAGALAQAAQARAAAHgMQAEgHAAgMIAAhBIAOAAIAAA7QABAUgGALQgKATgbAAQgaAAgKgTg");
	this.shape_553.setTransform(520.3,112.875);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_554.setTransform(510.25,112.725);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#663300").s().p("AAhA2IgMggIgpAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgRgvIgQAvIAhAAg");
	this.shape_555.setTransform(501.8,112.725);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_556.setTransform(491.375,112.725);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#663300").s().p("AgRAHIAAgNIAkAAIAAANg");
	this.shape_557.setTransform(483.5,113.925);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_558.setTransform(475.625,112.725);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#663300").s().p("AAhA2IgMggIgpAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgQgvIgRAvIAhAAg");
	this.shape_559.setTransform(465.25,112.725);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#663300").s().p("AAmA2IAAg/IAAgLIAAgQIgfBaIgNAAIgfhaIAAADIAAAMIAAAMIAAA/IgOAAIAAhrIAVAAIAeBaIAfhaIAVAAIAABrg");
	this.shape_560.setTransform(454.075,112.725);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#663300").s().p("AgkAkQgGgLAAgUIAAg7IAPAAIAABBQAAAMAFAIQAGALAQAAQASAAAGgMQAEgHAAgMIAAhBIAPAAIAAA7QgBAUgFALQgJATgcAAQgbAAgJgTg");
	this.shape_561.setTransform(442.5,112.875);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_562.setTransform(431.625,112.725);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#663300").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgHAOQgLAZgaAAgAgcApIAZAAQAGAAAFgBQAIgDAGgIQAEgHACgKIABgLQAAgTgIgLQgIgLgQAAIgZAAg");
	this.shape_563.setTransform(662.55,95.725);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#663300").s().p("AgmA2IAAhrIBMAAIAAANIg/AAIAAAhIA7AAIAAALIg7AAIAAAlIBBAAIAAANg");
	this.shape_564.setTransform(652.2,95.725);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#663300").s().p("AgHA2IgnhrIAQAAIAeBbIAfhbIAQAAIgoBrg");
	this.shape_565.setTransform(642.05,95.725);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_566.setTransform(634.325,95.725);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_567.setTransform(623.925,95.725);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#663300").s().p("AgHA2IgnhrIAQAAIAeBbIAehbIARAAIgnBrg");
	this.shape_568.setTransform(613.2,95.725);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#663300").s().p("AgmA2IAAhrIBNAAIAAANIg/AAIAAAhIA5AAIAAALIg5AAIAAAlIBAAAIAAANg");
	this.shape_569.setTransform(603.35,95.725);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#663300").s().p("AgkA2IAAhrIBJAAIAAANIg7AAIAAAhIA0AAIAAAMIg0AAIAAAxg");
	this.shape_570.setTransform(589.825,95.725);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_571.setTransform(578.975,95.725);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_572.setTransform(563.9239,95.725);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_573.setTransform(553.575,95.725);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#663300").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_574.setTransform(546.25,95.725);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_575.setTransform(539.5,95.725);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_576.setTransform(529.8239,95.725);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#663300").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_577.setTransform(522.95,95.725);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIAAgSQgBgLgHgDQgFgCgIAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACAEAFQADAEAAAJIAAAPIABAJQABAFAEABIAAADgAgcgEIAfAAQALAAAFgEQAGgEAAgKQAAgMgIgEQgFgCgGAAIgiAAg");
	this.shape_578.setTransform(515.65,95.725);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#663300").s().p("AgnA2IAAhrIBNAAIAAANIg+AAIAAAhIA6AAIAAALIg6AAIAAAlIA/AAIAAANg");
	this.shape_579.setTransform(505.2,95.725);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_580.setTransform(495.4,95.725);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_581.setTransform(485.375,95.725);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#663300").s().p("AAhA2IgLggIgqAAIgMAgIgPAAIAohrIAQAAIAnBrgAAQAKIgQgvIgQAvIAgAAg");
	this.shape_582.setTransform(475,95.725);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIAAgSQgBgLgHgDQgFgCgIAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACAEAFQADAEAAAJIAAAPIABAJQABAFAEABIAAADgAgcgEIAfAAQALAAAFgEQAGgEAAgKQAAgMgIgEQgFgCgGAAIgiAAg");
	this.shape_583.setTransform(464.9,95.725);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#663300").s().p("AAhA2IgLggIgqAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgRgvIgQAvIAhAAg");
	this.shape_584.setTransform(454.2,95.725);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_585.setTransform(443.825,95.725);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_586.setTransform(432.975,95.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538}]},124).wait(69));

	// Light_Space_Text2
	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#663300").s().p("AgoA+QgPgOAAgXIATAAQAAAMAFAIQAKAPAWAAQALgBAIgDQARgGAAgQQAAgLgHgFQgHgFgQgEIgRgEQgTgFgIgDQgNgKAAgRQAAgUANgMQANgMAYAAQAVgBAPALQAQALAAAYIgTAAQgBgLgEgGQgJgMgTAAQgRAAgHAIQgHAHAAAJQAAALAIAEQAGAEASAEIAUAFQAOAEAIAEQANAKAAAUQAAAXgRALQgRAJgWABQgZAAgPgOg");
	this.shape_587.setTransform(276.575,177.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#663300").s().p("Ag0BIIAAiPIA/AAQATAAAMALQALALAAATQAAARgKANQgKALgWAAIgsAAIAAA9gAghgEIAmAAQANAAAIgGQAIgFAAgOQAAgQgMgGQgGgDgLAAIgmAAg");
	this.shape_588.setTransform(263.775,177.075);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#663300").s().p("AgJBIIAAiPIATAAIAACPg");
	this.shape_589.setTransform(254.15,177.075);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#663300").s().p("AAlBIIAAhDIhIAAIAABDIgVAAIAAiPIAVAAIAAA8IBIAAIAAg8IAUAAIAACPg");
	this.shape_590.setTransform(244,177.075);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#663300").s().p("AgoA+QgPgOAAgXIATAAQAAAMAFAIQAKAPAWAAQALgBAIgDQARgGAAgQQAAgLgHgFQgHgFgQgEIgRgEQgTgFgIgDQgNgKAAgRQAAgUANgMQANgMAYAAQAVgBAPALQAQALAAAYIgTAAQgBgLgEgGQgJgMgTAAQgRAAgHAIQgHAHAAAJQAAALAIAEQAGAEASAEIAUAFQAOAEAIAEQANAKAAAUQAAAXgRALQgRAJgWABQgZAAgPgOg");
	this.shape_591.setTransform(230.025,177.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#663300").s().p("AAjBIIhIhzIAABzIgSAAIAAiPIAXAAIBGBzIAAhzIATAAIAACPg");
	this.shape_592.setTransform(216.25,177.075);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#663300").s().p("Ag0A2QgRgVAAggQAAgcAPgVQASgbAkAAQAlAAATAZQAOATAAAeQAAAfgQAVQgUAZgiAAQghAAgTgWgAgjgqQgOAPAAAdQAAAYAMAQQAMARAaAAQAaAAAMgTQALgSAAgXQAAgZgNgQQgNgPgXAAQgWAAgOAPg");
	this.shape_593.setTransform(201.325,177.075);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#663300").s().p("AgJBIIAAiPIATAAIAACPg");
	this.shape_594.setTransform(190.95,177.075);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#663300").s().p("AgJBIIAAh+IgwAAIAAgRIBzAAIAAARIgwAAIAAB+g");
	this.shape_595.setTransform(181.925,177.075);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#663300").s().p("AAqBIIgOgrIg4AAIgPArIgUAAIA2iPIAVAAIA0CPgAAWANIgWg+IgWA+IAsAAg");
	this.shape_596.setTransform(170.65,177.075);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#663300").s().p("AgtBIIAAiPIAUAAIAAB+IBHAAIAAARg");
	this.shape_597.setTransform(158.925,177.075);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#663300").s().p("Ag0BIIAAiPIBnAAIAAASIhUAAIAAArIBOAAIAAAQIhOAAIAAAxIBWAAIAAARg");
	this.shape_598.setTransform(146.525,177.075);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#663300").s().p("AAjBIIgCgFIgBgLIgBgYQgBgOgJgFQgFgDgMAAIgqAAIAAA+IgTAAIAAiPIBAAAQAQAAAKAFQAUAJAAAZQAAANgFAIQgGAIgJAEQAIAEAFAFQAEAGAAAMIABAUIABAMQACAHAFACIAAADgAgmgFIAqAAQAOAAAIgFQAHgGAAgOQABgQgLgFQgGgDgKAAIgtAAg");
	this.shape_599.setTransform(132.75,177.075);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#663300").s().p("Ag0BIIAAiPIBnAAIAAASIhUAAIAAArIBOAAIAAAQIhOAAIAAAxIBWAAIAAARg");
	this.shape_600.setTransform(113.275,177.075);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#663300").s().p("AAjBIIgBgFIgBgLIgCgYQAAgOgKgFQgGgDgLAAIgqAAIAAA+IgTAAIAAiPIBAAAQAQAAALAFQATAJAAAZQAAANgFAIQgGAIgJAEQAJAEADAFQAFAGABAMIAAAUIACAMQABAHAFACIAAADgAgmgFIArAAQANAAAIgFQAIgGAAgOQgBgQgKgFQgGgDgKAAIgtAAg");
	this.shape_601.setTransform(99.5,177.075);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#663300").s().p("AgxAwQgHgPAAgaIAAhQIAUAAIAABYQAAAQAGAKQAJAQAUAAQAYAAAJgRQAFgKAAgPIAAhYIAUAAIAABQQAAAagHAPQgOAagkAAQgjAAgOgag");
	this.shape_602.setTransform(84.825,177.275);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#663300").s().p("AgJBIIAAh+IgwAAIAAgRIBzAAIAAARIgwAAIAAB+g");
	this.shape_603.setTransform(71.425,177.075);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#663300").s().p("AArBIIgPgrIg3AAIgQArIgUAAIA2iPIAVAAIA0CPgAAWANIgWg+IgWA+IAsAAg");
	this.shape_604.setTransform(60.15,177.075);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#663300").s().p("AAjBIIhHhzIAABzIgTAAIAAiPIAWAAIBHBzIAAhzIASAAIAACPg");
	this.shape_605.setTransform(46.2,177.075);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#663300").s().p("AgYAJIAAgRIAxAAIAAARg");
	this.shape_606.setTransform(258,156.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#663300").s().p("AAjBIIhHhzIAABzIgTAAIAAiPIAWAAIBHBzIAAhzIASAAIAACPg");
	this.shape_607.setTransform(247.45,155.075);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#663300").s().p("AArBIIgPgrIg3AAIgQArIgUAAIA2iPIAVAAIA0CPgAAWANIgWg+IgWA+IAsAAg");
	this.shape_608.setTransform(233.7,155.075);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#663300").s().p("AAyBIIAAhUIAAgOIABgWIgpB4IgTAAIgph4IAAAEIABAQIAAAQIAABUIgTAAIAAiPIAcAAIApB5IAoh5IAcAAIAACPg");
	this.shape_609.setTransform(218.7,155.075);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#663300").s().p("AgxAwQgHgPAAgaIAAhQIAUAAIAABYQAAAQAGAKQAJAQAUAAQAYAAAJgRQAFgKAAgPIAAhYIAUAAIAABQQAAAagHAPQgOAagkAAQgjAAgOgag");
	this.shape_610.setTransform(203.275,155.275);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#663300").s().p("AAlBIIAAhDIhIAAIAABDIgVAAIAAiPIAVAAIAAA8IBIAAIAAg8IAUAAIAACPg");
	this.shape_611.setTransform(188.75,155.075);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#663300").s().p("Ag6BIIAAiPIA6AAQAcAAARAVQANATAAAeQABAWgJASQgPAhgjAAgAgmA3IAiAAQAJAAAGgCQALgEAHgLQAGgIACgOIABgPQABgagKgOQgLgPgWAAIgiAAg");
	this.shape_612.setTransform(169.05,155.075);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#663300").s().p("Ag0BIIAAiPIBnAAIAAASIhUAAIAAArIBOAAIAAAQIhOAAIAAAxIBWAAIAAARg");
	this.shape_613.setTransform(155.275,155.075);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#663300").s().p("AgJBIIg1iPIAWAAIAoB5IAph5IAWAAIg1CPg");
	this.shape_614.setTransform(141.775,155.075);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#663300").s().p("AgtBIIAAiPIAUAAIAAB+IBHAAIAAARg");
	this.shape_615.setTransform(131.475,155.075);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#663300").s().p("Ag0A2QgRgVAAggQAAgcAPgVQASgbAkAAQAlAAATAZQAOATAAAeQAAAfgQAVQgUAZgiAAQghAAgTgWgAgjgqQgOAPAAAdQAAAYAMAQQAMARAaAAQAaAAAMgTQALgSAAgXQAAgZgNgQQgNgPgXAAQgWAAgOAPg");
	this.shape_616.setTransform(117.625,155.075);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#663300").s().p("AgJBIIg1iPIAWAAIAoB5IAph5IAWAAIg1CPg");
	this.shape_617.setTransform(103.325,155.075);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#663300").s().p("Ag0BIIAAiPIBnAAIAAASIhUAAIAAArIBOAAIAAAQIhOAAIAAAxIBWAAIAAARg");
	this.shape_618.setTransform(90.225,155.075);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#663300").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape_619.setTransform(74.875,161.175);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#663300").s().p("AggA6QgPgQAAgjQAAgZAHgSQAMgjAfAAQAYAAAIANQAKALAAANIgRAAQgCgIgEgEQgGgKgMABQgPAAgIANQgJANgBAaQAGgIAKgFQAIgEAJAAQASAAANALQANAKAAAXQAAASgNAQQgMAOgXAAQgSAAgOgOgAgSACQgJAIAAAPQAAAOAIAIQAIAJANAAQANABAHgKQAIgJAAgNQgBgLgGgJQgGgJgQAAQgKAAgJAGg");
	this.shape_620.setTransform(66.6,155.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587}]},105).wait(88));

	// Leaf_Stand
	this.instance_4 = new lib.LeafStand();
	this.instance_4.setTransform(-61,216,0.1428,0.1428);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105).to({_off:false},0).wait(88));

	// Plain_Box
	this.instance_5 = new lib.Tween30("synched",0);
	this.instance_5.setTransform(546.65,313.55,1.0711,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).wait(69));

	// Plain_Back
	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#E5E0D8").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_621.setTransform(399.025,300.025);
	this.shape_621._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_621).wait(105).to({_off:false},0).wait(88));

	// Arrow
	this.Arrow_btn = new lib.Arrow();
	this.Arrow_btn.name = "Arrow_btn";
	this.Arrow_btn.setTransform(553.5,382.05,1,1,0,0,0,9.5,14);
	this.Arrow_btn._off = true;
	new cjs.ButtonHelper(this.Arrow_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Arrow_btn).wait(79).to({_off:false},0).to({_off:true},26).wait(88));

	// Definition
	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_622.setTransform(540.975,322.825);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_623.setTransform(533.975,319.975);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAbAAIAAASQAEgLAHgEQAGgEAOAAIADAAIAAAPIgDAAQgNAAgGAEQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_624.setTransform(526.05,319.9);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_625.setTransform(518.025,320.025);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgOIALAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQABAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgEgFg");
	this.shape_626.setTransform(510.85,318.75);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_627.setTransform(504.275,319.925);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJAAgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_628.setTransform(495.025,319.9);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_629.setTransform(484.525,318.175);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgLgWQgGAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_630.setTransform(476.9,319.975);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgOIALAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQABAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgEgFg");
	this.shape_631.setTransform(465.85,318.75);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJAAgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_632.setTransform(458.725,319.9);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_633.setTransform(449.325,319.975);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgDQgCgCgFAAQgEABgGACQgFADgGAEIAAApIANAAIAAANIgbAAIAAgxQAAgIgDgEQgCgDgFAAQgIAAgOAKIAAApIAOAAIAAANIgrAAIAAgNIAOAAIAAgyIgNAAIAAgNIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAFQAFAGAAALIAAAqIAOAAIAAANg");
	this.shape_634.setTransform(437.725,319.9);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_635.setTransform(425.975,319.975);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_636.setTransform(416.475,321.725);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_637.setTransform(407.075,319.925);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_638.setTransform(397.625,321.725);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJAAgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_639.setTransform(387.675,319.9);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_640.setTransform(378.275,319.975);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_641.setTransform(364.975,319.975);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_642.setTransform(355.775,320.025);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#663300").s().p("AgeAnIAAgNIAPAAIAAgyIgPAAIAAgNIAbAAIAAASQAEgLAHgEQAHgEANAAIADAAIAAAPIgDAAQgNAAgGAEQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_643.setTransform(347.7,319.9);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAJgBIAAAOIgLACQgJAAgFgFg");
	this.shape_644.setTransform(341.85,318.75);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_645.setTransform(330.725,319.975);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAgBAXIAAAqIAOAAIAAANg");
	this.shape_646.setTransform(321.4,318.275);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgFgFg");
	this.shape_647.setTransform(314.3,318.75);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_648.setTransform(639.675,302.975);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAOgOIAAAZIANAAIAAAOIgNAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_649.setTransform(632.65,301.75);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_650.setTransform(626.075,302.925);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAPIgEAAQgMABgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_651.setTransform(618.2,302.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAPgOIAAAZIAOAAIAAAOIgOAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgMACQgIAAgEgFg");
	this.shape_652.setTransform(612.35,301.75);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_653.setTransform(606.2,302.975);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_654.setTransform(597.725,302.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_655.setTransform(588.35,302.975);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgDQgCgCgFAAQgEABgGACQgFACgGAFIAAApIANAAIAAANIgbAAIAAgxQAAgIgDgDQgCgEgFAAQgIABgOAJIAAApIAOAAIAAANIgrAAIAAgNIAOAAIAAgyIgNAAIAAgNIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAFQAFAGAAALIAAAqIAOAAIAAANg");
	this.shape_656.setTransform(576.775,302.9);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_657.setTransform(565.025,302.975);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#663300").s().p("AgcAyQgJgEgEgJQgFgKAAgKQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFADQAHAEAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgGQADgGAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_658.setTransform(555.525,301.35);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgFgFg");
	this.shape_659.setTransform(543.8,301.75);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_660.setTransform(537.225,302.925);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAgBAXIAAAqIAOAAIAAANg");
	this.shape_661.setTransform(527.95,301.275);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgFgFg");
	this.shape_662.setTransform(520.85,301.75);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgGAAgEACQgEADgBAEQABAEADACQACACAKACIAKACQAXAEAAARQAAALgIAGQgJAHgNAAQgFAAgFgCg");
	this.shape_663.setTransform(510.65,302.975);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_664.setTransform(502.225,302.975);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgFgFg");
	this.shape_665.setTransform(495.2,301.75);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_666.setTransform(488.175,303.025);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAAMIgcAAIAAgOIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgNAQgBQAKABAJAFQAIAFAFAJQAFAIAAALQAAALgFAKQgFAJgIAFQgJAGgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAHADAFQADAGAGAEQAFAEAGAAQAIgBAFgEQAGgEADgFQADgHAAgHQAAgHgDgGQgDgFgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_667.setTransform(478.175,301.35);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#663300").s().p("AgTA4IAAgNIAMAAIAAgyIgMAAIAAgNIAbAAIAAA/IALAAIAAANgAgFgnQgEgDAAgEQAAgEAEgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgCgDg");
	this.shape_668.setTransform(470.95,301.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#663300").s().p("AgeAnIAAgNIAPAAIAAgyIgPAAIAAgNIAcAAIAAASQADgLAHgEQAHgEAMAAIAEAAIAAAPIgEAAQgMABgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_669.setTransform(465.35,302.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAOgOIAAAZIANAAIAAAOIgNAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_670.setTransform(459.5,301.75);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgJAAIAAgOIAJAAIAAgLIAPgOIAAAZIANAAIAAAOIgNAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgLACQgIAAgEgFg");
	this.shape_671.setTransform(454.65,301.75);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_672.setTransform(448.075,302.925);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIANAAIAAANg");
	this.shape_673.setTransform(434.75,301.275);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_674.setTransform(425.175,304.725);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_675.setTransform(415.325,303.025);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAIgFALAAQALAAAKAGQAJAFAGAKQAEAJABAKQAAALgGAJQgFAKgKAFQgJAGgLAAQgLAAgIgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgGAAgFADg");
	this.shape_676.setTransform(405.95,302.975);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAPIgEAAQgMABgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_677.setTransform(398.05,302.9);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#663300").s().p("AARA3IAAgyQAAgHgDgEQgCgDgGAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAgBAXIAAAqIAOAAIAAANg");
	this.shape_678.setTransform(389.9,301.275);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAOAAIAAAOIgOAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_679.setTransform(382.8,301.75);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEADACQADACAJACIAKACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_680.setTransform(372.6,302.975);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_681.setTransform(363.575,304.625);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgnQgCgDAAgEQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgDgDg");
	this.shape_682.setTransform(356.45,301.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgEAAQgIAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_683.setTransform(349.45,301.275);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgLgCgGgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIANAAIAAAaIgNAAIAAgFQgHgJgKAAQgGAAgFACQgDADAAAEQAAAEACACQAEACAKACIAJACQAWAEAAARQAAALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_684.setTransform(341.05,302.975);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_685.setTransform(332.575,302.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_686.setTransform(323.2,302.975);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#663300").s().p("AgTA4IAAgNIANAAIAAgyIgNAAIAAgNIAbAAIAAA/IAMAAIAAANgAgFgnQgDgDgBgEQABgEADgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgCgDg");
	this.shape_687.setTransform(316.35,301.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAPgOIAAAZIANAAIAAAOIgNAAIAAAnQgBAHACABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAHgBIAAAOIgLACQgIAAgEgFg");
	this.shape_688.setTransform(311.65,301.75);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_689.setTransform(305.075,302.925);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_690.setTransform(298.025,301.275);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_691.setTransform(291.075,302.975);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAbAAIAAASQAEgLAHgEQAGgEAOAAIADAAIAAAPIgDAAQgNABgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_692.setTransform(283.15,302.9);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#663300").s().p("AAGAnIAAgOIAJAAIgPgSIgOASIAKAAIAAAOIglAAIAAgOIALAAIAYgZIgXgYIgKAAIAAgOIAkAAIAAAOIgJAAIAMAPIAOgPIgIAAIAAgOIAkAAIAAAOIgMAAIgVAXIAYAaIAJAAIAAAOg");
	this.shape_693.setTransform(271.25,302.95);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_694.setTransform(262.175,302.975);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_695.setTransform(255.075,301.275);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_696.setTransform(247.525,304.625);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgDQgCgCgFAAQgEABgGACQgFACgGAFIAAApIANAAIAAANIgbAAIAAgxQAAgIgDgDQgCgEgFAAQgIABgOAJIAAApIAOAAIAAANIgrAAIAAgNIAOAAIAAgyIgNAAIAAgNIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAFQAFAGAAALIAAAqIAOAAIAAANg");
	this.shape_697.setTransform(235.675,302.9);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJAAgLQAAgLAGgJQAFgJAKgGQAIgFALAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgKAFQgJAGgLAAQgLAAgIgGgAgMgWQgFAEgDAGQgDAGgBAGQABAHADAGQADAGAGADQAFAEAGAAQAHAAAFgEQAGgDADgGQADgGABgHQgBgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_698.setTransform(223.95,302.975);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_699.setTransform(215.225,302.975);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_700.setTransform(638.475,287.725);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAmIANAAIAAANg");
	this.shape_701.setTransform(628.525,285.9);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgnQgDgDAAgEQAAgDADgEQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_702.setTransform(621.5,284.2);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAJgCIAAAOIgLACQgJAAgFgFg");
	this.shape_703.setTransform(616.8,284.75);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_704.setTransform(610.225,285.925);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_705.setTransform(601.025,285.975);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAbAAIAAASQAEgLAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_706.setTransform(593.1,285.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_707.setTransform(585.525,285.975);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgOIALAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQABAHABABQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_708.setTransform(574.75,284.75);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_709.setTransform(567.725,286.025);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAAMIgcAAIAAgOIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgNAQgBQAKABAJAFQAIAFAFAJQAFAIAAALQAAALgFAKQgFAJgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAGADAGQADAHAGADQAFAEAGAAQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_710.setTransform(557.725,284.35);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_711.setTransform(544.075,285.975);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_712.setTransform(535.325,285.975);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_713.setTransform(526.875,285.925);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_714.setTransform(517.075,287.625);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgEACQgEADAAAEQAAAEADACQADACAJACIAKACQAXAEAAARQAAALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_715.setTransform(508.5,285.975);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAmIANAAIAAANg");
	this.shape_716.setTransform(495.975,285.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#663300").s().p("AgTA4IAAgNIAMAAIAAgyIgMAAIAAgNIAbAAIAAA/IALAAIAAANgAgFgnQgEgDAAgEQAAgDAEgEQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_717.setTransform(488.95,284.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_718.setTransform(477.975,285.975);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_719.setTransform(470.05,285.9);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_720.setTransform(462.025,286.025);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAPgOIAAAZIAOAAIAAAOIgOAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_721.setTransform(454.85,284.75);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_722.setTransform(448.275,285.925);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAmIANAAIAAANg");
	this.shape_723.setTransform(439.025,285.9);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_724.setTransform(425.325,287.725);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAmIANAAIAAANg");
	this.shape_725.setTransform(415.375,285.9);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#663300").s().p("AgSA4IAAgNIAMAAIAAgyIgMAAIAAgNIAaAAIAAA/IAMAAIAAANgAgFgnQgDgDAAgEQAAgDADgEQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_726.setTransform(408.35,284.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_727.setTransform(402.35,285.975);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAFADQAGAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgLgCgGgFQgFgFgBgJQABgHAEgFQADgGAHgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEACACQADACALACIAJACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_728.setTransform(394.85,285.975);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_729.setTransform(386.425,285.975);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#663300").s().p("AgeAnIAAgNIAPAAIAAgyIgPAAIAAgNIAcAAIAAASQADgLAHgEQAHgEAMAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_730.setTransform(378.5,285.9);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#663300").s().p("AgcAzQgJgFgEgKQgFgIAAgLQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFAEQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAHAGADQAGAEAGAAQAGAAAGgFQAGgDADgHQADgFAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_731.setTransform(370.175,284.35);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#663300").s().p("AgcAzQgJgFgEgKQgFgIAAgLQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFAEQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAHAGADQAGAEAGAAQAGAAAGgFQAGgDADgHQADgFAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_732.setTransform(360.025,284.35);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_733.setTransform(350.625,285.925);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#663300").s().p("AgeA4IAAgNIAQAAIAJgXIgZg9IgNAAIAAgOIAmAAIAAAOIgJAAIAQAqIAQgqIgKAAIAAgOIAkAAIAAAOIgLAAIglBhg");
	this.shape_734.setTransform(337.325,287.675);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_735.setTransform(330.175,284.275);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_736.setTransform(322.625,287.625);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgDgFAAQgEAAgGADQgFACgGAFIAAApIANAAIAAANIgbAAIAAgxQAAgIgDgDQgCgEgFAAQgIABgOAJIAAApIAOAAIAAANIgrAAIAAgNIAOAAIAAgyIgNAAIAAgNIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAFQAFAGAAALIAAAqIAOAAIAAANg");
	this.shape_737.setTransform(310.775,285.9);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#663300").s().p("AgTA4IAAgNIANAAIAAgyIgNAAIAAgNIAbAAIAAA/IAMAAIAAANgAgFgnQgEgDAAgEQAAgDAEgEQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_738.setTransform(301.4,284.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAFADQAGAEAFAAQAIAAAEgDQAEgCAAgGQAAgDgEgCIgMgEIgIgCQgLgCgGgFQgFgFgBgJQABgHAEgFQADgGAHgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgGAAgEACQgDADAAAEQAAAEACACQADACALACIAJACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_739.setTransform(295.4,285.975);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAmIANAAIAAANg");
	this.shape_740.setTransform(282.875,285.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_741.setTransform(273.975,285.925);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAgBAXIAAAqIAOAAIAAANg");
	this.shape_742.setTransform(264.7,284.275);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAJgCIAAAOIgLACQgJAAgFgFg");
	this.shape_743.setTransform(257.6,284.75);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_744.setTransform(246.475,285.975);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#663300").s().p("AgeAnIAAgNIAPAAIAAgyIgPAAIAAgNIAcAAIAAASQADgLAHgEQAHgEAMAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_745.setTransform(238.55,285.9);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_746.setTransform(230.5,285.975);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgDgFAAQgEAAgGADQgFACgGAFIAAApIANAAIAAANIgbAAIAAgxQAAgIgDgDQgCgEgFAAQgIABgOAJIAAApIAOAAIAAANIgrAAIAAgNIAOAAIAAgyIgNAAIAAgNIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAFQAFAGAAALIAAAqIAOAAIAAANg");
	this.shape_747.setTransform(218.925,285.9);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEADACQADACAJACIAKACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_748.setTransform(651.15,268.975);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#663300").s().p("AgTA4IAAgOIAMAAIAAgwIgMAAIAAgOIAbAAIAAA+IALAAIAAAOgAgFgnQgEgDAAgEQAAgEAEgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_749.setTransform(645.1,267.2);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAoQAAAFABACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgKACQgJAAgFgFg");
	this.shape_750.setTransform(636.35,267.75);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#663300").s().p("AgTA3IAAgOIAMAAIAAhRIgMAAIAAgOIAnAAIAAAOIgMAAIAABRIAMAAIAAAOg");
	this.shape_751.setTransform(631.425,267.275);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_752.setTransform(622.525,271.825);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABACQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_753.setTransform(617.75,267.75);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_754.setTransform(610.625,268.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_755.setTransform(601.225,268.975);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgDgFAAQgEAAgGADQgFACgGAGIAAAnIANAAIAAAOIgbAAIAAgxQAAgIgDgDQgCgDgFgBQgIAAgOALIAAAnIAOAAIAAAOIgrAAIAAgOIAOAAIAAgwIgNAAIAAgOIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAGQAFAFAAALIAAApIAOAAIAAAOg");
	this.shape_756.setTransform(589.625,268.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_757.setTransform(577.825,268.9);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_758.setTransform(568.45,268.975);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgwIgPAAIAAgOIAbAAIAAASQAEgLAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_759.setTransform(560.55,268.9);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgDgDgBgEQABgEADgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_760.setTransform(554.85,267.2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_761.setTransform(547.925,269.025);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_762.setTransform(538.575,268.9);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_763.setTransform(529.175,268.975);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgJAAIAAgNIAJAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAoQgBAFACACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgLACQgIAAgEgFg");
	this.shape_764.setTransform(518.1,267.75);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_765.setTransform(513.175,267.275);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgDgDAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_766.setTransform(508.6,267.2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_767.setTransform(501.725,269.025);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAALIgcAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgOAQAAQAKAAAJAGQAIAFAFAKQAFAHAAALQAAALgFAJQgFAKgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAGADAGQADAHAGADQAFADAGABQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_768.setTransform(491.725,267.35);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_769.setTransform(478.075,268.975);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#663300").s().p("AARA3IAAgyQAAgHgDgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAcAAIAAAqQAPgLAKAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_770.setTransform(468.75,267.275);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAoQAAAFABACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgKACQgJAAgFgFg");
	this.shape_771.setTransform(461.65,267.75);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_772.setTransform(450.475,268.9);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#663300").s().p("AgSA4IAAgOIAMAAIAAgwIgMAAIAAgOIAaAAIAAA+IAMAAIAAAOgAgFgnQgDgDAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_773.setTransform(443.45,267.2);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgqAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAqQAOgLALAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_774.setTransform(436.45,267.275);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAoQAAAFABACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgKACQgJAAgFgFg");
	this.shape_775.setTransform(429.35,267.75);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#663300").s().p("AgSA4IAAgOIAMAAIAAgwIgMAAIAAgOIAaAAIAAA+IAMAAIAAAOgAgGgnQgCgDAAgEQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_776.setTransform(424.65,267.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_777.setTransform(415.875,269.025);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_778.setTransform(400.675,268.975);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_779.setTransform(391.925,268.975);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_780.setTransform(382.925,268.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_781.setTransform(373.525,268.975);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgEgDAAgEQAAgEAEgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_782.setTransform(366.65,267.2);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgwIgPAAIAAgOIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_783.setTransform(361.05,268.9);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_784.setTransform(352.975,268.975);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_785.setTransform(343.125,270.625);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#663300").s().p("AAGAmIAAgNIAKAAIgQgRIgOARIAKAAIAAANIglAAIAAgNIALAAIAXgZIgVgYIgLAAIAAgNIAkAAIAAANIgKAAIANAPIANgPIgHAAIAAgNIAkAAIAAANIgNAAIgUAXIAZAaIAIAAIAAANg");
	this.shape_786.setTransform(333.85,268.95);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_787.setTransform(324.775,268.975);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgwIgPAAIAAgOIAcAAIAAASQADgLAHgEQAHgEAMAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_788.setTransform(312.8,268.9);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_789.setTransform(305.225,268.925);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_790.setTransform(298.175,267.275);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#663300").s().p("AgSA4IAAgOIAMAAIAAgwIgMAAIAAgOIAaAAIAAA+IAMAAIAAAOgAgFgnQgDgDAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_791.setTransform(293.6,267.2);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgDgFAAQgEAAgGADQgFACgGAGIAAAnIANAAIAAAOIgbAAIAAgxQAAgIgDgDQgCgDgFgBQgIAAgOALIAAAnIAOAAIAAAOIgrAAIAAgOIAOAAIAAgwIgNAAIAAgOIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAGQAFAFAAALIAAApIAOAAIAAAOg");
	this.shape_792.setTransform(284.325,268.9);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgDgDgBgEQABgEADgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_793.setTransform(274.95,267.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEACACQADACALACIAJACQAWAEAAARQAAALgIAGQgIAHgNAAQgFAAgFgCg");
	this.shape_794.setTransform(268.95,268.975);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_795.setTransform(256.975,268.925);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAoQgBAFACACQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAHgCIAAAOIgLACQgIAAgEgFg");
	this.shape_796.setTransform(245.95,267.75);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_797.setTransform(239.375,268.975);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_798.setTransform(230.425,268.975);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_799.setTransform(223.325,267.275);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_800.setTransform(219.325,267.175);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_801.setTransform(211.675,268.975);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_802.setTransform(203.75,268.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#663300").s().p("AgcAzQgJgGgEgJQgFgIAAgLQAAgMAFgIQAFgJAJgGQAJgGAKAAQAIABAFADQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAANIgdAAIAAgLQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAHAGADQAGADAGABQAGAAAGgFQAGgDADgHQADgGAAgGQAAgIgDgGQgDgFgGgDQgGgDgGAAQgHAAgFADg");
	this.shape_803.setTransform(659.675,250.35);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_804.setTransform(649.725,251.9);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_805.setTransform(640.825,251.925);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_806.setTransform(627.575,251.975);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_807.setTransform(619.65,251.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_808.setTransform(611.625,252.025);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgNIALAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABADQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_809.setTransform(604.45,250.75);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_810.setTransform(597.875,251.925);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_811.setTransform(588.625,251.9);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgCgDgGAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_812.setTransform(575.1,250.275);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgNIALAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABADQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_813.setTransform(568,250.75);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgEgDAAgEQAAgDAEgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_814.setTransform(563.3,250.2);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_815.setTransform(554.525,252.025);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_816.setTransform(538.725,253.625);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgnQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADACAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_817.setTransform(531.6,250.2);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAOAAIAAhTIgOAAIAAgNIAeAAIAAAqQAOgLAKAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_818.setTransform(524.6,250.275);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_819.setTransform(516.2,251.975);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_820.setTransform(507.725,251.9);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_821.setTransform(498.35,251.975);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgDgDAAgEQAAgDADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_822.setTransform(491.5,250.2);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAPgOIAAAaIAOAAIAAANIgOAAIAAAoQAAAFABADQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_823.setTransform(486.8,250.75);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_824.setTransform(480.225,251.925);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_825.setTransform(473.175,250.275);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_826.setTransform(466.225,251.975);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_827.setTransform(458.3,251.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_828.setTransform(447.5,251.9);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_829.setTransform(439.475,252.025);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgLgWQgGAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_830.setTransform(430.1,251.975);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_831.setTransform(416.825,251.975);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_832.setTransform(407.575,252.025);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_833.setTransform(400.425,250.275);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAFAEAGAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_834.setTransform(393.5,251.975);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_835.setTransform(384.275,252.025);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_836.setTransform(374.975,251.975);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_837.setTransform(361.625,251.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_838.setTransform(352.725,251.925);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_839.setTransform(344.025,251.975);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_840.setTransform(331.025,251.975);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_841.setTransform(319.925,252.025);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_842.setTransform(302.875,252.025);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAJgFAKAAQAMAAAJAGQAJAFAFAKQAFAJABAKQAAALgGAJQgFAKgKAFQgIAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQADgGAAgHQAAgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_843.setTransform(291.75,251.975);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#663300").s().p("AARA3IAAgyQAAgHgDgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAcAAIAAAqQAPgLAKAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_844.setTransform(282.45,250.275);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_845.setTransform(269.025,251.9);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgKAGgLAAQgKAAgKgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_846.setTransform(259.65,251.975);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACAKACIAKACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_847.setTransform(247.3,251.975);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_848.setTransform(238.875,251.975);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACALACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_849.setTransform(230.55,251.975);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_850.setTransform(222.175,252.025);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_851.setTransform(213.275,251.975);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAIgFALAAQALAAAKAGQAJAFAGAKQAEAJABAKQAAALgGAJQgFAKgKAFQgJAGgLAAQgLAAgIgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgGAAgFADg");
	this.shape_852.setTransform(204.35,251.975);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#663300").s().p("AgqA3IAAgOIAOAAIAAhRIgOAAIAAgOIBVAAIAAAgIgOAAIAAgSIgoAAIAAAgIAiAAIAAANIgiAAIAAAkIANAAIAAAOg");
	this.shape_853.setTransform(195.15,250.275);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#E5D8C4").s().p("EggkAJTQjIAAAAjIIAAsVQAAjIDIAAMBBWAAAQC7AHAADBIAAMVQAADCi7AGg");
	this.shape_854.setTransform(430.5,295.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622}]},70).to({state:[]},35).wait(88));

	// Title_Text
	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#663300").s().p("AgzBNQgSgQAAgeIAXAAQABAQAGAKQAMARAcAAQANAAALgEQAVgHAAgUQAAgPgJgFQgJgGgTgFIgWgGQgYgFgJgFQgRgMAAgWQAAgZARgPQAQgPAeAAQAaAAATAOQATANAAAeIgWAAQgCgPgGgHQgLgPgYAAQgVABgJAIQgJAKAAAMQAAANALAGQAHAEAYAGIAYAGQASAEAJAGQARAMAAAZQAAAdgVANQgVANgcAAQgggBgTgRg");
	this.shape_855.setTransform(582.7243,145.35);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#663300").s().p("AhBBaIAAizIBPAAQAXAAAPAOQAOANABAZQAAAVgOAPQgMAPgbAAIg4AAIAABMgAgqgGIAwAAQAQAAAKgHQAKgGAAgSQAAgUgPgHQgHgEgOAAIgwAAg");
	this.shape_856.setTransform(566.7,145.325);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#663300").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_857.setTransform(554.675,145.325);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#663300").s().p("AAuBaIAAhUIhbAAIAABUIgZAAIAAizIAZAAIAABLIBbAAIAAhLIAZAAIAACzg");
	this.shape_858.setTransform(541.975,145.325);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#663300").s().p("AgzBNQgSgQAAgeIAXAAQABAQAGAKQAMARAcAAQANAAALgEQAVgHAAgUQAAgPgJgFQgJgGgTgFIgWgGQgYgFgJgFQgRgMAAgWQAAgZARgPQAQgPAeAAQAaAAATAOQATANAAAeIgWAAQgCgPgGgHQgLgPgYAAQgVABgJAIQgJAKAAAMQAAANALAGQAHAEAYAGIAYAGQASAEAJAGQARAMAAAZQAAAdgVANQgVANgcAAQgggBgTgRg");
	this.shape_859.setTransform(524.4743,145.35);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#663300").s().p("AArBaIhaiQIAACQIgXAAIAAizIAdAAIBYCQIAAiQIAYAAIAACzg");
	this.shape_860.setTransform(507.225,145.325);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#663300").s().p("AhBBEQgVgbAAgoQAAgkASgZQAXgiAtABQAvAAAWAeQASAXAAAlQAAAogUAbQgYAegrABQgqAAgXgbgAgsg1QgRATAAAlQAAAdAPAUQAPAVAhAAQAgAAAOgXQAOgXAAgdQAAgggQgTQgRgTgcAAQgbAAgSATg");
	this.shape_861.setTransform(488.575,145.35);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#663300").s().p("AgLBaIAAizIAXAAIAACzg");
	this.shape_862.setTransform(475.625,145.325);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#663300").s().p("AgLBaIAAidIg9AAIAAgWICRAAIAAAWIg9AAIAACdg");
	this.shape_863.setTransform(464.375,145.325);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#663300").s().p("AA1BaIgSg2IhGAAIgTA2IgZAAIBEizIAaAAIBBCzgAAbAQIgbhOIgcBOIA3AAg");
	this.shape_864.setTransform(450.25,145.325);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#663300").s().p("Ag4BaIAAizIAYAAIAACdIBZAAIAAAWg");
	this.shape_865.setTransform(435.625,145.325);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#663300").s().p("AhBBaIAAizICBAAIAAAWIhpAAIAAA3IBhAAIAAAUIhhAAIAAA8IBrAAIAAAWg");
	this.shape_866.setTransform(420.1,145.325);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#663300").s().p("AArBaIgCgGIgBgOIgBgeQgBgSgMgGQgHgDgOAAIg1AAIAABNIgYAAIAAizIBQAAQAUAAANAGQAZAMAAAfQAAAQgGAKQgHAKgMAGQAKAEAGAHQAFAHABAPIABAYQAAALABAFQACAIAGADIAAAEgAgwgGIA2AAQAQAAAKgHQAKgHAAgSQAAgTgOgHQgHgEgMAAIg5AAg");
	this.shape_867.setTransform(402.825,145.325);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#663300").s().p("AhBBaIAAizICBAAIAAAWIhqAAIAAA3IBiAAIAAAUIhiAAIAAA8IBsAAIAAAWg");
	this.shape_868.setTransform(378.5,145.325);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#663300").s().p("AArBaIgCgGIgBgOIgBgeQgBgSgMgGQgHgDgOAAIg1AAIAABNIgYAAIAAizIBQAAQAUAAANAGQAZAMAAAfQAAAQgGAKQgHAKgMAGQAKAEAGAHQAFAHABAPIABAYQAAALABAFQACAIAGADIAAAEgAgwgGIA2AAQAQAAAKgHQAKgHAAgSQAAgTgOgHQgHgEgMAAIg5AAg");
	this.shape_869.setTransform(361.225,145.325);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#663300").s().p("Ag9A8QgJgSAAghIAAhkIAZAAIAABuQAAATAHANQALAUAaAAQAeAAALgVQAGgMAAgTIAAhuIAZAAIAABkQAAAhgJASQgRAggtAAQgtAAgQggg");
	this.shape_870.setTransform(342.825,145.575);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#663300").s().p("AgLBaIAAidIg9AAIAAgWICRAAIAAAWIg9AAIAACdg");
	this.shape_871.setTransform(326.075,145.325);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#663300").s().p("AA2BaIgSg2IhGAAIgUA2IgZAAIBDizIAbAAIBBCzgAAcAQIgbhOIgdBOIA4AAg");
	this.shape_872.setTransform(311.95,145.325);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#663300").s().p("AArBaIhaiQIAACQIgXAAIAAizIAdAAIBYCQIAAiQIAYAAIAACzg");
	this.shape_873.setTransform(294.525,145.325);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#663300").s().p("AgdALIAAgVIA8AAIAAAVg");
	this.shape_874.setTransform(559.5,120.325);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#663300").s().p("AArBaIhaiQIAACQIgXAAIAAizIAdAAIBYCQIAAiQIAYAAIAACzg");
	this.shape_875.setTransform(546.325,118.325);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#663300").s().p("AA2BaIgSg2IhGAAIgUA2IgZAAIBDizIAbAAIBBCzgAAcAQIgbhOIgcBOIA3AAg");
	this.shape_876.setTransform(529.05,118.325);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#663300").s().p("AA/BaIAAhpIAAgSIAAgbIgzCWIgXAAIg0iWIAAAFIABAUIAAAUIAABpIgXAAIAAizIAiAAIAzCXIA0iXIAiAAIAACzg");
	this.shape_877.setTransform(510.35,118.325);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#663300").s().p("Ag9A8QgJgSAAghIAAhkIAZAAIAABuQAAATAHANQALAUAaAAQAeAAALgVQAGgMAAgTIAAhuIAZAAIAABkQAAAhgJASQgRAggtAAQgtAAgQggg");
	this.shape_878.setTransform(491.025,118.575);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#663300").s().p("AAuBaIAAhUIhbAAIAABUIgZAAIAAizIAZAAIAABLIBbAAIAAhLIAZAAIAACzg");
	this.shape_879.setTransform(472.825,118.325);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#663300").s().p("AhIBaIAAizIBIAAQAjAAAUAbQASAXAAAlQAAAcgKAXQgTApgtAAgAgwBFIArAAQALAAAIgDQANgEAJgOQAHgLADgRQACgKAAgJQAAgggNgSQgNgTgbAAIgrAAg");
	this.shape_880.setTransform(448.175,118.325);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#663300").s().p("AhBBaIAAizICBAAIAAAWIhqAAIAAA3IBiAAIAAAUIhiAAIAAA8IBsAAIAAAWg");
	this.shape_881.setTransform(430.95,118.325);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#663300").s().p("AgMBaIhBizIAbAAIAyCYIAziYIAbAAIhBCzg");
	this.shape_882.setTransform(414.025,118.325);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#663300").s().p("Ag4BaIAAizIAYAAIAACdIBZAAIAAAWg");
	this.shape_883.setTransform(401.125,118.325);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#663300").s().p("AhBBEQgVgbAAgoQAAgkASgZQAXgiAtABQAvAAAWAeQASAYAAAkQAAAogUAbQgYAfgrAAQgqAAgXgbgAgsg1QgRATAAAlQAAAdAPAUQAPAVAhAAQAgAAAOgXQAOgXAAgdQAAgggQgTQgRgTgcAAQgbAAgSATg");
	this.shape_884.setTransform(383.825,118.35);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#663300").s().p("AgMBaIhBizIAbAAIAyCYIAziYIAbAAIhBCzg");
	this.shape_885.setTransform(365.925,118.325);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#663300").s().p("AhBBaIAAizICBAAIAAAWIhpAAIAAA3IBhAAIAAAUIhhAAIAAA8IBrAAIAAAWg");
	this.shape_886.setTransform(349.55,118.325);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#663300").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_887.setTransform(330.425,125.975);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#663300").s().p("AgpBIQgSgTAAgsQAAggAIgWQAPgsAnAAQAeAAAMAPQALAPAAAQIgWAAQgBgKgFgGQgIgLgQAAQgRABgLARQgLARgCAfQAIgLAMgFQAKgGAMABQAWAAAQAOQARANAAAbQAAAZgPASQgQASgdAAQgYAAgRgSgAgXADQgKAJAAATQAAARAJAMQAKAKAQABQASAAAIgMQAJgMAAgQQAAgNgIgMQgIgMgUAAQgNAAgLAJg");
	this.shape_888.setTransform(320.05,118.75);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#E5D8C4").s().p("A7fHHQjIAAAAjIIAAn9QAAjIDIAAMA2/AAAQDIAAAADIIAAH9QAADIjIAAg");
	this.shape_889.setTransform(440.375,138.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855}]},59).to({state:[]},46).wait(88));

	// Happy_Leaf
	this.instance_6 = new lib.LeafPull();
	this.instance_6.setTransform(153,401,0.0852,0.0852);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({_off:true},57).wait(88));

	// Tree_Back
	this.instance_7 = new lib._3033();
	this.instance_7.setTransform(-517,0,0.2475,0.2475);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).to({_off:true},57).wait(88));

	// Arrow1
	this.button_1 = new lib.Arrow();
	this.button_1.name = "button_1";
	this.button_1.setTransform(725.5,357.05);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(18).to({_off:false},0).to({_off:true},30).wait(145));

	// Dark_Text
	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_890.setTransform(731.8,318.45);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_891.setTransform(725.5,318.45);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_892.setTransform(719.2,318.45);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#000000").s().p("AgyA+IANgOQAHAFAIADQAHACAIAAQAOAAAJgJQAIgKAAgPIAAgKQgGAIgKAEQgKAFgKAAQgOAAgLgHQgMgIgGgMQgHgLAAgOQAAgOAHgNQAHgMALgIQAMgHAOAAQAKAAAIAEQAJAEAIAIIAAgPIAnAAIAAASIgTAAIAABMQAAAbgNAPQgOAOgZAAQgYAAgSgOgAgYg0QgIAFgEAIQgEAIAAAKQAAAJAEAIQAEAHAHAFQAIAFAJAAQAJAAAHgFQAIgFAEgHQAFgIAAgJQAAgJgFgIQgEgIgIgFQgHgFgJAAQgJAAgHAEg");
	this.shape_893.setTransform(709.525,316.975);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#000000").s().p("AAVA0IAAhDQAAgJgCgFQgDgEgHAAQgMAAgRANIAAA2IASAAIAAASIg4AAIAAgSIASAAIAAhBIgSAAIAAgSIAmAAIAAAMQATgOAQAAQANAAAHAJQAHAIAAASIAAAyIARAAIAAASg");
	this.shape_894.setTransform(696.275,314.55);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#000000").s().p("AgZBLIAAgSIAQAAIAAhCIgQAAIAAgSIAjAAIAABUIAQAAIAAASgAgIg1QgEgDAAgFQAAgFAEgEQADgEAFAAQAFAAADAEQADADAAAGQAAAFgDADQgEAEgEAAQgFAAgDgEg");
	this.shape_895.setTransform(686.9,312.275);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#000000").s().p("AgoA0IAAgSIAUAAIAAhBIgUAAIAAgSIAkAAIAAAWQAFgNAKgGQAJgFARAAIAEAAIAAAUIgEAAQgRAAgIAEQgIAFgCAJQgCAJAAAPIAAAXIAWAAIAAASg");
	this.shape_896.setTransform(679.325,314.55);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#000000").s().p("AgbAvQgMgHgHgNQgHgMAAgPQAAgPAHgMQAHgMAMgHQANgHAOAAQAQAAALAHQANAIAHAMQAHAMAAAOQAAAPgHAMQgHANgNAHQgMAHgPAAQgOAAgNgHgAgPgdQgIAFgFAIQgDAIAAAIQAAAJADAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAIgFAFgIQAEgIAAgJQAAgIgEgIQgFgIgIgFQgHgFgJAAQgIAAgHAFg");
	this.shape_897.setTransform(668.6,314.625);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#000000").s().p("AgIBFQgKgEgGgIIAAAQIglAAIAAgSIASAAIAAhvIgSAAIAAgSIAlAAIAAA8QAQgSAUAAQAOAAAMAIQALAGAHANQAHALAAAOQAAAPgHAMQgHAMgLAIQgMAHgOABQgLAAgJgGgAgHgIQgIAEgEAHQgEAJAAAJQAAAKAEAIQAEAIAIAEQAHAGAJgBQAJAAAIgFQAHgFAEgIQAEgJAAgJQAAgJgEgIQgFgIgGgEQgIgEgJgBQgJAAgHAGg");
	this.shape_898.setTransform(655.5,312.5);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#000000").s().p("AgaAvQgNgHgHgNQgHgMAAgPQAAgPAHgMQAHgMAMgHQANgHAOAAQAPAAANAHQAMAIAHAMQAHAMAAAOQAAAPgHAMQgHANgMAHQgNAHgPAAQgPAAgLgHgAgPgdQgIAFgFAIQgDAIgBAIQABAJADAIQAFAIAIAFQAHAFAIAAQAJAAAHgFQAIgFAFgIQADgIAAgJQAAgIgDgIQgFgIgIgFQgHgFgJAAQgIAAgHAFg");
	this.shape_899.setTransform(637.3,314.625);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#000000").s().p("AgMAyQgGgBgFgDIAAAFIgSAAIAAgjIASAAIAAAEQABAHAHAEQAHAFAIAAQAJAAAHgEQAFgDAAgHQAAgFgEgDQgFgCgMgCIgLgDQgPgDgIgHQgHgHAAgMQAAgJAGgIQAEgGAJgEQAIgDAJAAQAOAAAKAGIAAgEIASAAIAAAiIgSAAIAAgHQgJgNgOABQgIAAgFADQgGAEAAAFQAAAFAFADQADADAOACIAMADQAfAFAAAYQAAANgLAJQgLAJgSAAQgHAAgHgDg");
	this.shape_900.setTransform(626.25,314.65);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#000000").s().p("AgMAzQgGgDgFgDIAAAGIgSAAIAAgjIASAAIAAADQABAIAHAFQAHAEAIAAQAKAAAFgDQAGgEAAgHQAAgFgEgCQgFgDgMgDIgLgCQgPgDgIgGQgHgIAAgMQAAgKAGgGQAEgHAJgDQAIgEAJAAQAOAAAKAGIAAgFIASAAIAAAiIgSAAIAAgGQgJgNgOAAQgIABgFADQgGAEAAAFQAAAFAFADQAEADANACIANACQAeAGAAAYQAAAOgLAIQgLAJgSAAQgHAAgHgCg");
	this.shape_901.setTransform(735.05,292.65);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#000000").s().p("AgZBLIAAgSIAQAAIAAhCIgQAAIAAgSIAjAAIAABUIAQAAIAAASgAgIg1QgEgDAAgFQAAgFAEgEQADgEAFAAQAFAAADAEQADADABAGQgBAFgDADQgEAEgEAAQgFAAgDgEg");
	this.shape_902.setTransform(726.95,290.275);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#000000").s().p("AgaAvQgNgHgHgMQgHgMAAgQQAAgOAHgNQAHgMAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAHANAAARIhVAAQACAPAKAIQAJAJANAAQAKAAAJgEQAJgFAFgIIASAIQgIANgOAHQgNAGgQAAQgQAAgNgHgAAhgIQgDgNgJgIQgJgHgMAAQgLAAgIAHQgJAIgCANIA/AAIAAAAg");
	this.shape_903.setTransform(712.275,292.625);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#000000").s().p("AgYAvQgMgHgHgNQgGgMAAgPQAAgPAHgMQAGgMAMgHQALgHANAAQARAAAMAKIAAgHIASAAIAAAmIgSAAQgBgLgIgGQgIgGgKAAQgIAAgHAFQgHAFgEAIQgDAIAAAJQAAAPAIALQAJAKANAAQAWAAAJgUIAQAIQgOAegiAAQgOAAgMgHg");
	this.shape_904.setTransform(700.625,292.625);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#000000").s().p("AghAxQgHgEgFgIQgFgHAAgJQAAgKAFgHQAGgHAIgEQAJgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgLAAQgIAAgFADQgGADgDAGIgUgEQAHgNALgGQALgGAPAAQAUAAAKAKQAJAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgPAPgRAAQgJAAgIgFgAgZAIQgGAFAAAIQAAAHAGAFQAEAFAIAAQAOAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_905.setTransform(689.35,292.575);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#000000").s().p("AgaBJIAAgSIASAAIAAhuIgSAAIAAgRIAlAAIAAB/IAQAAIAAASg");
	this.shape_906.setTransform(679.95,290.4);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#000000").s().p("Ag9BLIAAgSIASAAIAAhwIgRAAIAAgSIAlAAIAAARQAIgJAJgEQAIgFAKAAQAPAAALAHQAMAHAGAMQAGANABAOQgBAPgGALQgHAMgLAIQgMAHgOAAQgUAAgPgQIAAApIAUAAIAAASgAgHgzQgIAFgEAIQgEAJAAAJQAAARAKAHQAKAKAPgBQAIAAAHgEQAHgFAEgIQADgIAAgKQABgJgFgIQgEgIgHgEQgIgFgJAAQgJAAgHAFg");
	this.shape_907.setTransform(669.9,294.85);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#000000").s().p("AgLAzQgIgDgEgDIAAAGIgSAAIAAgjIASAAIAAADQABAIAHAFQAHAEAIAAQAJAAAHgDQAFgEAAgHQAAgFgEgCQgFgDgMgDIgLgCQgQgDgHgGQgHgIAAgMQAAgKAFgGQAFgHAJgDQAIgEAJAAQAOAAAKAGIAAgFIARAAIAAAiIgRAAIAAgGQgJgNgOAAQgIABgGADQgEAEAAAFQAAAFAEADQADADAOACIAMACQAfAGAAAYQAAAOgLAIQgLAJgTAAQgGAAgGgCg");
	this.shape_908.setTransform(653.1,292.65);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#000000").s().p("AgZBLIAAgSIAQAAIAAhCIgQAAIAAgSIAjAAIAABUIAQAAIAAASgAgJg1QgDgDAAgFQAAgFADgEQAEgEAFAAQAEAAAEAEQADADAAAGQAAAFgDADQgEAEgEAAQgFAAgEgEg");
	this.shape_909.setTransform(645,290.275);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#000000").s().p("AAWBJIAAhCQAAgLgDgEQgEgFgGABQgLAAgSAMIAAA3IASAAIAAASIg4AAIAAgSIASAAIAAhuIgSAAIAAgRIAmAAIAAA4QATgPAOAAQAdAAAAAfIAAA3IARAAIAAASg");
	this.shape_910.setTransform(635.625,290.4);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#000000").s().p("AgdBJIAAgSIATAAIAAhtIgeAAIAAAjIgTAAIAAg1IB3AAIAAA1IgTAAIAAgjIgeAAIAABtIATAAIAAASg");
	this.shape_911.setTransform(622.775,290.4);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#E5D8C4").s().p("AqJFUQjIAAAAjIIAAkfQAFjADDAAIUTAAQAbAAAXAEQCSAWAECmIAAEfQAADIjIAAg");
	this.shape_912.setTransform(674,307.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890}]},14).to({state:[]},34).wait(145));

	// Sad_Leaf
	this.instance_8 = new lib.LeafSad();
	this.instance_8.setTransform(198,169,0.1571,0.1571);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},48).wait(145));

	// Back
	this.instance_9 = new lib._48b6ff3067494d58bdf280397bdc4875();
	this.instance_9.setTransform(-43,0,0.2027,0.2027);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},48).wait(145));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-117,300,1555.5,351.79999999999995);
// library properties:
lib.properties = {
	id: 'C890639E762F8441ACC4122CB5344331',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BENV1043_prin6_atlas_1.png", id:"BENV1043_prin6_atlas_1"},
		{src:"images/BENV1043_prin6_atlas_2.png", id:"BENV1043_prin6_atlas_2"}
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
an.compositions['C890639E762F8441ACC4122CB5344331'] = {
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