[Message Bus Problem](https://gist.github.com/tim-hr/697af278700fcf12014eb36d932ad7c4)

## What to do
- [ ] Set up unit testing
- [ ] Tests

## Constraints and factors to consider
- [x] The name (label) of a message type should be called the topic, in your code. This is standard pub/sub nomenclature.
- [x] The payload is optional.
- [ ] Subscribers _must_ be notified in the exact order that they originally subscribed.
