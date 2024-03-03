const User = require("../models/dbs");
module.exports.chatdasta = async (req, res) => {
  let i = req.body.input;
  let ichange = i.toLowerCase();
  let dayAll = new Date();
  let year = dayAll.getFullYear();
  let date = dayAll.getDate();
  let month = dayAll.getMonth();
  let hour = dayAll.getHours();
  let min = dayAll.getMinutes();
  let sec = dayAll.getSeconds();
  let t = `${hour}:${min}`;
  if (ichange) {
    User.insertMany({ chats: ichange });
  } else {
    return res.json({ message: t + ` it is empty space` });
  }
  if (
    ichange.includes("hi") ||
    ichange.includes("hello") ||
    ichange.includes("hey")
  ) {
    return res.json({ message: t + ` ${i} what can i help you` });
  } else if (
    ichange.includes("date") ||
    ichange.includes("time") ||
    ichange.includes("day")
  ) {
    return res.json({
      message: `${date}-${month}-${year} - ${hour}:${min}:${sec}'s   `,
    });
  } else if (
    ichange.includes("ip") ||
    ichange.includes("ip address") ||
    ichange.includes("address")
  ) {
    return res.json({ message: req.ip });
  } else if (
    ichange.includes("git") ||
    ichange.includes("git repo") ||
    ichange.includes("github")
  ) {
    return res.json({ message: t + " https://github.com/tamil202" });
  } else if (
    ichange.includes("linkedin") ||
    ichange.includes("linked") ||
    ichange.includes("connect")
  ) {
    return res.json({ message: t + " https://www.linkedin.com/feed/" });
  } else if (
    ichange.includes("mail") ||
    ichange.includes("gmail") ||
    ichange.includes("maitto")
  ) {
    return res.json({ message: t + " tvanan834@gmail.com" });
  } else if (
    ichange.includes("your self") ||
    ichange.includes("intro") ||
    ichange.includes("self")
  ) {
    return res.json({
      message: t + ` Hi i am tamil MEAN Developer`,
    });
  } else if (
    ichange.includes("how are you") ||
    ichange.includes("how r u") ||
    ichange.includes("how are")
  ) {
    return res.json({
      message: `i am fine`,
    });
  } else if (
    ichange.includes("mean") ||
    ichange.includes("gmail") ||
    ichange.includes("maitto")
  ) {
    return res.json({
      message:
        t +
        ` M-Mongo,
                    E-Express,
                    A-Angular,
                    N-Node
    `,
    });
  } else {
    return res.json({ message: t + " on the process of training" });
  }
};
