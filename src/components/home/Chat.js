import React from "react";
import "./Chat.css";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import { close, open, chat } from "./Chat_process";

function Chat() {
    return (
        <div className="chat">
            <div className="widget">
                <div className="chat_header">
                    <span> ChatBot </span>
                    <span id="close">
                        <CloseIcon onClick={close} />
                    </span>
                </div>
                <div className="chats" id="chats">
                    <div className="bot">
                        <img
                            src="https://image.flaticon.com/icons/png/128/3649/3649460.png"
                            className="avatar"
                            alt="img"
                        />
                        <p className="botMsg">
                            Chào bạn mình có thể giúp gì cho bạn
                        </p>
                    </div>
                    {/* <div className="bot">
                        <img
                            src="https://image.flaticon.com/icons/png/128/3649/3649460.png"
                            className="avatar"
                            alt="img"
                        />
                        <div className="botMsg">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Quos nihil non praesentium
                                deleniti, culpa provident aliquid mollitia, esse
                                delectus quia sit. Perferendis hic, optio
                                eveniet esse ipsum ipsam sit sed?
                            </p>
                            <div>
                                <button id="confirm" type="button">
                                    oke
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="keypad">
                    <div className="input_text">
                        <input
                            type="text"
                            id="keypad"
                            className="usrInput browser-default"
                            placeholder="Aa"
                            autoComplete="off"
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    chat();
                                }
                            }}
                        />
                    </div>
                    <SendIcon className="sendicon" onClick={chat} />
                </div>
            </div>
            <div className="chatbot" id="profile_div">
                <img
                    src="https://image.flaticon.com/icons/png/128/3649/3649460.png"
                    alt="chatbot-logo"
                    onClick={open}
                />
            </div>
        </div>
    );
}

export default Chat;
