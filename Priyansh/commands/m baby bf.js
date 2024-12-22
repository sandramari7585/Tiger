const fs = require("fs");
module.exports.config = {
	name: "baby",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "baby",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Give baby bf bot")==0 || event.body.indexOf("Baby bf")==0 || event.body.indexOf("baby bf")==0 || event.body.indexOf("သဲ သဲ")==0) {
		var msg = {
				body: "🤭🤭🫣\n 👅🤣 \n 😁",
				attachment: fs.createReadStream(__dirname + `/noprefix/bf.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}