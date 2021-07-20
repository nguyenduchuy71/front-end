"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;
exports.open = open;
exports.chat = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _url = require("../../url.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var chat_global = "";

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
    text: chatContent.value,
    state_chat: 1
  };
  var url = "".concat(_url.URL_SERVER, "/get-response/");

  _axios["default"].post(url, body).then(function (res) {
    if (res.data.response == "") {
      chat_global = res.data.text_formated;
      chatConfirm();
    } else botResponse(res.data.response);

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

var chatConfirm = function chatConfirm() {
  var chat = document.querySelector("#chats");
  var user = document.createElement("div");
  user.className = "bot";
  var image = document.createElement("img");
  image.src = "https://image.flaticon.com/icons/png/128/3649/3649460.png";
  image.className = "avatar";
  var div_content = document.createElement("div");
  div_content.className = "botMsg";
  var content = document.createElement("p");
  content.innerHTML = "\xDD b\u1EA1n l\xE0: \"".concat(chat_global, "\". N\u1EBFu \u0111\xFAng h\xE3y click n\xFAt oke");
  div_content.append(content);
  var div_but = document.createElement("div");
  var but = document.createElement("button");
  but.onclick = userConfirm;
  but.id = "confirm";
  but.type = "button";
  but.innerHTML = "oke";
  div_but.append(but);
  div_content.append(div_but);
  console.log(div_content);
  user.appendChild(image);
  user.appendChild(div_content);
  chat.appendChild(user);
};

var userConfirm = function userConfirm() {
  var body = {
    text: chat_global,
    state_chat: 2
  };
  var url = "".concat(_url.URL_SERVER, "/get-response/");

  _axios["default"].post(url, body).then(function (res) {
    botResponse(res.data.response);
    scrollChat();
  });
};