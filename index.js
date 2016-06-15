require('dotenv').config();

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
    randomly(0.7, function() {
      getFortune(function(error, stdout, stderr) {
        FortuneBot.postMessage(data.channel, stdout).then(function(res) {
          console.log(res);
        }).fail(function(err) {
          console.error(err);
        });
      });
    });
  }
});
