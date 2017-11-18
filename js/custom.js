// JavaScript Document
function Countdown(options) {
  var timer,
  instance = this,
  seconds = options.seconds || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    updateStatus(seconds);
    if (seconds === 0) {
      counterEnd();
      instance.stop();
    }
    seconds--;
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = options.seconds;
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

function callTimer() {
	var date = new Date("2014","05","26","00","00","00");
	var now = new Date();
	var sec = date.getTime()-now.getTime();
	sec = sec/1000;
	var myCounter = new Countdown({  
    seconds:sec,  // number of seconds to count down
    onUpdateStatus: function(sec){
		var numdays = Math.floor(sec / 86400);
		var numhours = Math.floor((sec % 86400) / 3600);
		var numminutes = Math.floor(((sec % 86400) % 3600) / 60);
		var doubleNumber = ((sec % 86400) % 3600) % 60;
		var numseconds = Math.floor(doubleNumber);
		document.getElementById("timer").innerHTML = numdays+" Days "+numhours+" Hrs <br/>"+numminutes+" Mins "+numseconds+" Secs"
		}, // callback for each second
    onCounterEnd: function(){ } // final action
	});
	
	myCounter.start();
}