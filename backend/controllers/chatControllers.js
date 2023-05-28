const asyncHandler = require("express-async-handler");

const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not send with request");
    return res.sendStatus(400);
  }

  var isChat = await chats.find;
});
