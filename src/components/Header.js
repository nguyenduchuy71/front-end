import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { signout } from "../actions/userActions";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useHistory } from "react-router-dom";

function Header() {
  const [burgerState, setBurgerState] = useState(false);
  const [openSubMenu, setopenSubMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const [info, setInfo] = useState(userInfo);
  const signOut = async () => {
    await dispatch(signout());
    setInfo();
    setopenSubMenu(false);
    history.push("/signin");
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
          <MenuItemContainer>
            <Link to="/">
              <p>Trang Chủ</p>
            </Link>
          </MenuItemContainer>
          <MenuItemContainer>
            <Link to="/course">
              <p>Khóa học</p>
            </Link>
          </MenuItemContainer>
          <MenuItemContainer>
            <Link to="/forum">
              <p>Tương tác</p>
            </Link>
          </MenuItemContainer>
        </Menu>
        <RightMenu>
          {info ? (
            <SelectMenu onClick={toogleSubMenu}>
              <img
                src={
                  info.avatar
                    ? `https://ailabchatbot.xyz/${info.avatar}`
                    : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                }
                alt="avatar"
                style={{ borderRadius: "99px" }}
              />
              <ArrowContainer className="arrowcontainer">
                <img src="/images/arrow.png" alt="arrow" />
              </ArrowContainer>
            </SelectMenu>
          ) : (
            <Link to="/signin">
              <p>Đăng nhập</p>
            </Link>
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
          {info ? (
            <div>
              <ElementMenu>
                <ExitToAppIcon />
                <span style={{ marginLeft: "10px" }} onClick={signOut}>
                  Đăng xuất
                </span>
              </ElementMenu>
              {info.is_staff && (
                <ElementMenu>
                  <SupervisorAccountIcon />
                  <Link style={{ marginLeft: "10px" }} to="/admin/users">
                    Quản lý
                  </Link>
                </ElementMenu>
              )}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <ExitToAppIcon />
              <Link style={{ marginLeft: "10px" }} to="/signin">
                Đăng nhập
              </Link>
            </div>
          )}
        </BurgerNav>
      </Container>
      {openSubMenu ? (
        <SubMenu className="sub_menu">
          <ListSubMenu>
            <ElementSubMenu style={{ cursor: "pointer" }}>
              <ExitToAppIcon />
              <span style={{ marginLeft: "10px" }} onClick={signOut}>
                Đăng xuất
              </span>
            </ElementSubMenu>
            {info?.is_staff ? (
              <SubNewMenu>
                <ElementMenu>
                  <SupervisorAccountIcon />
                  <div>
                    <Link to="/admin/users">Quản lý</Link>
                  </div>
                </ElementMenu>
              </SubNewMenu>
            ) : (
              <></>
            )}
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
  padding: 0 20px;
  background-color: #6666ff;
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
  p {
    color: white;
    margin-top: 6px;
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
  padding: 8px 10px;
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
  align-items: stretch;
  justify-content: center;
`;
const ArrowContainer = styled.div`
  position: relative;
  img {
    width: 12px;
    height: 12px;
    margin-top: 30px;
    margin-left: 4px;
    color: #fff !important;
  }
`;
const ElementMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  div {
    margin-left: 10px;
  }
`;
const MenuItemContainer = styled.div`
  margin: 0 8px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #fff;
  p {
    color: #6666ff;
  }
`;
const SubNewMenu = styled.div`
  margin-top: -8px;
  padding: 0 16px;
  &:hover {
    background-color: #ccc;
  }
`;
