import React from "react";
import "./Forum.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";

export default function Forum(props) {
  const { cmt } = props;
  return (
    <div className="forum__content">
      <div className="forum__title">
        <Link to={`/forum/${cmt.id}`}>
          <p>{cmt.title}</p>
        </Link>
      </div>
      <ul className="list__forum__option">
        <li className="item__forum username">
          <PersonOutlineIcon className="icon"></PersonOutlineIcon>
          <span className="text">{cmt.id}</span>
        </li>
        <li className="item__forum postdate">
          <DateRangeIcon className="icon"></DateRangeIcon>
          <span className="text">{cmt.date.split("T")[0]}</span>
        </li>
        <li className="item__forum numbercomment">
          <ChatBubbleOutlineIcon className="icon"></ChatBubbleOutlineIcon>
          <span className="text_number">{cmt.numCmt}</span>
        </li>
      </ul>
    </div>
  );
}
