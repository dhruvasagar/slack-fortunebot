var SlackBot = require('slackbots');

var randomly  = require('./lib/random');
var getFortune = require('./lib/fortune');
var SlackEvent = require('./lib/event');

var FortuneBot = new SlackBot({
  token: process.env.SLACK_API_TOKEN,
  name: 'Fortune Bot'
});

FortuneBot.on('message', function(data) {
  if (SlackEvent.isMessageEvent(data.type)) {
    console.log(data);
    randomly(0.3, function() {
      getFortune(function(error, stdout, stderr) {
        FortuneBot.postMessage(data.channel, stdout).then(function(res) {
          console.log('Posted message', stdout, 'to channel', data.channel, 'successfully', res);
        }).fail(function(err) {
          console.error('Posting message', stdout, 'to channel', data.channel, 'failed!', err);
        });
      });
    });
  }
});
