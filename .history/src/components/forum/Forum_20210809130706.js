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
