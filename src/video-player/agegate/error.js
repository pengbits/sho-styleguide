var VideoPlayerAgeGateError = function(type, message) 
{
  this.type = type;
  this.message = message;
};

VideoPlayerAgeGateError.prototype = new Error();

export default VideoPlayerAgeGateError; 