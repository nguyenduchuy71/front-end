import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Forum(props) {
  const { cmt } = props;
  return (
    <Link to={`/forum/${cmt.id}`}>
      <Content>
        <Left>
          <ImageCotent>
            <img
              src={
                cmt.user.avatar
                  ? `https://ailabchatbot.xyz/${cmt.user.avatar}`
                  : "data:image/png;base64,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"
              }
              alt="avatar"
            />
          </ImageCotent>
          <QuestionContent>
            <LeftTitle>
              <p>{cmt.title}</p>
            </LeftTitle>
            <QuestionInfo>
              <Item>
                <ion-icon name="person-outline"></ion-icon>
                <span>{cmt.user.username}</span>
              </Item>
              <Item>
                <ion-icon name="calendar-outline"></ion-icon>
                <span className="text">{cmt.date.split("T")[0]}</span>
              </Item>
              <Item>
                <ion-icon name="document-text-outline"></ion-icon>
                <span className="text">{cmt.comment.length}</span>
              </Item>
            </QuestionInfo>
          </QuestionContent>
        </Left>
        <Right>
          {cmt.comment.slice(0, 3).map((res) => (
            <img
              src={`https://ailabchatbot.xyz/${res.user.avatar}`}
              alt="avatar"
            />
          ))}
        </Right>
      </Content>
    </Link>
  );
}
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const ImageCotent = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;
const QuestionContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 6px;
`;
const LeftTitle = styled.div`
  width: 100%;
  p {
    font-size: 18px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;
const QuestionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;
const Item = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: stretch;
  span {
    font-size: 15px;
    margin-left: 2px;
  }
  ion-icon {
    color: #008cef;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
    margin-left: 1px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const Content = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 14px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  &:hover {
    background-image: linear-gradient(
      135deg,
      #003cbf 0%,
      #008cef 35%,
      #07cbfd 100%
    );
    ${Item} {
      span,
      ion-icon {
        color: #fff;
      }
    }
    ${LeftTitle} {
      p {
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;
