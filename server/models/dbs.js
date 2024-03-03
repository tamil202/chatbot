const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://fury:mnm@cluster0.6lai5xn.mongodb.net/chatbot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define Schema
const userSchema = new mongoose.Schema({
  chats: {
    type: String,
  },
});
const User = mongoose.model("chat", userSchema);

module.exports = User;
