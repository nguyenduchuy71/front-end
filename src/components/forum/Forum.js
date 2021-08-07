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
              src={`https://ailabchatbot.xyz/${cmt.user.avatar}`}
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
