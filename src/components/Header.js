import React, { useState, useEffect} from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookie from "js-cookie";

function Header() {
  const [burgerState, setBurgerState] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  let { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
  }, [userInfo]);
  const signOut =()=>{
    Cookie.remove('userInfo');
    window.location.reload();
  }
  return (
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
        { userInfo? 
              <ContainerSubNav>
                <img src={userInfo.avatar} alt="avatar"/>
                <FormControl>
                  <Select>
                    <MenuItem>Tài khoản</MenuItem>
                    <MenuItem onClick={signOut}>Đăng xuất</MenuItem>
                  </Select>
                </FormControl>
              </ContainerSubNav>
              :<Link to="/signin">Đăng nhập</Link>
        }
      </RightMenu>
      <ContainerCustomeMenu>
        <CustomMenu onClick={() => setBurgerState(!burgerState)}></CustomMenu>
      </ContainerCustomeMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomeClose onClick={() => setBurgerState(false)} />
        </CloseWrapper>
        <li>
          <Link to="/">Trang Chủ</Link>
        </li>
        <li>
          <Link to="/course">Khóa học</Link>
        </li>
        <li>
          <Link to="/forum">Tương tác</Link>
        </li>
        <li>
          { userInfo? 
              <>
                <MenuItem><Link to="/me">Tài khoản</Link></MenuItem>
                <MenuItem onClick={signOut}>Đăng xuất</MenuItem>
              </>:
              <Link to="/signin">Đăng nhập</Link>
          }
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
  img{
    width:44px;
    height:44px;
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
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ContainerSubNav = styled.div``;