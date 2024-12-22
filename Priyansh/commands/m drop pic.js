const fs = require("fs");
module.exports.config = {
	name: "drop",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "drop",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Drop your pic")==0 || event.body.indexOf("Drop pic")==0 || event.body.indexOf("drop pic")==0 || event.body.indexOf("send pic")==0) {
		var msg = {
				body: "\n  \n ",
				attachment: fs.createReadStream(__dirname + `/noprefix/drop.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}