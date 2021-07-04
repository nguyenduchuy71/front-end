"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;
exports.open = open;
exports.chat = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function close() {
  var chat = document.querySelector(".widget");
  chat.style.display = "none";
  document.querySelector(".chatbot").style.display = "block";
}

function open() {
  var chat = document.querySelector(".widget");
  chat.style.display = "block";
  document.querySelector(".chatbot").style.display = "none";
}

var chat = function chat() {
  var chatContent = document.querySelector("#keypad");
  if (chatContent.value.trim() === "") return;
  userChat(chatContent.value);
  var body = {
    text: chatContent.value
  };
  var url = "http://127.0.0.1:8000/get-response/";

  _axios["default"].post(url, body).then(function (res) {
    botResponse(res.data.response);
    scrollChat();
  });

  chatContent.value = "";
};

exports.chat = chat;

var botResponse = function botResponse(res) {
  var chat = document.querySelector("#chats");
  var bot = document.createElement("div");
  bot.className = "bot";
  var image = document.createElement("img");
  image.src = "https://image.flaticon.com/icons/png/128/3649/3649460.png";
  image.className = "avatar";
  var para = document.createElement("p");
  para.className = "botMsg";
  para.innerHTML = res;
  bot.appendChild(image);
  bot.appendChild(para);
  chat.appendChild(bot);
};

var userChat = function userChat(req) {
  var chat = document.querySelector("#chats");
  var user = document.createElement("div");
  user.className = "user";
  var image = document.createElement("img");
  image.src = "https://image.flaticon.com/icons/png/128/3649/3649460.png";
  image.className = "avatar";
  var para = document.createElement("p");
  para.className = "userMsg";
  para.innerHTML = req;
  user.appendChild(para);
  user.appendChild(image);
  chat.appendChild(user);
};

var scrollChat = function scrollChat() {
  var chat = document.querySelector("#chats");
  chat.scrollTop = chat.scrollHeight;
};