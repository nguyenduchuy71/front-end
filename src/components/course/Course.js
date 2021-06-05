import React from "react";
import styled from "styled-components";

function Course({ course }) {
  return (
    <Container>
      <img src={course.img} alt="img_course" />
      <Title>{course.title}</Title>
      <LinkTo
        href={`https://www.youtube.com/watch?v=${course.id_video}`}
        rel="noreferrer"
        target="_blank"
      >
        Xem chi tiết
      </LinkTo>
    </Container>
  );
}

export default Course;
const Container = styled.div`
  width:33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-top: 10px;
  border: 1px solid #ccc;
  img {
    max-width: 80%;
    border-radius: 4px;
  }
  @media (max-width: 489px) {
    width: 100%;
  }
`;
const Title = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  padding: 10px 0;
`;
const LinkTo = styled.a`
  background-color: #3163f7;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
`;
