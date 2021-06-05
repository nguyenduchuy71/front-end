import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookie from "js-cookie";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import MenuBookIcon from "@material-ui/icons/MenuBook";
function Header() {
  const [burgerState, setBurgerState] = useState(false);
  const [openSubMenu, setopenSubMenu] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  let { loading, userInfo, error } = userSignin;
  useEffect(() => {}, [userInfo]);
  const signOut = () => {
    Cookie.remove("access_token");
    Cookie.remove("userInfo");
    window.location.reload();
  };
  const toogleSubMenu = () => {
    setopenSubMenu(!openSubMenu);
  };
  return (
    <Content>
      <Container>
        <a>
          <img src="/images/logo.png" alt="logo" />
        </a>
        <Menu>
          <Link to="/">Trang Chủ</Link>
          <Link to="/course">Khóa học</Link>
          <Link to="/forum">Tương tác</Link>
        </Menu>
        <RightMenu>
          {userInfo ? (
            <SelectMenu onClick={toogleSubMenu}>
              <img src={userInfo.avatar} alt="avatar" />
              <ArrowContainer className="arrowcontainer">
                <img src="/images/arrow.png" alt="arrow" />
              </ArrowContainer>
            </SelectMenu>
          ) : (
            <Link to="/signin">Đăng nhập</Link>
          )}
        </RightMenu>
        <ContainerCustomeMenu>
          <CustomMenu onClick={() => setBurgerState(!burgerState)}></CustomMenu>
        </ContainerCustomeMenu>
        <BurgerNav show={burgerState}>
          <CloseWrapper>
            <CustomeClose onClick={() => setBurgerState(false)} />
          </CloseWrapper>
          <ElementMenu>
            <HomeIcon />
            <div>
              <Link to="/">Trang Chủ</Link>
            </div>
          </ElementMenu>
          <ElementMenu>
            <MenuBookIcon />
            <div>
              <Link to="/course">Khóa học</Link>
            </div>
          </ElementMenu>
          <ElementMenu>
            <ForumIcon />
            <div>
              <Link to="/forum">Tương tác</Link>
            </div>
          </ElementMenu>
          {userInfo ? (
            <div>
              <ElementMenu>
                <AccountCircleIcon />
                <div>
                  <Link to="/profile">Tài khoản</Link>
                </div>
              </ElementMenu>
              <ElementMenu>
                <ExitToAppIcon />
                <div>
                  <Link onClick={signOut}>Đăng xuất</Link>
                </div>
              </ElementMenu>
            </div>
          ) : (
            <Link to="/signin">Đăng nhập</Link>
          )}
        </BurgerNav>
      </Container>
      {openSubMenu ? (
        <SubMenu className="sub_menu">
          <ListSubMenu>
            <ElementSubMenu>
              <AccountCircleIcon />
              <div>
                <Link to="/profile">Tài khoản</Link>
              </div>
            </ElementSubMenu>
            <ElementSubMenu>
              <ExitToAppIcon />
              <div>
                <Link onClick={signOut}>Đăng xuất</Link>
              </div>
            </ElementSubMenu>
          </ListSubMenu>
        </SubMenu>
      ) : (
        <></>
      )}
    </Content>
  );
}

export default Header;
const Content = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Container = styled.div`
  min-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  padding: 0 20px;
  a img {
    width: 68px;
    height: 68px;
    border-radius: 99px;
    margin-top: 10px;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  img {
    width: 44px;
    height: 44px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const ContainerCustomeMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.25s;
`;
const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SubMenu = styled.div`
  position: absolute;
  top: 80%;
  right: 10px;
  bottom: 0;
  border-radius: 4px;
`;
const ListSubMenu = styled.ul`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;
const ElementSubMenu = styled.li`
  margin: 10px 4px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  &:hover {
    background-color: #ccc;
  }
  div {
    margin-left: 10px;
  }
`;
const SelectMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ArrowContainer = styled.div`
  position: relative;
  img {
    width: 12px;
    height: 12px;
    margin-top: 30px;
    margin-left: 4px;
  }
`;
const ElementMenu = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  div {
    margin-left: 10px;
  }
`;
