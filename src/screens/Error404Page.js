import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Error404Page() {
  return (
    <Container>
      <ImageContainer>
        <img
          className="img__notfound"
          src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg"
          alt="img"
        />
      </ImageContainer>
      <Link to="/">
        <Title>Quay lại trang chủ</Title>
      </Link>
    </Container>
  );
}

export default Error404Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer =styled.div`
    margin-top:20px;
`;
const Title = styled.h4`
  margin: 20px 0;
`;
