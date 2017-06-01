const assert = require('assert');
const { expect } = require('chai');
const { Message } = require('../client/app');

describe('Message tests', function() {
  it('should create a message as an object', function() {
    const actual = new Message('hello');
    expect(actual).to.be.a('object');
  });

  it('should create a message with a topic', function() {
    const actual = new Message('hello');
    expect(actual).to.have.property('topic');
  });

  it('should create a message with optional payload', function() {
    const actual = new Message('no payload');
    expect(actual).to.deep.equal({
      topic: 'no payload',
      payload: 'Default'
    });
  });
});
