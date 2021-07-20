import axios from "axios";
import { URL_SERVER } from "../../url";

let chat_global = "";

export function close() {
  let chat = document.querySelector(".widget");
  chat.style.display = "none";
  document.querySelector(".chatbot").style.display = "block";
}

export function open() {
  let chat = document.querySelector(".widget");
  chat.style.display = "block";
  document.querySelector(".chatbot").style.display = "none";
}
export const chat = async () => {
  let chatContent = document.querySelector("#keypad");
  if (chatContent.value.trim() === "") return;
  userChat(chatContent.value);
  let body = {
    text: chatContent.value,
    state_chat: 1,
  };

  await axios.post(URL_SERVER, body).then((res) => {
    if (res.data.response == "") {
      chat_global = res.data.text_formated;
      chatConfirm();
    } else botResponse(res.data.response);
    scrollChat();
  });
  chatContent.value = "";
};
const botResponse = (res) => {
  let chat = document.querySelector("#chats");
  let bot = document.createElement("div");
  bot.className = "bot";
  let image = document.createElement("img");
  image.src = "https://image.flaticon.com/icons/png/128/3649/3649460.png";
  image.className = "avatar";
  let para = document.createElement("p");
  para.className = "botMsg";
  para.innerHTML = res;
  bot.appendChild(image);
  bot.appendChild(para);
  chat.appendChild(bot);
};

const userChat = (req) => {
  let chat = document.querySelector("#chats");
  let user = document.createElement("div");
  user.className = "user";
  let image = document.createElement("img");
  image.src = "https://image.flaticon.com/icons/png/128/3649/3649460.png";
  image.className = "avatar";
  let para = document.createElement("p");
  para.className = "userMsg";
  para.innerHTML = req;
  user.appendChild(para);
  user.appendChild(image);
  chat.appendChild(user);
};

const scrollChat = () => {
  let chat = document.querySelector("#chats");
  chat.scrollTop = chat.scrollHeight;
};

const chatConfirm = () => {
  let chat = document.querySelector("#chats");
  let user = document.createElement("div");
  user.className = "bot";
  let image = document.createElement("img");
  image.src = "https://image.flaticon.com/icons/png/128/3649/3649460.png";
  image.className = "avatar";

  let div_content = document.createElement("div");
  div_content.className = "botMsg";
  let content = document.createElement("p");
  content.innerHTML = `Ý bạn là: "${chat_global}". Nếu đúng hãy click nút oke`;
  div_content.append(content);

  let div_but = document.createElement("div");
  let but = document.createElement("button");

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

const userConfirm = async () => {
  let body = {
    text: chat_global,
    state_chat: 2,
  };
  await axios.post(URL_SERVER, body).then((res) => {
    botResponse(res.data.response);
    scrollChat();
  });
};
