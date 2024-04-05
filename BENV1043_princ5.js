(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BENV1043_princ5_atlas_1", frames: [[0,3516,5469,4023],[0,0,6325,3514]]},
		{name:"BENV1043_princ5_atlas_2", frames: [[2050,4772,495,682],[601335492,1,-1040187284,-788529043],[0,4772,2048,2048],[0,0,3256,2384],[0,2386,3256,2384],[2547,4772,512,512],[3061,4772,512,512],[3258,0,512,512]]}
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



(lib.Alley = function() {
	this.initialize(ss["BENV1043_princ5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Biophilicarchitecture27 = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Forest = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeafHappy = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.LeafSad = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.LeafStand = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mountain = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.overpopulation = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.timeline = function() {
	this.initialize(ss["BENV1043_princ5_atlas_2"]);
	this.gotoAndStop(7);
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
(lib.BENV1043_princ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [34,89,203];
	// timeline functions:
	this.frame_34 = function() {
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
		
		this.Arrow1_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(48);
		}
	}
	this.frame_89 = function() {
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
		
		this.Arrow_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(115);
		}
	}
	this.frame_203 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(55).call(this.frame_89).wait(114).call(this.frame_203).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgXAtIAAgLIALAAIAIgSIgUgwIgKAAIAAgLIAeAAIAAALIgHAAIANAhIAMghIgIAAIAAgLIAeAAIAAALIgJAAIgeBNg");
	this.shape.setTransform(632.9,545.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_1.setTransform(627.225,542.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(623.45,542.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_3.setTransform(619.675,542.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_4.setTransform(613.975,543.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgHAHgFQAIgEAIABQAJgBAIAEQAHAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIAKAEQgEAIgIAFQgJADgJAAQgKABgHgFgAAUgFQgCgIgGgEQgFgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_5.setTransform(606.45,543.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_6.setTransform(598.875,542.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_7.setTransform(592.85,542.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_8.setTransform(779.975,528.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_9.setTransform(774.725,529.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_10.setTransform(767.3,528.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_11.setTransform(761.625,528.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgJAEgHQAEgIAIgDQAHgEAIgBQAJABAIAEQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIAKAGQgEAHgIAEQgJAEgJABQgKAAgHgFgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_12.setTransform(752.25,529.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_13.setTransform(744.875,529.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_14.setTransform(737.325,529.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_15.setTransform(731.7,528.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_16.setTransform(727.925,528.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_17.setTransform(722.225,529.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgEAJgBQAJABAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAHQgEAHgHAFQgIAFgJAAQgIAAgIgFgAgJgRQgFACgCAGQgCAEgBAFQABAFACAFQACAFAFADQAEACAFAAQAFAAAFgCQAEgDADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_18.setTransform(714.75,529.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgEAHgBQAKABAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_19.setTransform(707.775,529.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAIgEAIgBQAJABAHAEQAIAEAEAHQAEAIABAIQgBAJgEAHQgEAHgIAFQgHAFgJAAQgJAAgGgFgAgJgRQgFACgCAGQgCAEgBAFQABAFACAFQACAFAFADQAEACAFAAQAGAAAEgCQAEgDADgFQADgFAAgFQAAgFgDgEQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_20.setTransform(696.95,529.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_21.setTransform(691.325,528.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgJAEgHQAEgIAIgDQAHgEAIgBQAJABAIAEQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAFgCAEgGIAKAGQgFAHgHAEQgJAEgJABQgJAAgIgFgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_22.setTransform(681.95,529.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_23.setTransform(672.65,529.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_24.setTransform(665.15,528.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_25.setTransform(661.375,528.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_26.setTransform(653.025,529.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgJAFgHQAEgIAHgDQAIgEAIgBQAKABAHAEQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgJAEQgIAEgKABQgJAAgHgFgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_27.setTransform(646.6,529.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AgEAfIgUgyIgKAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAeAAIAAALIgKAAIgUAyg");
	this.shape_28.setTransform(639.2,529.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAIgEAIgBQAJABAHAEQAIAEAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAFgJAAQgJAAgGgFgAgJgRQgEACgDAGQgDAEAAAFQAAAFADAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgFQAAgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_29.setTransform(631.8,529.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_30.setTransform(620.675,529.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_31.setTransform(611.675,529.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663300").s().p("AgQAcQgHgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAHgEAJgBQAJABAHAEQAIAEAEAHQAEAIABAIQgBAJgEAHQgEAHgIAFQgHAFgJAAQgIAAgIgFgAgJgRQgFACgCAGQgCAEgBAFQABAFACAFQACAFAFADQAEACAFAAQAGAAAEgCQAEgDADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_32.setTransform(602.8,529.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_33.setTransform(595.225,528.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_34.setTransform(778.125,514.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAHgFQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgGAIgIAFQgIADgKAAQgIAAgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_35.setTransform(770.2,515.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAHAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_36.setTransform(763.55,515.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_37.setTransform(757.55,515.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_38.setTransform(751.225,515.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAJAAAHAEQAHAFADAHQAEAHABAJQgBAJgEAGQgDAHgHAFQgIAEgIAAQgLAAgJgJIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAGQgBAJAHAFQAFAFAJAAQAFAAAEgCQAFgEACgDQACgGAAgGQAAgFgCgFQgDgEgFgEQgEgCgGAAQgFAAgEADg");
	this.shape_39.setTransform(743.4,517);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_40.setTransform(723.85,515.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgEg");
	this.shape_41.setTransform(718.875,514.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAKAAAHADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgFIALAEQgGAIgIAFQgIADgKAAQgJAAgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_42.setTransform(713.2,515.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_43.setTransform(705.625,517.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgEg");
	this.shape_44.setTransform(686.775,514.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_45.setTransform(681.525,515.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_46.setTransform(674.1,514.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgEg");
	this.shape_47.setTransform(668.425,514.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_48.setTransform(649.875,517.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_49.setTransform(641.925,515.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_50.setTransform(636.3,514.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_51.setTransform(630.7,514.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgEg");
	this.shape_52.setTransform(625.025,514.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAEQgGAIgIAFQgIADgKAAQgIAAgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_53.setTransform(619.35,515.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgBgCgFAAQgGAAgLAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQAMgJAKAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_54.setTransform(610.05,515.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAHgGAFQgIAEgJAAQgIAAgIgEgAgJgRQgEACgDAFQgDAGABAEQgBAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQACgFAAgFQAAgEgCgGQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_55.setTransform(600.7,515.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_56.setTransform(594.05,515.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQADADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_57.setTransform(779,501.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_58.setTransform(774.15,500.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgIAIgDQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgGIAKAGQgFAHgHAEQgJAEgJABQgKAAgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_59.setTransform(748.55,501.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_60.setTransform(740.975,503.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgEAGgCQAFgCAGAAQAIgBAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_61.setTransform(733.475,501.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AgDAmQgEgEAAgJIAAgiIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_62.setTransform(727.875,500.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_63.setTransform(724.1,500.275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_64.setTransform(719.575,501.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAIgDQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgIAEQgJAEgJABQgJAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_65.setTransform(713.15,501.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_66.setTransform(705.7,500.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_67.setTransform(678.025,500.375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_68.setTransform(670.075,501.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgEAGgCQAFgCAGAAQAIgBAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_69.setTransform(662.975,501.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAEADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_70.setTransform(636.3,501.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAIgDQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgGIAKAGQgFAHgHAEQgJAEgJABQgJAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_71.setTransform(629.55,501.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_72.setTransform(623.175,501.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_73.setTransform(616.775,501.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AgDAmQgEgEAAgJIAAgiIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_74.setTransform(611.025,500.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_75.setTransform(607.1,500.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_76.setTransform(601.575,501.725);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgFAHAAQAKABAHAGIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_77.setTransform(594.475,501.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_78.setTransform(778.025,489.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_79.setTransform(770.075,487.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_80.setTransform(764.45,486.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_81.setTransform(760.675,486.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_82.setTransform(755.425,487.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgIAFQgJAEgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_83.setTransform(748.25,487.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_84.setTransform(740.825,487.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_85.setTransform(733.275,487.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgEgBgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_86.setTransform(725.8,487.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#663300").s().p("AgVAoQgLgHgFgKQgGgKABgNQgBgMAGgKQAGgLAKgGQAKgGALAAQAJAAAHADQAIADAGAGIAAgKIALAAIAAAcIgLAAQgFgIgIgFQgHgFgJAAQgIAAgGAFQgIAEgDAIQgEAIAAAIQAAAJAEAIQAEAHAHAFQAHAFAIAAQAKAAAJgHQAHgGAFgMIAKAGQgEAOgMAJQgLAIgQAAQgLAAgKgGg");
	this.shape_87.setTransform(717.2,486.325);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_88.setTransform(703.5,489.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAKAAAHADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgJAFQgIAEgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_89.setTransform(697.9,487.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_90.setTransform(690.925,487.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_91.setTransform(684.175,487.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAJAAAHAEQAHAFADAHQAFAIAAAIQAAAJgFAGQgEAIgGAEQgIAEgIABQgLAAgJgKIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAFQgBAKAHAFQAFAFAJAAQAFAAAEgDQAFgDACgDQACgGAAgGQAAgFgCgFQgDgEgFgEQgEgCgGAAQgFAAgEADg");
	this.shape_92.setTransform(676.35,489);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_93.setTransform(669.5,487.675);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJAEgJAAQgKgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_94.setTransform(655.85,487.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgEAAQgHAAgKAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_95.setTransform(648.4,486.325);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_96.setTransform(642.725,486.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_97.setTransform(629.975,486.375);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_98.setTransform(622.025,487.625);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_99.setTransform(614.525,487.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAEAHAAAIQAAAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgEAAgGQAAgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_100.setTransform(607.05,487.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_101.setTransform(600.675,487.625);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_102.setTransform(594.675,487.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_103.setTransform(780.025,472.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_104.setTransform(776.1,472.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_105.setTransform(772.45,472.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_106.setTransform(766.925,473.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#663300").s().p("AgEAqQgHgDgDgFIAAAKIgXAAIAAgLIALAAIAAhCIgLAAIAAgLIAXAAIAAAkQAJgKAMAAQAJAAAHAEQAHAEAEAHQADAHAAAIQAAAJgDAIQgFAHgGAEQgHAFgJAAQgGAAgFgDgAgEgFQgEADgDAEQgCAFAAAGQAAAGACAFQADAFAEACQAEADAFAAQAGAAAEgDQAFgDACgFQACgFABgGQgBgGgCgEQgCgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_107.setTransform(758.95,472.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgGIAKAGQgEAHgIAFQgJADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_108.setTransform(739.65,473.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_109.setTransform(733.275,473.625);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_110.setTransform(726.875,473.725);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_111.setTransform(721.125,472.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_112.setTransform(717.2,472.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_113.setTransform(711.675,473.725);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_114.setTransform(704.575,473.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_115.setTransform(685.8,473.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_116.setTransform(678.35,472.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_117.setTransform(672.675,472.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_118.setTransform(655.4,473.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_119.setTransform(648.425,473.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_120.setTransform(641.225,473.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_121.setTransform(633.7,473.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_122.setTransform(628.2,472.275);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_123.setTransform(623.675,473.625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIAKAGQgEAHgIAFQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_124.setTransform(617.25,473.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#663300").s().p("AglAtIAAgLIAMAAIAAhCIgKAAIAAgLIAWAAIAAAKQAEgFAGgDQAFgDAFAAQAJAAAHAFQAHADADAIQAFAIAAAIQAAAJgFAGQgDAIgIAEQgGAFgJgBQgLABgJgKIAAAYIALAAIAAALgAgEgeQgFADgCAFQgCAFAAAGQgBAKAHAEQAFAFAJAAQAFAAAEgCQAFgEABgEQADgEAAgGQAAgGgDgEQgCgGgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_125.setTransform(609.4,475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#663300").s().p("AAEAfIAAgLIAIAAIgMgOIgLAOIAIAAIAAALIgeAAIAAgLIAJAAIATgUIgSgTIgIAAIAAgLIAdAAIAAALIgIAAIAKAMIALgMIgHAAIAAgLIAeAAIAAALIgLAAIgQASIAUAVIAHAAIAAALg");
	this.shape_126.setTransform(601.975,473.675);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgGAHgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_127.setTransform(594.7,473.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_128.setTransform(776.25,459.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIALAEQgGAJgIADQgIAFgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_129.setTransform(766.85,459.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_130.setTransform(759.4,458.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_131.setTransform(753.725,458.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_132.setTransform(731.525,458.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_133.setTransform(725.85,459.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_134.setTransform(720.2,458.325);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_135.setTransform(698.125,458.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_136.setTransform(692.875,459.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_137.setTransform(685.45,458.325);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_138.setTransform(679.775,458.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAEADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_139.setTransform(656.55,459.675);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_140.setTransform(649.8,459.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_141.setTransform(642.825,459.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_142.setTransform(636.075,459.65);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_143.setTransform(630.45,458.325);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("AgkAtIAAgKIALAAIAAhDIgKAAIAAgLIAVAAIAAAKQAGgGAFgDQAEgCAHAAQAIAAAHAEQAHAFAEAHQAEAIAAAIQAAAIgEAHQgFAIgHAEQgHAEgHABQgMAAgKgKIAAAZIANAAIAAAKgAgEgeQgFADgCAFQgCAFgBAFQAAAKAHAFQAFAFAJAAQAFAAAFgDQADgCACgFQADgEAAgHQAAgFgDgFQgCgFgEgDQgFgCgGAAQgFAAgEADg");
	this.shape_144.setTransform(624.45,461);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgJADgHQAFgIAHgEQAHgDAJAAQAJAAAHADQAIAFAEAHQAFAIgBAIQABAJgFAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgFADgCAEQgDAFAAAFQAAAGADAEQACAFAFACQAFADAEABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgDgEgEgDQgEgDgGAAQgEAAgFADg");
	this.shape_145.setTransform(598.6,459.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_146.setTransform(592.975,458.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_147.setTransform(779.05,445.675);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_148.setTransform(772.275,445.625);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#663300").s().p("AgQAcQgHgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAFgJgBQgIABgIgFgAgJgRQgFACgCAGQgCAFgBAEQABAGACAEQACAFAFADQAEADAFAAQAGAAAEgDQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_149.setTransform(764.8,445.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_150.setTransform(759.3,444.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_151.setTransform(755.525,444.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_152.setTransform(750.275,445.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAFQgGAIgIAEQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_153.setTransform(743.1,445.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_154.setTransform(735.675,445.625);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_155.setTransform(728.125,445.625);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEACgDAGQgCAFAAAEQAAAGACAEQACAFAFADQAEADAFAAQAGAAAEgDQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_156.setTransform(720.65,445.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_157.setTransform(713.675,445.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_158.setTransform(702.925,447.075);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_159.setTransform(694.975,445.625);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgFACgCAGQgCAFgBAEQABAGACAEQACAFAFADQAEADAFAAQAGAAAEgDQAFgDACgFQADgEAAgGQAAgEgDgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_160.setTransform(687.5,445.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_161.setTransform(681.125,445.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_162.setTransform(676.475,444.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_163.setTransform(671.55,445.675);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAFQgFAIgIAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_164.setTransform(661.4,445.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#663300").s().p("AgDAfIgVgyIgLAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgTAyg");
	this.shape_165.setTransform(654,445.725);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_166.setTransform(646.975,445.65);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_167.setTransform(639.55,444.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAFQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_168.setTransform(628.7,445.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_169.setTransform(623.05,444.325);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgKAAIAAgLIAWAAIAAAKQAEgGAGgDQAEgCAGAAQAJAAAHAFQAHAEADAHQAFAIAAAIQAAAIgFAHQgDAIgIAEQgGAFgJgBQgLAAgJgJIAAAZIALAAIAAAKgAgEgeQgFADgCAFQgCAFAAAGQgBAJAHAFQAFAFAJAAQAFAAAEgCQAFgDABgEQADgGAAgFQAAgGgDgEQgCgGgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_170.setTransform(617.05,447);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEACgDAGQgCAFAAAEQAAAGACAEQADAFAEADQAEADAFAAQAGAAAEgDQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_171.setTransform(609.5,445.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgFIAKAFQgFAIgHAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_172.setTransform(602.1,445.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#663300").s().p("AghAsIAAgLIALAAIAAhBIgLAAIAAgLIAgAAQANAAAIADQAHADAEAGQADAFAAAKQAAAMgHAHQgIAHgRAAIgLAAIAAAXIAKAAIAAALgAgJAAIAIAAQAHAAAFgBQAFgBACgEQADgEAAgGQAAgIgFgEQgFgEgLAAIgJAAg");
	this.shape_173.setTransform(594.675,444.325);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_174.setTransform(756.775,430.35);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgMAGgKQAGgLAMgGQAKgFAOAAQAOAAALAFQAMAGAGALQAGAKAAAMQAAANgGALQgGAKgMAGQgLAGgOAAQgNAAgLgGgAgMgYQgGAEgCAHQgDAGAAAHQAAAIADAHQACAHAGADQAFAFAHAAQAHAAAGgFQAGgDADgHQACgHAAgIQAAgHgCgGQgDgHgGgEQgGgEgHAAQgHAAgFAEg");
	this.shape_175.setTransform(746,430.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_176.setTransform(737.825,430.325);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_177.setTransform(730.75,430.325);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANAAQAQgBAKAJIAAgHIAPAAIAAAfIgPAAQgGgRgQAAQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_178.setTransform(721.425,430.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_179.setTransform(711.875,430.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_180.setTransform(702.525,430.35);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_181.setTransform(692.275,430.35);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgMAGgKQAGgLAMgGQALgFANAAQAOAAAMAFQALAGAGALQAGAKAAAMQAAANgGALQgGAKgLAGQgMAGgOAAQgNAAgLgGgAgMgYQgFAEgEAHQgDAGAAAHQAAAIADAHQAEAHAFADQAGAFAGAAQAHAAAGgFQAGgDACgHQADgHAAgIQAAgHgDgGQgCgHgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_182.setTransform(681.5,430.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANAAQAQgBAKAJIAAgHIAPAAIAAAfIgPAAQgGgRgQAAQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_183.setTransform(671.025,430.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#663300").s().p("AgmAsIAAgPIAMAAIAAg5IgMAAIAAgPIAvAAIAAAPIgMAAIAAA5IAZAAIAAgbIASAAIAAAqg");
	this.shape_184.setTransform(658.5,430.325);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIASg5IgNAAIAAgPIA6AAIAAAPIgNAAIATA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_185.setTransform(649.8,430.325);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAyAAQAOAAAIAGQAIAGAAAMQABAIgEAGQgEAFgHADIANAaIAMAAIAAAPgAgKgIIAIAAQAOAAAAgKQAAgFgEgDQgDgCgFAAIgKAAg");
	this.shape_186.setTransform(640.7,430.325);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#663300").s().p("AgRAqQgHgDgDgIQgDgHAAgNIAAgoIgLAAIAAgPIApAAIAAAPIgIAAIAAApQAAAHACAEQABAEADABQACACADAAQAGAAADgEQADgEAAgLIAAgoIgIAAIAAgPIAjAAIAAAPIgLAAIAAAsQAAAQgHAHQgHAHgQAAQgLAAgHgDg");
	this.shape_187.setTransform(631.425,430.375);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_188.setTransform(622.6,430.325);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#663300").s().p("AgmAsIAAgPIAMAAIAAg5IgMAAIAAgPIAvAAIAAAPIgMAAIAAA5IAZAAIAAgbIASAAIAAAqg");
	this.shape_189.setTransform(614.15,430.325);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#663300").s().p("AgRAqQgHgDgDgIQgDgHAAgNIAAgoIgLAAIAAgPIApAAIAAAPIgIAAIAAApQAAAHACAEQABAEADABQACACADAAQAGAAADgEQADgEAAgLIAAgoIgIAAIAAgPIAjAAIAAAPIgLAAIAAAsQAAAQgHAHQgHAHgQAAQgLAAgHgDg");
	this.shape_190.setTransform(605.575,430.375);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANAAQAQgBAKAJIAAgHIAPAAIAAAfIgPAAQgGgRgQAAQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_191.setTransform(596.225,430.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_192.setTransform(704.55,405.975);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_193.setTransform(700.725,402.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_194.setTransform(696.075,403.625);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_195.setTransform(690.075,403.65);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_196.setTransform(680.475,403.625);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAIgEAIgBQAJABAHAEQAIAEAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAFgJAAQgJAAgGgFgAgJgRQgEACgDAGQgDAEAAAFQAAAFADAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgFQAAgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_197.setTransform(674.1,403.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_198.setTransform(664.2,403.675);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgEAAQgGAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_199.setTransform(657.4,402.325);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#663300").s().p("AglAtIAAgLIALAAIAAhCIgKAAIAAgLIAXAAIAAAKQAFgFAFgDQAFgDAGAAQAJAAAGAFQAHADAEAIQADAHAAAJQAAAJgDAGQgEAHgHAFQgHAFgIAAQgMAAgJgKIAAAYIAMAAIAAALgAgEgeQgEADgDAFQgCAFAAAFQAAALAFAEQAHAFAIAAQAFAAAFgDQADgCADgFQACgFAAgFQAAgGgCgEQgDgFgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_200.setTransform(649.5,405);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_201.setTransform(642.325,403.65);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_202.setTransform(635.975,403.625);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_203.setTransform(629.375,405.075);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHgBgJQABgJAEgHQAEgIAHgDQAHgEAJgBQAJABAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAHQgFAHgGAFQgIAFgJAAQgIAAgIgFgAgJgRQgEACgDAGQgDAEABAFQgBAFADAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFgBgFQABgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_204.setTransform(621.5,403.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_205.setTransform(615.875,402.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHgBgJQABgJAEgHQAEgIAHgDQAHgEAJgBQAJABAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAHQgFAHgGAFQgIAFgJAAQgIAAgIgFgAgJgRQgEACgDAGQgDAEABAFQgBAFADAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFgBgFQABgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_206.setTransform(610.25,403.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_207.setTransform(602.8,402.325);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#663300").s().p("AglAtIAAgLIAMAAIAAhCIgLAAIAAgLIAXAAIAAAKQAEgFAGgDQAFgDAFAAQAJAAAHAFQAHADADAIQAEAHABAJQgBAJgEAGQgDAHgHAFQgIAFgIAAQgLAAgJgKIAAAYIALAAIAAALgAgEgeQgEADgDAFQgDAFABAFQgBALAHAEQAFAFAJAAQAFAAAEgDQAFgCACgFQACgFAAgFQAAgGgCgEQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_208.setTransform(594.9,405);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_209.setTransform(780.025,388.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_210.setTransform(775.1,389.675);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGgBQAIABAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_211.setTransform(768.775,389.65);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAJAAAHAEQAHAFADAHQAEAHABAJQgBAJgEAGQgDAHgHAFQgIAEgIAAQgLAAgJgJIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAGQgBAJAHAFQAFAFAJAAQAFAAAEgCQAFgEACgDQACgGAAgGQAAgFgCgFQgDgEgFgEQgEgCgGAAQgFAAgEADg");
	this.shape_212.setTransform(760.95,391);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgJAEgFQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_213.setTransform(735.725,388.25);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#663300").s().p("AgPAcQgIgFgEgHQgFgHAAgJQAAgIAFgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHgBAIQABAJgFAHQgFAHgGAFQgIAEgJAAQgJAAgGgEgAgJgRQgEACgDAFQgCAGAAAEQAAAFACAFQACAFAFACQAEAEAFAAQAGAAAEgEQAFgCACgFQACgFABgFQgBgEgCgGQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_214.setTransform(729.65,389.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_215.setTransform(703,389.675);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_216.setTransform(698.025,388.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_217.setTransform(692.325,389.625);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIAKAEQgEAIgIAFQgJADgJAAQgJAAgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_218.setTransform(684.8,389.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgBgCgEAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_219.setTransform(675.5,389.625);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgJAAgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_220.setTransform(666.1,389.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_221.setTransform(660.45,388.325);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAEQgGAIgIAFQgIADgKAAQgIAAgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_222.setTransform(654.9,389.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgJAAgIgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_223.setTransform(627.5,389.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_224.setTransform(621.85,388.325);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#663300").s().p("AglAtIAAgKIALAAIAAhDIgKAAIAAgLIAXAAIAAAKQAFgGAFgDQAFgCAFAAQAKAAAGAEQAHAFAEAHQADAHAAAJQAAAJgDAGQgFAHgGAFQgHAEgJAAQgLAAgJgJIAAAZIAMAAIAAAKgAgEgeQgEADgDAFQgCAFAAAGQAAAJAFAFQAHAFAIAAQAFAAAEgCQAEgEADgDQACgGAAgGQAAgFgCgFQgDgEgEgEQgFgCgFAAQgGAAgEADg");
	this.shape_225.setTransform(615.85,391);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgDgCgEAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_226.setTransform(606.35,389.625);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_227.setTransform(598.85,388.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_228.setTransform(594.05,389.675);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_229.setTransform(778.25,374.325);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_230.setTransform(770.625,377.075);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_231.setTransform(762.725,375.725);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHAAgJQAAgIAEgIQAEgIAHgDQAHgFAJAAQAJAAAIAFQAHAEAEAHQAFAIAAAIQAAAJgFAHQgEAHgHAFQgIAFgJAAQgIAAgIgFgAgJgRQgFADgCAFQgCAEAAAFQAAAFACAFQACAFAFADQAEACAFAAQAFAAAFgCQAEgDADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_232.setTransform(755.25,375.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_233.setTransform(748.875,375.625);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgEAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_234.setTransform(742.4,374.325);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#663300").s().p("AgDAmQgEgEAAgJIAAgiIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_235.setTransform(736.725,374.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_236.setTransform(716.625,375.625);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAIgDQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgIAEQgJAEgJABQgJAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_237.setTransform(709.1,375.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#663300").s().p("AgDAfIgVgyIgLAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgTAyg");
	this.shape_238.setTransform(701.7,375.725);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAIgDQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgIAEQgJAEgJABQgJAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_239.setTransform(694.25,375.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_240.setTransform(672.275,374.375);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAHgDQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAGQgGAHgIAEQgIAEgKABQgIAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_241.setTransform(664.35,375.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#663300").s().p("AgEAfIgUgyIgKAAIAAgLIAfAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAeAAIAAALIgKAAIgTAyg");
	this.shape_242.setTransform(656.95,375.725);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAHgDQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAEgKABQgIAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_243.setTransform(649.5,375.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_244.setTransform(644,374.275);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_245.setTransform(638.4,374.325);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgFAHAAQAKABAHAGIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_246.setTransform(631.375,375.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgEAGgCQAFgCAGAAQAIgBAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_247.setTransform(624.625,375.65);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgIAIgDQAHgFAIAAQAKAAAHAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAFgCAEgGIAKAGQgEAHgJAEQgIAEgKABQgJAAgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_248.setTransform(602.85,375.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#663300").s().p("AgEAqQgGgDgEgFIAAAKIgXAAIAAgLIALAAIAAhCIgLAAIAAgLIAXAAIAAAkQAJgKAMAAQAJAAAHAEQAGAEAEAHQAFAHAAAIQAAAJgFAIQgDAHgIAEQgGAFgJAAQgHAAgEgDgAgEgFQgFADgCAEQgCAFgBAGQABAGACAFQACAFAFACQAEADAFAAQAFAAAFgDQAEgDADgFQACgFAAgGQAAgGgCgEQgDgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_249.setTransform(595,374.375);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_250.setTransform(778.125,361.625);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGgBQAIABAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_251.setTransform(771.025,361.65);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_252.setTransform(764.075,361.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_253.setTransform(752.1,361.675);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_254.setTransform(747.25,360.275);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_255.setTransform(741.65,360.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#663300").s().p("AgRAsIAAgLIALAAIAAhBIgSAAIAAAVIgLAAIAAggIBHAAIAAAgIgLAAIAAgVIgSAAIAABBIALAAIAAALg");
	this.shape_256.setTransform(733.975,360.325);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_257.setTransform(722.6,363.975);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgFIALAEQgGAIgIAFQgIAEgKAAQgIgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_258.setTransform(717,361.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_259.setTransform(710.025,361.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGgBQAIABAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_260.setTransform(703.275,361.65);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_261.setTransform(697.65,360.325);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgDQAFgCAFAAQAJAAAHAEQAHAFADAHQAEAIABAIQgBAJgEAGQgDAIgHAEQgIAEgIABQgLAAgJgKIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAFQgBAKAHAFQAFAFAJAAQAFAAAEgDQAFgDACgDQACgGAAgGQAAgFgCgFQgDgEgFgEQgEgCgGAAQgFAAgEADg");
	this.shape_262.setTransform(691.65,363);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgIAFgIQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgIAFQgJAEgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_263.setTransform(678.5,361.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_264.setTransform(671.05,360.325);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#663300").s().p("AgDAlQgEgDAAgKIAAghIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_265.setTransform(665.375,360.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgGgEgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_266.setTransform(656.525,360.25);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAEAEAFAAQAGAAAEgEQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_267.setTransform(650.45,361.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#663300").s().p("AgYAsIAAgKIAMAAIAIgSIgUgwIgKAAIAAgMIAeAAIAAAMIgHAAIANAhIAMghIgIAAIAAgMIAeAAIAAAMIgJAAIgeBMg");
	this.shape_268.setTransform(637.5,363.05);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_269.setTransform(631.075,361.625);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgEgHABgJQgBgIAEgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAFAHgBAIQABAJgFAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgFgDgFAAQgEAAgFADg");
	this.shape_270.setTransform(624.7,361.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgCgDQgCgCgDAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAHAAAFAEQAEAFAAAJIAAAgIALAAIAAALg");
	this.shape_271.setTransform(615.4,361.625);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIAKAEQgEAIgIAFQgJAEgJAAQgKgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_272.setTransform(606,361.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_273.setTransform(596.7,361.625);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgJAFQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_274.setTransform(778.3,347.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#663300").s().p("AgDAfIgVgyIgLAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAeAAIAAALIgKAAIgTAyg");
	this.shape_275.setTransform(770.9,347.725);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_276.setTransform(765.35,346.275);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_277.setTransform(761.575,346.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_278.setTransform(756.325,347.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_279.setTransform(749.15,347.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_280.setTransform(743.5,346.325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_281.setTransform(739.7,346.325);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#663300").s().p("AgQAcQgHgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAFgJgBQgIABgIgFgAgJgRQgFADgCAFQgCAFgBAEQABAGACAEQACAFAFADQAEACAFAAQAGAAAEgCQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_282.setTransform(734.2,347.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_283.setTransform(727.225,347.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_284.setTransform(664.2,347.675);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgQIAPAAIAAAQQAAAJgEADQgEAEgHABg");
	this.shape_285.setTransform(659.475,343.575);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#663300").s().p("AgXAtIAAgLIALAAIAIgSIgUgxIgKAAIAAgKIAeAAIAAAKIgHAAIANAiIAMgiIgIAAIAAgKIAeAAIAAAKIgJAAIgeBOg");
	this.shape_286.setTransform(654.05,349.05);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_287.setTransform(648.375,346.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_288.setTransform(644.6,346.275);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_289.setTransform(639.025,347.625);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_290.setTransform(631.525,347.725);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgDgCgEAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_291.setTransform(622.1,347.625);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgCgCgDAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAIAAAEAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_292.setTransform(610.8,347.625);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#663300").s().p("AgQAcQgHgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAFgJgBQgIABgIgFgAgJgRQgFADgCAFQgCAFgBAEQABAGACAEQACAFAFADQAEACAFAAQAGAAAEgCQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_293.setTransform(601.45,347.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_294.setTransform(594.475,347.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_295.setTransform(778.625,333.65);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_296.setTransform(752.175,333.625);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_297.setTransform(745.75,333.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_298.setTransform(740.125,332.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAADgCQAEgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_299.setTransform(735.2,333.675);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFADAEABQAFgBAFgDQAEgCADgFQACgEAAgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_300.setTransform(728.5,333.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgHgEAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_301.setTransform(723.475,332.25);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_302.setTransform(697.225,333.625);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_303.setTransform(690.125,333.65);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_304.setTransform(683.175,333.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_305.setTransform(657.675,332.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_306.setTransform(652.425,333.65);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_307.setTransform(645,332.325);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_308.setTransform(639.325,332.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIAKAEQgFAJgHADQgJAFgJAAQgKgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_309.setTransform(613.55,333.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_310.setTransform(604.25,333.625);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_311.setTransform(596.75,332.275);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_312.setTransform(592.975,332.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_313.setTransform(780.475,318.25);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAFgJgBQgIABgIgFgAgJgRQgEACgDAGQgDAFABAEQgBAGADAEQADAFAEADQAFADAEAAQAFAAAFgDQAEgDADgFQACgEAAgGQAAgEgCgFQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_314.setTransform(774.4,319.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAHAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgFIALAFQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_315.setTransform(760.45,319.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_316.setTransform(752.875,321.075);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_317.setTransform(745.375,319.65);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_318.setTransform(738.75,319.675);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_319.setTransform(732.75,319.675);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_320.setTransform(726.425,319.65);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#663300").s().p("AgkAtIAAgKIALAAIAAhDIgKAAIAAgLIAVAAIAAAKQAGgGAFgDQAEgCAHAAQAIAAAHAFQAHAEAEAHQADAIAAAIQAAAIgDAHQgFAIgHAEQgHAFgHgBQgMAAgKgJIAAAZIANAAIAAAKgAgEgeQgEADgDAFQgDAFAAAGQABAJAFAFQAHAFAIAAQAFAAAFgCQADgDACgEQADgGAAgFQAAgGgDgEQgCgGgEgCQgFgDgFAAQgGAAgEADg");
	this.shape_321.setTransform(718.6,321);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_322.setTransform(704.875,319.65);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAEADQAEADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_323.setTransform(691.7,319.675);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAFQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_324.setTransform(684.95,319.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_325.setTransform(679.325,318.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_326.setTransform(674.075,319.65);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgFIALAFQgGAIgIAEQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_327.setTransform(666.7,319.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_328.setTransform(660.325,319.625);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_329.setTransform(654.325,319.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_330.setTransform(642.375,318.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_331.setTransform(638.6,318.275);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgPIAPAAIAAAPQAAAFgBAEQgCADgEACQgCACgGABg");
	this.shape_332.setTransform(628.35,322.85);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgFIALAFQgFAIgJAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_333.setTransform(622.75,319.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_334.setTransform(616.375,319.625);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_335.setTransform(609.975,319.725);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_336.setTransform(604.225,318.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_337.setTransform(598.575,319.725);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_338.setTransform(593.425,318.25);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgJAEgHQAEgIAIgDQAHgEAIAAQAJAAAHAEQAIAEAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIAKAGQgFAIgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_339.setTransform(778.15,305.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_340.setTransform(770.7,304.325);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_341.setTransform(765.025,304.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_342.setTransform(749.325,304.375);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_343.setTransform(741.375,305.625);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_344.setTransform(734.275,305.65);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_345.setTransform(718.825,304.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_346.setTransform(713.9,305.675);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_347.setTransform(707.575,305.65);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#663300").s().p("AglAtIAAgLIAMAAIAAhCIgLAAIAAgLIAXAAIAAAKQAEgFAGgDQAFgDAFAAQAJAAAHAEQAHAEADAIQAEAHABAJQgBAIgEAHQgDAHgHAFQgIAEgIABQgLAAgJgKIAAAYIALAAIAAALgAgEgeQgEADgDAFQgDAFABAFQgBALAHAEQAFAFAJAAQAFAAAEgDQAFgCACgFQACgEAAgHQAAgFgCgFQgDgEgFgEQgEgCgGAAQgFAAgEADg");
	this.shape_348.setTransform(699.75,307);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgJAEgHQAEgIAIgDQAHgEAIAAQAJAAAHAEQAIAEAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIAKAGQgFAIgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_349.setTransform(682.3,305.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_350.setTransform(674.85,304.325);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_351.setTransform(669.175,304.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_352.setTransform(653.475,307.075);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_353.setTransform(645.525,305.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_354.setTransform(639.9,304.275);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#663300").s().p("AATAsIgdgfIAAAUIAKAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAA3IAVgSIgKAAIAAgKIAiAAIAAAKIgJAAIgYASIAXAVIAKAAIAAALg");
	this.shape_355.setTransform(634.35,304.325);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_356.setTransform(626.925,305.625);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDgBgDQABgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_357.setTransform(621.3,304.275);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_358.setTransform(617.5,304.325);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#663300").s().p("AgXAsIAAgKIALAAIAIgSIgUgxIgKAAIAAgLIAfAAIAAALIgIAAIANAiIAMgiIgIAAIAAgLIAdAAIAAALIgJAAIgdBNg");
	this.shape_359.setTransform(602.1,307.05);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#663300").s().p("AghAsIAAgLIALAAIAAhBIgLAAIAAgLIAfAAQAPAAAIAGQAIAFAAAMQAAAGgDAFQgCAEgGADQAIACAEAFQAEAGAAAHQAAANgKAHQgJAGgRAAgAgJAhIAGAAIAMgBQAFgBADgDQADgDAAgHQAAgHgFgEQgFgDgKAAIgJAAgAgJgGIAJAAQAQAAAAgOQAAgGgFgDQgEgDgHAAIgJAAg");
	this.shape_360.setTransform(594.625,304.325);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABKg");
	this.shape_361.setTransform(752.075,290.35);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#663300").s().p("AgZAoQgLgGgGgKQgGgLAAgNQAAgMAGgLQAGgKALgFQAMgHANAAQAOAAAMAHQALAFAGAKQAGALAAAMQAAANgGALQgGAKgLAGQgMAFgOAAQgNAAgMgFgAgMgYQgFAEgDAGQgDAHgBAHQABAJADAGQADAHAFAEQAGADAGAAQAIAAAFgDQAGgEADgHQADgGAAgJQAAgHgDgHQgDgGgGgEQgFgEgIAAQgGAAgGAEg");
	this.shape_362.setTransform(741.3,290.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_363.setTransform(733.125,290.325);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_364.setTransform(726.05,290.325);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANAAQAQABAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAFgEAGQgDAHAAAHQAAAJADAGQADAHAGAEQAFADAHAAQAJABAGgHQAHgGACgKIASAIQgKAegiAAQgNAAgLgFg");
	this.shape_365.setTransform(716.725,290.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_366.setTransform(707.175,290.325);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABKg");
	this.shape_367.setTransform(697.825,290.35);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABKg");
	this.shape_368.setTransform(687.575,290.35);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgMAGgLQAGgKAMgFQAKgHAOAAQAOAAALAHQAMAFAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgLAFgOAAQgNAAgLgFgAgMgYQgGAEgDAGQgCAHAAAHQAAAJACAGQADAHAGAEQAFADAHAAQAIAAAFgDQAGgEADgHQACgGAAgJQAAgHgCgHQgDgGgGgEQgFgEgIAAQgHAAgFAEg");
	this.shape_369.setTransform(676.8,290.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANAAQAQABAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAFgEAGQgDAHAAAHQAAAJADAGQADAHAGAEQAFADAHAAQAJABAGgHQAHgGACgKIASAIQgKAegiAAQgNAAgLgFg");
	this.shape_370.setTransform(666.325,290.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANAAQAQABAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAFgEAGQgDAHAAAHQAAAJADAGQADAHAGAEQAFADAHAAQAJABAGgHQAHgGACgKIASAIQgKAegiAAQgNAAgLgFg");
	this.shape_371.setTransform(652.925,290.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_372.setTransform(645.075,290.325);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAxAAQAPAAAJAGQAHAGABAMQAAAIgEAGQgEAFgHADIAOAaIALAAIAAAPgAgKgIIAIAAQANAAAAgKQAAgFgCgDQgEgCgFAAIgKAAg");
	this.shape_373.setTransform(637.85,290.325);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgMAGgLQAGgKAMgFQALgHANAAQAPAAAKAHQAMAFAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgKAFgPAAQgNAAgLgFgAgMgYQgGAEgDAGQgCAHAAAHQAAAJACAGQADAHAGAEQAGADAGAAQAIAAAFgDQAGgEACgHQADgGAAgJQAAgHgDgHQgCgGgGgEQgFgEgIAAQgGAAgGAEg");
	this.shape_374.setTransform(627.4,290.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_375.setTransform(617.45,290.325);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQABAIADAEQADAEAGAAQAEAAADgDQADgCAAgEQgBgEgDgEQgDgDgHgDQgNgGgGgGQgFgGAAgJQAAgHADgFQADgGAFgDQAGgDAGAAQAFAAADACQAFACADAEIAAgHIAPAAIAAAbIgPAAQgCgHgDgDQgDgDgEAAQgEAAgCACQgDACAAADQAAADACACIAEADIAGAEIAEABQAMAFAGAGQAFAHAAAKQABAMgIAHQgGAHgMAAQgLAAgGgIg");
	this.shape_376.setTransform(609.6,290.325);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_377.setTransform(603.525,290.325);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgrAAIAAgPIALAAIAAg5IgLAAIAAgPIArAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIAqAAIAAAPIgKAAIAAA5IAKAAIAAAPg");
	this.shape_378.setTransform(595.95,290.325);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_379.setTransform(748.25,265.975);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_380.setTransform(743.4,263.675);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_381.setTransform(737.675,263.625);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHgBgJQABgIAEgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAHgGAFQgIAEgJAAQgIAAgIgEgAgJgRQgEACgDAFQgDAGABAEQgBAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgFgBgFQABgEgDgGQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_382.setTransform(731.3,263.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgIADgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAEAHABAIQgBAJgEAHQgEAHgIAFQgHAEgJAAQgJAAgGgEgAgJgRQgFACgCAFQgCAGgBAEQABAFACAFQACAFAFACQAEAEAFAAQAGAAAEgEQAEgCADgFQADgFAAgFQAAgEgDgGQgDgEgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_383.setTransform(723.95,263.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_384.setTransform(716.375,262.375);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_385.setTransform(710.225,262.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_386.setTransform(704.575,263.725);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHgBgJQABgIAEgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAHgGAFQgIAEgJAAQgIAAgIgEgAgJgRQgEACgDAFQgDAGABAEQgBAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgFgBgFQABgEgDgGQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_387.setTransform(697.1,263.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgJAAgIgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_388.setTransform(686.45,263.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgEAAQgHAAgKAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_389.setTransform(679,262.325);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_390.setTransform(673.325,262.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#663300").s().p("AgQAcQgHgFgFgHQgDgHAAgJQAAgIADgIQAFgHAHgFQAHgDAJAAQAJAAAHADQAIAFAEAIQAEAHABAIQgBAJgEAHQgEAHgIAFQgHAEgJAAQgIAAgIgEgAgJgRQgFACgCAFQgCAGgBAEQABAFACAFQACAFAFACQAEAEAFAAQAGAAAEgEQAEgCADgFQACgFAAgFQAAgEgCgGQgDgEgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_391.setTransform(664.45,263.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_392.setTransform(658.825,262.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_393.setTransform(653.125,263.625);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_394.setTransform(647.5,262.275);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#663300").s().p("AATAsIgdgfIAAAUIAJAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAA3IAVgSIgKAAIAAgKIAiAAIAAAKIgKAAIgXASIAXAVIAKAAIAAALg");
	this.shape_395.setTransform(638.7,262.325);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgIADgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAEAHAAAIQAAAJgEAHQgEAHgIAFQgHAEgJAAQgJAAgGgEgAgJgRQgEACgDAFQgDAGAAAEQAAAFADAFQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgFAAgFQAAgEgDgGQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_396.setTransform(631.35,263.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#663300").s().p("AgPAcQgIgFgEgHQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHgBAIQABAJgFAHQgFAHgGAFQgIAEgJAAQgJAAgGgEgAgJgRQgEACgDAFQgCAGAAAEQAAAFACAFQADAFAEACQAFAEAEAAQAGAAAEgEQAFgCACgFQACgFABgFQgBgEgCgGQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_397.setTransform(624,263.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_398.setTransform(618.35,262.325);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_399.setTransform(611.325,262.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGgBQAIABAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_400.setTransform(606.075,263.65);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAJAAIAAALg");
	this.shape_401.setTransform(598.65,262.325);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgDg");
	this.shape_402.setTransform(592.975,262.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_403.setTransform(779.05,249.675);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_404.setTransform(772.125,251.075);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_405.setTransform(764.175,249.625);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_406.setTransform(758.55,248.275);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_407.setTransform(752.975,249.625);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAHgDQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAEgKABQgIAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_408.setTransform(745.45,249.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#663300").s().p("AgkAtIAAgLIAKAAIAAhCIgJAAIAAgLIAVAAIAAAKQAGgFAFgDQAEgDAHAAQAJAAAGAFQAHADAEAIQADAIAAAIQAAAJgDAGQgFAHgGAFQgIAFgHAAQgMAAgKgKIAAAYIANAAIAAALgAgEgeQgEADgDAFQgDAFAAAFQABALAFAEQAHAFAIAAQAFAAAFgCQADgEADgEQACgFAAgFQAAgGgCgEQgDgGgEgCQgFgDgFAAQgGAAgEADg");
	this.shape_409.setTransform(737.6,251);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHAAgJQAAgIAEgIQAEgIAHgDQAHgFAJAAQAJAAAIAFQAHAEAEAHQAEAIABAIQgBAJgEAHQgFAHgGAFQgIAFgJAAQgIAAgIgFgAgJgRQgFADgCAFQgCAEAAAFQAAAFACAFQACAFAFADQAEACAFAAQAFAAAFgCQAEgDADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_410.setTransform(730.05,249.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_411.setTransform(720.375,249.625);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#663300").s().p("AgPAcQgIgFgEgHQgFgHAAgJQAAgIAFgIQAEgIAHgDQAIgFAIAAQAJAAAIAFQAHAEAEAHQAFAIgBAIQABAJgFAHQgFAHgGAFQgIAFgJAAQgJAAgGgFgAgJgRQgEADgDAFQgCAEAAAFQAAAFACAFQADAFAEADQAFACAEAAQAGAAAEgCQAFgDACgFQACgFABgFQgBgFgCgEQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_412.setTransform(714,249.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_413.setTransform(704.05,249.675);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAHgDQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgJAEQgIAEgKABQgIAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_414.setTransform(697.3,249.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#663300").s().p("AgDAmQgEgEAAgJIAAgiIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_415.setTransform(691.675,248.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_416.setTransform(686.425,249.65);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_417.setTransform(677.15,249.625);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_418.setTransform(669.65,248.275);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_419.setTransform(665.85,248.325);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgFAHAAQAKABAHAGIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_420.setTransform(660.725,249.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgQIAPAAIAAAQQAAAFgBAEQgCADgEADQgCABgGABg");
	this.shape_421.setTransform(652.1,252.85);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_422.setTransform(647.25,249.675);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAHgDQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAEgKABQgIAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_423.setTransform(640.5,249.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgFAHAAQAKABAHAGIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_424.setTransform(633.525,249.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_425.setTransform(627.375,249.625);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_426.setTransform(620.975,249.725);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHAAgJQAAgIAEgIQAEgIAHgDQAHgFAJAAQAJAAAIAFQAHAEAEAHQAFAIAAAIQAAAJgFAHQgEAHgHAFQgIAFgJAAQgIAAgIgFgAgJgRQgFADgCAFQgCAEgBAFQABAFACAFQACAFAFADQAEACAFAAQAFAAAFgCQAEgDADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_427.setTransform(613.5,249.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_428.setTransform(606.85,249.675);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgIAHgDQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAEgKABQgIAAgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_429.setTransform(600.1,249.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_430.setTransform(593.725,249.625);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_431.setTransform(780,234.325);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_432.setTransform(774.875,235.65);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_433.setTransform(768.525,235.625);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_434.setTransform(762.125,235.725);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_435.setTransform(756.375,234.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_436.setTransform(751.125,235.65);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_437.setTransform(743.725,235.625);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_438.setTransform(729.15,234.325);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_439.setTransform(724.025,235.65);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGAAQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_440.setTransform(717.075,235.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAFAEAEAAQAGAAAEgEQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_441.setTransform(709.95,235.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_442.setTransform(704.3,234.325);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgGgEgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_443.setTransform(692.325,234.25);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAEAHAAAIQAAAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgEAAgGQAAgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_444.setTransform(686.25,235.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgFIAKAEQgFAIgHAFQgJAEgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_445.setTransform(670.05,235.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_446.setTransform(663.4,235.675);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_447.setTransform(656.675,235.725);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgFIAKAEQgFAIgHAFQgJAEgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_448.setTransform(640.35,235.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_449.setTransform(632.9,234.325);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_450.setTransform(627.225,234.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_451.setTransform(612.7,234.325);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_452.setTransform(607.025,234.7);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_453.setTransform(603.25,234.275);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_454.setTransform(596.225,235.725);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_455.setTransform(778.95,221.675);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_456.setTransform(773.95,220.325);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_457.setTransform(770.3,220.275);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_458.setTransform(765.175,221.65);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_459.setTransform(759.575,220.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAHgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_460.setTransform(753.9,221.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_461.setTransform(746.325,220.375);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_462.setTransform(733.25,221.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_463.setTransform(726.6,221.675);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAKAAAHAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgGIAKAGQgEAHgJAFQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_464.setTransform(719.85,221.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_465.setTransform(712.4,220.325);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_466.setTransform(706.725,220.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_467.setTransform(695.9,221.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_468.setTransform(689.25,221.675);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_469.setTransform(684.4,220.275);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_470.setTransform(679.6,221.675);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_471.setTransform(673.275,221.65);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_472.setTransform(665.85,220.325);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#663300").s().p("AgkAtIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAKQAGgFAFgDQAFgDAGAAQAJAAAGAFQAHADAEAIQADAIAAAIQAAAJgDAGQgFAIgGAEQgIAFgHgBQgMABgKgKIAAAYIANAAIAAALgAgEgeQgEADgDAFQgDAFAAAGQABAKAFAEQAHAFAIAAQAFAAAFgCQADgEADgEQACgEAAgGQAAgGgCgEQgDgGgEgCQgFgDgFAAQgGAAgEADg");
	this.shape_473.setTransform(657.95,223);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_474.setTransform(648.45,221.625);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#663300").s().p("AgkAsIAAgLIAMAAIAAhBIgMAAIAAgLIBJAAIAAAaIgLAAIAAgPIglAAIAAAaIAgAAIAAAKIggAAIAAAdIAlAAIAAgQIALAAIAAAbg");
	this.shape_475.setTransform(638.675,220.325);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_476.setTransform(627.8,223.975);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_477.setTransform(622.95,221.675);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_478.setTransform(614.725,221.725);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_479.setTransform(605.8,221.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_480.setTransform(600.3,220.275);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#663300").s().p("AgEAfIgUgyIgKAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAeAAIAAALIgKAAIgTAyg");
	this.shape_481.setTransform(594.75,221.725);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_482.setTransform(778.075,206.375);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_483.setTransform(770.125,207.625);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_484.setTransform(763.025,207.65);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgQIAPAAIAAAPQAAAGgBADQgCAFgDACQgCABgHAAg");
	this.shape_485.setTransform(749.1,210.85);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_486.setTransform(744.25,207.675);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIALAEQgFAJgJADQgIAFgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_487.setTransform(737.5,207.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#663300").s().p("AgkAtIAAgKIALAAIAAhDIgKAAIAAgLIAVAAIAAAKQAFgGAGgDQAEgCAHAAQAIAAAHAEQAHAFADAHQAFAIAAAIQAAAIgFAHQgDAIgIAEQgGAEgIABQgMAAgKgKIAAAZIAMAAIAAAKgAgEgeQgFADgCAFQgCAFgBAFQAAAKAHAFQAFAFAJAAQAFAAAFgDQAEgCABgFQADgEAAgHQAAgFgDgFQgCgFgFgDQgEgCgGAAQgFAAgEADg");
	this.shape_488.setTransform(729.65,209);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_489.setTransform(722.475,207.65);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgDgGAAQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_490.setTransform(715.525,207.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAJAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_491.setTransform(709.1,207.675);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_492.setTransform(702.175,206.375);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_493.setTransform(694.225,207.625);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_494.setTransform(687.125,207.65);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_495.setTransform(681.5,206.325);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgQIAPAAIAAAPQAAAGgCADQgBAFgEACQgCABgGAAg");
	this.shape_496.setTransform(669.4,210.85);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_497.setTransform(665.575,206.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_498.setTransform(659.875,207.625);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAKAAAHADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAFgCAEgFIAKAEQgEAJgJADQgIAFgKAAQgJgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_499.setTransform(652.35,207.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgCgCgEAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_500.setTransform(643.05,207.625);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_501.setTransform(633.625,207.625);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQACAFAFACQAEADAFABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_502.setTransform(626.15,207.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_503.setTransform(619.775,207.625);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_504.setTransform(615.25,206.275);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#663300").s().p("AgEAfIgUgyIgKAAIAAgLIAfAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAeAAIAAALIgKAAIgTAyg");
	this.shape_505.setTransform(609.7,207.725);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_506.setTransform(602.225,207.625);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgFIALAEQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_507.setTransform(594.7,207.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_508.setTransform(780,192.325);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_509.setTransform(774.875,193.65);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_510.setTransform(767.925,193.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgIABgHgFgAgJgRQgEACgDAGQgCAFAAAEQAAAGACAEQADAFAEADQAFADAEAAQAGAAAEgDQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_511.setTransform(760.8,193.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_512.setTransform(755.15,192.325);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgFIAKAFQgFAIgHAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_513.setTransform(724.5,193.7);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_514.setTransform(717.05,192.325);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_515.setTransform(711.375,192.7);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_516.setTransform(682.375,192.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_517.setTransform(676.725,193.725);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHgBgJQABgIADgIQAFgHAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAIQAFAHgBAIQABAJgFAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgEACgDAGQgDAFAAAEQAAAGADAEQADAFAEADQAFADAEAAQAFAAAFgDQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgFgDgFAAQgEAAgFADg");
	this.shape_518.setTransform(669.25,193.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#663300").s().p("AgEAqQgHgDgDgFIAAAKIgXAAIAAgLIALAAIAAhCIgLAAIAAgLIAXAAIAAAkQAJgKAMAAQAJAAAHAEQAHAEADAHQAEAHABAIQgBAJgEAIQgEAHgGAEQgHAFgJAAQgGAAgFgDgAgEgFQgEADgDAEQgDAFABAGQgBAGADAFQADAFAEACQAEADAFAAQAFAAAFgDQAEgDADgFQACgFAAgGQAAgGgCgEQgDgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_519.setTransform(661.4,192.375);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_520.setTransform(654.125,193.65);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_521.setTransform(621.625,193.625);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_522.setTransform(615.125,193.625);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_523.setTransform(609.125,193.65);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAFQgFAIgHAEQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_524.setTransform(601.75,193.7);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#663300").s().p("AgfAsIAAgLIALAAIAAhBIgLAAIAAgLIAjAAIAAALIgLAAIAABBIAcAAIAAgbIALAAIAAAmg");
	this.shape_525.setTransform(594.425,192.325);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_526.setTransform(681.975,178.35);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#663300").s().p("AgZAoQgKgGgHgKQgGgLAAgNQAAgMAGgLQAGgKALgGQAMgFANAAQAOAAALAFQAMAGAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgLAGgOAAQgNAAgMgGgAgMgYQgFAEgDAHQgDAGAAAHQAAAIADAHQADAHAFADQAGAFAGAAQAHAAAGgFQAFgDAEgHQADgHAAgIQAAgHgDgGQgEgHgFgEQgGgEgHAAQgGAAgGAEg");
	this.shape_527.setTransform(671.2,178.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_528.setTransform(663.025,178.325);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_529.setTransform(655.95,178.325);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANAAQAQgBAKAJIAAgHIAPAAIAAAfIgPAAQgGgRgQAAQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_530.setTransform(646.625,178.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_531.setTransform(637.075,178.325);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_532.setTransform(627.725,178.35);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgQIAlAAIAgA3IAAgnIgMAAIAAgQIAoAAIAAAQIgMAAIAABIg");
	this.shape_533.setTransform(617.475,178.35);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgMAGgLQAGgKAMgGQALgFANAAQAPAAAKAFQAMAGAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgKAGgPAAQgNAAgLgGgAgMgYQgGAEgDAHQgCAGAAAHQAAAIACAHQADAHAGADQAGAFAGAAQAIAAAFgFQAGgDADgHQACgHAAgIQAAgHgCgGQgDgHgGgEQgFgEgIAAQgGAAgGAEg");
	this.shape_534.setTransform(606.7,178.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgMAGgKQAGgKALgHQAKgFANAAQAQgBAKAJIAAgHIAPAAIAAAfIgPAAQgGgRgQAAQgHAAgFAFQgGADgEAIQgDAGAAAIQAAAHADAHQADAGAGAEQAFAFAHAAQAJgBAGgGQAHgGACgLIASAJQgKAfgiAAQgNAAgLgGg");
	this.shape_535.setTransform(596.225,178.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#663300").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANAAQAQABAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAFgEAGQgDAHAAAHQAAAJADAGQADAHAGAEQAFADAHAAQAJABAGgHQAHgGACgKIASAIQgKAegiAAQgNAAgLgFg");
	this.shape_536.setTransform(776.925,164.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_537.setTransform(758.325,164.325);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgqAAIAAgPIALAAIAAg5IgLAAIAAgPIAqAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIArAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_538.setTransform(740,164.325);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#663300").s().p("AgnAsIAAgPIALAAIAAg5IgLAAIAAgPIAqAAQATAAAJAHQAJAHAAAOQAAAOgJAGQgJAHgTAAIgIAAIAAARIALAAIAAAPgAgFgCIAEAAQAGAAAEgBQAEgCABgCQACgDAAgFQAAgFgCgDQgDgDgEgBIgIgBIgEAAg");
	this.shape_539.setTransform(720.075,164.325);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIALAAIAAAPIgmAAIAAgPIAKAAIASg5IgNAAIAAgPIA6AAIAAAPIgMAAIASA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_540.setTransform(700.4,164.325);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAyAAQAOAAAIAGQAJAGgBAMQAAAIgDAGQgEAFgIADIAPAaIALAAIAAAPgAgKgIIAJAAQAMAAAAgKQAAgFgDgDQgDgCgFAAIgKAAg");
	this.shape_541.setTransform(680.55,164.325);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#663300").s().p("AgYAoQgMgFgGgKQgGgLAAgOQAAgMAHgLQAGgJAKgGQALgHANAAQARAAAKAKIAAgIIAPAAIAAAgIgPAAQgDgJgHgEQgGgFgIABQgHgBgGAEQgGADgDAHQgDAGAAAJQAAANAHAIQAHAJALgBQAIABAFgEQAFgEADgHIgQAAIAAgPIAqAAQAAAPgGAKQgGAKgLAFQgKAFgPAAQgOAAgLgFg");
	this.shape_542.setTransform(659.475,164.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgMAGgLQAGgKAMgFQAKgHAOAAQAPAAAKAHQAMAFAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgKAFgPAAQgNAAgLgFgAgMgYQgGAEgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFADAHAAQAIAAAFgDQAGgEADgHQACgHAAgIQAAgHgCgHQgDgGgGgEQgFgEgIAAQgHAAgFAEg");
	this.shape_543.setTransform(637.65,164.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_544.setTransform(617.025,164.325);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#663300").s().p("AgYAoQgMgFgGgKQgGgLAAgOQAAgMAHgLQAGgJAKgGQALgHANAAQARAAAKAKIAAgIIAPAAIAAAgIgPAAQgDgJgHgEQgGgFgIABQgHgBgGAEQgGADgDAHQgDAGAAAJQAAANAHAIQAHAJALgBQAIABAFgEQAFgEADgHIgQAAIAAgPIAqAAQAAAPgGAKQgGAKgLAFQgKAFgPAAQgOAAgLgFg");
	this.shape_545.setTransform(596.525,164.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},181).wait(23));

	// Pics
	this.instance = new lib.mountain();
	this.instance.setTransform(527,205,0.1207,0.1207);

	this.instance_1 = new lib.timeline();
	this.instance_1.setTransform(527,322,0.1211,0.1211);

	this.instance_2 = new lib.overpopulation();
	this.instance_2.setTransform(531,461,0.1016,0.1016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},159).wait(45));

	// Precedent
	this.instance_3 = new lib.Biophilicarchitecture27();
	this.instance_3.setTransform(330,176,0.3861,0.3861);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIARg5IgLAAIAAgPIA4AAIAAAPIgMAAIATA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_546.setTransform(434.5,481.025);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_547.setTransform(427.325,481.025);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#663300").s().p("AAUAsIAAgPIAKAAIAAg5IgCAAIgbBIIgJAAIgbhIIgCAAIAAA5IALAAIAAAPIglAAIAAgPIALAAIAAg5IgLAAIAAgPIAsAAIATAzIATgzIAtAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_548.setTransform(417.925,481.025);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_549.setTransform(473.975,468.35);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#663300").s().p("AgkAtIAAgOIAKAAIAAg8IgJAAIAAgOIAdAAIAAAHQAHgIAKAAQAIAAAGAFQAGADADAIQADAHAAAKQAAAJgDAGQgDAHgGAEQgHAEgHAAQgKAAgHgHIAAATIALAAIAAAOgAgDgXQgEAEAAAHQAAAHAEAFQADADAFABQAGgBADgDQADgEAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAFg");
	this.shape_550.setTransform(466.025,469.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQAAAIAEAEQAEAEAFAAQAEAAADgDQACgCAAgEQABgEgEgEQgDgDgGgDQgOgGgFgGQgHgGABgJQAAgHACgFQADgGAGgDQAFgDAHAAQAFAAAEACQADACADAEIAAgHIAQAAIAAAbIgQAAQAAgHgEgDQgDgDgEAAQgEAAgDACQgCACAAADQAAADABACIAFADIAGAEIAEABQAMAFAGAGQAGAHgBAKQAAAMgGAHQgHAHgMAAQgKAAgHgIg");
	this.shape_551.setTransform(458.7,467.025);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#663300").s().p("AgPAcQgIgDgEgHQgFgIAAgJQAAgIAFgIQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAFAEAIQADAIABAKIgtAAQAAAHAFAEQAEAEAFAAQAIAAAHgHIAPAFQgFAIgIADQgHAEgKAAQgJAAgIgEgAANgGQgBgFgEgEQgDgDgFAAQgFAAgDADQgDADgBAGIAZAAIAAAAg");
	this.shape_552.setTransform(448.425,468.375);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#663300").s().p("AgaAfIAAgOIALAAIAAggIgKAAIAAgOIAbAAIAAAPQADgHAGgEQAFgFAJAAIACAAIAAASQgIABgFACQgEACgDAFQgDAEAAAJIAAAGIANAAIAAAOg");
	this.shape_553.setTransform(441.75,468.325);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#663300").s().p("AgWAaQgFgFgBgJIAAgcIgJAAIAAgOIAdAAIAAAlQAAAFACABQABACADAAQAFAAAFgEIAAgbIgIAAIAAgOIAcAAIAAAuIAKAAIAAAOIgeAAIAAgFQgIAGgIAAQgKAAgEgFg");
	this.shape_554.setTransform(434.8,468.425);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#663300").s().p("AgnAsIAAgPIALAAIAAg5IgLAAIAAgPIAqAAQATAAAJAHQAJAHAAAOQAAAOgJAGQgJAHgTAAIgIAAIAAARIALAAIAAAPgAgFgCIAEAAQAGAAAEgBQAEgCABgCQACgDAAgFQAAgFgCgDQgDgDgEgBIgIgBIgEAAg");
	this.shape_555.setTransform(426.525,467.025);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#663300").s().p("AAJAfIAAgkQgBgFgBgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgEAAgGAEIAAAbIAJAAIAAAOIglAAIAAgOIAJAAIAAggIgJAAIAAgOIAcAAIAAAFQAIgGAKAAQAJAAAFAGQAEAGAAALIAAAYIAJAAIAAAOg");
	this.shape_556.setTransform(414.85,468.325);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_557.setTransform(406.975,468.35);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#663300").s().p("AAgAfIAAgjQAAgJgIAAQgGAAgIAEIAAAaIAKAAIAAAOIgdAAIAAgiQAAgKgIAAQgGAAgIAEIAAAaIAKAAIAAAOIgoAAIAAgOIAKAAIAAggIgKAAIAAgOIAeAAIAAAFQAKgGAKAAQALAAAHAIQALgIANAAQAHAAAFACQAEADADAFQACAFAAAJIAAAXIAKAAIAAAOg");
	this.shape_558.setTransform(396.7,468.325);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_559.setTransform(386.575,468.35);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgPIAlAAIAgA2IAAgnIgMAAIAAgPIAoAAIAAAPIgMAAIAABJg");
	this.shape_560.setTransform(377.725,467.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.instance_3}]},150).wait(54));

	// Characteristics
	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_561.setTransform(629.4239,112.725);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#663300").s().p("AgnA2IAAhrIAvAAQAOAAAJAIQAJAIAAAPQAAANgIAJQgIAIgQAAIghAAIAAAugAgZgDIAcAAQAKAAAGgEQAGgEAAgLQAAgMgIgEQgFgCgJAAIgcAAg");
	this.shape_562.setTransform(619.8,112.725);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#663300").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_563.setTransform(612.55,112.725);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_564.setTransform(604.975,112.725);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_565.setTransform(594.4739,112.725);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_566.setTransform(584.125,112.725);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_567.setTransform(572.925,112.725);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#663300").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_568.setTransform(565.15,112.725);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_569.setTransform(558.4,112.725);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#663300").s().p("AAhA2IgMggIgpAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgRgvIgQAvIAhAAg");
	this.shape_570.setTransform(549.95,112.725);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_571.setTransform(541.225,112.725);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#663300").s().p("AgnA2IAAhrIBOAAIAAANIg/AAIAAAhIA5AAIAAALIg5AAIAAAlIBAAAIAAANg");
	this.shape_572.setTransform(531.9,112.725);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIgBgSQAAgLgIgDQgDgCgJAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgIADQAHACADAFQAEAEAAAJIABAPIABAJQABAFADABIAAADgAgcgEIAgAAQAKAAAGgEQAFgEAAgKQAAgMgIgEQgEgCgIAAIghAAg");
	this.shape_573.setTransform(521.55,112.725);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#663300").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgHAOQgKAZgbAAgAgcApIAZAAQAGAAAFgBQAIgDAGgIQAEgHACgKIABgLQAAgTgIgLQgHgLgRAAIgZAAg");
	this.shape_574.setTransform(506.5,112.725);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#663300").s().p("AgmA2IAAhrIBNAAIAAANIhAAAIAAAhIA7AAIAAALIg7AAIAAAlIBBAAIAAANg");
	this.shape_575.setTransform(496.15,112.725);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_576.setTransform(485.8239,112.725);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#663300").s().p("AAhA2IgLggIgqAAIgMAgIgPAAIAohrIAQAAIAnBrgAAQAKIgQgvIgQAvIAgAAg");
	this.shape_577.setTransform(475.9,112.725);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#663300").s().p("AgpA2IAAhrIAuAAQATAAAIALQAFAHAAAJQAAAKgGAHIgJAGQAIADAFADQAHAHAAAMQAAALgHAIQgKANgVAAgAgaApIAeAAQAOAAAGgHQADgFAAgHQAAgMgKgEQgGgDgJAAIgcAAgAgagHIAaAAQAJAAAFgDQAIgEAAgKQAAgLgJgEQgFgCgIAAIgaAAg");
	this.shape_578.setTransform(466.175,112.725);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#663300").s().p("AgSAHIAAgNIAlAAIAAANg");
	this.shape_579.setTransform(657.45,96.925);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#663300").s().p("AgnA2IAAhrIBOAAIAAANIg/AAIAAAhIA5AAIAAALIg5AAIAAAlIBAAAIAAANg");
	this.shape_580.setTransform(650.25,95.725);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_581.setTransform(639.575,95.725);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#663300").s().p("AAgA2IgKggIgqAAIgMAgIgPAAIAphrIAPAAIAnBrgAAQAKIgPgvIgRAvIAgAAg");
	this.shape_582.setTransform(629.2,95.725);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_583.setTransform(620.475,95.725);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#663300").s().p("AgnA2IAAhrIAvAAQAOAAAJAIQAJAIAAAPQAAANgIAJQgIAIgQAAIggAAIAAAugAgYgDIAbAAQAKAAAGgEQAGgEAAgLQAAgMgJgEQgEgCgJAAIgbAAg");
	this.shape_584.setTransform(611.2,95.725);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#663300").s().p("AgkA2IAAhrIBJAAIAAANIg7AAIAAAhIA0AAIAAAMIg0AAIAAAxg");
	this.shape_585.setTransform(597.625,95.725);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_586.setTransform(586.775,95.725);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_587.setTransform(571.7239,95.725);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_588.setTransform(561.375,95.725);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#663300").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_589.setTransform(554.05,95.725);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#663300").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_590.setTransform(547.3,95.725);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_591.setTransform(537.6239,95.725);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#663300").s().p("AgGA2IAAhrIAOAAIAABrg");
	this.shape_592.setTransform(530.75,95.725);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIgBgSQAAgLgIgDQgDgCgJAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgIADQAHACADAFQAEAEAAAJIABAPIABAJQABAFADABIAAADgAgcgEIAfAAQAKAAAHgEQAFgEAAgKQAAgMgIgEQgEgCgIAAIghAAg");
	this.shape_593.setTransform(523.45,95.725);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#663300").s().p("AgnA2IAAhrIBOAAIAAANIg/AAIAAAhIA5AAIAAALIg5AAIAAAlIBAAAIAAANg");
	this.shape_594.setTransform(513,95.725);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#663300").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_595.setTransform(503.2,95.725);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_596.setTransform(493.175,95.725);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#663300").s().p("AAhA2IgMggIgpAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgQgvIgRAvIAhAAg");
	this.shape_597.setTransform(482.8,95.725);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIgBgSQAAgLgIgDQgEgCgIAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgIADQAHACAEAFQACAEABAJIABAPIAAAJQACAFADABIAAADgAgcgEIAfAAQAKAAAHgEQAFgEAAgKQAAgMgIgEQgEgCgIAAIghAAg");
	this.shape_598.setTransform(472.7,95.725);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#663300").s().p("AAgA2IgLggIgpAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgQgvIgRAvIAhAAg");
	this.shape_599.setTransform(462,95.725);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_600.setTransform(451.625,95.725);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_601.setTransform(440.775,95.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561}]},133).wait(71));

	// Place_text
	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#663300").s().p("Ag9BdQgWgVAAgiIAcAAQABASAHALQAOAWAiAAQAQAAANgFQAZgJAAgYQAAgRgLgHQgKgIgXgGIgcgGQgbgGgMgHQgUgOAAgbQAAgdAUgSQAUgTAjAAQAgAAAXARQAXAQAAAkIgbAAQgCgSgHgIQgNgRgeAAQgYgBgLALQgLAMAAAOQAAAPANAIQAIAEAdAIIAdAHQAVAEAMAIQAUAPAAAdQAAAkgaAPQgZAPghAAQgnAAgWgUg");
	this.shape_602.setTransform(263.7744,175.25);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#663300").s().p("AhPBrIAAjWIBgAAQAcABARAQQASAPAAAeQAAAZgQATQgQASgfAAIhCAAIAABagAgxgHIA4AAQAUAAALgJQAMgIABgVQAAgXgSgJQgJgEgRgBIg4AAg");
	this.shape_603.setTransform(244.5,175.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#663300").s().p("AgOBrIAAjWIAdAAIAADWg");
	this.shape_604.setTransform(230.075,175.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#663300").s().p("AA3BrIAAhkIhtAAIAABkIgeAAIAAjWIAeAAIAABZIBtAAIAAhZIAeAAIAADWg");
	this.shape_605.setTransform(214.825,175.2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#663300").s().p("Ag9BdQgWgVAAgiIAcAAQABASAHALQAOAWAiAAQAQAAANgFQAZgJAAgYQAAgRgLgHQgKgIgXgGIgcgGQgbgGgMgHQgUgOAAgbQAAgdAUgSQAUgTAjAAQAgAAAXARQAXAQAAAkIgbAAQgCgSgHgIQgNgRgeAAQgYgBgLALQgLAMAAAOQAAAPANAIQAIAEAdAIIAdAHQAVAEAMAIQAUAPAAAdQAAAkgaAPQgZAPghAAQgnAAgWgUg");
	this.shape_606.setTransform(193.8244,175.25);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#663300").s().p("AA0BrIhsisIAACsIgcAAIAAjWIAiAAIBrCtIAAitIAcAAIAADWg");
	this.shape_607.setTransform(173.125,175.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#663300").s().p("AhPBRQgZggAAgwQAAgrAWgfQAbgoA3AAQA4AAAbAlQAWAcAAAtQAAAvgYAgQgdAmg0AAQgyAAgdghgAg0hAQgWAXABAsQgBAkATAYQASAZAnAAQAnAAARgcQARgcAAgjQAAgmgUgXQgTgXgjAAQggAAgVAXg");
	this.shape_608.setTransform(150.7,175.225);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#663300").s().p("AgOBrIAAjWIAdAAIAADWg");
	this.shape_609.setTransform(135.175,175.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#663300").s().p("AgOBrIAAi8IhIAAIAAgaICtAAIAAAaIhIAAIAAC8g");
	this.shape_610.setTransform(121.675,175.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhATIghheIghBeIBCAAg");
	this.shape_611.setTransform(104.75,175.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#663300").s().p("AhDBrIAAjWIAdAAIAAC9IBrAAIAAAZg");
	this.shape_612.setTransform(87.2,175.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#663300").s().p("AhOBrIAAjWICbAAIAAAaIh/AAIAABCIB1AAIAAAYIh1AAIAABJICBAAIAAAZg");
	this.shape_613.setTransform(68.525,175.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#663300").s().p("AA0BrIgCgHIgCgRIgCgkQgBgVgOgHQgIgEgRAAIhAAAIAABcIgdAAIAAjWIBhAAQAYAAAQAIQAeANAAAmQAAASgIANQgIANgPAFQANAGAGAIQAHAIAAAUIABAcQABAMABAGQADAKAHAEIAAAEgAg6gIIBBAAQAUAAALgJQAMgHAAgWQAAgXgQgIQgJgEgOgBIhFAAg");
	this.shape_614.setTransform(47.825,175.2);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#663300").s().p("AhXBsIAAjWIBWAAQArgBAYAgQAWAcAAAsQAAAigNAbQgWAyg2AAgAg5BTIAzAAQANAAAJgEQARgFALgRQAIgNAEgUQACgMAAgKQAAgngQgWQgPgXgiAAIgyAAg");
	this.shape_615.setTransform(266.275,143.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#663300").s().p("AhOBsIAAjWICbAAIAAAaIh/AAIAABBIB1AAIAAAYIh1AAIAABJICBAAIAAAag");
	this.shape_616.setTransform(245.575,143.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#663300").s().p("Ag9BdQgWgVAAgjIAcAAQABATAHAMQAOAUAiABQAQgBANgEQAZgJAAgXQAAgSgLgIQgKgHgXgFIgcgHQgbgHgMgGQgUgNAAgbQAAgeAUgSQAUgSAjAAQAgAAAXAQQAXAQAAAkIgbAAQgCgSgHgJQgNgRgeAAQgYAAgLAMQgLAKAAAOQAAARANAHQAIAFAdAGIAdAHQAVAFAMAIQAUAPAAAdQAAAjgaAQQgZAQghAAQgnAAgWgVg");
	this.shape_617.setTransform(224.9244,143.25);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#663300").s().p("ABABsIgWhBIhUAAIgXBBIgeAAIBRjWIAgAAIBODWgAAhAUIghhfIgiBfIBDAAg");
	this.shape_618.setTransform(205.15,143.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#663300").s().p("AhSBsIAAjWIBbAAQAnAAAQAWQAJANAAASQAAAUgMANQgFAHgMAGQARAGAIAHQAPAOAAAZQAAAVgOARQgTAZgrAAgAg2BTIA+AAQAcAAAMgQQAGgKAAgOQABgXgWgIQgLgFgSAAIg6AAgAg2gPIA2AAQARgBALgFQAQgIAAgVQAAgVgRgHQgKgFgSAAIg1AAg");
	this.shape_619.setTransform(185.65,143.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#663300").s().p("AgkAOIAAgaIBJAAIAAAag");
	this.shape_620.setTransform(170.075,145.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#663300").s().p("AhOBsIAAjWICbAAIAAAaIh/AAIAABBIB1AAIAAAYIh1AAIAABJICBAAIAAAag");
	this.shape_621.setTransform(155.625,143.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#663300").s().p("Ag8BbQgigeABg+QAAgwAYgeQAcghAuAAQAoAAAXAVQAWAWACAbIgcAAQgFgVgOgMQgOgMgaAAQgeAAgTAWQgUAXABAtQAAAmARAXQASAYAhAAQAfAAARgZQAJgNAEgVIAdAAQgFAigUAXQgaAbgrAAQgkAAgZgWg");
	this.shape_622.setTransform(134.25,143.175);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#663300").s().p("ABABsIgWhBIhUAAIgXBBIgeAAIBRjWIAgAAIBODWgAAhAUIghhfIgiBfIBDAAg");
	this.shape_623.setTransform(113.55,143.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#663300").s().p("AhDBsIAAjWIAdAAIAAC8IBrAAIAAAag");
	this.shape_624.setTransform(96,143.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#663300").s().p("AhPBsIAAjWIBfAAQAdAAARAPQASARAAAdQAAAZgPATQgRARggAAIhBAAIAABcgAgxgHIA4AAQATAAANgIQAMgJgBgVQAAgYgRgIQgKgFgQAAIg4AAg");
	this.shape_625.setTransform(77.4,143.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#663300").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_626.setTransform(54.35,152.35);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#663300").s().p("AgxBbQgUgOgCgeIAbAAQADAWASAJQAKAEAMAAQAWAAAMgPQALgPAAgSQAAgWgNgMQgOgLgSAAQgNAAgKAGQgKAFgHAIIgWgBIAQhwIBrAAIAAAZIhYAAIgJA7QAIgGAGgDQAMgEAOAAQAdAAAUASQAUASAAAcQAAAegSAXQgSAXgoAAQgZAAgUgPg");
	this.shape_627.setTransform(41.775,143.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602}]},114).wait(90));

	// Leaf_Stand
	this.instance_4 = new lib.LeafStand();
	this.instance_4.setTransform(-61,216,0.1428,0.1428);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).wait(90));

	// Plain_Box
	this.instance_5 = new lib.Tween30("synched",0);
	this.instance_5.setTransform(541.15,313.55,1.0711,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133).to({_off:false},0).wait(71));

	// Plain_Back
	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#E5E0D8").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_628.setTransform(399.025,300.025);
	this.shape_628._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_628).wait(114).to({_off:false},0).wait(90));

	// Arrow2
	this.Arrow_btn = new lib.Arrow();
	this.Arrow_btn.name = "Arrow_btn";
	this.Arrow_btn.setTransform(636.5,420,1,1,0,0,0,9.5,14);
	this.Arrow_btn._off = true;
	new cjs.ButtonHelper(this.Arrow_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Arrow_btn).wait(88).to({_off:false},0).to({_off:true},26).wait(90));

	// Definition
	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_629.setTransform(571.675,347.725);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#663300").s().p("AgeA4IAAgNIAQAAIAJgXIgZg9IgNAAIAAgOIAmAAIAAAOIgJAAIAQAqIAQgqIgKAAIAAgOIAkAAIAAAOIgLAAIglBhg");
	this.shape_630.setTransform(564.625,346.575);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#663300").s().p("AgEAvQgEgFgBgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgMACQgIAAgEgFg");
	this.shape_631.setTransform(557.55,343.65);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#663300").s().p("AgTA4IAAgOIAMAAIAAgwIgMAAIAAgOIAbAAIAAA+IALAAIAAAOgAgFgoQgEgCAAgEQAAgDAEgDQACgDADAAQADAAADADQADACAAAEQAAAEgDACQgDADgDABQgDgBgCgDg");
	this.shape_632.setTransform(552.85,343.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFABQgJgBgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_633.setTransform(545.875,344.8);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_634.setTransform(536.525,344.925);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgCgFAAQgEgBgGADQgFACgGAGIAAAnIANAAIAAAOIgbAAIAAgyQAAgHgDgEQgCgCgFAAQgIgBgOALIAAAnIAOAAIAAAOIgrAAIAAgOIAOAAIAAgwIgNAAIAAgOIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAGQAFAFAAAMIAAAoIAOAAIAAAOg");
	this.shape_635.setTransform(524.775,344.8);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgCgFAAQgEgBgGADQgFACgGAGIAAAnIANAAIAAAOIgbAAIAAgyQAAgHgDgEQgCgCgFAAQgIgBgOALIAAAnIAOAAIAAAOIgrAAIAAgOIAOAAIAAgwIgNAAIAAgOIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAGQAFAFAAAMIAAAoIAOAAIAAAOg");
	this.shape_636.setTransform(510.675,344.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQALAAAKAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgLgWQgGAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_637.setTransform(498.95,344.875);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_638.setTransform(490.225,344.875);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_639.setTransform(477.225,344.875);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_640.setTransform(467.9,343.175);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#663300").s().p("AgEAvQgEgFgBgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgMACQgIAAgEgFg");
	this.shape_641.setTransform(460.8,343.65);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_642.setTransform(451,344.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAJgFAKAAQAMAAAJAGQAJAFAFAKQAFAJABAKQAAALgGAJQgFAKgKAFQgIAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQADgGAAgHQAAgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_643.setTransform(442.95,344.875);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_644.setTransform(436.675,343.075);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#663300").s().p("AgEAvQgFgFAAgMIAAgqIgJAAIAAgNIAJAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAoQgBAFACADQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgLACQgIAAgEgFg");
	this.shape_645.setTransform(427.2,343.65);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgoQgCgCAAgEQAAgDACgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDADgDABQgDgBgDgDg");
	this.shape_646.setTransform(422.5,343.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_647.setTransform(411.275,346.625);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFABQgJgBgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_648.setTransform(401.325,344.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgoQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEABQgDgBgCgDg");
	this.shape_649.setTransform(394.3,343.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgLgCgGgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIANAAIAAAaIgNAAIAAgFQgHgJgKAAQgGAAgFACQgDADAAAEQAAAEACACQAEACAKACIAJACQAWAEAAARQAAALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_650.setTransform(388.3,344.875);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_651.setTransform(379.925,344.925);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgLQAAgLAFgIQAFgKAJgFQAJgGAKABQAIAAAFACQAHADAGAHIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAFAGAEQAGAEAGgBQAGAAAGgDQAGgEADgGQADgGAAgIQAAgHgDgGQgDgFgGgDQgGgEgGAAQgHAAgFAEg");
	this.shape_652.setTransform(674.425,326.25);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNALIAAAoIAOAAIAAANIgqAAIAAgNIAOAAIAAgxIgOAAIAAgOIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_653.setTransform(664.475,327.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_654.setTransform(655.575,327.825);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_655.setTransform(642.325,327.875);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_656.setTransform(632.475,329.525);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_657.setTransform(623.475,327.825);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_658.setTransform(614.775,327.875);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACALACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_659.setTransform(606.75,327.875);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgLQAAgLAFgIQAFgKAJgFQAJgGAKABQAIAAAFACQAHADAGAHIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAFAGAEQAGAEAGgBQAGAAAGgDQAGgEADgGQADgGAAgIQAAgHgDgGQgDgFgGgDQgGgEgGAAQgHAAgFAEg");
	this.shape_660.setTransform(598.075,326.25);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNALIAAAoIAOAAIAAANIgqAAIAAgNIAOAAIAAgxIgOAAIAAgOIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_661.setTransform(588.125,327.8);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_662.setTransform(579.225,327.825);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_663.setTransform(572.175,326.175);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_664.setTransform(561.175,327.875);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_665.setTransform(551.85,326.175);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#663300").s().p("AgEAvQgFgFAAgMIAAgqIgKAAIAAgNIAKAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAnQgBAGACADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIAHgBIAAAOIgLACQgIAAgEgFg");
	this.shape_666.setTransform(544.75,326.65);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_667.setTransform(536.575,326.075);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgKAFQgJAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGgBAGQABAHADAGQADAGAGADQAFAEAGAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_668.setTransform(528.95,327.875);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAnQAAAGABADQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_669.setTransform(517.9,326.65);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#663300").s().p("AgSA4IAAgNIAMAAIAAgxIgMAAIAAgOIAaAAIAAA/IAMAAIAAANgAgGgoQgCgCAAgEQAAgDACgDQADgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCAEgEAAQgDAAgDgEg");
	this.shape_670.setTransform(513.2,326.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgxIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAGgEAOAAIADAAIAAAPIgDAAQgNAAgGADQgGAEgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_671.setTransform(507.6,327.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgxIgLAAIAAgOIAaAAIAAA/IALAAIAAANgAgGgoQgDgCAAgEQAAgDADgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDAEgDAAQgDAAgDgEg");
	this.shape_672.setTransform(501.9,326.1);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_673.setTransform(494.375,329.525);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACAKACIAKACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_674.setTransform(485.8,327.875);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_675.setTransform(473.325,327.875);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIANAAIAAANg");
	this.shape_676.setTransform(464,326.175);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#663300").s().p("AgEAvQgFgFAAgMIAAgqIgJAAIAAgNIAJAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAnQAAAGABADQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgLACQgIAAgEgFg");
	this.shape_677.setTransform(456.9,326.65);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_678.setTransform(445.525,329.625);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNALIAAAoIAOAAIAAANIgqAAIAAgNIAOAAIAAgxIgOAAIAAgOIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_679.setTransform(435.575,327.8);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgxIgLAAIAAgOIAaAAIAAA/IALAAIAAANgAgGgoQgDgCAAgEQAAgDADgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDAEgDAAQgDAAgDgEg");
	this.shape_680.setTransform(428.55,326.1);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#663300").s().p("AgeAnIAAgNIAPAAIAAgxIgPAAIAAgOIAcAAIAAARQADgKAHgEQAHgEANAAIADAAIAAAPIgDAAQgNAAgGADQgGAEgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_681.setTransform(422.95,327.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_682.setTransform(414.925,327.925);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAnQAAAGABADQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_683.setTransform(407.75,326.65);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_684.setTransform(400.075,329.525);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_685.setTransform(391.075,327.825);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#663300").s().p("AgbAxQgMgIgIgNQgGgMAAgQQAAgPAGgNQAIgOAMgHQAMgHAQAAQAKAAAKAEQAJADAHAHIAAgMIAOAAIAAAjIgOAAQgGgLgJgFQgJgHgLAAQgKAAgJAHQgJAFgFAKQgEAJAAALQAAALAEAJQAFAKAKAGQAIAGAKAAQAOgBAJgHQALgJAEgPIAPAIQgHATgOAJQgPALgSAAQgQAAgMgIg");
	this.shape_686.setTransform(380.35,326.2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_687.setTransform(367.775,330.725);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIANAAIAAAaIgNAAIAAgFQgGgJgKAAQgGAAgEACQgEADgBAEQABAEADACQACACAKACIAKACQAXAEAAARQAAALgIAGQgJAHgNAAQgFAAgFgCg");
	this.shape_688.setTransform(361.7,327.875);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#663300").s().p("AgEAvQgEgFgBgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAnQABAGABADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgMACQgIAAgEgFg");
	this.shape_689.setTransform(355.5,326.65);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNALIAAAoIAOAAIAAANIgqAAIAAgNIAOAAIAAgxIgOAAIAAgOIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_690.setTransform(348.375,327.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_691.setTransform(339.475,327.825);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_692.setTransform(332.425,326.175);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_693.setTransform(324.875,329.525);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_694.setTransform(311.325,327.875);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_695.setTransform(302.075,327.925);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgxIgLAAIAAgOIAaAAIAAA/IALAAIAAANgAgGgoQgCgCAAgEQAAgDACgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDAEgDAAQgDAAgDgEg");
	this.shape_696.setTransform(295.15,326.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgNIAKAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAnQAAAGACADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgFgFg");
	this.shape_697.setTransform(290.45,326.65);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_698.setTransform(283.875,327.825);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNALIAAAoIAOAAIAAANIgqAAIAAgNIAOAAIAAgxIgOAAIAAgOIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_699.setTransform(274.625,327.8);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgLQAAgKAFgJQAFgKAJgFQAJgFAKAAQAIAAAFACQAHADAGAHIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAFAGAEQAGAEAGgBQAGAAAGgDQAGgEADgGQADgHAAgHQAAgHgDgGQgDgEgGgEQgGgEgGAAQgHAAgFAEg");
	this.shape_700.setTransform(682.125,309.25);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_701.setTransform(672.175,310.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_702.setTransform(663.275,310.825);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#663300").s().p("AgJAMQAJgBAAgLIAAAAIgJAAIAAgUIATAAIAAATQAAAHgCAFQgCAFgEACQgDACgIABg");
	this.shape_703.setTransform(652.325,314.825);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_704.setTransform(646.25,310.875);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_705.setTransform(637.825,310.875);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_706.setTransform(628.625,310.925);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#663300").s().p("AADA4IAAgNIAPAAIAAgfQgLAMgQAAQgKAAgJgFQgIgGgFgJQgFgJAAgKQAAgLAFgKQAFgJAIgFQAJgFAKAAQAQAAALANIAAgMIAcAAIAAANIgNAAIAABUIAOAAIAAANgAgXgjQgHAIAAALQAAANAHAGQAGAHAMAAQAFAAAGgDQAFgDAEgFQADgGAAgHQAAgIgDgGQgEgGgFgEQgGgEgGAAQgLAAgGAHg");
	this.shape_707.setTransform(619.1,312.525);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgoQgCgCAAgEQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAEgDACQgDAEgDAAQgDAAgDgEg");
	this.shape_708.setTransform(611.6,309.1);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_709.setTransform(604.625,310.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_710.setTransform(595.15,309.175);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_711.setTransform(586.325,310.875);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_712.setTransform(577.375,310.875);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACACQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgFgFg");
	this.shape_713.setTransform(570.35,309.65);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_714.setTransform(559.175,310.8);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_715.setTransform(549.525,312.625);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#663300").s().p("AgSA4IAAgNIAMAAIAAgyIgMAAIAAgNIAaAAIAAA/IAMAAIAAANgAgFgoQgDgCAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCAEgEAAQgDAAgCgEg");
	this.shape_716.setTransform(542,309.1);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_717.setTransform(536,310.875);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_718.setTransform(527.575,310.875);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgLQAAgKAFgJQAFgKAJgFQAJgFAKAAQAIAAAFACQAHADAGAHIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAFAGAEQAGAEAGgBQAGAAAGgDQAGgEADgGQADgHAAgHQAAgHgDgGQgDgEgGgEQgGgEgGAAQgHAAgFAEg");
	this.shape_719.setTransform(518.075,309.25);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACALACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_720.setTransform(505.05,310.875);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_721.setTransform(496.675,310.925);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJAAgLQAAgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgKAFQgIAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgDAGgBAGQABAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgFAAgGADg");
	this.shape_722.setTransform(487.3,310.875);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_723.setTransform(478.025,310.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_724.setTransform(468.625,310.875);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_725.setTransform(459.125,312.625);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#663300").s().p("AgTA4IAAgNIAMAAIAAgyIgMAAIAAgNIAbAAIAAA/IALAAIAAANgAgFgoQgEgCAAgEQAAgEAEgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDACQgDAEgDAAQgDAAgCgEg");
	this.shape_726.setTransform(451.6,309.1);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgLQAAgKAFgJQAFgKAJgFQAJgFAKAAQAIAAAFACQAHADAGAHIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAFAGAEQAGAEAGgBQAGAAAGgDQAGgEADgGQADgHAAgHQAAgHgDgGQgDgEgGgEQgGgEgGAAQgHAAgFAEg");
	this.shape_727.setTransform(444.425,309.25);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_728.setTransform(434.475,310.8);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgoQgCgCAAgEQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAEgDACQgDAEgDAAQgDAAgDgEg");
	this.shape_729.setTransform(427.45,309.1);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#663300").s().p("AgJAMQAJgBAAgLIAAAAIgJAAIAAgUIATAAIAAATQAAAHgCAFQgCAFgEACQgDACgIABg");
	this.shape_730.setTransform(418.775,314.825);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_731.setTransform(412.7,310.875);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_732.setTransform(406.425,309.175);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_733.setTransform(399.975,310.825);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#663300").s().p("AgSA4IAAgNIAMAAIAAgyIgMAAIAAgNIAaAAIAAA/IAMAAIAAANgAgGgoQgCgCAAgEQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCAEgEAAQgDAAgDgEg");
	this.shape_734.setTransform(393.15,309.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAbAAIAAASQAEgLAHgEQAGgEAOAAIADAAIAAAPIgDAAQgNAAgGAEQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_735.setTransform(387.55,310.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_736.setTransform(379.475,310.875);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAOAAIAAAOIgOAAIAAAnQAAAHACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_737.setTransform(372.45,309.65);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_738.setTransform(365.875,310.825);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgDQgCgBgFAAQgEAAgGACQgFADgGAEIAAApIANAAIAAANIgbAAIAAgxQAAgIgDgEQgCgCgFAAQgIgBgOAKIAAApIAOAAIAAANIgrAAIAAgNIAOAAIAAgyIgNAAIAAgNIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAFQAFAGAAALIAAAqIAOAAIAAANg");
	this.shape_739.setTransform(354.325,310.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_740.setTransform(340.675,309.175);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_741.setTransform(334.225,310.825);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_742.setTransform(325.525,310.875);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQADgGAAgHQAAgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_743.setTransform(316.6,310.875);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_744.setTransform(309.525,309.175);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_745.setTransform(298.275,312.625);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJgBgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_746.setTransform(288.325,310.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgoQgCgCAAgEQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAEgDACQgDAEgDAAQgDAAgDgEg");
	this.shape_747.setTransform(281.3,309.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgGAAgEACQgEADgBAEQABAEADACQACACAKACIAKACQAXAEAAARQAAALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_748.setTransform(275.3,310.875);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_749.setTransform(266.925,310.925);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#663300").s().p("AgeA4IAAgNIAQAAIAJgXIgZg9IgNAAIAAgOIAmAAIAAAOIgJAAIAQAqIAQgqIgKAAIAAgOIAkAAIAAAOIgLAAIglBhg");
	this.shape_750.setTransform(683.775,295.575);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAAMIgcAAIAAgOIAOAAIAAhTIgOAAIAAgNIAcAAIAAAsQAMgNAQABQAKAAAJAFQAIAFAFAJQAFAJAAAKQAAALgFAKQgFAJgIAFQgJAGgLAAQgIAAgHgDgAgFgGQgGAEgDAFQgDAFAAAJQAAAHADAGQADAFAGAEQAFADAGAAQAIAAAFgDQAGgFADgFQADgHAAgHQAAgHgDgGQgDgFgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_751.setTransform(673.875,292.25);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgKQAAgMAFgIQAFgJAJgGQAJgFAKAAQAIAAAFACQAHAEAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAGQADAFAGAEQAGADAGAAQAGAAAGgDQAGgEADgGQADgHAAgHQAAgHgDgGQgDgEgGgEQgGgDgGAAQgHAAgFADg");
	this.shape_752.setTransform(659.975,292.25);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_753.setTransform(650.075,293.875);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_754.setTransform(640.825,293.925);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_755.setTransform(631.525,293.875);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgnQgCgDAAgEQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgDgDg");
	this.shape_756.setTransform(624.65,292.1);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_757.setTransform(617.65,292.175);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_758.setTransform(608.825,293.875);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_759.setTransform(600.375,293.825);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgGAAgEACQgEADgBAEQAAAEAEACQACACAKACIAKACQAXAEAAARQAAALgIAGQgJAHgNAAQgFAAgFgCg");
	this.shape_760.setTransform(588.05,293.875);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#663300").s().p("AgTA4IAAgNIAMAAIAAgyIgMAAIAAgNIAbAAIAAA/IALAAIAAANgAgGgnQgDgDAAgEQAAgEADgDQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgDgDg");
	this.shape_761.setTransform(582,292.1);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFgBgJQABgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgEACQgEADAAAEQAAAEADACQADACAJACIAKACQAXAEAAARQAAALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_762.setTransform(571.95,293.875);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#663300").s().p("AgTA4IAAgNIAMAAIAAgyIgMAAIAAgNIAbAAIAAA/IALAAIAAANgAgFgnQgEgDAAgEQAAgEAEgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgCgDg");
	this.shape_763.setTransform(565.9,292.1);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAgBAXIAAAqIANAAIAAANg");
	this.shape_764.setTransform(558.9,292.175);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#663300").s().p("AgWA3IAAgOIAOAAIAAhRIgWAAIAAAaIgOAAIAAgoIBZAAIAAAoIgOAAIAAgaIgXAAIAABRIAPAAIAAAOg");
	this.shape_765.setTransform(549.275,292.175);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_766.setTransform(537.925,296.725);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#663300").s().p("AgJAMQAJgBAAgLIAAAAIgJAAIAAgUIATAAIAAAUQAAALgFAFQgEAEgKABg");
	this.shape_767.setTransform(533.425,288.725);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAFADQAGAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgLgCgGgFQgFgFgBgJQABgHAEgFQADgGAHgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgGAAgEACQgDADAAAEQAAAEACACQADACALACIAJACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_768.setTransform(527.6,293.875);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIANAAIAAAaIgNAAIAAgFQgGgJgLAAQgFAAgEACQgEADgBAEQABAEADACQACACAKACIAKACQAXAEAAARQAAALgIAGQgJAHgNAAQgFAAgFgCg");
	this.shape_769.setTransform(520.1,293.875);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_770.setTransform(511.675,293.875);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJAAgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_771.setTransform(502.375,293.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#663300").s().p("AgXAIIAAgPIAvAAIAAAPg");
	this.shape_772.setTransform(494.725,293.875);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgGAAgEACQgEADgBAEQABAEADACQACACAKACIAKACQAXAEAAARQAAALgIAGQgJAHgNAAQgFAAgFgCg");
	this.shape_773.setTransform(488.15,293.875);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_774.setTransform(480.65,293.875);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_775.setTransform(472.225,293.875);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_776.setTransform(465.125,292.175);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_777.setTransform(458.175,293.875);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_778.setTransform(449.425,293.875);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_779.setTransform(440.975,293.825);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_780.setTransform(433.925,292.175);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_781.setTransform(426.375,295.525);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#663300").s().p("AgJAVIAAgVQAAgJAFgFQAEgFAKgBIAAAJQgKABAAAKIAAABIAKAAIAAAUg");
	this.shape_782.setTransform(419.375,288.725);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_783.setTransform(411.525,292.075);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQADgGAAgHQAAgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_784.setTransform(403.9,293.875);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_785.setTransform(390.625,293.875);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACAKACIAKACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_786.setTransform(382.3,293.875);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJAAgNAKIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_787.setTransform(373.825,293.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_788.setTransform(364.425,293.875);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACALACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_789.setTransform(356.1,293.875);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_790.setTransform(343.625,293.875);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgqAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAqQAOgLALAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_791.setTransform(334.3,292.175);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAOgOIAAAZIANAAIAAAOIgNAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAIgBIAAAOIgKACQgJAAgFgFg");
	this.shape_792.setTransform(327.2,292.65);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#663300").s().p("AgcAyQgJgFgEgIQgFgKAAgKQAAgMAFgIQAFgJAJgGQAJgFAKAAQAIAAAFACQAHAEAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAGQADAFAGAEQAGADAGAAQAGAAAGgDQAGgEADgGQADgHAAgHQAAgHgDgGQgDgEgGgEQgGgDgGAAQgHAAgFADg");
	this.shape_793.setTransform(315.825,292.25);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IALAAIAAANgAgGgnQgCgDAAgEQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgDAAgDgDg");
	this.shape_794.setTransform(308.3,292.1);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgGADg");
	this.shape_795.setTransform(301.4,293.875);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_796.setTransform(292.175,293.925);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_797.setTransform(283.375,293.825);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAFAKQAFAJABAKQAAALgGAJQgFAKgKAFQgJAGgLAAQgKAAgJgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQADgGAAgHQAAgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_798.setTransform(270.15,293.875);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAPgOIAAAZIAOAAIAAAOIgOAAIAAAnQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgMACQgIAAgEgFg");
	this.shape_799.setTransform(263.15,292.65);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACALACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_800.setTransform(655.8,276.875);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_801.setTransform(647.375,276.875);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_802.setTransform(638.625,276.875);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_803.setTransform(630.175,276.825);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_804.setTransform(620.375,278.525);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEAEACQACACAKACIAKACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_805.setTransform(611.8,276.875);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#663300").s().p("AgcAyQgJgEgEgJQgFgKAAgKQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFADQAHAEAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgGQADgGAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_806.setTransform(599.075,275.25);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_807.setTransform(589.125,276.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_808.setTransform(580.225,276.825);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEADACQADACAJACIAKACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_809.setTransform(567.9,276.875);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_810.setTransform(559.225,278.625);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_811.setTransform(549.275,276.8);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#663300").s().p("AgTA4IAAgNIANAAIAAgyIgNAAIAAgNIAbAAIAAA/IAMAAIAAANgAgFgnQgDgDgBgEQABgEADgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDABQgDgBgCgCg");
	this.shape_812.setTransform(542.25,275.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#663300").s().p("AgcAyQgJgEgEgJQgFgKAAgKQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFADQAHAEAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgGQADgGAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_813.setTransform(535.075,275.25);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_814.setTransform(527.325,275.175);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#663300").s().p("AgSA4IAAgNIALAAIAAgyIgLAAIAAgNIAaAAIAAA/IAMAAIAAANgAgGgnQgCgDAAgEQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEABQgDgBgDgCg");
	this.shape_815.setTransform(522.75,275.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_816.setTransform(515.875,276.925);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAAMIgcAAIAAgOIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgNAQgBQAKABAJAFQAIAFAFAJQAFAIAAALQAAALgFAKQgFAJgIAFQgJAGgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAHADAFQADAGAGAEQAFAEAGAAQAIgBAFgEQAGgEADgFQADgHAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_817.setTransform(505.875,275.25);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_818.setTransform(495.175,275.075);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_819.setTransform(487.55,276.875);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgEACQgEADAAAEQAAAEADACQADACAJACIAKACQAXAEAAARQAAALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_820.setTransform(475.2,276.875);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_821.setTransform(466.725,276.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_822.setTransform(457.075,278.625);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#663300").s().p("AgTA4IAAgNIANAAIAAgyIgNAAIAAgNIAbAAIAAA/IAMAAIAAANgAgFgnQgDgDgBgEQABgEADgDQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDABQgDgBgCgCg");
	this.shape_823.setTransform(449.55,275.1);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEACACQADACALACIAJACQAWAEAAARQAAALgIAGQgIAHgNAAQgFAAgFgCg");
	this.shape_824.setTransform(443.55,276.875);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_825.setTransform(435.125,276.875);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#663300").s().p("AgcAyQgJgEgEgJQgFgKAAgKQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFADQAHAEAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgGgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgGQADgGAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_826.setTransform(425.625,275.25);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAPIgEAAQgMABgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_827.setTransform(413,276.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJAAgLQAAgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgKAFQgIAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgDAGgBAGQABAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgFAAgGADg");
	this.shape_828.setTransform(404.95,276.875);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_829.setTransform(398.675,275.075);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgEACQgEADAAAEQAAAEADACQADACAJACIAKACQAXAEAAARQAAALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_830.setTransform(387.9,276.875);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_831.setTransform(379.475,276.875);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_832.setTransform(369.975,278.625);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_833.setTransform(360.575,276.825);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#663300").s().p("AgeAnIAAgNIAQAAIAAgyIgQAAIAAgNIAcAAIAAASQADgLAHgEQAGgEANAAIAEAAIAAAPIgEAAQgMABgGADQgGADgCAHQgBAGAAALIAAASIAQAAIAAANg");
	this.shape_834.setTransform(352.7,276.8);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_835.setTransform(344.675,276.925);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAIgFALAAQALAAAKAGQAJAFAGAKQAEAJABAKQAAALgGAJQgFAKgKAFQgJAGgLAAQgLAAgIgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgGAAgFADg");
	this.shape_836.setTransform(335.3,276.875);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_837.setTransform(326.575,276.875);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFgBQgJABgNAJIAAApIAOAAIAAANIgqAAIAAgNIAOAAIAAgyIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAGQAFAHAAANIAAAmIANAAIAAANg");
	this.shape_838.setTransform(317.575,276.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_839.setTransform(308.175,276.875);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgOIALAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQABAHABABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAIAIgBIAAAOIgLACQgJAAgEgFg");
	this.shape_840.setTransform(297.1,275.65);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#663300").s().p("AgTA3IAAgOIAMAAIAAhRIgMAAIAAgOIAnAAIAAAOIgMAAIAABRIAMAAIAAAOg");
	this.shape_841.setTransform(292.175,275.175);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#E5D8C4").s().p("A+3JTQi9AAAAjIIAAsVQAAjIC9AAMA96AAAQCyAGAADCIAAMVQAADCiyAGg");
	this.shape_842.setTransform(468.575,319.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629}]},70).to({state:[]},44).wait(90));

	// Light_Space_Text
	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#663300").s().p("Ag9BdQgWgUAAgkIAcAAQABATAHAMQAOAUAiAAQAQAAANgEQAZgJAAgXQAAgSgLgIQgKgHgXgFIgcgHQgbgGgMgHQgUgNAAgcQAAgcAUgTQAUgSAjAAQAgAAAXAQQAXAQAAAkIgbAAQgCgSgHgJQgNgRgeAAQgYAAgLAMQgLAKAAAOQAAARANAHQAIAFAdAGIAdAHQAVAFAMAIQAUAPAAAdQAAAkgaAPQgZAQghAAQgnAAgWgVg");
	this.shape_843.setTransform(580.9744,187.45);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#663300").s().p("AhPBsIAAjWIBfAAQAdgBASARQARAQAAAdQAAAZgPATQgQARghABIhBAAIAABbgAgxgHIA4AAQATAAANgIQAMgJgBgVQAAgYgRgIQgKgFgQABIg4AAg");
	this.shape_844.setTransform(561.7,187.4);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#663300").s().p("AgOBsIAAjWIAdAAIAADWg");
	this.shape_845.setTransform(547.275,187.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#663300").s().p("AA3BsIAAhlIhtAAIAABlIgeAAIAAjWIAeAAIAABYIBtAAIAAhYIAeAAIAADWg");
	this.shape_846.setTransform(532.025,187.4);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#663300").s().p("Ag9BdQgWgUAAgkIAcAAQABATAHAMQAOAUAiAAQAQAAANgEQAZgJAAgXQAAgSgLgIQgKgHgXgFIgcgHQgbgGgMgHQgUgNAAgcQAAgcAUgTQAUgSAjAAQAgAAAXAQQAXAQAAAkIgbAAQgCgSgHgJQgNgRgeAAQgYAAgLAMQgLAKAAAOQAAARANAHQAIAFAdAGIAdAHQAVAFAMAIQAUAPAAAdQAAAkgaAPQgZAQghAAQgnAAgWgVg");
	this.shape_847.setTransform(511.0244,187.45);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#663300").s().p("AA0BsIhsitIAACtIgcAAIAAjWIAiAAIBrCsIAAisIAcAAIAADWg");
	this.shape_848.setTransform(490.325,187.4);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#663300").s().p("AhOBRQgaggAAgwQAAgrAWgfQAcgoA2AAQA4AAAcAlQAVAcAAAtQAAAvgZAgQgcAmg1AAQgxAAgcghgAg1hAQgUAXgBAsQABAkARAYQASAZAoAAQAnAAARgcQARgcAAgjQAAgmgTgXQgUgXgjAAQggAAgWAXg");
	this.shape_849.setTransform(467.9,187.425);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#663300").s().p("AgOBsIAAjWIAdAAIAADWg");
	this.shape_850.setTransform(452.375,187.4);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#663300").s().p("AgOBsIAAi9IhIAAIAAgZICtAAIAAAZIhIAAIAAC9g");
	this.shape_851.setTransform(438.875,187.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#663300").s().p("ABABsIgWhBIhUAAIgXBBIgeAAIBRjWIAgAAIBODWgAAhAUIghhfIgiBfIBDAAg");
	this.shape_852.setTransform(421.95,187.4);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#663300").s().p("AhEBsIAAjWIAdAAIAAC8IBrAAIAAAag");
	this.shape_853.setTransform(404.4,187.4);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#663300").s().p("AhOBsIAAjWICbAAIAAAaIh/AAIAABBIB1AAIAAAYIh1AAIAABJICBAAIAAAag");
	this.shape_854.setTransform(385.725,187.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#663300").s().p("AA0BsIgCgHIgCgSIgCgjQgBgWgOgHQgIgEgRAAIhAAAIAABdIgdAAIAAjWIBhAAQAYgBAQAIQAeANAAAlQAAAUgIAMQgIAMgPAHQANAFAGAIQAHAJAAASIABAdQABAMABAHQADAJAHADIAAAGgAg6gIIBBAAQAUAAALgIQAMgIAAgWQAAgXgQgIQgJgFgOABIhFAAg");
	this.shape_855.setTransform(365.025,187.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#663300").s().p("AhXBrIAAjWIBWAAQArABAYAfQAWAcAAAtQAAAhgNAcQgWAwg2AAgAg5BSIAzAAQANAAAJgCQARgGALgQQAIgNAEgVQACgMAAgLQAAgngQgWQgPgVgiAAIgyAAg");
	this.shape_856.setTransform(583.475,155.4);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#663300").s().p("AhOBrIAAjWICbAAIAAAaIh/AAIAABCIB1AAIAAAYIh1AAIAABJICBAAIAAAZg");
	this.shape_857.setTransform(562.775,155.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#663300").s().p("Ag9BdQgWgVAAgiIAcAAQABASAHALQAOAWAiAAQAQAAANgFQAZgJAAgYQAAgRgLgHQgKgIgXgGIgcgGQgbgGgMgHQgUgOAAgbQAAgdAUgSQAUgTAjAAQAgAAAXARQAXAQAAAkIgbAAQgCgSgHgIQgNgRgeAAQgYgBgLALQgLAMAAAOQAAAPANAIQAIAEAdAIIAdAHQAVAEAMAIQAUAPAAAdQAAAkgaAPQgZAPghAAQgnAAgWgUg");
	this.shape_858.setTransform(542.1244,155.45);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhATIghheIghBeIBCAAg");
	this.shape_859.setTransform(522.35,155.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#663300").s().p("AhTBrIAAjWIBdAAQAmABAQAWQAJANAAARQAAAVgLANQgHAHgKAFQAQAHAIAHQAPAOAAAYQAAAWgNAQQgUAZgrAAgAg2BSIA/AAQAbAAAMgPQAHgKAAgOQAAgXgWgJQgLgEgTAAIg5AAgAg2gQIA2AAQASABAKgGQAQgIAAgVQAAgVgRgIQgKgDgSAAIg1AAg");
	this.shape_860.setTransform(502.85,155.4);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#663300").s().p("AgkANIAAgaIBJAAIAAAag");
	this.shape_861.setTransform(487.275,157.8);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#663300").s().p("AhOBrIAAjWICbAAIAAAaIh/AAIAABCIB1AAIAAAYIh1AAIAABJICBAAIAAAZg");
	this.shape_862.setTransform(472.825,155.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#663300").s().p("Ag8BbQghgegBg+QAAgwAageQAaghAvAAQAoAAAWAVQAXAWADAbIgdAAQgFgVgOgMQgOgMgaAAQgeAAgTAWQgTAXgBAtQABAmARAXQASAYAgAAQAgAAARgZQAJgNAEgVIAcAAQgDAigWAXQgZAbgrAAQgkAAgZgWg");
	this.shape_863.setTransform(451.45,155.375);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhATIghheIghBeIBCAAg");
	this.shape_864.setTransform(430.75,155.4);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#663300").s().p("AhDBrIAAjWIAcAAIAAC9IBrAAIAAAZg");
	this.shape_865.setTransform(413.2,155.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#663300").s().p("AhPBrIAAjWIBgAAQAcABASAPQARAQAAAeQAAAZgQATQgQASgfAAIhDAAIAABagAgygHIA5AAQAUAAALgJQANgIAAgVQgBgXgRgJQgKgEgQAAIg5AAg");
	this.shape_866.setTransform(394.6,155.4);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#663300").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_867.setTransform(371.55,164.55);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#663300").s().p("AgxBbQgUgOgCgeIAbAAQADAWASAJQAKAEAMAAQAWAAAMgPQALgPAAgSQAAgWgNgMQgOgLgSAAQgNAAgKAGQgKAFgHAIIgWgBIAQhwIBrAAIAAAZIhYAAIgJA7QAIgGAGgDQAMgEAOAAQAdAAAUASQAUASAAAcQAAAegSAXQgSAXgoAAQgZAAgUgPg");
	this.shape_868.setTransform(358.975,156.125);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#E5D8C4").s().p("A7fHHQjIAAAAjIIAAn9QAAjIDIAAMA2/AAAQDIAAAADIIAAH9QAADIjIAAg");
	this.shape_869.setTransform(473.025,177.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843}]},47).to({state:[]},67).wait(90));

	// Pull_Leaf
	this.instance_6 = new lib.LeafHappy();
	this.instance_6.setTransform(-34,146,0.1758,0.1758);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).to({_off:true},67).wait(90));

	// Tree_Back
	this.instance_7 = new lib.Forest();
	this.instance_7.setTransform(-138,-7,0.1747,0.1747);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).to({_off:true},67).wait(90));

	// Arrow1
	this.Arrow1_btn = new lib.Arrow();
	this.Arrow1_btn.name = "Arrow1_btn";
	this.Arrow1_btn.setTransform(220.45,328.6,1,1,180);
	new cjs.ButtonHelper(this.Arrow1_btn, 0, 1, 1);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#000000").s().p("AgRBLIAAgaIAZAAIAAAagAgJAjIgDguQAFACAGAAQAMAAAGgHQAGgHAAgKQAAgLgGgHQgHgGgKAAQgLAAgGAHQgGAHAAAMIAAAEIgUAAIAAgFQAAgPAGgKQAHgJAKgEQAKgEAKAAQAVAAAMAMQALALAAAUQAAALgFAJQgFAJgJAEQgIAFgKAAIgEAAIgCAcg");
	this.shape_870.setTransform(286.475,240.275);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#000000").s().p("AgaBKIAAgTIAQAAIAAhuIgQAAIAAgSIA1AAIAAASIgQAAIAABuIAQAAIAAATg");
	this.shape_871.setTransform(278.05,240.4);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#000000").s().p("AA0A0IAAhAIgBgLQAAgEgDgDQgDgDgGAAQgGAAgHADQgIADgHAHIAAA2IARAAIAAASIglAAIAAhCQAAgKgDgFQgDgEgGAAQgMAAgSANIAAA2IASAAIAAASIg5AAIAAgSIATAAIAAhBIgRAAIAAgSIAlAAIAAAMQASgOASAAQAQAAAHAQQAUgQARAAQANAAAHAIQAIAGgBAQIAAA3IASAAIAAASg");
	this.shape_872.setTransform(260,242.55);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#000000").s().p("AggAxQgJgEgEgIQgFgHAAgJQAAgKAFgHQAGgHAIgEQAJgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgKAAQgJAAgGADQgFADgEAGIgTgEQAHgNALgGQALgGAPAAQAUAAAJAKQAKAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgPAPgQAAQgKAAgHgFgAgZAIQgGAFAAAIQAAAHAGAFQAFAFAHAAQAOAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_873.setTransform(245,242.575);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#000000").s().p("AgaAvQgNgHgHgMQgHgMAAgQQAAgOAHgNQAHgMAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAHANAAARIhVAAQACAPAKAIQAJAJANAAQAKAAAJgEQAJgFAFgIIASAIQgIANgOAHQgNAGgQAAQgQAAgNgHgAAhgIQgDgNgJgIQgJgHgMAAQgLAAgIAHQgJAIgCANIA/AAIAAAAg");
	this.shape_874.setTransform(227.325,242.625);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#000000").s().p("AgoA0IAAgSIAUAAIAAhBIgUAAIAAgSIAkAAIAAAWQAFgNAKgGQAJgFARAAIAEAAIAAAVIgEAAQgRAAgIADQgIAFgCAJQgCAJAAAPIAAAXIAWAAIAAASg");
	this.shape_875.setTransform(216.675,242.55);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#000000").s().p("AgaAvQgNgHgHgMQgHgMAAgQQAAgOAHgNQAHgMAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAHANAAARIhVAAQACAPAKAIQAJAJANAAQAKAAAJgEQAJgFAFgIIASAIQgIANgOAHQgNAGgQAAQgQAAgNgHgAAhgIQgDgNgJgIQgJgHgMAAQgLAAgIAHQgJAIgCANIA/AAIAAAAg");
	this.shape_876.setTransform(205.925,242.625);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#000000").s().p("AAWBKIAAhEQAAgJgDgFQgEgEgGgBQgLABgSAMIAAA4IASAAIAAASIg4AAIAAgSIASAAIAAhvIgSAAIAAgSIAmAAIAAA5QATgPAOAAQAdAAAAAfIAAA4IARAAIAAASg");
	this.shape_877.setTransform(193.475,240.4);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#000000").s().p("AAhBKIghh0IggB0IgUAAIgmiBIgRAAIAAgSIA4AAIAAASIgSAAIAcBgIAbhgIgSAAIAAgSIBDAAIAAASIgSAAIAbBgIAchgIgSAAIAAgSIA2AAIAAASIgRAAIglCBg");
	this.shape_878.setTransform(175.975,240.475);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#E5D8C4").s().p("AqJFUQjIAAAAjIIAAkfQAFjADDAAIUTAAQAbAAAXAEQCSAWAECmIAAEfQAADIjIAAg");
	this.shape_879.setTransform(229,245.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.Arrow1_btn}]},32).to({state:[]},15).wait(157));

	// Sad_Text
	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#000000").s().p("AgRBLIAAgaIAZAAIAAAagAgJAjIgDguQAFACAGAAQAMAAAGgHQAGgHAAgKQAAgLgGgHQgHgGgKAAQgLAAgGAHQgGAHAAAMIAAAEIgUAAIAAgFQAAgPAGgKQAHgJAKgEQAKgEAKAAQAVAAAMAMQALALAAAUQAAALgFAJQgFAJgJAEQgIAFgKAAIgEAAIgCAcg");
	this.shape_880.setTransform(286.475,240.275);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#000000").s().p("AgaBKIAAgTIAQAAIAAhuIgQAAIAAgSIA1AAIAAASIgQAAIAABuIAQAAIAAATg");
	this.shape_881.setTransform(278.05,240.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AA0A0IAAhAIgBgLQAAgEgDgDQgDgDgGAAQgGAAgHADQgIADgHAHIAAA2IARAAIAAASIglAAIAAhCQAAgKgDgFQgDgEgGAAQgMAAgSANIAAA2IASAAIAAASIg5AAIAAgSIATAAIAAhBIgRAAIAAgSIAlAAIAAAMQASgOASAAQAQAAAHAQQAUgQARAAQANAAAHAIQAIAGgBAQIAAA3IASAAIAAASg");
	this.shape_882.setTransform(260,242.55);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AggAxQgJgEgEgIQgFgHAAgJQAAgKAFgHQAGgHAIgEQAJgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgKAAQgJAAgGADQgFADgEAGIgTgEQAHgNALgGQALgGAPAAQAUAAAJAKQAKAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgPAPgQAAQgKAAgHgFgAgZAIQgGAFAAAIQAAAHAGAFQAFAFAHAAQAOAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_883.setTransform(245,242.575);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("AgaAvQgNgHgHgMQgHgMAAgQQAAgOAHgNQAHgMAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAHANAAARIhVAAQACAPAKAIQAJAJANAAQAKAAAJgEQAJgFAFgIIASAIQgIANgOAHQgNAGgQAAQgQAAgNgHgAAhgIQgDgNgJgIQgJgHgMAAQgLAAgIAHQgJAIgCANIA/AAIAAAAg");
	this.shape_884.setTransform(227.325,242.625);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AgoA0IAAgSIAUAAIAAhBIgUAAIAAgSIAkAAIAAAWQAFgNAKgGQAJgFARAAIAEAAIAAAVIgEAAQgRAAgIADQgIAFgCAJQgCAJAAAPIAAAXIAWAAIAAASg");
	this.shape_885.setTransform(216.675,242.55);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#000000").s().p("AgaAvQgNgHgHgMQgHgMAAgQQAAgOAHgNQAHgMAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAHANAAARIhVAAQACAPAKAIQAJAJANAAQAKAAAJgEQAJgFAFgIIASAIQgIANgOAHQgNAGgQAAQgQAAgNgHgAAhgIQgDgNgJgIQgJgHgMAAQgLAAgIAHQgJAIgCANIA/AAIAAAAg");
	this.shape_886.setTransform(205.925,242.625);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("AAWBKIAAhEQAAgJgDgFQgEgEgGgBQgLABgSAMIAAA4IASAAIAAASIg4AAIAAgSIASAAIAAhvIgSAAIAAgSIAmAAIAAA5QATgPAOAAQAdAAAAAfIAAA4IARAAIAAASg");
	this.shape_887.setTransform(193.475,240.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AAhBKIghh0IggB0IgUAAIgmiBIgRAAIAAgSIA4AAIAAASIgSAAIAcBgIAbhgIgSAAIAAgSIBDAAIAAASIgSAAIAbBgIAchgIgSAAIAAgSIA2AAIAAASIgRAAIglCBg");
	this.shape_888.setTransform(175.975,240.475);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#E5D8C4").s().p("AqJFUQjIAAAAjIIAAkfQAFjADDAAIUTAAQAbAAAXAEQCSAWAECmIAAEfQAADIjIAAg");
	this.shape_889.setTransform(229,245.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880}]},14).to({state:[]},33).wait(157));

	// Sad_Leaf
	this.instance_8 = new lib.LeafSad();
	this.instance_8.setTransform(184,155,0.1481,0.1481);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},47).wait(157));

	// Alley_Back
	this.instance_9 = new lib.Alley();
	this.instance_9.setTransform(-22,0,0.1563,0.1563);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},47).wait(157));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(262,293,705.1,335.9);
// library properties:
lib.properties = {
	id: 'C890639E762F8441ACC4122CB5344331',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BENV1043_princ5_atlas_1.png", id:"BENV1043_princ5_atlas_1"},
		{src:"images/BENV1043_princ5_atlas_2.png", id:"BENV1043_princ5_atlas_2"}
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