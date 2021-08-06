import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Forum(props) {
  const { cmt } = props;
  return (
    <Link to={`/forum/${cmt.id}`}>
      <Content>
        <Left>
          <Top>
            <img
              src={`https://ailabchatbot.xyz/${cmt.user.avatar}`}
              alt="avatar"
            />
          </Top>
          <Bot>
            <LeftTitle>{cmt.title}</LeftTitle>
            <Item>
              <DateRangeIcon className="icon" />
              <span className="text">{cmt.date.split("T")[0]}</span>
            </Item>
          </Bot>
        </Left>
        <Right>
          <Item>
            <ChatBubbleOutlineIcon className="icon" />
            <span>{cmt.comment.length}</span>
          </Item>
        </Right>
      </Content>
    </Link>
  );
}
const Content = styled.div`
  padding: 10px;
  margin: 22px 0;
  border: 2px solid #5fb8ff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    7px 14px 9px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 7px 14px 9px 5px rgba(0, 0, 0, 0);
  transition: transform linear 0.2s;
  &:hover {
    transform: scale(1.018); //#5fb8ff
    background-color: #5fb8ff;
    font-weight: 600;
    border: 1px solid #111;
  }
`;
const Left = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: stretch;
`;
const Top = styled.div`
  margin-right: 10px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;
const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LeftTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  padding: 0 10px;
`;
