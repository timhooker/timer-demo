app.Timer = function (spec) {
  // INterval defaults to 1 second
  var interval = spec.interval || 1000;

  // Callback is the logic that we want to run
  // every time the timer fires
  var callback = spec.callback;


  var self = {
    start: function(){
      callback();
      function intervalElapsed(){
        callback();
        setTimout(callback, interval);
        timeoutID = setTimeout(intervalElapsed, interval);
      }
      setTimeout(callback, interval);
    }

    stop: function(){

    }
  };

  return self;
}
