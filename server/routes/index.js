const router = require("express").Router();
const controller = require("../controller/Response");
const controllerchat = require("../controller/ChatStore");

// Get basics Response
router.get("/", controller.entryResponse);
router.post("/chat", controllerchat.chatdasta);

module.exports = router;
