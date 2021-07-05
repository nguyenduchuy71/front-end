import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { signup } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function SignUpScreen(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [avartar, setAvartar] = useState();
  const [repassword, setRepassword] = useState("");
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, success, error } = userSignup;
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      props.history.push("/signin");
    }
    if (error) {
      alert("Lỗi khi đăng ký tài khoản vui lòng thử lại");
    }
  }, [success]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repassword) {
      const user = new FormData();
      user.append("username", username);
      user.append("password", password);
      user.append("email", email);
      user.append("full_name", fullname);
      user.append("confirmpassword", repassword);
      user.append("avatar", avartar, avartar.name);
      dispatch(signup(user));
    } else {
      alert("Mật khẩu không khớp");
    }
  };
  return (
    <Container>
      <Left>
        <h2>Welcome to AI lab</h2>
        <img src="/images/logo.png" alt="logo" />
      </Left>
      <Right>
        <Title>Đăng ký</Title>
        <Form onSubmit={handleSubmit}>
          <FormTop>
            <FormLeft>
              <TextField
                id="username"
                label="Tài khoản"
                placeholder="..."
                type="text"
                fullWidth
                className="input-field"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                id="password"
                label="Mật khẩu"
                placeholder="..."
                fullWidth
                className="input-field"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                id="repassword"
                label="Xác nhận mật khẩu"
                placeholder="..."
                type="password"
                className="input-field"
                fullWidth
                onChange={(e) => {
                  setRepassword(e.target.value);
                }}
              />
            </FormLeft>
            <FormRight>
              <TextField
                id="email"
                label="Email"
                placeholder="..."
                type="text"
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                id="fullname"
                label="Họ và tên"
                placeholder="..."
                type="text"
                fullWidth
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
              <TextField
                id="avartar"
                type="file"
                placeholder="..."
                fullWidth
                label=" "
                className="file-input"
                onChange={(e) => {
                  setAvartar(e.target.files[0]);
                }}
              />
            </FormRight>
          </FormTop>
          <FormBottom>
            <Button type="submit">Đăng ký</Button>
          </FormBottom>
        </Form>
      </Right>
    </Container>
  );
}

export default SignUpScreen;
const Container = styled.div`
  width: 100%;
  height: 410px;
  margin-top: 100px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  cursor: default;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  h2 {
    color: #fff;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;
const Right = styled.div`
  margin-left: 20px;
  flex: 2;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding:10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  cursor: default;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FormBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
const FormLeft = styled.div`
  margin-right: 20px;
  line-height: 5rem;
`;
const FormRight = styled.div`
  line-height: 5rem;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #0304ff;
  color: #fff;
  border-radius: 10px;
`;
