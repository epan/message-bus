const Message = function (topic, payload = 'Default') {
  this.topic = topic;
  this.payload = payload;
};

var messageBus;

module.exports.Message = Message;
