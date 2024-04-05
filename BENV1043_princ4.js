(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BENV1043_princ4_atlas_1", frames: [[0,0,7973,7973]]},
		{name:"BENV1043_princ4_atlas_2", frames: [[0,3503,6325,3514],[0,0,8001,3501]]},
		{name:"BENV1043_princ4_atlas_3", frames: [[0,3516,3256,2384],[3258,3516,3256,2384],[0,0,6325,3514],[-24702012,2,-1040187284,-788529043]]},
		{name:"BENV1043_princ4_atlas_4", frames: [[3258,1727,512,512],[3258,2241,512,512],[0,0,3256,2384],[3258,0,1150,1725],[0,2386,512,512]]}
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



(lib.day = function() {
	this.initialize(ss["BENV1043_princ4_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.landscape = function() {
	this.initialize(ss["BENV1043_princ4_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeafPullDark = function() {
	this.initialize(ss["BENV1043_princ4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LeafPull = function() {
	this.initialize(ss["BENV1043_princ4_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeafStand = function() {
	this.initialize(ss["BENV1043_princ4_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.LivingRoomBackgroundDark = function() {
	this.initialize(ss["BENV1043_princ4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LivingRoomBackground = function() {
	this.initialize(ss["BENV1043_princ4_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.MuseumQatar = function() {
	this.initialize(ss["BENV1043_princ4_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Rope = function() {
	this.initialize(img.Rope);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9131,2696);


(lib.shadow = function() {
	this.initialize(ss["BENV1043_princ4_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Sun = function() {
	this.initialize(ss["BENV1043_princ4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TreeBackground = function() {
	this.initialize(ss["BENV1043_princ4_atlas_3"]);
	this.gotoAndStop(3);
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


(lib.Sun_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Sun();
	this.instance.setTransform(0,0,0.0179,0.0159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.9,126.9);


(lib.Rope_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rope();
	this.instance.setTransform(140.05,0,0.0572,0.052,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.1,521.9);


(lib.PullLeaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
(lib.BENV1043_princ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [17,88,220];
	// timeline functions:
	this.frame_17 = function() {
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
		
		this.rope_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(20);
		}
		
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
		
		this.Arrow_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(116);
		}
	}
	this.frame_88 = function() {
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
		
		this.Arrow_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(115);
		}
	}
	this.frame_220 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(71).call(this.frame_88).wait(132).call(this.frame_220).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(751.45,479.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_1.setTransform(746.6,476.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_2.setTransform(741.625,475.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_3.setTransform(735.925,476.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgGIAKAGQgEAHgIAFQgJADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_4.setTransform(728.4,476.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgCgCgFAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_5.setTransform(719.1,476.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_6.setTransform(709.675,476.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAHgFAJAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgCAFAAAEQAAAGACAEQADAFAEADQAEACAFAAQAGAAAEgCQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_7.setTransform(702.2,476.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_8.setTransform(695.825,476.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_9.setTransform(691.3,475.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgEAfIgUgyIgKAAIAAgLIAfAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAeAAIAAALIgKAAIgTAyg");
	this.shape_10.setTransform(685.75,476.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_11.setTransform(678.275,476.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgFAHgJAFQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_12.setTransform(670.75,476.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_13.setTransform(661.125,476.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAHAAAIQAAAJgEAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgDAFAAAEQAAAGADAEQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgEAAgGQAAgEgDgFQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_14.setTransform(654.75,476.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAFgJgBQgIABgHgFgAgJgRQgEADgDAFQgCAFAAAEQAAAGACAEQADAFAEADQAFACAEAAQAGAAAEgCQAFgDACgFQACgEABgGQgBgEgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_15.setTransform(647.4,476.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_16.setTransform(639.825,475.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_17.setTransform(633.675,475.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_18.setTransform(628.025,476.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAIgFAIAAQAJAAAHAFQAIAEAEAIQAEAHAAAIQAAAJgEAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgEADgDAFQgDAFAAAEQAAAGADAEQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgEAAgGQAAgEgDgFQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_19.setTransform(620.55,476.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_20.setTransform(609.725,475.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_21.setTransform(601.775,476.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_22.setTransform(594.675,476.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_23.setTransform(763.325,462.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHgBgJQABgJAEgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFADAEABQAFgBAFgDQAEgCADgFQADgEgBgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_24.setTransform(756.95,462.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgJADgHQAFgIAHgEQAIgDAIAAQAJAAAHADQAIAFAEAHQAEAIABAIQgBAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgFADgCAEQgCAFgBAFQABAGACAEQACAFAFACQAEADAFABQAGgBAEgDQAFgCACgFQADgEAAgGQAAgFgDgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_25.setTransform(749.6,462.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_26.setTransform(742.025,461.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_27.setTransform(734.075,462.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_28.setTransform(728.45,461.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_29.setTransform(707.925,462.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAFgCAEgFIAKAEQgFAJgHADQgJAFgJAAQgKgBgHgEgAAUgFQgCgHgGgFQgFgFgHABQgGgBgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_30.setTransform(700.4,462.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIAKAEQgFAJgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_31.setTransform(693,462.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_32.setTransform(684.125,462.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_33.setTransform(676.975,461.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgFIAKAEQgEAJgIADQgJAFgJAAQgJgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_34.setTransform(671.3,462.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663300").s().p("AgEAqQgHgDgDgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAHAEAEAHQADAHAAAIQAAAJgDAIQgEAHgHAEQgHAFgIAAQgIAAgEgDgAgEgFQgEADgDAEQgCAFAAAGQAAAGACAFQADAFAEACQAEADAFAAQAGAAAEgDQAFgDACgFQACgFABgGQgBgGgCgEQgCgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_35.setTransform(663.45,461.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AgXAsIAAgKIALAAIAIgSIgUgwIgKAAIAAgMIAfAAIAAAMIgIAAIANAhIAMghIgIAAIAAgMIAdAAIAAAMIgJAAIgdBMg");
	this.shape_36.setTransform(640.8,464.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_37.setTransform(633.325,462.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgJADgHQAFgIAHgEQAIgDAIAAQAJAAAHADQAIAFAEAHQAEAIABAIQgBAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgFADgCAEQgCAFgBAFQABAGACAEQACAFAFACQAEADAFABQAGgBAEgDQAFgCACgFQADgEAAgGQAAgFgDgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_38.setTransform(625.85,462.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgBgCgEAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_39.setTransform(616.55,462.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_40.setTransform(608.175,462.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_41.setTransform(602.175,462.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_42.setTransform(594.75,461.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_43.setTransform(762.075,447.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_44.setTransform(754.125,448.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_45.setTransform(747.025,448.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("AATAsIgegfIAAAUIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAA3IAWgSIgKAAIAAgKIAiAAIAAAKIgKAAIgWASIAVAVIALAAIAAALg");
	this.shape_46.setTransform(735.85,447.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_47.setTransform(728.425,448.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_48.setTransform(722.8,447.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_49.setTransform(719,447.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_50.setTransform(710.075,448.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_51.setTransform(698.725,450.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_52.setTransform(690.775,448.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAKAAIAAALgAgEgfQgCgDgBgDQABgDACgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_53.setTransform(685.15,447.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_54.setTransform(681.375,447.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_55.setTransform(676.125,448.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_56.setTransform(668.75,448.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_57.setTransform(662.375,448.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_58.setTransform(656.375,448.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AgXAtIAAgLIALAAIAIgSIgUgwIgKAAIAAgLIAeAAIAAALIgHAAIANAhIAMghIgIAAIAAgLIAeAAIAAALIgJAAIgeBNg");
	this.shape_59.setTransform(645.4,450.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AgFAqQgFgDgEgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAGAEAFAHQAEAHAAAIQAAAJgEAIQgFAHgHAEQgGAFgIAAQgHAAgGgDgAgEgFQgFADgCAEQgCAFgBAGQABAGACAFQACAFAFACQAEADAFAAQAGAAAEgDQAFgDACgFQADgFAAgGQAAgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_60.setTransform(637.5,447.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_61.setTransform(626,448.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_62.setTransform(619.625,448.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_63.setTransform(613.225,448.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_64.setTransform(607.475,447.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_65.setTransform(602.225,448.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_66.setTransform(594.825,448.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgLIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEADQAEAEACAHIgLACQgBgHgEAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAALIgLAAIAAAnIAMAAIAAALg");
	this.shape_67.setTransform(764.575,433.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AgQAcQgHgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgEQAHgDAJAAQAJAAAHADQAIAFAEAHQAEAIABAIQgBAJgEAHQgEAHgIAFQgHAEgJABQgIgBgIgEgAgJgRQgFADgCAFQgCAEgBAFQABAFACAFQACAFAFACQAEADAFAAQAGAAAEgDQAEgCADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_68.setTransform(758.5,434.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAGgCADgGIALAFQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_69.setTransform(746.35,434.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_70.setTransform(739.375,434.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_71.setTransform(732.175,434.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAHADQAIAFAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAFQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_72.setTransform(724.65,434.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_73.setTransform(719.15,433.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_74.setTransform(714.625,434.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAIgEQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAGgCADgGIALAFQgFAJgIADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_75.setTransform(708.2,434.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#663300").s().p("AgkAtIAAgLIAKAAIAAhCIgKAAIAAgLIAXAAIAAAKQAFgFAFgDQAFgDAGAAQAJAAAGAEQAHAEAEAIQADAHAAAJQAAAIgDAHQgEAHgHAFQgHAEgIABQgMAAgJgKIAAAYIAMAAIAAALgAgEgeQgFADgCAFQgCAFAAAFQAAALAFAEQAHAFAIAAQAFAAAEgDQAFgCACgFQACgEAAgHQAAgFgCgEQgDgFgEgEQgFgCgFAAQgGAAgEADg");
	this.shape_76.setTransform(700.35,436.15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#663300").s().p("AAEAfIAAgLIAIAAIgMgOIgLAOIAIAAIAAALIgeAAIAAgLIAJAAIATgUIgSgTIgIAAIAAgLIAdAAIAAALIgIAAIAKAMIALgMIgHAAIAAgLIAeAAIAAALIgLAAIgQASIAUAVIAHAAIAAALg");
	this.shape_77.setTransform(692.925,434.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAFgCAEgGIAKAFQgEAJgIADQgJAFgKAAQgJgBgHgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_78.setTransform(685.65,434.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgIAIgEQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAGgCADgGIAKAFQgEAJgIADQgJAFgJAAQgKgBgHgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_79.setTransform(673.5,434.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_80.setTransform(666.05,433.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_81.setTransform(660.375,433.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_82.setTransform(650.375,434.85);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAKAAIAAALgAgEgfQgCgDgBgDQABgDACgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_83.setTransform(645.1,433.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_84.setTransform(637.65,434.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_85.setTransform(630.15,433.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_86.setTransform(622.7,434.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_87.setTransform(608.525,434.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_88.setTransform(601.425,434.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_89.setTransform(594.475,434.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgPIAPAAIAAAOQAAAGgCAEQgBAEgDABQgDACgGAAg");
	this.shape_90.setTransform(764.1,424);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_91.setTransform(759.25,420.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgHAIgFQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_92.setTransform(752.5,420.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#663300").s().p("AgaAfIAAgKIAmgpIgYAAIAAAMIgKAAIAAgWIAwAAIAAALIglAoIAbAAIAAgNIAKAAIAAAXg");
	this.shape_93.setTransform(745.8,420.825);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_94.setTransform(740.95,419.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_95.setTransform(736.15,420.825);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_96.setTransform(720.325,419.525);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_97.setTransform(712.375,420.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_98.setTransform(705.275,420.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_99.setTransform(689.75,420.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_100.setTransform(683,420.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AgkAtIAAgKIAKAAIAAhDIgKAAIAAgLIAXAAIAAAKQAFgFAFgEQAFgCAGAAQAJAAAGAFQAHAEAEAHQADAHAAAJQAAAIgDAHQgEAHgHAFQgHAFgIgBQgMAAgJgJIAAAZIAMAAIAAAKgAgEgeQgEADgDAFQgCAFAAAGQAAAJAFAFQAHAFAIAAQAFAAAEgCQAEgEADgDQACgGAAgFQAAgGgCgFQgDgEgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_101.setTransform(675.15,422.15);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_102.setTransform(667.975,420.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgEAAQgHAAgKAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_103.setTransform(660.55,419.475);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_104.setTransform(653.85,420.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_105.setTransform(639.975,419.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_106.setTransform(634.275,420.775);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_107.setTransform(626.75,420.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_108.setTransform(620.375,420.775);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAEQgGAIgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_109.setTransform(613.95,420.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgJAEgFQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_110.setTransform(608.925,419.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgJAEgFQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_111.setTransform(605.175,419.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_112.setTransform(600.95,419.425);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_113.setTransform(595.225,419.525);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgGAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIAMAAIAAhBIgMAAIAAgLIAYAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_114.setTransform(762.2,405.475);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_115.setTransform(756.525,405.85);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_116.setTransform(752.75,405.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_117.setTransform(745.725,406.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_118.setTransform(728.7,406.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgJAFgHQAEgIAHgDQAIgEAIgBQAJABAIAEQAHAEAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAGQgGAHgIAEQgIAFgKAAQgIAAgIgFgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_119.setTransform(721.95,406.85);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgHAAgJQAAgJAEgHQAEgIAHgDQAHgEAHgBQAKABAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGABQgEAAgEACQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVABQgIAAgHgFg");
	this.shape_120.setTransform(714.975,406.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_121.setTransform(708.225,406.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#663300").s().p("AgkAtIAAgLIALAAIAAhCIgKAAIAAgLIAVAAIAAAKQAFgFAGgDQAEgDAHAAQAIAAAHAFQAHADADAIQAFAHAAAJQAAAIgFAHQgDAHgIAFQgGAFgIAAQgMAAgKgKIAAAYIAMAAIAAALgAgEgeQgFADgCAFQgCAFgBAFQAAALAHAEQAFAFAJAAQAFAAAFgDQAEgCABgFQADgFAAgFQAAgGgDgEQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_122.setTransform(700.4,408.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDgBgEQAAgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_123.setTransform(693.55,406.825);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_124.setTransform(677.775,405.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgJAFgHQAEgIAHgDQAIgEAIgBQAKABAGAEQAIAEAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAFgKAAQgIAAgIgFgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_125.setTransform(669.85,406.85);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_126.setTransform(664.35,405.425);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_127.setTransform(659.825,406.775);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_128.setTransform(653.825,406.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#663300").s().p("AgDAfIgUgyIgMAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgTAyg");
	this.shape_129.setTransform(646.45,406.875);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_130.setTransform(629.975,408.225);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_131.setTransform(622.025,406.775);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_132.setTransform(616.4,405.425);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663300").s().p("AgEAfIgTgyIgLAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAeAAIAAALIgKAAIgUAyg");
	this.shape_133.setTransform(610.85,406.875);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_134.setTransform(603.825,406.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#663300").s().p("AAIAsIAAgLIALAAIAAgeIgmAAIAAAeIALAAIAAALIghAAIAAgLIAKAAIAAhBIgKAAIAAgLIAhAAIAAALIgLAAIAAAZIAmAAIAAgZIgLAAIAAgLIAjAAIAAALIgKAAIAABBIAKAAIAAALg");
	this.shape_135.setTransform(595.6,405.475);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQAAAIAEAEQAEAEAFAAQAEAAADgDQACgCAAgEQAAgEgDgEQgDgDgGgDQgOgGgGgGQgFgGAAgJQAAgHACgFQADgGAGgDQAFgDAHAAQAFAAADACQAFACACAEIAAgHIAQAAIAAAbIgQAAQgBgHgDgDQgDgDgEAAQgEAAgDACQgCACAAADQAAADACACIAEADIAGAEIAEABQAMAFAGAGQAGAHgBAKQAAAMgGAHQgHAHgMAAQgLAAgGgIg");
	this.shape_136.setTransform(752,391.475);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_137.setTransform(744.225,391.475);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("AgWAoQgLgGgGgKQgGgKAAgOQAAgLAGgLQAGgLALgFQAKgHANABQAQAAAKAIIAAgHIAPAAIAAAgIgPAAQgGgSgQABQgHAAgFADQgGAEgEAHQgDAHAAAIQAAAIADAGQADAGAGAFQAFADAHAAQAJAAAGgGQAHgGACgKIASAIQgKAegiABQgNgBgLgFg");
	this.shape_138.setTransform(734.975,391.45);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIALAAIAAAPIgmAAIAAgPIAKAAIASg5IgMAAIAAgPIA5AAIAAAPIgMAAIASA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_139.setTransform(725.25,391.475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("AgnAsIAAgPIALAAIAAg5IgLAAIAAgPIAqAAQATAAAJAHQAJAHAAAOQAAAOgJAGQgJAHgTAAIgIAAIAAARIALAAIAAAPgAgFgCIAEAAQAGAAAEgBQAEgCABgCQACgDAAgFQAAgFgCgDQgDgDgEgBIgIgBIgEAAg");
	this.shape_140.setTransform(716.475,391.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQABAIADAEQADAEAGAAQAEAAADgDQADgCAAgEQgBgEgDgEQgDgDgHgDQgNgGgGgGQgFgGAAgJQAAgHADgFQADgGAFgDQAGgDAGAAQAFAAADACQAFACADAEIAAgHIAPAAIAAAbIgPAAQgCgHgDgDQgDgDgEAAQgEAAgCACQgDACAAADQAAADACACIAEADIAGAEIAEABQAMAFAGAGQAFAHAAAKQABAMgIAHQgGAHgMAAQgLAAgGgIg");
	this.shape_141.setTransform(708.6,391.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_142.setTransform(697.575,391.475);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#663300").s().p("AguAsIAAgPIANAAIAAg5IgNAAIAAgPIAvAAQANAAALAFQAKAEAGAKQAHALgBAOQABAOgHAKQgGAJgJAFQgLAFgOAAgAgKAdIAFAAQALAAAHgEQAGgEACgGQACgGAAgJQAAgNgGgIQgHgHgMAAIgIAAg");
	this.shape_143.setTransform(687.9,391.475);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_144.setTransform(680.375,391.475);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQAAAIAEAEQAEAEAFAAQAEAAADgDQACgCAAgEQABgEgEgEQgDgDgGgDQgOgGgFgGQgHgGABgJQAAgHACgFQADgGAGgDQAGgDAGAAQAFAAAEACQAEACACAEIAAgHIAPAAIAAAbIgPAAQAAgHgEgDQgDgDgEAAQgEAAgDACQgCACAAADQAAADABACIAFADIAGAEIAEABQAMAFAGAGQAGAHgBAKQAAAMgGAHQgHAHgMAAQgKAAgHgIg");
	this.shape_145.setTransform(674.25,391.475);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_146.setTransform(666.4,391.475);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#663300").s().p("AgRAqQgHgDgDgIQgDgHAAgNIAAgoIgLAAIAAgPIApAAIAAAPIgIAAIAAApQAAAHACAEQABAEADABQACACADAAQAGAAADgEQADgEAAgLIAAgoIgIAAIAAgPIAjAAIAAAPIgLAAIAAAsQAAAQgHAHQgHAHgQAAQgLAAgHgDg");
	this.shape_147.setTransform(657.625,391.525);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgNAGgKQAGgKAMgFQALgHANABQAPgBAKAHQAMAFAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgKAFgPABQgNgBgLgFgAgMgYQgGAEgDAGQgCAHAAAHQAAAJACAGQADAHAGAEQAGADAGAAQAIAAAFgDQAGgEACgHQADgGAAgJQAAgHgDgHQgCgGgGgEQgFgEgIAAQgGAAgGAEg");
	this.shape_148.setTransform(647.65,391.45);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#663300").s().p("AgRAJIAAgRIAjAAIAAARg");
	this.shape_149.setTransform(639.875,392.825);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#663300").s().p("AgmAsIAAgPIALAAIAAg5IgLAAIAAgPIBNAAIAAAcIgRAAIAAgNIgaAAIAAAUIAVAAIAAAOIgVAAIAAAXIAaAAIAAgNIARAAIAAAcg");
	this.shape_150.setTransform(633.325,391.475);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#663300").s().p("AguAsIAAgPIANAAIAAg5IgNAAIAAgPIAvAAQANAAALAFQAKAEAHAKQAFALAAAOQAAAOgFAKQgGAJgKAFQgLAFgOAAgAgKAdIAFAAQALAAAHgEQAGgEACgGQACgGABgJQgBgNgGgIQgHgHgMAAIgIAAg");
	this.shape_151.setTransform(623.65,391.475);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_152.setTransform(616.125,391.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQAAAIAEAEQAEAEAFAAQAEAAADgDQACgCAAgEQABgEgEgEQgDgDgGgDQgOgGgFgGQgHgGAAgJQAAgHADgFQAEgGAFgDQAGgDAGAAQAFAAAEACQADACADAEIAAgHIAPAAIAAAbIgPAAQAAgHgEgDQgDgDgEAAQgEAAgDACQgCACAAADQAAADABACIAFADIAHAEIADABQAMAFAGAGQAGAHAAAKQgBAMgGAHQgHAHgMAAQgKAAgHgIg");
	this.shape_153.setTransform(610,391.475);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABJg");
	this.shape_154.setTransform(601.525,391.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_155.setTransform(593.675,391.475);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_156.setTransform(744.1,367.125);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_157.setTransform(740.275,363.85);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAADgCQADgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_158.setTransform(735.35,364.825);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIALAEQgGAIgIAFQgIADgKABQgJgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_159.setTransform(728.6,364.85);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_160.setTransform(722.225,364.775);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgFQAIgDAIAAQAJAAAHADQAIAFAEAIQAEAHABAIQgBAJgEAHQgEAIgIAEQgHAEgJABQgJgBgGgEgAgJgRQgFADgCAEQgCAFgBAFQABAGACAEQACAFAFACQAEAEAFAAQAGAAAEgEQAFgCACgFQADgEAAgGQAAgFgDgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_161.setTransform(715.85,364.85);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgGgEgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_162.setTransform(710.825,363.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_163.setTransform(701.875,364.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_164.setTransform(691.225,364.775);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAKAAIAAALgAgEgfQgCgDgBgDQABgDACgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_165.setTransform(685.6,363.425);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_166.setTransform(677.55,364.825);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAKAAAHADQAHAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAFgDAEgFIAKAEQgEAIgIAFQgJADgJABQgKgBgHgEgAAUgFQgCgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_167.setTransform(670.8,364.85);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#663300").s().p("AgEAfIgTgyIgLAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAeAAIAAALIgKAAIgUAyg");
	this.shape_168.setTransform(663.4,364.875);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_169.setTransform(656.375,364.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgIAEgIQAEgHAIgFQAHgDAIAAQAJAAAHADQAIAFAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJABQgJgBgIgEgAAUgFQgCgHgFgFQgGgEgHAAQgGAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_170.setTransform(649,364.85);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_171.setTransform(643.35,363.475);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_172.setTransform(634.5,363.475);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_173.setTransform(626.875,366.225);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_174.setTransform(618.975,364.875);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQACgEAAgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_175.setTransform(611.5,364.85);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_176.setTransform(605.125,364.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIAKAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAJAAIAAALg");
	this.shape_177.setTransform(598.65,363.475);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_178.setTransform(592.975,363.85);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_179.setTransform(762.075,352.225);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_180.setTransform(754.125,350.775);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_181.setTransform(748.5,349.425);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_182.setTransform(743.975,350.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgFAIAAQAKAAAGAFQAIAEAEAIQAEAIAAAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAGgDADgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_183.setTransform(737.55,350.85);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_184.setTransform(731.925,349.85);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_185.setTransform(728,349.475);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_186.setTransform(724.35,349.425);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgKIAJAAIAAgKQAAgIAEgGQAEgFAIAAQAGAAAEADQAEAEACAHIgLABQgBgFgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAKIALAAIAAAKIgLAAIAAAnIAMAAIAAALg");
	this.shape_187.setTransform(721.175,349.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_188.setTransform(702.525,349.85);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_189.setTransform(696.8,349.475);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_190.setTransform(689.175,352.225);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_191.setTransform(683.15,349.425);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_192.setTransform(679.35,349.475);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_193.setTransform(659.925,350.85);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_194.setTransform(654.65,349.425);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_195.setTransform(647.2,350.775);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_196.setTransform(639.7,349.425);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgDAAQgIAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_197.setTransform(632.25,350.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_198.setTransform(608.525,350.775);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_199.setTransform(601.425,350.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_200.setTransform(594.475,350.85);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAFAAQAJAAAFAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_201.setTransform(763.05,336.825);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_202.setTransform(754.825,336.875);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAFADAEABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_203.setTransform(745.95,336.85);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_204.setTransform(738.375,335.525);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_205.setTransform(730.875,336.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_206.setTransform(723.45,335.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgHgBg");
	this.shape_207.setTransform(716.75,336.825);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_208.setTransform(703.975,335.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_209.setTransform(696.025,336.775);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgDAGgDQAFgDAGABQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_210.setTransform(688.925,336.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDABgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_211.setTransform(676.45,336.825);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_212.setTransform(671.475,335.85);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_213.setTransform(665.75,335.475);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_214.setTransform(658.125,338.225);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_215.setTransform(652.1,335.425);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_216.setTransform(648.3,335.475);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_217.setTransform(636.725,335.525);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAIQAEAIABAKIgzAAQABAIAGAGQAGAFAHAAQAGAAAFgDQAGgCADgFIALAEQgGAJgIADQgIAFgKAAQgJgBgHgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_218.setTransform(628.8,336.85);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_219.setTransform(622.15,336.825);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_220.setTransform(615.425,336.875);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgHgEAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_221.setTransform(610.275,335.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgMIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLACQgBgHgEAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAAMIgLAAIAAAmIAMAAIAAALg");
	this.shape_222.setTransform(606.525,335.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_223.setTransform(602.3,335.425);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#663300").s().p("AgrAsIAAgLIAMAAIAAhBIgMAAIAAgLIAiAAQAaAAANAKQAOAKAAAXQAAAVgOAMQgOALgaAAgAgSAhIAJAAQATAAAKgIQAJgIAAgRQAAgLgEgHQgEgHgIgEQgJgDgNAAIgJAAg");
	this.shape_224.setTransform(595.525,335.475);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_225.setTransform(764.15,325.125);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_226.setTransform(759.3,322.825);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAGgDADgGIALAGQgGAIgIAEQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_227.setTransform(752.55,322.85);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_228.setTransform(746.175,322.775);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_229.setTransform(739.775,322.875);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_230.setTransform(734.025,321.85);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_231.setTransform(728.775,322.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_232.setTransform(721.4,322.85);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgmIgJAAIAAgLIAJAAIAAgKQAAgIAEgGQAEgFAIAAQAGAAAEAEQAEADACAHIgLABQgBgFgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAKIALAAIAAALIgLAAIAAAmIAMAAIAAALg");
	this.shape_233.setTransform(716.375,321.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_234.setTransform(699.15,321.475);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_235.setTransform(694.025,322.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_236.setTransform(686.675,322.875);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#663300").s().p("AgHAfIgHgEIAAAEIgKAAIAAgVIAKAAIAAACQACAEAEADQADADAFAAQAGAAAEgCQACgDAAgEQAAgDgCgBQgDgCgHgBIgGgCQgKgBgEgEQgEgFAAgHQAAgFADgEQADgFAFgCQAFgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQACABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgIgBg");
	this.shape_237.setTransform(679.9,322.825);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQADgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgDgCg");
	this.shape_238.setTransform(675.05,321.425);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#663300").s().p("AgDAfIgUgyIgMAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgUAyg");
	this.shape_239.setTransform(669.5,322.875);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIgBAKIgyAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgGIAKAGQgEAIgIAEQgJADgJAAQgKABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_240.setTransform(649.2,322.85);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_241.setTransform(643.575,321.85);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_242.setTransform(638.325,322.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgGIALAGQgGAIgIAEQgIADgKAAQgJABgHgFgAAUgFQgCgHgGgFQgFgEgHgBQgGABgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_243.setTransform(630.95,322.85);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_244.setTransform(624.575,322.775);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_245.setTransform(618.575,322.85);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#663300").s().p("AgPAcQgIgEgFgIQgDgHAAgJQAAgIADgIQAFgHAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAIQAFAHgBAIQABAJgFAHQgEAIgIAEQgHAFgJgBQgJABgGgFgAgJgRQgFACgCAGQgDAFAAAEQAAAGADAEQACAFAFADQAFADAEgBQAGABAEgDQAFgDACgFQACgEABgGQgBgEgCgFQgDgFgEgDQgEgDgGAAQgEAAgFADg");
	this.shape_246.setTransform(598.6,322.85);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_247.setTransform(592.975,321.85);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_248.setTransform(762.9,308.825);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAFQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_249.setTransform(756.15,308.85);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#663300").s().p("AgkAtIAAgLIALAAIAAhCIgKAAIAAgLIAVAAIAAAKQAGgFAFgDQAEgDAHAAQAIAAAHAEQAHAEAEAIQADAHAAAJQAAAIgDAHQgFAHgHAFQgHAEgHABQgMAAgKgKIAAAYIANAAIAAALgAgEgeQgEADgDAFQgDAFAAAFQABALAGAEQAFAFAJAAQAFAAAFgDQADgCACgFQADgEAAgHQAAgFgDgEQgCgFgEgEQgFgCgFAAQgGAAgEADg");
	this.shape_250.setTransform(748.3,310.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_251.setTransform(741.125,308.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_252.setTransform(733.7,307.475);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_253.setTransform(727,308.825);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgDgCgEAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAHAAAFAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_254.setTransform(714.35,308.775);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_255.setTransform(705.975,308.775);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#663300").s().p("AgPAcQgIgFgEgHQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAHgGAFQgIAEgJABQgIgBgHgEgAgJgRQgEADgDAFQgCAEAAAFQAAAFACAFQADAFAEACQAFADAEAAQAGAAAEgDQAFgCACgFQACgFAAgFQAAgFgCgEQgCgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_256.setTransform(699.6,308.85);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgLIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEADQAEAEACAHIgLACQgBgHgEAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAALIgLAAIAAAnIAMAAIAAALg");
	this.shape_257.setTransform(694.575,307.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgEgHgBgJQABgJAEgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIAAAIQAAAJgFAHQgFAHgGAFQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAFQgDAEABAFQgBAFADAFQADAFAEACQAFADAEAAQAFAAAFgDQAEgCADgFQADgFgBgFQABgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_258.setTransform(684.5,308.85);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_259.setTransform(678.875,307.85);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#663300").s().p("AgYAsIAAgKIANAAIAHgSIgVgxIgKAAIAAgLIAgAAIAAALIgIAAIAMAiIANgiIgIAAIAAgLIAdAAIAAALIgIAAIgeBNg");
	this.shape_260.setTransform(669.2,310.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_261.setTransform(662.175,308.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_262.setTransform(653.325,308.875);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#663300").s().p("AgTAeQgFgDgDgFQgDgEAAgFQAAgGADgFQADgDAGgDQAFgDAGABQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADADAFgBQAIABAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_263.setTransform(640.825,308.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_264.setTransform(629.425,308.775);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_265.setTransform(623.8,307.425);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_266.setTransform(616.025,307.85);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_267.setTransform(610.3,307.475);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_268.setTransform(602.675,310.225);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_269.setTransform(596.65,307.425);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_270.setTransform(592.85,307.475);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgFAIgIAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_271.setTransform(762.2,294.85);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_272.setTransform(754.75,293.475);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_273.setTransform(749.075,293.85);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAGgDADgFIALAEQgGAIgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_274.setTransform(739.05,294.85);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_275.setTransform(733.425,293.85);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_276.setTransform(728.175,294.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_277.setTransform(722.55,293.475);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_278.setTransform(717.025,294.875);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#663300").s().p("AgkAtIAAgKIALAAIAAhDIgKAAIAAgLIAVAAIAAAKQAFgFAGgEQAEgCAHAAQAIAAAHAFQAHAEAEAHQAEAHgBAJQABAIgEAHQgFAHgHAFQgHAFgHgBQgMAAgKgJIAAAZIANAAIAAAKgAgEgeQgFADgCAFQgCAFgBAGQAAAJAHAFQAFAFAJAAQAFAAAFgCQADgEACgDQADgGAAgFQAAgGgDgFQgCgEgEgDQgFgDgGAAQgFAAgEADg");
	this.shape_279.setTransform(709.05,296.15);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_280.setTransform(703.35,293.425);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_281.setTransform(697.775,294.775);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_282.setTransform(690.675,294.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIAKAAIAAALIgVAAIAAgnQAAgGgBgDQgDgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQAKgIALAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAFAFgBAJIAAAgIALAAIAAALg");
	this.shape_283.setTransform(681.4,294.775);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_284.setTransform(667.625,294.775);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgGQAAgGADgEQADgEAGgCQAFgCAGgBQAIABAHAFIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_285.setTransform(660.525,294.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#663300").s().p("AgOAcQgHgFgEgHQgEgIAAgIQAAgIAEgIQAEgHAHgFQAHgDAHAAQAKgBAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgDgGgBQgEABgEACQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_286.setTransform(653.575,294.85);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDAAgEQABgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAJAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQADABAIACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_287.setTransform(642.8,294.825);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_288.setTransform(637.825,293.85);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_289.setTransform(632.125,294.775);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHAAgJQAAgJAEgHQAEgHAIgFQAHgDAIAAQAKAAAGADQAIAFAEAIQAEAIAAAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAGgDADgFIAKAEQgFAIgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_290.setTransform(624.6,294.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgCgCgDAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAIAAAEAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_291.setTransform(615.3,294.775);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgEgHgBgJQABgJAEgHQAEgHAIgFQAHgDAIAAQAJAAAIADQAHAFAEAIQAFAIgBAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgCQAFgDAEgFIAKAEQgFAIgHAFQgJADgJAAQgKABgHgFgAAUgFQgCgIgGgEQgFgEgHgBQgGABgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_292.setTransform(605.9,294.85);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#663300").s().p("AgPAsIAAgLIAKAAIAAhBIgKAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_293.setTransform(600.25,293.475);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgHAHgFQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgCQAGgDADgFIALAEQgGAIgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgIgFgEQgGgEgHgBQgGABgFAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_294.setTransform(594.7,294.85);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#663300").s().p("AgQAcQgHgFgEgHQgFgHAAgJQAAgJAFgHQAEgIAHgDQAIgEAIgBQAJABAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAHQgFAHgGAFQgIAFgJAAQgIAAgIgFgAgJgRQgEADgDAFQgDAEABAFQgBAFADAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQACgFAAgFQABgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_295.setTransform(762.25,280.85);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#663300").s().p("AANAfIgNgrIgOArIgLAAIgRgyIgHAAIAAgLIAaAAIAAALIgIAAIALAkIAMgkIgHAAIAAgLIAdAAIAAALIgHAAIAMAkIAMgkIgJAAIAAgLIAcAAIAAALIgJAAIgQAyg");
	this.shape_296.setTransform(753.375,280.875);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_297.setTransform(746.225,279.85);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgJAFgHQAEgIAHgDQAIgEAIgBQAJABAIAEQAHAEAEAIQAEAIABAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAFgKAAQgIAAgIgFgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_298.setTransform(732.3,280.85);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAFADAEAAQAGAAADgCQAEgDAAgEQAAgDgDgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAGAAQAIAAAGAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_299.setTransform(725.65,280.825);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgJAFgHQAEgIAHgDQAIgEAIgBQAKABAGAEQAIAEAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgGAHgIAEQgIAFgKAAQgIAAgIgFgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_300.setTransform(718.9,280.85);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgDgDgEAAQgGAAgKAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAAAASIAAAhIAKAAIAAALg");
	this.shape_301.setTransform(711.45,279.475);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_302.setTransform(705.775,279.85);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgLIAJAAIAAgJQAAgJAEgFQAEgFAIAAQAGAAAEADQAEAEACAHIgLACQgBgHgEABQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAALIgLAAIAAAnIAMAAIAAALg");
	this.shape_303.setTransform(694.225,279.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAHgEAJgBQAJABAHAEQAIAEAEAHQAFAIgBAIQABAJgFAHQgEAHgIAFQgHAFgJAAQgJAAgGgFgAgJgRQgEADgDAFQgDAEAAAFQAAAFADAFQADAFAEADQAFACAEAAQAFAAAFgCQAFgDACgFQADgFAAgFQAAgFgDgEQgCgFgFgDQgFgDgFAAQgEAAgFADg");
	this.shape_304.setTransform(688.15,280.85);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#663300").s().p("AgYAsIAAgKIAMAAIAIgSIgUgxIgKAAIAAgLIAeAAIAAALIgHAAIANAiIAMgiIgIAAIAAgLIAeAAIAAALIgJAAIgeBNg");
	this.shape_305.setTransform(672.5,282.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgGADgFQADgDAGgDQAFgCAGAAQAIgBAHAGIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgCQAEgIAHgEQAGgDAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgIIAAgHQgIgGgGAAQgFAAgEADg");
	this.shape_306.setTransform(665.475,280.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_307.setTransform(659.85,279.475);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#663300").s().p("AglAtIAAgLIAMAAIAAhCIgLAAIAAgLIAXAAIAAAKQAEgFAGgDQAFgDAFAAQAJAAAHAFQAHADADAIQAFAHAAAJQAAAIgFAHQgEAHgGAFQgIAFgIAAQgLAAgJgKIAAAYIALAAIAAALgAgEgeQgEADgDAFQgDAFABAFQgBALAHAEQAFAFAJAAQAFAAAEgDQAFgCACgFQACgFAAgFQAAgGgCgEQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_308.setTransform(653.85,282.15);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_309.setTransform(647.275,280.775);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgJAFgHQAEgIAHgDQAIgEAIgBQAJABAIAEQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAGQgGAHgIAEQgIAFgKAAQgJAAgHgFgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_310.setTransform(640.85,280.85);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHgBgDgEg");
	this.shape_311.setTransform(635.225,279.85);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_312.setTransform(629.525,280.775);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_313.setTransform(623.9,279.425);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgJAFgHQAEgIAIgDQAHgEAIgBQAKABAGAEQAIAEAEAIQAEAIABAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAHgIAEQgJAFgJAAQgJAAgIgFgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_314.setTransform(610.1,280.85);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_315.setTransform(602.65,279.475);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#663300").s().p("AgRAsIAAgLIALAAIAAhBIgSAAIAAAVIgLAAIAAggIBHAAIAAAgIgLAAIAAgVIgSAAIAABBIALAAIAAALg");
	this.shape_316.setTransform(594.975,279.475);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#663300").s().p("AAOAsIgOgoIgMAoIgRAAIgZhJIgJAAIAAgOIAnAAIAAAOIgJAAIAPAqIANgqIgIAAIAAgOIAfAAIAAAOIgIAAIAOAqIAOgqIgJAAIAAgOIAkAAIAAAOIgKAAIgZBJg");
	this.shape_317.setTransform(723.8,265.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#663300").s().p("AgYAoQgLgGgHgKQgGgLAAgNQAAgNAGgKQAGgKAMgFQAKgHAOABQAOgBALAHQAMAFAGAKQAGALAAAMQAAANgGALQgGAKgMAGQgLAFgOABQgNgBgLgFgAgMgYQgGAEgCAGQgDAHAAAHQAAAJADAGQACAHAGAEQAFADAHAAQAHAAAGgDQAGgEADgHQACgGAAgJQAAgHgCgHQgDgGgGgEQgGgEgHAAQgHAAgFAEg");
	this.shape_318.setTransform(711.8,265.45);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#663300").s().p("AguAsIAAgPIANAAIAAg5IgNAAIAAgPIAuAAQAOAAALAFQAKAEAHAKQAFALABAOQgBAOgFAKQgHAJgKAFQgKAFgOAAgAgKAdIAGAAQALAAAGgEQAGgEADgGQACgGAAgJQAAgNgIgIQgGgHgMAAIgIAAg");
	this.shape_319.setTransform(700.9,265.475);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIALAAIAAAPIgmAAIAAgPIAKAAIASg5IgMAAIAAgPIA5AAIAAAPIgMAAIASA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_320.setTransform(691.5,265.475);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgqAAIAAgPIALAAIAAg5IgLAAIAAgPIAqAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIArAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_321.setTransform(682.05,265.475);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#663300").s().p("AgNAlIAAAHIgPAAIAAgeIAPAAQAAAIAEAEQADAEAGAAQAEAAACgDQADgCABgEQAAgEgEgEQgDgDgGgDQgOgGgFgGQgHgGAAgJQAAgHAEgFQADgGAFgDQAFgDAHAAQAFAAAEACQADACAEAEIAAgHIAOAAIAAAbIgOAAQgBgHgEgDQgDgDgEAAQgEAAgCACQgDACAAADQAAADABACIAFADIAHAEIADABQAMAFAGAGQAGAHAAAKQAAAMgHAHQgHAHgMAAQgKAAgHgIg");
	this.shape_322.setTransform(673.65,265.475);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#663300").s().p("AgvAsIAAgPIAOAAIAAg5IgOAAIAAgPIAwAAQANAAAKAFQALAEAGAKQAHALAAAOQAAAOgHAKQgFAJgLAFQgKAFgNAAgAgKAdIAFAAQALAAAHgEQAGgEACgGQACgGAAgJQABgNgIgIQgGgHgMAAIgIAAg");
	this.shape_323.setTransform(661.6,265.475);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#663300").s().p("AARAsIglhAIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABJg");
	this.shape_324.setTransform(651.675,265.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIANAAIAAAPIgoAAIAAgPIALAAIARg5IgMAAIAAgPIA5AAIAAAPIgMAAIATA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_325.setTransform(641.95,265.475);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_326.setTransform(629.75,265.475);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgrAAIAAgPIAMAAIAAg5IgMAAIAAgPIArAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIAqAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_327.setTransform(620.45,265.475);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#663300").s().p("AgYAoQgMgGgGgJQgGgLAAgOQAAgMAHgLQAGgJAKgGQALgHANABQARgBAKAKIAAgIIAPAAIAAAgIgPAAQgDgJgHgEQgGgFgIABQgHgBgGAEQgGADgDAHQgDAGAAAJQAAANAHAIQAHAIALAAQAIABAFgEQAFgEADgHIgQAAIAAgPIAqAAQAAAOgGALQgGAKgLAFQgKAFgPABQgOgBgLgFg");
	this.shape_328.setTransform(610.075,265.45);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_329.setTransform(601.925,265.475);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#663300").s().p("AgnAsIAAgPIANAAIAAg5IgNAAIAAgPIAwAAIAAAPIgMAAIAAA5IAZAAIAAgbIARAAIAAAqg");
	this.shape_330.setTransform(595.2,265.475);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#663300").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_331.setTransform(694.85,241.125);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_332.setTransform(690,238.825);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_333.setTransform(683.075,237.525);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAEAEAFAAQAGAAAEgEQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_334.setTransform(675.2,238.85);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHgBgJQABgIAEgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgEgBgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_335.setTransform(667.85,238.85);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#663300").s().p("AAfAfIAAgmIAAgGIgCgFQgCgBgEAAQgDAAgFACIgJAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgBgDQgCgCgFAAQgGAAgLAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgKAAIAAgLIAWAAIAAAHQALgIAKAAQAKAAAEAJQALgJALAAQAIAAAEAEQAFAFAAAJIAAAgIAKAAIAAALg");
	this.shape_336.setTransform(658.55,238.775);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_337.setTransform(647.675,237.85);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_338.setTransform(642.75,238.825);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgFQAIgDAIAAQAJAAAIADQAHAFAEAIQAFAHgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgIgBgHgEgAgJgRQgFADgCAEQgCAFAAAFQAAAGACAEQACAFAFACQAEAEAFAAQAGAAAEgEQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_339.setTransform(636.05,238.85);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgEgHgBgJQABgIAEgIQAEgHAHgFQAHgDAJAAQAJAAAIADQAHAFAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAEgJABQgIgBgIgEgAgJgRQgEADgDAEQgDAFABAFQgBAGADAEQADAFAEACQAFAEAEAAQAFAAAFgEQAEgCADgFQADgEgBgGQABgFgDgFQgDgEgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_340.setTransform(628.7,238.85);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#663300").s().p("AgFAqQgFgDgEgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAGAEAFAHQAEAHAAAIQAAAJgEAIQgFAHgHAEQgGAFgIAAQgHAAgGgDgAgEgFQgFADgCAEQgCAFgBAGQABAGACAFQACAFAFACQAEADAFAAQAGAAAEgDQAFgDACgFQADgFAAgGQAAgGgDgEQgCgEgFgDQgEgCgGAAQgFAAgEACg");
	this.shape_341.setTransform(620.85,237.525);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_342.setTransform(609.725,237.525);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_343.setTransform(601.775,238.775);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#663300").s().p("AgTAdQgFgCgDgFQgDgEAAgGQAAgFADgFQADgEAGgCQAFgCAGAAQAIAAAHAFIAAgGQAAgIgDgDQgDgDgGAAQgFAAgDACQgDABgCAEIgMgCQAEgIAHgDQAGgEAJAAQAMAAAGAGQAFAFAAAMIAAAcIALAAIAAALIgVAAIAAgIQgJAJgKAAQgGAAgEgDgAgPAFQgDADAAAEQAAAFADADQADACAFAAQAIAAAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_344.setTransform(594.675,238.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgPIAPAAIAAAPQAAAFgBAEQgCADgEACQgCACgGABg");
	this.shape_345.setTransform(764.15,228);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_346.setTransform(759.3,224.825);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgBgCgEAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_347.setTransform(750.65,224.775);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAJAAIAAALg");
	this.shape_348.setTransform(741.2,223.475);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_349.setTransform(735.525,223.85);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#663300").s().p("AgYAtIAAgLIANAAIAHgSIgVgxIgKAAIAAgKIAfAAIAAAKIgHAAIAMAiIANgiIgIAAIAAgKIAeAAIAAAKIgJAAIgeBOg");
	this.shape_350.setTransform(729.85,226.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIAKAAIAAALIghAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQALgJAIAAQARAAAAASIAAAhIALAAIAAALg");
	this.shape_351.setTransform(722.35,223.475);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_352.setTransform(715.925,224.775);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_353.setTransform(701.475,224.775);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_354.setTransform(694.375,224.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_355.setTransform(688.9,223.425);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_356.setTransform(683.175,223.525);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_357.setTransform(675.675,224.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_358.setTransform(668.725,224.85);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_359.setTransform(662.575,224.775);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgEgfQgDgDAAgDQAAgDADgCQACgCACAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgCAAgCgCg");
	this.shape_360.setTransform(658.05,223.425);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgJAEgHQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgGgFgEQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_361.setTransform(652.925,224.85);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIgBgJQABgIAEgIQAEgHAIgEQAHgFAIAAQAJAAAHAFQAIAEAEAIQAFAIgBAKIgyAAQABAIAGAGQAGAFAHAAQAGAAAFgCQAFgDAEgGIAKAGQgFAHgHAFQgJADgJAAQgJABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_362.setTransform(637.75,224.85);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgLIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_363.setTransform(632.125,223.85);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#663300").s().p("AgTAeQgFgDgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgEQAGgDAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgCgAgPAFQgDADAAAFQAAAEADADQADACAFABQAIAAAHgHIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_364.setTransform(626.875,224.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_365.setTransform(621.25,223.475);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_366.setTransform(615.725,224.875);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_367.setTransform(608.025,226.225);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIABgJQgBgIAFgIQAEgHAHgEQAIgFAIAAQAKAAAGAFQAIAEAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgCQAGgDADgGIALAGQgGAHgIAFQgIADgKAAQgIABgIgFgAAUgFQgCgHgFgFQgGgFgHAAQgGAAgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_368.setTransform(600.1,224.85);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_369.setTransform(593.725,224.775);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#663300").s().p("AgHAKQAHgBAAgJIAAAAIgHAAIAAgQIAPAAIAAAPQAAAGgBADQgCAFgEACQgCABgGAAg");
	this.shape_370.setTransform(764.15,214);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#663300").s().p("AgYAsIAAgKIAMAAIAIgSIgUgwIgKAAIAAgMIAeAAIAAAMIgHAAIANAhIAMghIgIAAIAAgMIAeAAIAAAMIgJAAIgeBMg");
	this.shape_371.setTransform(758.55,212.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_372.setTransform(752.875,209.85);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAKAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQADgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_373.setTransform(749.1,209.425);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#663300").s().p("AgDAfIgVgyIgLAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgTAyg");
	this.shape_374.setTransform(743.55,210.875);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgBgCg");
	this.shape_375.setTransform(738,209.425);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgLIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_376.setTransform(734.225,209.85);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgHAAgJQAAgIAEgIQAEgIAHgEQAHgDAHAAQAKAAAHAFIAAgEIALAAIAAAXIgLAAQAAgHgFgDQgFgDgGAAQgEgBgEADQgFADgCAFQgCAFAAAFQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIATgVAAQgIgBgHgEg");
	this.shape_377.setTransform(728.975,210.85);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_378.setTransform(721.825,210.875);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_379.setTransform(714.125,209.525);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAHgDAJAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgJgBgGgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAEADAFABQAGgBAEgDQAFgCACgFQACgEABgGQgBgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_380.setTransform(706.25,210.85);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_381.setTransform(699.875,210.775);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgLAAIAAgLIAXAAIAAAKQAEgGAGgCQAFgDAFAAQAJAAAHAEQAHAFADAHQAEAIABAIQgBAIgEAHQgDAIgHAEQgIAEgIABQgLAAgJgKIAAAZIALAAIAAAKgAgEgeQgEADgDAFQgDAFABAFQgBAKAHAFQAFAFAJAAQAFAAAEgDQAFgCACgFQACgEAAgHQAAgFgCgFQgDgFgFgDQgEgCgGAAQgFAAgEADg");
	this.shape_382.setTransform(693,212.15);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHABgJQgBgJAFgHQAEgIAHgEQAIgDAIAAQAKAAAGADQAIAFAEAIQAEAIABAKIgzAAQABAIAGAGQAFAFAIAAQAGAAAFgDQAGgCADgFIALAEQgGAJgIADQgIAFgKAAQgIgBgIgEgAAUgFQgCgHgFgFQgGgFgHABQgGgBgFAFQgFAFgCAHIAmAAIAAAAg");
	this.shape_383.setTransform(637.9,210.85);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#663300").s().p("AgDAfIgVgyIgLAAIAAgLIAgAAIAAALIgIAAIAMAhIAOghIgJAAIAAgLIAdAAIAAALIgJAAIgTAyg");
	this.shape_384.setTransform(630.5,210.875);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#663300").s().p("AgPAcQgIgEgEgIQgFgHAAgJQAAgJAFgHQAEgIAHgEQAIgDAIAAQAJAAAIADQAHAFAEAHQAFAIgBAIQABAJgFAHQgFAIgGAEQgIAEgJABQgIgBgHgEgAgJgRQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAFADAEABQAGgBAEgDQAFgCACgFQACgEAAgGQAAgFgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_385.setTransform(623.1,210.85);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_386.setTransform(616.725,210.775);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#663300").s().p("AglAtIAAgKIAMAAIAAhDIgKAAIAAgLIAWAAIAAAKQAEgGAGgCQAEgDAGAAQAJAAAHAEQAHAFADAHQAFAIAAAIQAAAIgFAHQgDAIgIAEQgGAEgJABQgLAAgJgKIAAAZIALAAIAAAKgAgEgeQgFADgCAFQgCAFAAAFQgBAKAHAFQAFAFAJAAQAFAAAEgDQAFgCABgFQADgEAAgHQAAgFgDgFQgCgFgFgDQgEgCgGAAQgFAAgEADg");
	this.shape_387.setTransform(609.85,212.15);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgCgCgDAAQgHAAgLAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAEAFABAJIAAAgIAKAAIAAALg");
	this.shape_388.setTransform(600.35,210.775);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#663300").s().p("AgPAtIAAgLIAKAAIAAgnIgKAAIAAgLIAVAAIAAAyIAJAAIAAALgAgFgfQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_389.setTransform(592.85,209.425);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_390.setTransform(762.125,196.775);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_391.setTransform(755.025,196.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#663300").s().p("AgOAcQgHgEgEgIQgEgIAAgIQAAgIAEgIQAEgHAHgEQAHgFAHAAQAKAAAHAHIAAgFIALAAIAAAXIgLAAQAAgHgFgDQgFgEgGAAQgEAAgEADQgFADgCAFQgCAEAAAGQAAAJAFAGQAFAGAIAAQANAAAFgMIAKAFQgIASgVAAQgIABgHgFg");
	this.shape_392.setTransform(748.075,196.85);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#663300").s().p("AgDAmQgEgEAAgKIAAghIgIAAIAAgLIAIAAIAAgKIALgKIAAAUIAMAAIAAALIgMAAIAAAfQAAAFACACQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJABQgHAAgDgDg");
	this.shape_393.setTransform(737.475,195.85);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgCgDgDAAQgHAAgKAHIAAAhIALAAIAAALIgjAAIAAgLIALAAIAAhBIgLAAIAAgLIAYAAIAAAiQALgJAIAAQASAAAAASIAAAhIAJAAIAAALg");
	this.shape_394.setTransform(731.75,195.475);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#663300").s().p("AgdAlIAHgIIAJAEQAEACAFAAQAIAAAFgGQAGgFAAgKIAAgGQgEAFgHADQgFADgGAAQgIAAgHgFQgHgEgEgHQgEgGAAgJQAAgJAEgHQAEgIAHgEQAHgFAJAAQAGAAAEADQAFACAGAFIAAgJIAXAAIAAALIgLAAIAAAtQAAAQgJAJQgIAJgOAAQgPAAgKgJgAgOgeQgFACgCAFQgDAFAAAGQAAAFADAFQACAEAEADQAFADAFAAQAFAAAFgDQAEgDADgEQADgFAAgFQAAgGgDgFQgDgEgEgDQgFgDgEAAQgGAAgEADg");
	this.shape_395.setTransform(724.125,198.225);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_396.setTransform(718.1,195.425);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#663300").s().p("AgPAsIAAgLIALAAIAAhBIgLAAIAAgLIAWAAIAABMIAJAAIAAALg");
	this.shape_397.setTransform(714.3,195.475);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_398.setTransform(708.725,196.775);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_399.setTransform(701.225,196.875);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#663300").s().p("AgGAfIgIgEIAAAEIgKAAIAAgVIAKAAIAAACQABAEAFADQAEADAEAAQAGAAAEgCQACgDABgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_400.setTransform(694.45,196.825);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#663300").s().p("AgHAfIgGgEIAAAEIgLAAIAAgVIALAAIAAACQABAEADADQAEADAFAAQAGAAADgCQADgDABgEQAAgDgDgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQADgFAGgCQAEgCAGAAQAHAAAGAEIAAgDIALAAIAAAVIgLAAIAAgEQgFgIgIAAQgFAAgDACQgDADAAADQAAADADACQABABAJACIAHABQASADAAAOQAAAIgHAGQgGAFgLAAIgIgBg");
	this.shape_401.setTransform(683.25,196.825);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_402.setTransform(676.925,196.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#663300").s().p("AgYAtIAAgLIANAAIAHgSIgVgwIgKAAIAAgLIAgAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAdAAIAAALIgJAAIgdBNg");
	this.shape_403.setTransform(664.35,198.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_404.setTransform(656.725,195.525);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#663300").s().p("AgQAcQgHgEgEgIQgFgHAAgJQAAgIAFgIQAEgHAHgEQAIgFAIAAQAJAAAIAFQAHAEAEAIQAFAHAAAIQAAAJgFAHQgFAIgGAEQgIAFgJgBQgIABgIgFgAgJgRQgEACgDAGQgDAFABAEQgBAGADAEQADAFAEADQAFADAEAAQAFAAAFgDQAEgDADgFQADgEgBgGQABgEgDgFQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_405.setTransform(648.85,196.85);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#663300").s().p("AgFAqQgFgDgEgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAGAEAEAHQAFAHAAAIQAAAJgFAIQgDAHgIAEQgGAFgIAAQgHAAgGgDgAgEgFQgFADgCAEQgCAFgBAGQABAGACAFQACAFAFACQAEADAFAAQAGAAAEgDQAEgDADgFQACgFAAgGQAAgGgCgEQgDgEgEgDQgEgCgGAAQgFAAgEACg");
	this.shape_406.setTransform(641,195.525);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_407.setTransform(628.075,196.775);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#663300").s().p("AgTAdQgFgCgDgEQgDgFAAgFQAAgHADgEQADgDAGgDQAFgDAGAAQAIAAAHAGIAAgHQAAgHgDgDQgDgDgGAAQgFAAgDACQgDACgCADIgMgDQAEgHAHgDQAGgEAJAAQAMAAAGAFQAFAGAAAMIAAAcIALAAIAAALIgVAAIAAgHQgJAIgKAAQgGAAgEgDgAgPAFQgDADAAAFQAAAEADADQADADAFAAQAIgBAHgGIAAgIQgIgGgGAAQgFAAgEADg");
	this.shape_408.setTransform(620.975,196.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#663300").s().p("AAgAfIAAgmIgBgGIgCgFQgCgBgDAAQgEAAgEACIgKAGIAAAfIALAAIAAALIgWAAIAAgnQAAgGgCgDQgCgCgDAAQgIAAgKAIIAAAfIALAAIAAALIgiAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAKAAQAKAAAEAJQAMgJAKAAQAIAAAEAEQAEAFAAAJIAAAgIALAAIAAALg");
	this.shape_409.setTransform(611.7,196.775);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#663300").s().p("AgUAaQgFgFAAgMIAAgcIgIAAIAAgLIAUAAIAAAqQAAAEACADQACACAEAAQAHAAAKgIIAAggIgLAAIAAgLIAXAAIAAAxIAKAAIAAALIgWAAIAAgHQgLAIgJAAQgIAAgEgFg");
	this.shape_410.setTransform(602.325,196.875);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgCgCQgBgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIAKAAIAAhBIgKAAIAAgLIAXAAIAAAiQALgJAIAAQASAAAAASIAAAhIAKAAIAAALg");
	this.shape_411.setTransform(594.75,195.475);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgJAEgHQAEgIAIgDQAHgEAIAAQAKAAAGAEQAIAEAEAIQAEAIAAAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAGgCADgGIAKAGQgFAIgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_412.setTransform(762.3,182.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#663300").s().p("AANAsIAAgoQAAgGgBgCQgCgDgFAAQgFAAgLAHIAAAhIALAAIAAALIgiAAIAAgLIALAAIAAhBIgLAAIAAgLIAXAAIAAAiQAKgJAJAAQARAAABASIAAAhIAKAAIAAALg");
	this.shape_413.setTransform(754.85,181.475);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_414.setTransform(749.175,181.85);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_415.setTransform(731.475,182.775);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#663300").s().p("AgQAcQgHgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAHgEAJAAQAJAAAHAEQAIAEAEAHQAEAIABAIQgBAJgEAHQgFAHgHAFQgHAEgJABQgIgBgIgEgAgJgRQgFADgCAFQgCAEAAAFQAAAFACAFQACAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQACgFAAgFQAAgFgCgEQgDgFgEgDQgFgDgFAAQgFAAgEADg");
	this.shape_416.setTransform(725.1,182.85);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgLIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEADQAEAEACAHIgLACQgBgHgEAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABIgBAHIAAAJIALAAIAAALIgLAAIAAAnIAMAAIAAALg");
	this.shape_417.setTransform(720.075,181.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAFADQAEADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgCgCgIgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAEgCQAFgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_418.setTransform(701.65,182.825);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#663300").s().p("AgDAlQgEgDAAgJIAAgiIgIAAIAAgLIAIAAIAAgJIALgMIAAAVIAMAAIAAALIgMAAIAAAfQAAAFACABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAHgBIAAALIgJACQgHAAgDgFg");
	this.shape_419.setTransform(696.675,181.85);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_420.setTransform(692.9,181.425);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#663300").s().p("AgUAtIAAgLIAJAAIAAgnIgJAAIAAgLIAJAAIAAgJQAAgIAEgGQAEgFAIAAQAGAAAEADQAEAEACAHIgLACQgBgHgEAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBAHIAAAJIALAAIAAALIgLAAIAAAnIAMAAIAAALg");
	this.shape_421.setTransform(689.725,181.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgJAFgHQAEgIAHgDQAIgEAIAAQAJAAAIAEQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAFgCAEgGIALAGQgGAIgIADQgIAFgKAAQgJgBgHgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_422.setTransform(683.6,182.85);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#663300").s().p("AANAfIAAgnQAAgGgCgDQgBgCgEAAQgHAAgKAIIAAAfIAKAAIAAALIghAAIAAgLIALAAIAAgmIgLAAIAAgLIAXAAIAAAHQALgIAJAAQAIAAAEAFQAEAFAAALIAAAdIAKAAIAAALg");
	this.shape_423.setTransform(676.175,182.775);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgFgIAAgJQAAgJAFgHQAEgIAHgDQAIgEAIAAQAKAAAHAEQAHAEAEAIQAFAIAAAKIgzAAQABAJAGAFQAFAFAIAAQAGAAAFgDQAGgCADgGIALAGQgFAIgJADQgIAFgKAAQgJgBgHgEgAAUgFQgCgIgGgEQgFgFgHABQgGgBgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_424.setTransform(668.65,182.85);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#663300").s().p("AgFAqQgFgDgEgFIAAAKIgWAAIAAgLIAKAAIAAhCIgKAAIAAgLIAWAAIAAAkQAJgKANAAQAIAAAHAEQAGAEAEAHQAFAHAAAIQAAAJgFAIQgDAHgIAEQgGAFgIAAQgHAAgGgDgAgEgFQgFADgCAEQgCAFgBAGQABAGACAFQACAFAFACQAEADAFAAQAGAAAEgDQAEgDADgFQACgFAAgGQAAgGgCgEQgDgEgEgDQgEgCgGAAQgFAAgEACg");
	this.shape_425.setTransform(660.8,181.525);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#663300").s().p("AgGAfIgHgEIAAAEIgLAAIAAgVIALAAIAAACQAAAEAEADQAFADAEAAQAGAAAEgCQADgDAAgEQgBgDgCgBQgDgCgHgBIgGgCQgJgBgFgEQgEgFAAgHQAAgFADgEQAEgFAFgCQAEgCAFAAQAIAAAHAEIAAgDIAKAAIAAAVIgKAAIAAgEQgGgIgIAAQgFAAgDACQgDADAAADQAAADACACQACABAJACIAHABQASADAAAOQAAAIgGAGQgHAFgLAAIgHgBg");
	this.shape_426.setTransform(640.8,182.825);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#663300").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgJAEgHQAEgIAIgDQAHgEAIAAQAKAAAGAEQAIAEAEAIQAEAIAAAKIgyAAQABAJAGAFQAGAFAHAAQAGAAAFgDQAGgCADgGIAKAGQgFAIgHADQgJAFgJAAQgJgBgIgEgAAUgFQgCgIgFgEQgGgFgHABQgGgBgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_427.setTransform(634.05,182.85);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#663300").s().p("AgWApQgHgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAHgEQAIgEAIAAQAGAAAEACQAFACAGAFIAAgYIgMAAIAAgLIAYAAIAABNIALAAIAAALIgXAAIAAgJQgKAKgMAAQgIAAgHgEgAgOgEQgFADgCAEQgDAEAAAGQAAAGADAFQACAFAFACQAEADAGAAQAEAAAFgDQAEgDADgFQADgFAAgGQAAgFgDgFQgDgEgEgDQgFgCgFAAQgFAAgEADg");
	this.shape_428.setTransform(626.475,181.525);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#663300").s().p("AgOAtIAAgLIAJAAIAAgnIgJAAIAAgLIAUAAIAAAyIAJAAIAAALgAgEgfQgCgDAAgDQAAgDACgCQABgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_429.setTransform(620.45,181.425);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#663300").s().p("AgEAfIgTgyIgLAAIAAgLIAfAAIAAALIgIAAIAMAhIANghIgIAAIAAgLIAeAAIAAALIgKAAIgUAyg");
	this.shape_430.setTransform(614.9,182.875);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#663300").s().p("AgPAcQgIgFgFgHQgDgHAAgJQAAgJADgHQAFgIAHgDQAIgEAIAAQAJAAAHAEQAIAEAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAEgJABQgJgBgGgEgAgJgRQgEADgDAFQgDAEAAAFQAAAFADAFQADAFAEACQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgFQAAgFgDgEQgDgFgEgDQgFgDgFAAQgEAAgFADg");
	this.shape_431.setTransform(607.5,182.85);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#663300").s().p("AgYAfIAAgLIANAAIAAgmIgNAAIAAgLIAWAAIAAAOQADgJAGgDQAFgDAKAAIADAAIAAAMIgDAAQgKAAgEADQgFACgCAFQgBAGAAAJIAAANIANAAIAAALg");
	this.shape_432.setTransform(601.125,182.775);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#663300").s().p("AghAsIAAgLIALAAIAAhBIgLAAIAAgLIAgAAQANAAAIADQAHADAEAGQADAFAAAKQAAAMgHAHQgIAHgRAAIgLAAIAAAXIAKAAIAAALgAgJAAIAIAAQAHAAAFgBQAFgBACgEQADgEAAgGQAAgIgFgEQgFgEgLAAIgJAAg");
	this.shape_433.setTransform(594.675,181.475);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgOAAIAAA5IAOAAIAAAPg");
	this.shape_434.setTransform(696.65,167.475);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#663300").s().p("AADAsIAAgPIAJAAIAAgYIgXAAIAAAYIAJAAIAAAPIgqAAIAAgPIALAAIAAg5IgLAAIAAgPIAqAAIAAAPIgJAAIAAATIAXAAIAAgTIgJAAIAAgPIArAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_435.setTransform(687.35,167.475);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#663300").s().p("AgYAoQgMgFgGgKQgGgLAAgOQAAgMAHgLQAGgJAKgGQALgHANABQARgBAKAKIAAgIIAPAAIAAAgIgPAAQgDgJgHgEQgGgFgIABQgHgBgGAEQgGADgDAHQgDAGAAAJQAAANAHAIQAHAJALgBQAIABAFgEQAFgEADgHIgQAAIAAgPIAqAAQAAAPgGAKQgGAKgLAFQgKAFgPAAQgOAAgLgFg");
	this.shape_436.setTransform(676.975,167.45);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAgPIAxAAIAAAPIgOAAIAAA5IAOAAIAAAPg");
	this.shape_437.setTransform(668.825,167.475);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#663300").s().p("AgmAsIAAgPIAMAAIAAg5IgMAAIAAgPIAvAAIAAAPIgMAAIAAA5IAZAAIAAgbIASAAIAAAqg");
	this.shape_438.setTransform(662.1,167.475);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#663300").s().p("AgmAsIAAgPIAMAAIAAg5IgMAAIAAgPIAvAAIAAAPIgMAAIAAA5IAZAAIAAgbIASAAIAAAqg");
	this.shape_439.setTransform(650.6,167.475);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIALAAIAAAPIgmAAIAAgPIAKAAIASg5IgNAAIAAgPIA6AAIAAAPIgMAAIASA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_440.setTransform(641.9,167.475);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#663300").s().p("AATAsIgTgmIgKAAIAAAXIAKAAIAAAPIgtAAIAAgPIAMAAIAAg5IgMAAIAAgPIAxAAQAPAAAJAGQAHAGABAMQAAAIgEAGQgEAFgHADIANAaIAMAAIAAAPgAgKgIIAIAAQANAAABgKQAAgFgDgDQgEgCgFAAIgKAAg");
	this.shape_441.setTransform(632.8,167.475);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#663300").s().p("AgRAqQgHgDgDgIQgDgHAAgNIAAgoIgLAAIAAgPIApAAIAAAPIgIAAIAAApQAAAHACAEQABAEADABQACACADAAQAGAAADgEQADgEAAgLIAAgoIgIAAIAAgPIAjAAIAAAPIgLAAIAAAsQAAAQgHAHQgHAHgQAAQgLAAgHgDg");
	this.shape_442.setTransform(623.525,167.525);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#663300").s().p("AgYAsIAAgPIANAAIAAg5IgNAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IAMAAIAAAPg");
	this.shape_443.setTransform(614.7,167.475);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#663300").s().p("AACAsIAAgPIALAAIgEgPIgWAAIgEAPIAMAAIAAAPIgnAAIAAgPIAKAAIASg5IgNAAIAAgPIA6AAIAAAPIgNAAIATA5IALAAIAAAPgAAFABIgGgZIgIAZIAOAAg");
	this.shape_444.setTransform(605.8,167.475);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg6IgMAAIAAgOIAlAAIAgA2IAAgoIgMAAIAAgOIAoAAIAAAOIgMAAIAABKg");
	this.shape_445.setTransform(596.225,167.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},173).wait(48));

	// Pics
	this.instance = new lib.shadow();
	this.instance.setTransform(537,291,0.0971,0.0971);

	this.instance_1 = new lib.landscape();
	this.instance_1.setTransform(537,415,0.0904,0.0904);

	this.instance_2 = new lib.day();
	this.instance_2.setTransform(527,171,0.1174,0.1174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},164).wait(57));

	// Precedent
	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#663300").s().p("AgKAcIAAADIgPAAIAAgVIAPAAQAAAEADACQAEADAEAAIAIgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgEIgEgCIgIgCQgOgCgGgEQgGgEAAgJQAAgIAGgFQAHgFAJAAQAIAAAHADIAAgCIAOAAIAAASIgOAAQgCgHgKAAQgJAAAAAFQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAGACQALABAHADQAHADADAEQACADAAAHQABAJgIAFQgGAGgMAAQgJAAgEgEg");
	this.shape_446.setTransform(494.15,482.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#663300").s().p("AgGAnQgEgEAAgHIAAggIgIAAIAAgOIAIAAIAAgKIASgOIAAAYIALAAIAAAOIgLAAIAAAZIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIAGgCIAAAOQgHADgHAAQgHAAgEgEg");
	this.shape_447.setTransform(488.675,481.25);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#663300").s().p("AgWAXQgKgIABgPQAAgIAEgHQAEgHAHgFQAHgEAIAAQAKAAAIAGIAAgFIAOAAIAAAZIgOAAQgFgKgKAAQgFgBgEAFQgEAFgBAGQAAAHAFAFQAEAEAFAAQAFAAAEgCQADgDADgFIAPAIQgFAJgGAFQgHAEgMAAQgPAAgJgJg");
	this.shape_448.setTransform(482.85,482.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#663300").s().p("AgPAcQgIgDgEgHQgFgIAAgJQAAgIAFgIQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAFAEAIQADAIABAKIgtAAQAAAHAFAEQAEAEAFAAQAIAAAHgHIAPAFQgFAIgIADQgHAEgKAAQgJAAgIgEgAANgGQgBgFgEgEQgDgDgFAAQgFAAgDADQgDADgBAGIAZAAIAAAAg");
	this.shape_449.setTransform(475.575,482.375);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#663300").s().p("AgGAnQgEgEAAgHIAAggIgIAAIAAgOIAIAAIAAgKIASgOIAAAYIALAAIAAAOIgLAAIAAAZIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIAGgCIAAAOQgHADgHAAQgHAAgEgEg");
	this.shape_450.setTransform(469.525,481.25);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#663300").s().p("AgSAtIAAgOIAKAAIAAggIgKAAIAAgOIAcAAIAAAuIAJAAIAAAOgAgGgaQgDgDAAgEQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_451.setTransform(465.05,480.95);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#663300").s().p("AAIAsIAAgoIAAgEQgCgCgEAAQgDAAgGADIAAAdIAIAAIAAAOIglAAIAAgOIAJAAIAAg7IgJAAIAAgOIAdAAIAAAgQAIgHAIAAQAKAAAFAGQAEAGAAAJIAAAbIAJAAIAAAOg");
	this.shape_452.setTransform(458.7,481.025);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#663300").s().p("AgXAXQgIgIgBgPQABgIAEgHQAEgHAHgFQAHgEAJAAQAIAAAKAGIAAgFIANAAIAAAZIgOAAQgFgKgKAAQgFgBgEAFQgFAFAAAGQABAHAEAFQADAEAGAAQAFAAAEgCQAEgDADgFIAOAIQgEAJgIAFQgGAEgMAAQgPAAgKgJg");
	this.shape_453.setTransform(451.2,482.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#663300").s().p("AgaAfIAAgOIALAAIAAggIgKAAIAAgOIAbAAIAAAPQADgHAFgEQAHgFAIAAIACAAIAAASQgIABgFACQgEACgDAFQgDAEAAAJIAAAGIANAAIAAAOg");
	this.shape_454.setTransform(444.55,482.325);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#663300").s().p("AACAsIAAgPIAMAAIgFgPIgWAAIgFAPIAMAAIAAAPIgnAAIAAgPIALAAIARg5IgLAAIAAgPIA4AAIAAAPIgMAAIATA5IAKAAIAAAPgAAGABIgHgZIgIAZIAPAAg");
	this.shape_455.setTransform(437.1,481.025);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#663300").s().p("AgbAbQgGgGAAgJQAAgIAHgFQAGgGAMAAIAHABIAGACIAAgEQAAgFgDgDQgCgCgGAAQgGAAgFAEIgQgCQAHgPAXAAQAOAAAHAGQAGAHAAANIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgFgAgMAGQgCACAAADQAAAJAHgBQAGABAGgHIAAgFQgGgEgFAAQgEAAgCACg");
	this.shape_456.setTransform(425.625,482.35);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#663300").s().p("AgXApQgGgFgEgHQgDgHAAgJQAAgKADgGQAEgHAGgEQAGgEAIAAQAJAAAIAIIAAgTIgJAAIAAgPIAcAAIAABKIAKAAIAAAOIgdAAIAAgIQgIAJgJAAQgIAAgGgEgAgNABQgDAFAAAHQAAAHADAFQAEAEAFAAQAFAAADgEQAEgFAAgHQAAgHgEgFQgDgDgFAAQgFAAgEADg");
	this.shape_457.setTransform(417.9,481.075);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#663300").s().p("AgbAbQgGgGAAgJQAAgIAHgFQAGgGAMAAIAHABIAGACIAAgEQAAgFgDgDQgCgCgGAAQgGAAgFAEIgQgCQAHgPAXAAQAOAAAHAGQAGAHAAANIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgFgAgMAGQgCACAAADQAAAJAHgBQAGABAGgHIAAgFQgGgEgFAAQgEAAgCACg");
	this.shape_458.setTransform(410.075,482.35);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#663300").s().p("AASAsIgZggIAUgQIgNAAIAAgMIAlAAIAAAMIgGAAIgSAPIAQATIAJAAIAAAOgAglAsIAAgOIAKAAIAAg7IgKAAIAAgOIAeAAIAABKIAHAAIAAANg");
	this.shape_459.setTransform(402.275,481.025);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#663300").s().p("AgbAbQgGgGAAgJQAAgIAHgFQAGgGAMAAIAHABIAGACIAAgEQAAgFgDgDQgCgCgGAAQgGAAgFAEIgQgCQAHgPAXAAQAOAAAHAGQAGAHAAANIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgFgAgMAGQgCACAAADQAAAJAHgBQAGABAGgHIAAgFQgGgEgFAAQgEAAgCACg");
	this.shape_460.setTransform(394.575,482.35);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#663300").s().p("AgYAsIAAgPIAOAAIAAg5IgOAAIAAAUIgPAAIAAgjIBPAAIAAAjIgPAAIAAgUIgNAAIAAA5IANAAIAAAPg");
	this.shape_461.setTransform(386.35,481.025);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#663300").s().p("AgSAtIAAgOIAJAAIAAggIgJAAIAAgOIAcAAIAAAuIAJAAIAAAOgAgGgaQgEgDAAgEQAAgEAEgDQADgEADAAQAFAAADAEQADADAAAEQAAAEgDADQgDAEgFAAQgDAAgDgEg");
	this.shape_462.setTransform(376.55,480.95);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#663300").s().p("AAJAsIAAgoIgBgEQgCgCgEAAQgDAAgGADIAAAdIAIAAIAAAOIglAAIAAgOIAKAAIAAg7IgKAAIAAgOIAdAAIAAAgQAIgHAJAAQAJAAAEAGQAGAGAAAJIAAAbIAJAAIAAAOg");
	this.shape_463.setTransform(370.2,481.025);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#663300").s().p("AgWAXQgKgIABgPQAAgIAEgHQAEgHAHgFQAHgEAIAAQAKAAAIAGIAAgFIAOAAIAAAZIgOAAQgFgKgKAAQgFgBgEAFQgEAFgBAGQAAAHAFAFQAEAEAFAAQAFAAAEgCQADgDADgFIAPAIQgFAJgGAFQgHAEgMAAQgPAAgJgJg");
	this.shape_464.setTransform(362.7,482.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#663300").s().p("AgSAtIAAgOIAJAAIAAggIgJAAIAAgOIAcAAIAAAuIAJAAIAAAOgAgGgaQgEgDAAgEQAAgEAEgDQADgEAEAAQAEAAADAEQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_465.setTransform(356.85,480.95);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#663300").s().p("AgQAcQgHgEgEgHQgFgIAAgJQABgIAEgIQAEgHAIgEQAHgEAIAAQAJAAAIAEQAHAEAEAHQAFAIgBAIQABAJgFAIQgEAHgIAEQgHAEgJAAQgIAAgIgEgAgIgMQgEAFAAAHQAAAIAEAEQAEAFAEAAQAGAAADgFQADgEAAgIQAAgHgDgFQgEgEgFAAQgFAAgDAEg");
	this.shape_466.setTransform(350.85,482.375);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#663300").s().p("AADAsIAAgPIAKAAIgageIAcgbIgLAAIAAgPIAsAAIAAAPIgMAAIgYAYIAdAhIAJAAIAAAPgAgwAsIAAgPIALAAIAAg5IgLAAIAAgPIAuAAIAAAPIgMAAIAAA5IALAAIAAAPg");
	this.shape_467.setTransform(342.25,481.025);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#663300").s().p("AgaAfIAAgOIAMAAIAAggIgMAAIAAgOIAdAAIAAAPQABgHAHgEQAFgFAJAAIACAAIAAASQgIABgFACQgFACgDAFQgCAEAAAJIAAAGIAMAAIAAAOg");
	this.shape_468.setTransform(498.5,468.325);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_469.setTransform(491.875,468.35);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#663300").s().p("AgGAnQgEgEAAgIIAAgfIgIAAIAAgOIAIAAIAAgKIASgOIAAAYIALAAIAAAOIgLAAIAAAaIABAEQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAGgBIAAAOQgHADgHAAQgHAAgEgEg");
	this.shape_470.setTransform(485.725,467.25);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_471.setTransform(479.725,468.35);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#663300").s().p("AAYA4QgEAAgEgCIgLgEIgHgEIgHgBQgHAAgHAFIgFgIQAFgIAKAAQgLgDgIgGQgIgHgEgJQgEgJAAgJQAAgOAGgKQAHgLALgFQALgGANAAQAOAAAMAGQALAGAGAKQAGALAAANQAAALgGAKQgFAKgKAGQgKAGgOABIAGACIAKAEIAJABIADAAIgFAOIgDAAgAgMgjQgGAEgDAHQgCAGAAAJQAAAIADAGQADAGAFAEQAGAEAGAAQAIAAAFgEQAGgEACgGQADgGAAgIQAAgIgDgIQgCgGgGgEQgFgDgIAAQgGAAgGADg");
	this.shape_472.setTransform(470.35,468.05);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#663300").s().p("AgaAtIAAgOIAJAAIAAggIgIAAIAAgOIAIAAIAAgHQAAgKAGgGQAGgGALAAQAOAAAHAJIgPALIgCgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABQgBABAAAFIAAAHIALAAIAAAOIgLAAIAAAgIALAAIAAAOg");
	this.shape_473.setTransform(459.875,466.95);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#663300").s().p("AgQAcQgHgEgEgHQgEgIgBgJQAAgIAFgIQAEgHAHgEQAIgEAIAAQAJAAAIAEQAHAEAEAHQAFAIAAAIQAAAJgFAIQgFAHgHAEQgHAEgJAAQgJAAgHgEgAgIgMQgEAFABAHQgBAIAEAEQADAFAFAAQAFAAAEgFQADgEAAgIQAAgHgDgFQgEgEgFAAQgFAAgDAEg");
	this.shape_474.setTransform(453.2,468.375);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#663300").s().p("AAgAfIAAgjQAAgJgIAAQgGAAgIAEIAAAaIAKAAIAAAOIgdAAIAAgiQAAgKgIAAQgGAAgIAEIAAAaIAKAAIAAAOIgoAAIAAgOIAKAAIAAggIgKAAIAAgOIAeAAIAAAFQAKgGAKAAQALAAAHAIQAMgIAMAAQAIAAAEACQAFADACAFQACAFAAAJIAAAXIAKAAIAAAOg");
	this.shape_475.setTransform(439.8,468.325);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#663300").s().p("AgXAaQgEgFAAgJIAAgcIgKAAIAAgOIAdAAIAAAlQAAAFABABQABACAFAAQADAAAGgEIAAgbIgIAAIAAgOIAcAAIAAAuIAKAAIAAAOIgeAAIAAgFQgIAGgIAAQgKAAgFgFg");
	this.shape_476.setTransform(429.35,468.425);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#663300").s().p("AgPAcQgIgDgEgHQgFgIAAgJQAAgIAFgIQAEgIAIgEQAIgEAIAAQAJAAAHAEQAIAFAEAIQADAIABAKIgtAAQAAAHAFAEQAEAEAFAAQAIAAAHgHIAPAFQgFAIgIADQgHAEgKAAQgJAAgIgEgAANgGQgBgFgEgEQgDgDgFAAQgFAAgDADQgDADgBAGIAZAAIAAAAg");
	this.shape_477.setTransform(421.725,468.375);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#663300").s().p("AgLAcIAAACIgOAAIAAgUIAOAAQABADAEADQADACAFABIAIgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIgBgDIgEgCIgJgCQgNgCgGgEQgHgEAAgJQAAgIAHgFQAGgFALAAQAHAAAHADIAAgCIAOAAIAAASIgOAAQgCgHgLABQgIgBAAAFQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAIAHACQALABAHADQAHADACADQAEAEAAAGQgBAKgGAGQgHAFgLAAQgKAAgFgEg");
	this.shape_478.setTransform(414.9,468.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#663300").s().p("AgXAaQgEgFAAgJIAAgcIgKAAIAAgOIAdAAIAAAlQAAAFABABQABACAFAAQADAAAGgEIAAgbIgIAAIAAgOIAcAAIAAAuIAKAAIAAAOIgeAAIAAgFQgIAGgIAAQgJAAgGgFg");
	this.shape_479.setTransform(407.75,468.425);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#663300").s().p("AAUAsIAAgPIAKAAIAAg5IgCAAIgbBIIgJAAIgbhIIgCAAIAAA5IALAAIAAAPIglAAIAAgPIALAAIAAg5IgLAAIAAgPIAsAAIATAzIATgzIAtAAIAAAPIgLAAIAAA5IALAAIAAAPg");
	this.shape_480.setTransform(396.975,467.025);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#663300").s().p("AgSAsIAAgOIAKAAIAAg7IgKAAIAAgOIAcAAIAABJIAJAAIAAAOg");
	this.shape_481.setTransform(384.8,467.025);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_482.setTransform(378.975,468.35);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#663300").s().p("AAIAfIAAgkQAAgFgBgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQgFAAgGAEIAAAbIAJAAIAAAOIgmAAIAAgOIAKAAIAAggIgKAAIAAgOIAdAAIAAAFQAIgGAJAAQAKAAAFAGQAEAGAAALIAAAYIAKAAIAAAOg");
	this.shape_483.setTransform(371.15,468.325);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#663300").s().p("AgQAcQgHgEgEgHQgEgIAAgJQgBgIAFgIQAEgHAHgEQAIgEAIAAQAJAAAIAEQAHAEAEAHQAEAIABAIQgBAJgEAIQgFAHgHAEQgHAEgJAAQgJAAgHgEgAgIgMQgEAFABAHQgBAIAEAEQADAFAFAAQAFAAAEgFQADgEAAgIQAAgHgDgFQgEgEgFAAQgFAAgDAEg");
	this.shape_484.setTransform(363.3,468.375);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#663300").s().p("AgSAtIAAgOIAJAAIAAggIgJAAIAAgOIAcAAIAAAuIAJAAIAAAOgAgHgZQgCgDgBgFQABgFACgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDACgFAAQgDAAgEgCg");
	this.shape_485.setTransform(357.45,466.95);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#663300").s().p("AgGAnQgEgEAAgIIAAgfIgIAAIAAgOIAIAAIAAgKIASgOIAAAYIALAAIAAAOIgLAAIAAAaIABAEQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAGgBIAAAOQgHADgHAAQgHAAgEgEg");
	this.shape_486.setTransform(352.775,467.25);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#663300").s().p("AgbAaQgGgFAAgIQAAgJAHgGQAGgFAMAAIAHABIAGADIAAgFQAAgFgDgCQgCgEgGAAQgGAAgFAGIgQgEQAHgOAXAAQAOAAAHAHQAGAFAAAOIAAAWIAKAAIAAAOIgdAAIAAgFQgIAGgIAAQgKAAgGgGgAgMAGQgCABAAAFQAAAHAHABQAGgBAGgFIAAgGQgGgEgFAAQgEAAgCACg");
	this.shape_487.setTransform(346.775,468.35);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#663300").s().p("AARAtIglhBIAAAxIALAAIAAAPIgnAAIAAgPIAMAAIAAg5IgMAAIAAgPIAlAAIAgA2IAAgnIgMAAIAAgPIAoAAIAAAPIgMAAIAABJg");
	this.shape_488.setTransform(337.925,467.05);

	this.instance_3 = new lib.MuseumQatar();
	this.instance_3.setTransform(320,184,0.1694,0.1567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446}]},150).wait(71));

	// Characteristics
	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_489.setTransform(590.8739,112.725);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#663300").s().p("AgmA2IAAhrIBNAAIAAANIhAAAIAAAhIA6AAIAAALIg6AAIAAAlIBBAAIAAANg");
	this.shape_490.setTransform(581.2,112.725);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#663300").s().p("AgnA2IAAhrIAvAAQAOAAAJAIQAJAIAAAPQAAANgIAJQgIAIgQAAIggAAIAAAugAgYgDIAbAAQAKAAAGgEQAGgEAAgLQAAgMgIgEQgGgCgIAAIgbAAg");
	this.shape_491.setTransform(571.25,112.725);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#663300").s().p("AAhA2IgLggIgqAAIgMAgIgPAAIAohrIAQAAIAnBrgAAQAKIgQgvIgQAvIAgAAg");
	this.shape_492.setTransform(560.95,112.725);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_493.setTransform(550.575,112.725);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_494.setTransform(540.0739,112.725);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#663300").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgGAOQgMAZgaAAgAgcApIAZAAQAGAAAFgBQAJgDAEgIQAFgHACgKIABgLQAAgTgIgLQgIgLgQAAIgZAAg");
	this.shape_495.setTransform(525.8,112.725);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#663300").s().p("AAaA2Ig1hWIAABWIgOAAIAAhrIARAAIA1BWIAAhWIANAAIAABrg");
	this.shape_496.setTransform(514.775,112.725);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#663300").s().p("AAhA2IgMggIgpAAIgMAgIgPAAIAohrIAQAAIAnBrgAARAKIgQgvIgRAvIAhAAg");
	this.shape_497.setTransform(504.4,112.725);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIgkAAIAABeg");
	this.shape_498.setTransform(650.4,95.725);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_499.setTransform(640.425,95.725);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#663300").s().p("AghAsQgOgPAAgbQAAgaAOgQQAOgQAUAAQAPAAALAGQAQAJAEAVIgPAAQgCgMgIgFQgJgGgMAAQgOAAgKALQgKAMAAAVQAAATAJAMQAIAMASAAQAOAAAJgIQAKgJAAgTIgiAAIAAgLIAvAAIAAA5IgJAAIgDgOQgIAIgFADQgKAGgNAAQgTAAgOgNg");
	this.shape_500.setTransform(628.925,95.725);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#663300").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_501.setTransform(621.4,95.725);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#663300").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_502.setTransform(615.475,95.725);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#663300").s().p("AgkA2IAAhrIBJAAIAAANIg7AAIAAAhIA0AAIAAAMIg0AAIAAAxg");
	this.shape_503.setTransform(602.625,95.725);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#663300").s().p("AgnAoQgMgPAAgYQAAgVAKgQQAOgUAbAAQAcAAAOATQAKAOAAAWQAAAXgMAQQgOATgaAAQgZAAgOgRgAgagfQgKALAAAWQAAARAJANQAJAMATAAQATAAAJgOQAJgOAAgRQAAgTgKgLQgKgMgSAAQgPAAgLAMg");
	this.shape_504.setTransform(591.775,95.725);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_505.setTransform(576.7239,95.725);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_506.setTransform(566.375,95.725);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#663300").s().p("AgHA2IAAhrIAOAAIAABrg");
	this.shape_507.setTransform(559.05,95.725);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBXAAIAAANIglAAIAABeg");
	this.shape_508.setTransform(552.3,95.725);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#663300").s().p("AgeAvQgLgLAAgRIAOAAQAAAJAEAGQAHALAQAAQAIAAAHgDQAMgEAAgMQAAgJgFgEQgFgDgMgDIgNgDQgOgDgFgDQgKgHAAgNQAAgPAJgJQAKgKASAAQAPAAAMAJQALAIAAASIgNAAQgBgJgEgFQgGgIgOAAQgNAAgFAFQgGAGAAAHQAAAIAHAEQAEACAOADIAOAEQALACAGAEQAKAHAAAPQAAASgNAHQgNAIgQAAQgTAAgLgKg");
	this.shape_509.setTransform(542.6239,95.725);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#663300").s().p("AgHA2IAAhrIAOAAIAABrg");
	this.shape_510.setTransform(535.75,95.725);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIAAgSQgBgLgHgDQgEgCgJAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACAEAFQACAEABAJIAAAPIACAJQAAAFAEABIAAADgAgcgEIAgAAQAJAAAGgEQAGgEAAgKQAAgMgIgEQgFgCgGAAIgiAAg");
	this.shape_511.setTransform(528.45,95.725);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#663300").s().p("AgmA2IAAhrIBMAAIAAANIg/AAIAAAhIA7AAIAAALIg7AAIAAAlIBAAAIAAANg");
	this.shape_512.setTransform(518,95.725);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#663300").s().p("AgHA2IAAheIgkAAIAAgNIBWAAIAAANIgjAAIAABeg");
	this.shape_513.setTransform(508.2,95.725);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_514.setTransform(498.175,95.725);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#663300").s().p("AAgA2IgKggIgqAAIgMAgIgPAAIAphrIAPAAIAnBrgAAQAKIgPgvIgRAvIAgAAg");
	this.shape_515.setTransform(487.8,95.725);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#663300").s().p("AAaA2IgBgEIgBgIIAAgSQgBgLgIgDQgDgCgJAAIgfAAIAAAuIgPAAIAAhrIAwAAQAMAAAIAEQAPAHAAASQAAAKgEAGQgEAGgHADQAGACADAFQADAEABAJIABAPIABAJQAAAFAEABIAAADgAgcgEIAgAAQAJAAAGgEQAGgEAAgKQAAgMgIgEQgFgCgGAAIgiAAg");
	this.shape_516.setTransform(477.7,95.725);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#663300").s().p("AAhA2IgLggIgqAAIgMAgIgPAAIAphrIAPAAIAnBrgAAQAKIgQgvIgQAvIAgAAg");
	this.shape_517.setTransform(467,95.725);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#663300").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAtIA3AAIAAgtIAOAAIAABrg");
	this.shape_518.setTransform(456.625,95.725);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#663300").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_519.setTransform(445.775,95.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489}]},133).wait(88));

	// Light_Space_Text2
	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#663300").s().p("AhOBrIAAjWICbAAIAAAaIh/AAIAABCIB1AAIAAAYIh1AAIAABJICBAAIAAAZg");
	this.shape_520.setTransform(237.175,175.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#663300").s().p("Ag8BbQghgeAAg+QAAgwAZgeQAbghAuAAQAoAAAXAVQAWAWADAbIgdAAQgFgVgOgMQgOgMgaAAQgeAAgTAWQgUAXAAAtQAAAmASAXQARAYAiAAQAfAAARgZQAIgNAFgVIAdAAQgFAigVAXQgZAbgrAAQgkAAgZgWg");
	this.shape_521.setTransform(215.8,175.175);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhATIghheIgiBeIBDAAg");
	this.shape_522.setTransform(195.1,175.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#663300").s().p("AhPBrIAAjWIBfAAQAdABASAQQARAPAAAeQAAAZgPATQgQASghAAIhBAAIAABagAgxgHIA4AAQATAAANgJQAMgIgBgVQAAgXgRgJQgKgEgQgBIg4AAg");
	this.shape_523.setTransform(177.85,175.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#663300").s().p("Ag9BdQgWgVAAgiIAcAAQABASAHALQAOAWAiAAQAQAAANgFQAZgJAAgYQAAgRgLgHQgKgIgXgGIgcgGQgbgGgMgHQgUgOAAgbQAAgdAUgSQAUgTAjAAQAgAAAXARQAXAQAAAkIgbAAQgCgSgHgIQgNgRgeAAQgYgBgLALQgLAMAAAOQAAAPANAIQAIAEAdAIIAdAHQAVAEAMAIQAUAPAAAdQAAAkgaAPQgZAPghAAQgnAAgWgUg");
	this.shape_524.setTransform(157.1244,175.25);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#663300").s().p("AhXBrIAAjWIBWAAQArABAYAfQAWAcAAAtQAAAhgNAcQgWAwg2AAgAg5BSIAzAAQANAAAJgCQARgGALgQQAIgNAEgVQACgMAAgLQAAgngQgWQgPgVgigBIgyAAg");
	this.shape_525.setTransform(128.525,175.2);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#663300").s().p("AA0BrIhsisIAACsIgcAAIAAjWIAiAAIBrCtIAAitIAcAAIAADWg");
	this.shape_526.setTransform(106.475,175.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhATIghheIgiBeIBDAAg");
	this.shape_527.setTransform(85.75,175.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#663300").s().p("AgOBsIAAi9IhIAAIAAgZICtAAIAAAZIhIAAIAAC9g");
	this.shape_528.setTransform(213.125,143.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#663300").s().p("AA3BsIAAhlIhtAAIAABlIgeAAIAAjWIAeAAIAABYIBtAAIAAhYIAeAAIAADWg");
	this.shape_529.setTransform(193.075,143.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#663300").s().p("AhCBZQgegfAAg3QAAg1AdggQAbgeArAAQAeAAAWAMQAfARAIAqIgdAAQgGgYgQgLQgQgKgZAAQgcAAgUAWQgUAWAAAsQAAAmARAYQAQAYAkAAQAdAAASgQQAUgRgBgmIhCAAIAAgXIBeAAIAAByIgTAAIgHgcQgOAQgMAHQgSAKgdAAQglAAgbgYg");
	this.shape_530.setTransform(170.1,143.175);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#663300").s().p("AgOBsIAAjWIAdAAIAADWg");
	this.shape_531.setTransform(155.075,143.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#663300").s().p("AhEBsIAAjWIAeAAIAAC8IBrAAIAAAag");
	this.shape_532.setTransform(143.15,143.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#663300").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_533.setTransform(121.5,152.35);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#663300").s().p("AARBpIAAgzIhbAAIAAgaIBfiEIAXAAIAACHIAfAAIAAAXIgfAAIAAAzgAgxAfIBCAAIAAheg");
	this.shape_534.setTransform(108.975,143.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520}]},114).wait(107));

	// Leaf_Stand
	this.instance_4 = new lib.LeafStand();
	this.instance_4.setTransform(-61,216,0.1428,0.1428);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).wait(107));

	// Plain_Box
	this.instance_5 = new lib.Tween30("synched",0);
	this.instance_5.setTransform(541.15,313.55,1.0711,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133).to({_off:false},0).wait(88));

	// Plain_Back
	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#E5E0D8").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_535.setTransform(399.025,300.025);
	this.shape_535._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_535).wait(114).to({_off:false},0).wait(107));

	// Arrow
	this.Arrow_btn = new lib.Arrow();
	this.Arrow_btn.name = "Arrow_btn";
	this.Arrow_btn.setTransform(655.5,570,1,1,0,0,0,9.5,14);
	this.Arrow_btn._off = true;
	new cjs.ButtonHelper(this.Arrow_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Arrow_btn).wait(88).to({_off:false},0).to({_off:true},26).wait(107));

	// Definition
	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_536.setTransform(633.275,555.675);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#663300").s().p("AgcAzQgJgGgEgIQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFAEQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgHQADgFAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_537.setTransform(626.025,551.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_538.setTransform(618.275,551.125);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgxIgQAAIAAgNIAbAAIAAASQAEgLAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAHQgBAGAAALIAAARIAQAAIAAAOg");
	this.shape_539.setTransform(612.65,552.75);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgGgJABgLQgBgLAGgJQAFgJAJgGQAKgFAKAAQALAAAKAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgLgWQgGAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQADgGgBgHQABgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_540.setTransform(604.6,552.825);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_541.setTransform(593.525,552.875);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgxIgPAAIAAgNIAcAAIAAASQADgLAHgEQAHgEAMAAIAEAAIAAAQIgEAAQgMAAgGADQgGADgCAHQgBAGAAALIAAARIAQAAIAAAOg");
	this.shape_542.setTransform(579.65,552.75);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_543.setTransform(571.6,552.825);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQALAAAKAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgLgWQgGAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_544.setTransform(562.4,552.825);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#663300").s().p("AgcAzQgJgGgEgIQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFAEQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgHQADgFAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_545.setTransform(552.925,551.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQAAAHACABQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAJgCIAAAOIgLACQgJAAgFgFg");
	this.shape_546.setTransform(545.25,551.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_547.setTransform(538.225,552.875);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_548.setTransform(528.85,552.825);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_549.setTransform(515.575,552.825);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAdAAIAAAqQANgLALAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_550.setTransform(506.25,551.125);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgOIALAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQABAHABABQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_551.setTransform(499.15,551.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_552.setTransform(487.95,551.125);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgOIAKAAIAAgLIAPgOIAAAZIANAAIAAAOIgNAAIAAAnQgBAHACABQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAHgCIAAAOIgLACQgIAAgEgFg");
	this.shape_553.setTransform(480.85,551.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgxIgLAAIAAgNIAaAAIAAA+IALAAIAAAOgAgGgnQgCgDAAgEQAAgDACgEQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_554.setTransform(476.15,551.05);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_555.setTransform(467.375,552.875);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAAoIAOAAIAAAOIgqAAIAAgOIAOAAIAAgxIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_556.setTransform(452.125,552.75);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJAAgLQAAgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgKAFQgIAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgDAGgBAGQABAHADAGQADAGAGADQAFAEAGAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgFAAgGADg");
	this.shape_557.setTransform(442.75,552.825);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#663300").s().p("AgSA4IAAgOIAMAAIAAgxIgMAAIAAgNIAaAAIAAA+IAMAAIAAAOgAgGgnQgCgDAAgEQAAgDACgEQADgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_558.setTransform(435.9,551.05);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgOIALAAIAAgLIANgOIAAAZIAPAAIAAAOIgPAAIAAAnQABAHABABQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_559.setTransform(431.2,551.6);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_560.setTransform(424.625,552.825);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_561.setTransform(415.675,552.825);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAAoIAOAAIAAAOIgqAAIAAgOIAOAAIAAgxIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_562.setTransform(406.375,552.75);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAAoIAOAAIAAAOIgqAAIAAgOIAOAAIAAgxIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_563.setTransform(396.925,552.75);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgFAAgHADg");
	this.shape_564.setTransform(387.55,552.825);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_565.setTransform(378.825,552.825);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_566.setTransform(366.325,552.775);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_567.setTransform(353.075,552.825);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#663300").s().p("AgcAzQgJgGgEgIQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFAEQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgHQADgFAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_568.setTransform(343.575,551.2);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgxIgNAAIAAgNIAbAAIAAA+IAMAAIAAAOgAgFgnQgEgDAAgEQAAgDAEgEQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_569.setTransform(336.05,551.05);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#663300").s().p("AgFAnIgZhAIgNAAIAAgNIAnAAIAAANIgKAAIAQArIAQgrIgLAAIAAgNIAlAAIAAANIgLAAIgZBAg");
	this.shape_570.setTransform(329.125,552.875);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgLgWQgGAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_571.setTransform(319.85,552.825);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgxIgQAAIAAgNIAbAAIAAASQAEgLAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAHQgBAGAAALIAAARIAQAAIAAAOg");
	this.shape_572.setTransform(311.95,552.75);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_573.setTransform(303.275,554.475);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#663300").s().p("AgcAzQgJgGgEgIQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAKgBQAIAAAFAEQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAAOIgdAAIAAgMQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAGAGAEQAGAEAGAAQAGgBAGgEQAGgDADgHQADgFAAgHQAAgIgDgGQgDgFgGgDQgGgEgGABQgHgBgFAEg");
	this.shape_574.setTransform(289.475,551.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAAoIAOAAIAAAOIgqAAIAAgOIAOAAIAAgxIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_575.setTransform(279.525,552.75);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_576.setTransform(270.625,552.775);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_577.setTransform(257.375,552.825);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_578.setTransform(248.625,552.825);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJABgNAJIAAAoIAOAAIAAAOIgqAAIAAgOIAOAAIAAgxIgOAAIAAgNIAcAAIAAAKQAPgLALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_579.setTransform(239.625,552.75);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_580.setTransform(230.225,552.825);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgxIgLAAIAAgNIAaAAIAAA+IALAAIAAAOgAgGgnQgDgDAAgEQAAgDADgEQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_581.setTransform(223.35,551.05);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgxIgPAAIAAgNIAcAAIAAASQADgLAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAHQgBAGAAALIAAARIAQAAIAAAOg");
	this.shape_582.setTransform(217.75,552.75);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_583.setTransform(209.675,552.825);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_584.setTransform(199.825,554.475);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#663300").s().p("AAFAnIAAgOIAKAAIgOgRIgPARIAKAAIAAAOIglAAIAAgOIALAAIAYgZIgXgYIgKAAIAAgOIAkAAIAAAOIgKAAIAOAPIAMgPIgIAAIAAgOIAlAAIAAAOIgNAAIgUAXIAYAaIAJAAIAAAOg");
	this.shape_585.setTransform(190.55,552.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_586.setTransform(181.475,552.825);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_587.setTransform(626.125,535.825);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#663300").s().p("AARA3IAAgyQAAgHgDgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAcAAIAAAqQAPgLAKAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_588.setTransform(616.8,534.125);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAoQAAAFABACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgKACQgJAAgFgFg");
	this.shape_589.setTransform(609.7,534.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_590.setTransform(598.575,535.825);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_591.setTransform(589.825,535.825);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_592.setTransform(580.825,535.75);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_593.setTransform(571.925,535.775);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#663300").s().p("AAQA3IAAgyQAAgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_594.setTransform(562.65,534.125);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_595.setTransform(553.275,535.75);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_596.setTransform(543.875,535.825);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAPgLAKAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_597.setTransform(530.5,534.125);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#663300").s().p("AgFAvQgEgFABgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAoQAAAFABACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgLACQgIAAgFgFg");
	this.shape_598.setTransform(523.4,534.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_599.setTransform(516.35,535.825);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAALIgcAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgOAQAAQAKAAAJAGQAIAFAFAKQAFAHAAALQAAALgFAJQgFAKgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAGADAGQADAHAGADQAFADAGABQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_600.setTransform(506.525,534.2);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#663300").s().p("AgEAvQgEgFAAgLIAAgrIgLAAIAAgNIALAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABACQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_601.setTransform(495.1,534.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_602.setTransform(488.075,535.875);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAALIgcAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgOAQAAQAKAAAJAGQAIAFAFAKQAFAHAAALQAAALgFAJQgFAKgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAGADAGQADAHAGADQAFADAGABQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_603.setTransform(478.075,534.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#663300").s().p("AgJAMQAJgBAAgLIAAAAIgJAAIAAgUIATAAIAAATQAAAHgCAFQgCAFgEACQgDACgIABg");
	this.shape_604.setTransform(466.725,539.775);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_605.setTransform(461.875,534.125);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_606.setTransform(455.425,535.775);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgnQgCgDAAgEQAAgDACgEQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_607.setTransform(448.6,534.05);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_608.setTransform(442.175,535.825);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#663300").s().p("AgTA4IAAgOIANAAIAAgwIgNAAIAAgOIAbAAIAAA+IAMAAIAAAOgAgFgnQgDgDgBgEQABgDADgEQACgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_609.setTransform(435.6,534.05);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_610.setTransform(431.625,534.025);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#663300").s().p("AgSA4IAAgOIAMAAIAAgwIgMAAIAAgOIAaAAIAAA+IAMAAIAAAOgAgFgnQgDgDAAgEQAAgDADgEQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_611.setTransform(426.35,534.05);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#663300").s().p("AgEAvQgEgFgBgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABACQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_612.setTransform(421.65,534.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAASQAEgLAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_613.setTransform(415.9,535.75);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_614.setTransform(408.325,535.775);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgwIgPAAIAAgOIAcAAIAAASQADgLAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_615.setTransform(396.4,535.75);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgKAGgLAAQgKAAgKgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgGADg");
	this.shape_616.setTransform(388.35,535.825);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_617.setTransform(377.225,534.125);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_618.setTransform(370.775,535.775);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAASQAEgLAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_619.setTransform(362.9,535.75);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_620.setTransform(354.875,535.875);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIANgOIAAAaIAOAAIAAANIgOAAIAAAoQAAAFACACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgKACQgJAAgFgFg");
	this.shape_621.setTransform(347.7,534.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_622.setTransform(341.125,535.775);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFAAQgJAAgNALIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_623.setTransform(331.875,535.75);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_624.setTransform(318.425,535.825);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAALIgcAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgOAQAAQAKAAAJAGQAIAFAFAKQAFAHAAALQAAALgFAJQgFAKgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGAEgDAEQgDAHAAAIQAAAGADAGQADAHAGADQAFADAGABQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_625.setTransform(308.575,534.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgJAAIAAgNIAJAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAoQgBAFACACQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgLACQgIAAgEgFg");
	this.shape_626.setTransform(297.15,534.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgnQgCgDAAgEQAAgDACgEQADgCADAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_627.setTransform(292.45,534.05);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAASQAEgLAHgEQAHgEANAAIADAAIAAAQIgDAAQgNAAgGADQgGADgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_628.setTransform(282.8,535.75);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_629.setTransform(274.725,535.825);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_630.setTransform(265.4,534.125);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#663300").s().p("AgEAvQgEgFgBgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABACQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_631.setTransform(258.3,534.6);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_632.setTransform(251.225,535.825);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgEAAQgIAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_633.setTransform(241.9,534.125);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_634.setTransform(230.725,535.875);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#663300").s().p("AgJAMQAJgBAAgLIAAAAIgJAAIAAgUIATAAIAAATQAAAHgCAFQgCAFgEACQgDACgIABg");
	this.shape_635.setTransform(217.825,539.775);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#663300").s().p("AgFAvQgDgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAoQAAAFACACQAAABABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgFgFg");
	this.shape_636.setTransform(213.05,534.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgEAAQgIAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_637.setTransform(205.9,534.125);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_638.setTransform(196.325,537.575);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#663300").s().p("AgTA4IAAgOIAMAAIAAgwIgMAAIAAgOIAbAAIAAA+IALAAIAAAOgAgFgnQgEgDAAgEQAAgDAEgEQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_639.setTransform(188.8,534.05);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_640.setTransform(184.025,534.125);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAOAAIAAhTIgOAAIAAgNIAeAAIAAAqQAOgLAKAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_641.setTransform(628.1,517.125);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#663300").s().p("AgEAvQgEgFgBgLIAAgrIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAFABADQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_642.setTransform(621,517.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#663300").s().p("AgTA4IAAgOIAMAAIAAgwIgMAAIAAgOIAbAAIAAA+IALAAIAAAOgAgFgnQgEgDAAgEQAAgEAEgCQACgDADAAQADAAADADQADACAAAEQAAAEgDADQgDACgDAAQgDAAgCgCg");
	this.shape_643.setTransform(616.3,517.05);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_644.setTransform(607.525,518.875);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_645.setTransform(592.275,518.75);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#663300").s().p("AARAnIgRg3IgSA3IgOAAIgVhAIgJAAIAAgNIAhAAIAAANIgKAAIAOAuIAPguIgIAAIAAgNIAkAAIAAANIgJAAIAPAuIAPguIgLAAIAAgNIAjAAIAAANIgLAAIgVBAg");
	this.shape_646.setTransform(581.025,518.875);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQAAALgFAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAFAEAGAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_647.setTransform(569.9,518.825);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAOAAIAAhTIgOAAIAAgNIAeAAIAAAqQAOgLAKAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_648.setTransform(560.6,517.125);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAGADQAEAEAGAAQAHAAAEgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFABgJQgBgHAFgFQADgGAHgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgHAAgDACQgFADAAAEQAAAEADACQAEACAKACIAJACQAWAEABARQgBALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_649.setTransform(552.2,518.825);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_650.setTransform(539.725,518.825);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAALIgcAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgOAQAAQAKAAAJAGQAIAFAFAKQAFAIAAAKQAAALgFAJQgFAKgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGADgDAFQgDAGAAAJQAAAGADAGQADAHAGADQAFADAGABQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_651.setTransform(529.875,517.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_652.setTransform(516.175,518.75);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_653.setTransform(507.275,518.775);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_654.setTransform(498.575,518.825);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_655.setTransform(485.575,518.825);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_656.setTransform(476.825,518.825);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_657.setTransform(468.375,518.775);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_658.setTransform(458.575,520.475);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAGAEAFAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgEACQgEADAAAEQAAAEADACQADACAJACIAKACQAXAEAAARQAAALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_659.setTransform(450,518.825);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_660.setTransform(440.475,517.025);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJAAgLQAAgLAGgJQAFgJAKgGQAJgFAKAAQALAAAKAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgKAFQgIAGgMAAQgKAAgJgGgAgLgWQgGAEgDAGQgDAGgBAGQABAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQAEgGAAgHQAAgGgEgGQgDgGgGgDQgFgEgHAAQgFAAgGADg");
	this.shape_661.setTransform(432.85,518.825);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_662.setTransform(419.575,518.825);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgLgCgGgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIANAAIAAAaIgNAAIAAgFQgHgJgKAAQgGAAgFACQgDADgBAEQABAEACACQAEACAKACIAJACQAWAEAAARQAAALgHAGQgJAHgOAAQgEAAgFgCg");
	this.shape_663.setTransform(411.25,518.825);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_664.setTransform(402.775,518.75);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_665.setTransform(393.375,518.825);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEACACQADACALACIAJACQAWAEAAARQAAALgIAGQgIAHgNAAQgFAAgFgCg");
	this.shape_666.setTransform(385.05,518.825);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#663300").s().p("AAPA3IAAgOIAOAAIgJgZIgmAAIgJAZIANAAIAAAOIgrAAIAAgOIANAAIAehSIgNAAIAAgNIA4AAIAAANIgNAAIAeBSIAMAAIAAAOgAAQADIgPgsIgBAAIgPAsIAfAAg");
	this.shape_667.setTransform(371.2,517.125);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#663300").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_668.setTransform(358.775,521.675);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_669.setTransform(351.525,520.575);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgDgFAAQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_670.setTransform(341.575,518.75);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#663300").s().p("AgSA4IAAgOIAMAAIAAgwIgMAAIAAgOIAaAAIAAA+IAMAAIAAAOgAgGgnQgCgDAAgEQAAgEACgCQADgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_671.setTransform(334.55,517.05);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#663300").s().p("AgcAzQgJgGgEgJQgFgIAAgLQAAgMAFgIQAFgJAJgGQAJgGAKAAQAIABAFADQAHADAGAGIAAgfIgPAAIAAgNIAeAAIAABgIAOAAIAAANIgdAAIAAgLQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAIADAFQADAHAGADQAGADAGABQAGAAAGgFQAGgDADgHQADgGAAgGQAAgIgDgGQgDgFgGgDQgGgDgGAAQgHAAgFADg");
	this.shape_672.setTransform(327.375,517.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_673.setTransform(319.625,517.125);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgnQgCgDAAgEQAAgEACgCQADgDADAAQADAAADADQADACAAAEQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_674.setTransform(315.05,517.05);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_675.setTransform(308.175,518.875);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#663300").s().p("AgGA1QgHgEgFgGIAAALIgcAAIAAgNIAOAAIAAhTIgOAAIAAgNIAcAAIAAAtQAMgOAQAAQAKAAAJAGQAIAFAFAKQAFAIAAAKQAAALgFAJQgFAKgIAGQgJAFgLAAQgIAAgHgDgAgFgGQgGADgDAFQgDAGAAAJQAAAGADAGQADAHAGADQAFADAGABQAIAAAFgFQAGgDADgHQADgGAAgHQAAgHgDgGQgDgFgGgEQgFgDgHAAQgHAAgFAEg");
	this.shape_676.setTransform(298.175,517.2);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_677.setTransform(285.85,518.75);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#663300").s().p("AgTAjQgKgFgFgKQgGgJABgLQgBgLAGgJQAFgJAKgGQAJgFAKAAQAMAAAJAGQAJAFAFAKQAFAJABAKQAAALgGAJQgFAKgKAFQgJAGgLAAQgKAAgJgGgAgLgWQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGADQAGAEAFAAQAHAAAGgEQAFgDAEgGQADgGAAgHQAAgGgDgGQgEgGgFgDQgGgEgHAAQgGAAgFADg");
	this.shape_678.setTransform(277.8,518.825);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_679.setTransform(264.525,518.825);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_680.setTransform(255.775,518.825);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_681.setTransform(247.325,518.775);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_682.setTransform(237.525,520.475);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgNAAIAAgaIANAAIAAADQABAFAFADQAFAEAGAAQAHAAAFgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgMgCgFgFQgFgFAAgJQAAgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAIAFIAAgEIAMAAIAAAaIgMAAIAAgFQgHgJgKAAQgGAAgEACQgEADgBAEQABAEADACQACACAKACIAKACQAXAEAAARQAAALgIAGQgJAHgNAAQgFAAgFgCg");
	this.shape_683.setTransform(228.95,518.825);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_684.setTransform(216.475,518.825);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIAMAAIAAANg");
	this.shape_685.setTransform(207.15,517.125);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#663300").s().p("AgEAvQgFgFAAgLIAAgrIgKAAIAAgNIAKAAIAAgMIAPgOIAAAaIANAAIAAANIgNAAIAAAoQgBAFACADQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAHgCIAAAOIgLACQgIAAgEgFg");
	this.shape_686.setTransform(200.05,517.6);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_687.setTransform(191.875,517.025);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJgBgLQABgLAFgJQAFgJAJgGQAJgFALAAQAMAAAJAGQAJAFAGAKQAEAJAAAKQABALgGAJQgFAKgJAFQgKAGgLAAQgLAAgJgGgAgMgWQgFAEgDAGQgDAGAAAGQAAAHADAGQADAGAGADQAGAEAFAAQAHAAAFgEQAGgDADgGQADgGAAgHQAAgGgDgGQgDgGgGgDQgFgEgHAAQgFAAgHADg");
	this.shape_688.setTransform(184.25,518.825);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFABQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_689.setTransform(639.325,501.75);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_690.setTransform(629.675,503.575);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#663300").s().p("AgTA4IAAgOIAMAAIAAgwIgMAAIAAgOIAbAAIAAA+IALAAIAAAOgAgFgoQgEgCAAgEQAAgDAEgDQACgDADAAQADAAADADQADACAAAEQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_691.setTransform(622.15,500.05);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAFADQAGAEAFAAQAIAAAEgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFgBgJQABgHAEgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgGAAgEACQgDADAAAEQAAAEADACQADACAJACIAKACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_692.setTransform(616.15,501.825);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_693.setTransform(607.725,501.825);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#663300").s().p("AgcAzQgJgGgEgJQgFgIAAgMQAAgLAFgIQAFgJAJgGQAJgGAKABQAIAAAFADQAHADAGAGIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAANIgdAAIAAgLQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAGAGADQAGADAGABQAGAAAGgEQAGgEADgHQADgFAAgIQAAgHgDgGQgDgEgGgEQgGgDgGgBQgHABgFADg");
	this.shape_694.setTransform(598.225,500.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_695.setTransform(584.275,501.825);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#663300").s().p("AARA3IAAgyQAAgHgDgEQgCgDgFAAQgIAAgOAJIAAAqIAOAAIAAANIgqAAIAAgNIANAAIAAhTIgNAAIAAgNIAcAAIAAAqQAPgLAKAAQAVAAAAAXIAAAqIAOAAIAAANg");
	this.shape_696.setTransform(574.95,500.125);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIANAAIAAANIgNAAIAAAoQAAAGABACQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAIAIgCIAAAOIgKACQgJAAgFgFg");
	this.shape_697.setTransform(567.85,500.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#663300").s().p("AgZA4IAAgNIALAAIAAgxIgLAAIAAgOIALAAIAAgMQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAJIgOACQAAgHgFAAQgEAAgBACIgBAKIAAALIANAAIAAAOIgNAAIAAAxIAOAAIAAANg");
	this.shape_698.setTransform(559.675,500.025);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#663300").s().p("AgUAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAKgFAKAAQALAAAKAGQAJAFAFAKQAGAJAAAKQgBALgFAJQgFAKgJAFQgJAGgMAAQgKAAgKgGgAgMgWQgFAEgDAGQgEAGABAGQgBAHAEAGQADAGAGADQAFAEAGAAQAHAAAGgEQAFgDAEgGQACgGAAgHQAAgGgCgGQgEgGgFgDQgGgEgHAAQgGAAgGADg");
	this.shape_699.setTransform(552.05,501.825);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#663300").s().p("AgEAvQgEgFAAgMIAAgqIgLAAIAAgNIALAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAoQABAGABACQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgLACQgJAAgEgFg");
	this.shape_700.setTransform(541,500.6);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_701.setTransform(534.425,501.825);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_702.setTransform(525.975,501.775);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_703.setTransform(516.175,503.475);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgCgFAAQgEAAgGACQgFADgGAFIAAAnIANAAIAAAOIgbAAIAAgyQAAgHgDgEQgCgCgFAAQgIAAgOAKIAAAnIAOAAIAAAOIgrAAIAAgOIAOAAIAAgwIgNAAIAAgOIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAGQAFAFAAAMIAAAoIAOAAIAAAOg");
	this.shape_704.setTransform(504.325,501.75);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgoQgCgCAAgEQAAgDACgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDADgDAAQgDAAgDgDg");
	this.shape_705.setTransform(494.95,500.05);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_706.setTransform(483.975,501.825);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#663300").s().p("AAQA3IAAgyQABgHgDgEQgDgDgFAAQgHAAgNAJIAAAqIANAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAeAAIAAAqQAOgLAKAAQAWAAAAAXIAAAqIAMAAIAAANg");
	this.shape_707.setTransform(474.65,500.125);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#663300").s().p("AgEAvQgEgFgBgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAGABACQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_708.setTransform(467.55,500.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFABQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_709.setTransform(456.375,501.75);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#663300").s().p("AgTA4IAAgOIAMAAIAAgwIgMAAIAAgOIAbAAIAAA+IALAAIAAAOgAgFgoQgEgCAAgEQAAgDAEgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_710.setTransform(449.35,500.05);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAFADQAGAEAFAAQAIAAAEgDQAEgCAAgGQAAgDgDgCIgNgEIgIgCQgLgCgGgFQgFgFgBgJQABgHAEgFQADgGAHgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgGAAgEACQgDADAAAEQAAAEADACQADACAJACIAKACQAXAEgBARQABALgJAGQgIAHgNAAQgFAAgFgCg");
	this.shape_711.setTransform(439.3,501.825);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#663300").s().p("AgFAvQgDgFAAgMIAAgqIgKAAIAAgNIAKAAIAAgMIANgOIAAAaIAPAAIAAANIgPAAIAAAoQAAAGACACQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAIAJgCIAAAOIgLACQgJAAgFgFg");
	this.shape_712.setTransform(433.1,500.6);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFABQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_713.setTransform(425.975,501.75);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_714.setTransform(416.575,501.825);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#663300").s().p("AAnAnIAAgwIAAgIQgBgDgCgCQgCgCgFAAQgEAAgGACQgFADgGAFIAAAnIANAAIAAAOIgbAAIAAgyQAAgHgDgEQgCgCgFAAQgIAAgOAKIAAAnIAOAAIAAAOIgrAAIAAgOIAOAAIAAgwIgNAAIAAgOIAcAAIAAAKQAOgLANAAQAMAAAFAMQAPgMANAAQAJAAAGAGQAFAFAAAMIAAAoIAOAAIAAAOg");
	this.shape_715.setTransform(404.975,501.75);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_716.setTransform(393.225,501.825);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_717.setTransform(386.125,500.125);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_718.setTransform(379.175,501.825);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#663300").s().p("AgTA3IAAgNIANAAIAAhTIgNAAIAAgNIAbAAIAABgIAMAAIAAANg");
	this.shape_719.setTransform(368.025,500.125);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_720.setTransform(361.575,501.775);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgoQgDgCAAgEQAAgDADgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDADgDAAQgDAAgDgDg");
	this.shape_721.setTransform(354.75,500.05);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_722.setTransform(348.325,501.825);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#663300").s().p("AgaAhQgFgHAAgPIAAgkIgLAAIAAgNIAaAAIAAA0QAAAGACADQACADAFAAQAKAAAMgKIAAgpIgOAAIAAgNIAdAAIAAA+IANAAIAAAOIgcAAIAAgJQgOAKgLAAQgLAAgFgGg");
	this.shape_723.setTransform(339.425,501.875);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#663300").s().p("AgeAnIAAgOIAPAAIAAgwIgPAAIAAgOIAcAAIAAARQADgKAHgEQAGgEANAAIAEAAIAAAQIgEAAQgMAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_724.setTransform(331.35,501.75);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_725.setTransform(323.775,501.825);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_726.setTransform(310.775,501.825);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#663300").s().p("AgeAnIAAgOIAQAAIAAgwIgQAAIAAgOIAbAAIAAARQAEgKAHgEQAGgEAOAAIADAAIAAAQIgDAAQgNAAgGACQgGAEgCAGQgBAHAAALIAAARIAQAAIAAAOg");
	this.shape_727.setTransform(302.85,501.75);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_728.setTransform(295.275,501.775);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#663300").s().p("AgTAjQgKgFgFgJQgGgJAAgMQAAgLAGgJQAFgJAJgGQAKgFAKAAQAMAAAJAGQAJAFAFAKQAFAKABANIhAAAQACALAHAGQAHAGAJAAQAIAAAHgDQAGgDAEgGIAOAGQgHAJgKAGQgKAFgMAAQgLAAgKgGgAAZgGQgCgKgHgFQgHgGgJAAQgIAAgGAGQgGAFgCAKIAvAAIAAAAg");
	this.shape_729.setTransform(282.025,501.825);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#663300").s().p("AgSAjQgJgFgFgKQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFAJAAQANAAAJAIIAAgGIANAAIAAAdIgNAAQgBgIgGgEQgGgFgHAAQgGAAgFAEQgFADgDAGQgDAGAAAHQAAALAGAIQAHAIAJAAQARAAAGgPIANAGQgLAXgZAAQgLAAgJgGg");
	this.shape_730.setTransform(273.275,501.825);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_731.setTransform(264.825,501.775);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#663300").s().p("AguA4IAAgNIAOAAIAAhUIgNAAIAAgNIAcAAIAAAMQAGgHAHgDQAGgDAHAAQALAAAJAFQAIAGAFAJQAFAJAAALQAAAKgFAJQgFAJgJAGQgIAFgLAAQgOAAgMgMIAAAfIAPAAIAAANgAgFgmQgGAEgDAGQgDAGAAAIQAAAMAIAFQAHAHALAAQAGAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgGQgDgGgGgDQgFgEgHAAQgHAAgFAEg");
	this.shape_732.setTransform(255.025,503.475);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#663300").s().p("AgIAmIgJgEIAAAEIgOAAIAAgaIAOAAIAAADQABAFAGADQAFAEAFAAQAIAAADgDQAFgCAAgGQAAgDgEgCIgMgEIgIgCQgMgCgFgFQgGgFAAgJQAAgHAFgFQAEgGAGgCQAGgDAHAAQAKAAAHAFIAAgEIAOAAIAAAaIgOAAIAAgFQgGgJgLAAQgFAAgFACQgDADAAAEQAAAEACACQADACALACIAJACQAWAEAAARQAAALgIAGQgIAHgNAAQgFAAgFgCg");
	this.shape_733.setTransform(246.45,501.825);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#663300").s().p("AgcAzQgJgGgEgJQgFgIAAgMQAAgLAFgIQAFgJAJgGQAJgGAKABQAIAAAFADQAHADAGAGIAAgeIgPAAIAAgOIAeAAIAABgIAOAAIAAANIgdAAIAAgLQgLANgPAAQgMAAgIgFgAgSgGQgGAEgDAFQgDAGAAAHQAAAHADAHQADAGAGADQAGADAGABQAGAAAGgEQAGgEADgHQADgFAAgIQAAgHgDgGQgDgEgGgEQgGgDgGgBQgHABgFADg");
	this.shape_734.setTransform(233.725,500.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#663300").s().p("AAQAnIAAgyQAAgHgCgDQgCgEgFABQgJAAgNAKIAAAnIAOAAIAAAOIgqAAIAAgOIAOAAIAAgwIgOAAIAAgOIAcAAIAAAJQAPgKALAAQAKAAAFAHQAFAFAAAOIAAAlIANAAIAAAOg");
	this.shape_735.setTransform(223.775,501.75);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#663300").s().p("AgYAlQgGgEgEgFQgDgGAAgGQAAgIAEgFQAEgFAGgDQAHgDAHAAQAKAAAKAHIAAgJQAAgJgEgEQgEgEgIAAQgGAAgEADQgEACgDAEIgOgDQAFgJAIgFQAIgEAMAAQAOAAAHAHQAIAHAAAPIAAAjIAMAAIAAAOIgaAAIAAgKQgLALgMAAQgHAAgGgDgAgSAGQgFAEAAAGQAAAFAEAEQAEADAGAAQAKAAAKgJIAAgJQgKgIgJAAQgGAAgEAEg");
	this.shape_736.setTransform(214.875,501.775);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#663300").s().p("AgEAvQgEgFgBgMIAAgqIgKAAIAAgNIAKAAIAAgMIAOgOIAAAaIAPAAIAAANIgPAAIAAAoQABAGABACQAAAAABAAQAAABABAAQAAAAABAAQABABABAAIAIgCIAAAOIgMACQgIAAgEgFg");
	this.shape_737.setTransform(203.85,500.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#663300").s().p("AARA3IAAgyQgBgHgCgEQgDgDgEAAQgIAAgOAJIAAAqIAOAAIAAANIgrAAIAAgNIAPAAIAAhTIgPAAIAAgNIAdAAIAAAqQAOgLALAAQAVAAABAXIAAAqIANAAIAAANg");
	this.shape_738.setTransform(196.7,500.125);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#663300").s().p("AglAvIAKgLQAFAEAFACQAGACAGAAQAKAAAHgIQAGgHAAgLIAAgIQgFAGgHAEQgHADgIAAQgKAAgJgFQgIgGgFgJQgFgIAAgKQAAgLAFgKQAFgJAJgGQAIgFALAAQAIAAAFADQAHADAGAGIAAgLIAdAAIAAANIgOAAIAAA5QAAAUgKALQgKALgTAAQgSAAgNgKgAgSgnQgGAEgDAGQgDAGAAAHQAAAHADAGQADAFAGAEQAFADAHAAQAGAAAGgDQAGgEADgFQADgGAAgHQAAgGgDgHQgDgGgGgDQgGgEgGAAQgGAAgGADg");
	this.shape_739.setTransform(187.125,503.575);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#663300").s().p("AgSA4IAAgOIALAAIAAgwIgLAAIAAgOIAaAAIAAA+IALAAIAAAOgAgGgoQgCgCAAgEQAAgDACgDQADgDADAAQADAAADADQADACAAAEQAAAEgDACQgDADgDAAQgDAAgDgDg");
	this.shape_740.setTransform(179.6,500.05);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#663300").s().p("AgoA3IAAgOIAPAAIAAhRIgPAAIAAgOIAsAAIAAAOIgNAAIAABRIAjAAIAAgiIAPAAIAAAwg");
	this.shape_741.setTransform(172.8,500.125);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#E5D8C4").s().p("EggkAJTQjIAAAAjIIAAsVQAAjIDIAAMBBVAAAQC8AHAADBIAAMVQAADCi8AGg");
	this.shape_742.setTransform(405.5,533.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536}]},70).to({state:[]},44).wait(107));

	// Light_Space_Text
	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#663300").s().p("AhOBrIAAjWICbAAIAAAaIh/AAIAABCIB1AAIAAAYIh1AAIAABJICBAAIAAAZg");
	this.shape_743.setTransform(563.125,531.35);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#663300").s().p("Ag8BbQgigeAAg+QAAgwAZgeQAbghAvAAQApAAAVAVQAXAWACAbIgcAAQgFgVgOgMQgOgMgaAAQgeAAgTAWQgTAXAAAtQAAAmARAXQASAYAgAAQAhAAAQgZQAIgNAFgVIAcAAQgEAigUAXQgaAbgrAAQgkAAgZgWg");
	this.shape_744.setTransform(541.75,531.325);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhAUIghhfIgiBfIBDAAg");
	this.shape_745.setTransform(521.05,531.35);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#663300").s().p("AhPBrIAAjWIBfAAQAdAAARAQQASAQAAAeQAAAZgQATQgQARggAAIhBAAIAABbgAgxgHIA4AAQAUAAAMgIQALgJABgVQAAgXgSgJQgJgEgRgBIg4AAg");
	this.shape_746.setTransform(503.8,531.35);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#663300").s().p("Ag9BdQgWgUAAgkIAcAAQABATAHALQAOAWAiAAQAQgBANgEQAZgJAAgXQAAgSgLgHQgKgIgXgGIgcgGQgbgGgMgHQgUgNAAgbQAAgdAUgTQAUgSAjgBQAgAAAXARQAXAQAAAkIgbAAQgCgRgHgJQgNgRgegBQgYABgLAKQgLALAAAOQAAARANAHQAIAFAdAHIAdAHQAVAEAMAIQAUAPAAAdQAAAjgaAQQgZAPghABQgngBgWgUg");
	this.shape_747.setTransform(483.0744,531.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#663300").s().p("AhXBrIAAjWIBWAAQArAAAYAgQAWAcAAAsQAAAigNAcQgWAxg2gBgAg5BTIAzAAQANgBAJgDQARgFALgQQAIgOAEgUQACgMAAgKQAAgogQgVQgPgXgiAAIgyAAg");
	this.shape_748.setTransform(454.475,531.35);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#663300").s().p("AA0BrIhsisIAACsIgcAAIAAjWIAiAAIBrCtIAAitIAcAAIAADWg");
	this.shape_749.setTransform(432.425,531.35);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#663300").s().p("ABABrIgWhAIhUAAIgXBAIgeAAIBRjWIAgAAIBODWgAAhAUIghhfIgiBfIBDAAg");
	this.shape_750.setTransform(411.7,531.35);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#663300").s().p("AgOBrIAAi8IhIAAIAAgaICtAAIAAAaIhIAAIAAC8g");
	this.shape_751.setTransform(386.475,531.35);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#663300").s().p("AA3BrIAAhkIhtAAIAABkIgeAAIAAjWIAeAAIAABZIBtAAIAAhZIAeAAIAADWg");
	this.shape_752.setTransform(366.425,531.35);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#663300").s().p("AhDBZQgdgfAAg3QAAg1AdggQAcgeAqAAQAeAAAWAMQAfARAIAqIgdAAQgGgYgQgLQgQgKgZAAQgcAAgUAWQgUAWAAAsQAAAmAQAYQARAYAkAAQAdAAASgQQAUgRgBgmIhCAAIAAgXIBeAAIAAByIgTAAIgHgcQgOAQgMAHQgSAKgdAAQgmAAgbgYg");
	this.shape_753.setTransform(343.45,531.325);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#663300").s().p("AgOBrIAAjWIAdAAIAADWg");
	this.shape_754.setTransform(328.425,531.35);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#663300").s().p("AhDBrIAAjWIAdAAIAAC9IBrAAIAAAZg");
	this.shape_755.setTransform(316.5,531.35);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#663300").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape_756.setTransform(294.85,540.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#663300").s().p("AARBpIAAgzIhbAAIAAgaIBfiEIAXAAIAACHIAfAAIAAAXIgfAAIAAAzgAgxAfIBCAAIAAheg");
	this.shape_757.setTransform(282.325,531.575);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#E5D8C4").s().p("A7fHHQjIAAAAjIIAAn9QAAjIDIAAMA2/AAAQDIAAAADIIAAH9QAADIjIAAg");
	this.shape_758.setTransform(424.025,535.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743}]},34).to({state:[]},36).wait(151));

	// Rope
	this.rope_btn = new lib.Rope_1();
	this.rope_btn.name = "rope_btn";
	this.rope_btn.setTransform(541,145.9,1,1,0,0,0,70,260.9);
	new cjs.ButtonHelper(this.rope_btn, 0, 1, 1);

	this.Rope = new lib.PullLeaf();
	this.Rope.name = "Rope";
	this.Rope.setTransform(549.5,145,1,1,0,0,0,54.5,264);
	new cjs.ButtonHelper(this.Rope, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Rope},{t:this.rope_btn}]}).to({state:[]},114).wait(107));

	// Pull_Leaf
	this.instance_6 = new lib.LeafPull();
	this.instance_6.setTransform(177,117,0.162,0.162);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},95).wait(107));

	// Light_Back
	this.instance_7 = new lib.LivingRoomBackground();
	this.instance_7.setTransform(-24,1,0.1376,0.1714);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({_off:true},95).wait(107));

	// Sun
	this.instance_8 = new lib.Sun_1("synched",0);
	this.instance_8.setTransform(201.4,98.5,1,1,0,0,0,71.4,63.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({_off:true},95).wait(107));

	// Tree_Back
	this.instance_9 = new lib.TreeBackground();
	this.instance_9.setTransform(157,43,0.1376,0.1376);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({_off:true},95).wait(107));

	// Dark_Text
	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_759.setTransform(275.7,257.45);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AAgBJIgzg0IAAAjIASAAIAAARIg4AAIAAgRIASAAIAAhvIgSAAIAAgRIAmAAIAABbIAlgfIgQAAIAAgQIA4AAIAAAQIgPAAIgnAgIAkAkIASAAIAAARg");
	this.shape_760.setTransform(266.425,251.4);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgoA0IAAgSIAUAAIAAhCIgUAAIAAgSIAkAAIAAAYQAFgOAKgFQAJgGARAAIAEAAIAAAUIgEAAQgRAAgIAFQgIAEgCAIQgCAKAAAPIAAAXIAWAAIAAASg");
	this.shape_761.setTransform(255.775,253.55);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AggAxQgIgEgGgIQgEgHAAgJQAAgKAFgHQAFgHAKgEQAIgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgKAAQgJAAgGADQgFADgEAGIgTgEQAHgNALgGQALgGAQAAQATAAAJAKQAKAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgOAPgRAAQgKAAgHgFgAgZAIQgGAFAAAIQAAAHAGAFQAEAFAJAAQANAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_762.setTransform(245.7,253.575);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AgmBDQgLgGgGgNQgHgMAAgPQAAgOAHgMQAHgMAMgIQALgHAOAAQAKAAAIAEQAJAEAIAIIAAgoIgTAAIAAgRIAnAAIAACAIATAAIAAASIgnAAIAAgQQgPASgUgBQgPABgMgIgAgZgIQgHAEgEAIQgEAIAAAJQAAAKAEAIQAEAIAIAFQAHAEAJAAQAJAAAHgEQAIgGAEgIQAEgIAAgKQAAgKgEgHQgEgHgIgEQgHgFgJgBQgJABgIAFg");
	this.shape_763.setTransform(233.075,251.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AgGA/QgGgHAAgPIAAg5IgNAAIAAgSIANAAIAAgQIATgSIAAAiIATAAIAAASIgTAAIAAA0QAAAJACACQACADAEAAIALgCIAAASQgJADgGAAQgMAAgFgGg");
	this.shape_764.setTransform(217.425,252.025);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AgZBLIAAgSIAQAAIAAhCIgQAAIAAgSIAjAAIAABUIAQAAIAAASgAgIg1QgEgDAAgFQAAgFAEgEQADgEAFAAQAEAAAEAEQADADABAGQgBAFgDADQgEAEgEAAQgFAAgDgEg");
	this.shape_765.setTransform(211.15,251.275);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AgIBGQgKgFgGgIIAAAQIglAAIAAgSIASAAIAAhvIgSAAIAAgRIAlAAIAAA6QAQgRAUAAQAOAAAMAHQAMAIAGALQAGAMABAOQgBAPgGAMQgGAMgMAIQgMAHgOAAQgLAAgJgEgAgHgIQgHAEgFAHQgEAJAAAJQAAAKAEAIQAFAIAHAFQAHAEAJAAQAJABAIgGQAHgFAEgJQAEgIAAgKQAAgJgEgIQgFgGgGgFQgIgFgJAAQgJABgHAFg");
	this.shape_766.setTransform(201.1,251.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AghAxQgHgEgFgIQgFgHAAgJQAAgKAFgHQAGgHAIgEQAJgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgLAAQgIAAgFADQgGADgDAGIgUgEQAHgNALgGQALgGAPAAQAUAAAKAKQAJAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgPAPgRAAQgJAAgIgFgAgZAIQgGAFAAAIQAAAHAGAFQAEAFAIAAQAOAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_767.setTransform(183.55,253.575);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AgMAzQgGgCgFgEIAAAGIgSAAIAAgjIASAAIAAAEQABAHAHAFQAHAEAIAAQAKAAAFgDQAGgEAAgHQAAgFgEgCQgFgDgMgDIgLgCQgPgDgIgGQgHgIAAgMQAAgJAGgHQAEgHAJgDQAIgEAJAAQAOAAAKAGIAAgEIASAAIAAAhIgSAAIAAgGQgJgNgOAAQgIAAgFAEQgGADAAAGQAAAFAFADQAEADANACIAMACQAfAGAAAYQAAANgLAJQgLAJgSAAQgHAAgHgCg");
	this.shape_768.setTransform(275.6,231.65);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AgFAeIgEgiIAAgZIAUAAIAAAZIgGAig");
	this.shape_769.setTransform(268.05,225);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AgGA/QgGgHAAgPIAAg5IgNAAIAAgSIANAAIAAgQIATgSIAAAiIATAAIAAASIgTAAIAAA0QAAAJACACQACADAEAAQAGAAAFgCIAAASQgJADgGAAQgMAAgFgGg");
	this.shape_770.setTransform(262.375,230.025);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AgZBLIAAgSIAQAAIAAhCIgQAAIAAgSIAjAAIAABUIAQAAIAAASgAgIg1QgEgDAAgFQAAgFAEgEQADgEAFAAQAFAAADAEQAEADgBAGQABAFgEADQgEAEgEAAQgFAAgDgEg");
	this.shape_771.setTransform(256.1,229.275);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_772.setTransform(244.45,235.45);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_773.setTransform(238.15,235.45);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_774.setTransform(231.85,235.45);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("AA0A0IAAhAIAAgLQgBgEgDgDQgDgDgGAAQgFAAgIAEQgIADgIAGIAAA2IASAAIAAASIglAAIAAhCQAAgLgDgDQgDgFgGAAQgMAAgSANIAAA2IASAAIAAASIg5AAIAAgSIATAAIAAhBIgRAAIAAgSIAlAAIAAAMQASgOARAAQASAAAGAQQAUgQARAAQAMAAAIAHQAIAIgBAPIAAA3IASAAIAAASg");
	this.shape_775.setTransform(219.4,231.55);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#000000").s().p("AA0A0IAAhAIgBgLQAAgEgDgDQgDgDgGAAQgGAAgHAEQgIADgHAGIAAA2IARAAIAAASIglAAIAAhCQAAgLgDgDQgDgFgGAAQgMAAgSANIAAA2IASAAIAAASIg5AAIAAgSIATAAIAAhBIgRAAIAAgSIAlAAIAAAMQASgOASAAQAQAAAHAQQAUgQARAAQANAAAHAHQAIAIgBAPIAAA3IASAAIAAASg");
	this.shape_776.setTransform(200.6,231.55);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#000000").s().p("AAOBKIAAgTIASAAIAAgyIg/AAIAAAyIARAAIAAATIg4AAIAAgTIARAAIAAhuIgRAAIAAgSIA4AAIAAASIgRAAIAAArIA/AAIAAgrIgSAAIAAgSIA5AAIAAASIgRAAIAABuIARAAIAAATg");
	this.shape_777.setTransform(183.45,229.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#837A6B").s().p("AqJFUQjIAAAAjIIAAkfQAFjADDAAIUTAAQAbAAAXADQCSAXAECmIAAEfQAADIjIAAg");
	this.shape_778.setTransform(229,247.05);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#000000").s().p("AAgBKIgzg0IAAAiIASAAIAAASIg4AAIAAgSIASAAIAAhvIgSAAIAAgSIAmAAIAABcIAlgfIgQAAIAAgQIA4AAIAAAQIgPAAIgnAgIAkAkIASAAIAAASg");
	this.shape_779.setTransform(278.425,284.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#000000").s().p("AgoA0IAAgSIAUAAIAAhBIgUAAIAAgSIAkAAIAAAWQAFgNAKgGQAJgFARAAIAEAAIAAAVIgEAAQgRAAgIADQgIAFgCAJQgCAIAAAQIAAAXIAWAAIAAASg");
	this.shape_780.setTransform(267.775,286.55);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AghAxQgHgEgFgIQgFgHAAgJQAAgKAFgHQAGgHAIgEQAJgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgKAAQgJAAgGADQgFADgEAGIgTgEQAHgNALgGQALgGAPAAQAUAAAKAKQAJAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgPAPgQAAQgKAAgIgFgAgZAIQgGAFAAAIQAAAHAGAFQAFAFAHAAQAOAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_781.setTransform(257.7,286.575);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AgmBDQgLgGgGgMQgHgNAAgPQAAgOAHgLQAHgNAMgHQALgIAOAAQAKAAAIAEQAJAEAIAJIAAgpIgTAAIAAgSIAnAAIAACBIATAAIAAASIgnAAIAAgPQgPAQgUABQgPAAgMgIgAgZgIQgHAEgEAIQgEAIAAAJQAAAKAEAIQAEAIAIAEQAHAGAJAAQAJAAAHgGQAIgEAEgJQAEgIAAgJQAAgLgEgHQgEgHgIgEQgHgGgJABQgJgBgIAGg");
	this.shape_782.setTransform(245.075,284.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AgIBFQgKgEgGgIIAAAQIgmAAIAAgSIASAAIAAhvIgSAAIAAgSIAmAAIAAA8QAPgSAWAAQAOAAALAIQAMAGAGANQAGALAAAOQAAAOgGANQgGAMgMAIQgLAHgOABQgMAAgJgGgAgIgIQgGAEgFAIQgEAIAAAJQAAAKAEAIQAEAIAIAEQAHAGAIAAQAKgBAHgFQAIgFAEgIQAEgJAAgJQAAgKgEgHQgEgIgIgEQgHgEgKAAQgIgBgIAGg");
	this.shape_783.setTransform(213.1,284.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AggAxQgJgEgFgIQgEgHAAgJQAAgKAFgHQAFgHAKgEQAIgEAJAAQAOAAANAJIAAgLQAAgMgFgFQgFgGgLAAQgIAAgFADQgGADgDAGIgUgEQAHgNALgGQALgGAQAAQATAAAJAKQAKAJAAAUIAAAwIARAAIAAASIgjAAIAAgNQgPAPgRAAQgJAAgHgFgAgZAIQgGAFAAAIQAAAHAFAFQAGAFAIAAQANAAANgMIAAgMQgNgLgMAAQgIAAgGAFg");
	this.shape_784.setTransform(195.55,286.575);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgLAzQgIgCgEgEIAAAGIgSAAIAAgjIASAAIAAADQABAIAHAFQAHAEAIAAQAJAAAHgDQAFgEAAgHQAAgFgEgCQgFgDgMgDIgLgCQgQgDgHgGQgHgIAAgMQAAgKAGgGQAEgHAJgDQAIgEAJAAQAOAAAKAGIAAgFIARAAIAAAiIgRAAIAAgGQgJgMgOAAQgIAAgGADQgEADgBAGQABAFAEADQADADAOACIAMACQAfAGAAAXQAAAPgLAIQgLAJgTAAQgFAAgHgCg");
	this.shape_785.setTransform(287.6,264.65);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AgEAdIgGghIAAgYIAUAAIAAAYIgEAhg");
	this.shape_786.setTransform(280.05,258);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AgGA/QgGgHAAgPIAAg5IgNAAIAAgSIANAAIAAgQIATgSIAAAiIATAAIAAASIgTAAIAAA0QAAAJACACQACADAEAAIALgCIAAASQgJADgGAAQgMAAgFgGg");
	this.shape_787.setTransform(274.375,263.025);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgZBLIAAgSIAQAAIAAhCIgQAAIAAgSIAjAAIAABUIAQAAIAAASgAgJg1QgDgDAAgFQAAgFADgEQAEgEAFAAQAEAAAEAEQAEADAAAGQAAAFgEADQgEAEgEAAQgFAAgEgEg");
	this.shape_788.setTransform(268.1,262.275);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AA0A0IAAhAIgBgLQAAgEgDgDQgDgDgGAAQgFAAgIAEQgIADgHAGIAAA2IARAAIAAASIglAAIAAhDQAAgKgDgDQgDgFgHAAQgLAAgSANIAAA2IASAAIAAASIg4AAIAAgSIASAAIAAhCIgRAAIAAgSIAlAAIAAAOQASgPASAAQARAAAGAQQAUgQARAAQANAAAHAIQAIAHAAAPIAAA3IASAAIAAASg");
	this.shape_789.setTransform(231.4,264.55);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AA1A0IAAhAIgCgLQAAgEgDgDQgDgDgGAAQgFAAgIAEQgIADgHAGIAAA2IARAAIAAASIglAAIAAhDQAAgKgDgDQgDgFgHAAQgLAAgSANIAAA2IASAAIAAASIg4AAIAAgSIASAAIAAhCIgRAAIAAgSIAlAAIAAAOQASgPASAAQARAAAGAQQAUgQARAAQANAAAHAIQAIAHAAAPIAAA3IASAAIAAASg");
	this.shape_790.setTransform(212.6,264.55);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AAPBJIAAgSIARAAIAAgyIg/AAIAAAyIASAAIAAASIg5AAIAAgSIAQAAIAAhtIgQAAIAAgSIA5AAIAAASIgSAAIAAAqIA/AAIAAgqIgRAAIAAgSIA4AAIAAASIgRAAIAABtIARAAIAAASg");
	this.shape_791.setTransform(195.45,262.4);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#837A6B").s().p("AqJFUQjIAAAAjIIAAkfQAFjADDAAIUTAAQAbAAAXAEQCSAWAECmIAAEfQAADIjIAAg");
	this.shape_792.setTransform(241,280.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774,p:{x:231.85,y:235.45}},{t:this.shape_773,p:{x:238.15,y:235.45}},{t:this.shape_772,p:{x:244.45,y:235.45}},{t:this.shape_771,p:{x:256.1,y:229.275}},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764,p:{x:217.425,y:252.025}},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759,p:{x:275.7,y:257.45}}]},14).to({state:[{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_774,p:{x:243.85,y:268.45}},{t:this.shape_773,p:{x:250.15,y:268.45}},{t:this.shape_772,p:{x:256.45,y:268.45}},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_771,p:{x:223.15,y:284.275}},{t:this.shape_764,p:{x:229.425,y:285.025}},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_759,p:{x:287.7,y:290.45}}]},94).to({state:[]},1).wait(112));

	// Dark_Leaf
	this.instance_10 = new lib.LeafPullDark();
	this.instance_10.setTransform(178,117,0.1619,0.1619);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(108).to({x:190,y:150},0).to({_off:true},1).wait(112));

	// Dark_Back
	this.instance_11 = new lib.LivingRoomBackgroundDark();
	this.instance_11.setTransform(-48,0,0.1434,0.1739);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(108).to({x:-36,y:33},0).to({_off:true},1).wait(112));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(339,185,919.2,459.20000000000005);
// library properties:
lib.properties = {
	id: 'C890639E762F8441ACC4122CB5344331',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Rope.png", id:"Rope"},
		{src:"images/BENV1043_princ4_atlas_1.png", id:"BENV1043_princ4_atlas_1"},
		{src:"images/BENV1043_princ4_atlas_2.png", id:"BENV1043_princ4_atlas_2"},
		{src:"images/BENV1043_princ4_atlas_3.png", id:"BENV1043_princ4_atlas_3"},
		{src:"images/BENV1043_princ4_atlas_4.png", id:"BENV1043_princ4_atlas_4"}
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