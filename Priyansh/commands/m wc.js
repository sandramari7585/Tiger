const fs = require("fs");
module.exports.config = {
	name: "welcome",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("New here")==0 || event.body.indexOf("I am new here")==0 || event.body.indexOf("new here")==0 || event.body.indexOf("Ira Miles")==0) {
		var msg = {
				body: "🤭🤭🫣\n 💞 \n 😁",
				attachment: fs.createReadStream(__dirname + `/noprefix/wc.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}