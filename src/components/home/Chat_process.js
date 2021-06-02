import axios from "axios";

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
export const chat = () => {
    let chatContent = document.querySelector("#keypad");
    if (chatContent.value.trim() === "") return;
    userChat(chatContent.value);
    let body = {
        text: chatContent.value,
    };

    const url = "http://127.0.0.1:8000/get-response/";
    axios.post(url, body).then((res) => {
        botResponse(res.data.response);
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
