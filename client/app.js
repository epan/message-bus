const Message = function (topic, payload = 'No payload') {
  this.topic = topic;
  this.payload = payload;
};

var messageBus;
