import React from "react";
import styled from "styled-components";
function Pagination({ postsPerPage, totalPosts, paginate, goPrev, goNext }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <NavContainer>
      <Content>
        <Element onClick={() => goPrev()}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Element>
        {pageNumbers.map((number) => (
          <Element key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </Element>
        ))}
        <Element onClick={() => goNext()}>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Element>
      </Content>
    </NavContainer>
  );
}

export default React.memo(Pagination);

const NavContainer = styled.nav`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
const Element = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: #008cef;
  margin-left: 10px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  a {
    color: #fff;
  }
  ion-icon {
    color: #fff;
  }
  &:hover {
    opacity: 0.9;
  }
`;
