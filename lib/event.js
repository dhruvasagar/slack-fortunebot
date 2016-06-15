var EVENT_TYPES = {
  hello: 'hello',
  message: 'message'
};

module.exports = {
  isEventType: function(event, type) {
    return event === EVENT_TYPES[type];
  },

  isMessageEvent: function(event) {
    return this.isEventType(event, 'message');
  }
};
