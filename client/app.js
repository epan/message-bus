const Message = function (topic, payload = 'Default') {
  this.topic = topic;
  this.payload = payload;
};

const messageBus = function (topic, subscriber) {

};

messageBus.prototype.subscribe = function (topic, ) {

};

messageBus.prototype.publish = function (topic) {

};

module.exports.Message = Message;
