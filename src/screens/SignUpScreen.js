import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { signup } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function SignUpScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      const user = {
        username,
        password,
        email: username,
        confirmpassword: repassword,
        avatar:
          "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",
        full_name: username,
      };
      dispatch(signup(user));
    } else {
      alert("Mật khẩu không khớp");
    }
  };
  return (
    <Container>
      <Content>
        <h2>Đăng ký tài khoản</h2>
        <Form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Tài khoản"
            placeholder="..."
            type="text"
            fullWidth
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            id="password"
            label="Mật khẩu"
            placeholder="..."
            fullWidth
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
            fullWidth
            onChange={(e) => {
              setRepassword(e.target.value);
            }}
          />
          <Button type="submit">Đăng ký</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUpScreen;
const Container = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  border: 1px solid #111;
  padding: 4%;
  line-height: 2rem;
  border-radius: 6px;

  h2 {
    text-align: center;
  }

  &:hover {
    border: 1px solid #0304ff;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  * {
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  color: white;
  width: 100px;
  height: 40px;
  background-color: #304ffe;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
