module.exports.config = {
  name: "hi3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam but fixed by Dilshad(ind time)",
  description: "hi3 gửi sticker",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "",
    "Ah oh",
    "gggk"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi4"] == "undefined", thread["hi4"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "", 
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Karachi ').format('HHmm');
    let session = (
    hours > 200 && hours <= 210 ? "😅" : 
    hours > 211 && hours <= 220 ? "😁" :
    hours > 221 && hours <= 230 ? "Aw nice 🙂 " :
    hours > 231 && hours <= 240 ? "hmmm nice 🙂" : 
    hours > 241 && hours <= 250 ? "😱" : 
    hours > 251 && hours <= 259? "🙃" : 
    hours > 300 && hours <= 305 ? "🫣" : 
    hours > 306 && hours <= 309 ? "🤨" :                 hours > 310 && hours <= 315 ? "oii" : 
    hours > 316 && hours <= 320 ? "🦥" :
    hours > 321 && hours <= 325 ? "🤸 " :
    hours > 326 && hours <= 330 ? "🧗" : 
    hours > 331 && hours <= 335 ? "😎" : 
    hours > 336 && hours <= 337 ? "😁" : 
    hours > 338 && hours <= 342 ? "😮" : 
    hours > 343 && hours <= 347 ? "nice 🙂" :                             hours > 350 && hours <= 355 ? "😅" : 
    hours > 359 && hours <= 404 ? "😁" :
    hours > 405 && hours <= 409 ? "Aw nice 🙂 " :
    hours > 410 && hours <= 415 ? "hmmm nice 🙂" : 
    hours > 416 && hours <= 420 ? "😱" : 
    hours > 421 && hours <= 425? "🙃" : 
    hours > 426 && hours <= 430 ? "🫣" : 
    hours > 431 && hours <= 435 ? "🤨" :                 hours > 500 && hours <= 510 ? "oii" : 
    hours > 512 && hours <= 520 ? "🦥" :
    hours > 521 && hours <= 529 ? "🤸 " :
    hours > 530 && hours <= 540 ? "Aw nice 🙂" : 
    hours > 541 && hours <= 549 ? "😎" : 
    hours > 550 && hours <= 600 ? "😁" : 
    hours > 700 && hours <= 705 ? "😮" : 
    hours > 706 && hours <= 709 ? "nice 🙂" :                        hours > 1500 && hours <= 1505 ? "😅" : 
    hours > 1506 && hours <= 1509 ? "😁" :
    hours > 1510 && hours <= 1515 ? "Aw nice 🙂 " :
    hours > 1516 && hours <= 1520 ? "hmmm nice 🙂" : 
    hours > 1521 && hours <= 1525 ? "😱" : 
    hours > 1526 && hours <= 1530 ? "🙃" : 
    hours > 1531 && hours <= 1536 ? "🫣" : 
    hours > 1540 && hours <= 1545 ? "🤨" :                 hours > 1546 && hours <= 1550 ? "oii" : 
    hours > 1551 && hours <= 1555 ? "🦥" :
    hours > 1556 && hours <= 1559 ? "🤸 " :
    hours > 1600 && hours <= 1605 ? "🧗" : 
    hours > 1606 && hours <= 1609 ? "😎" : 
    hours > 1610 && hours <= 1615 ? "😁" : 
    hours > 1616 && hours <= 1620 ? "😮" : 
    hours > 1621 && hours <= 1625 ? "nice 🙂" :                   hours > 1626 && hours <= 1630 ? "😅" : 
    hours > 1631 && hours <= 1635 ? "😁" :
    hours > 1636 && hours <= 1640 ? "Aw nice 🙂 " :
    hours > 1641 && hours <= 1645 ? "hmmm nice 🙂" : 
    hours > 1646 && hours <= 1650 ? "😱" : 
    hours > 1651 && hours <= 1655 ? "🙃" : 
    hours > 1656  && hours <= 1659 ? "🫣" : 
    hours > 1700 && hours <= 1705 ? "🤨" :                 hours > 1706 && hours <= 1709 ? "oii" : 
    hours > 1710 && hours <= 1715 ? "🦥" :
    hours > 1716 && hours <= 1720 ? "🤸 " :
    hours > 1721 && hours <= 1725 ? "Aw nice 🙂" : 
    hours > 1726 && hours <= 1730 ? "😎" : 
    hours > 1731 && hours <= 1735 ? "😁" : 
    hours > 1736 && hours <= 1740 ? "😮" : 
    hours > 1741 && hours <= 1745 ?                               hours > 1746 && hours <= 1750 ? "😅" : 
    hours > 1751 && hours <= 1755 ? "😁" :
    hours > 1756 && hours <= 1759 ? "Aw nice 🙂 " :
    hours > 1800 && hours <= 1805 ? "hmmm nice 🙂" : 
    hours > 1806 && hours <= 1809 ? "😱" : 
    hours > 1810 && hours <= 1815? "🙃" : 
    hours > 1816 && hours <= 1830 ? "🫣" : 
    hours > 1831 && hours <= 1835 ? "🤨" :                 hours > 1836 && hours <= 1840 ? "oii" : 
    hours > 1841 && hours <= 1844 ? "🦥" :
    hours > 1845 && hours <= 1850 ? "🤸 " :
    hours > 1851 && hours <= 1854 ? "🧗" : 
    hours > 1855 && hours <= 1859 ? "😎" : 
    hours > 1900 && hours <= 1905 ? "😁" : 
    hours > 1906 && hours <= 1910 ? "😮" : 
    hours > 1911 && hours <= 1914 ? "nice 🙂" :                   hours > 1915 && hours <= 1920 ? "😅" : 
    hours > 1921 && hours <= 1925 ? "😁" :
    hours > 1926 && hours <= 1930 ? "Aw nice 🙂 " :
    hours > 1931 && hours <= 1934 ? "hmmm nice 🙂" :             "nice 🙂" :                       "Aw");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Hehe ${name},  ${session}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}