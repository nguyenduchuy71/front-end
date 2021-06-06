import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { signin } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function SignInScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };
  const goSignUp = () => {
    props.history.push("/signup");
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    if (error) {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  }, [userInfo, loading, error]);
  return (
    <Container>
      <Content>
        <h2>Đăng nhập</h2>
        <Form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Tài khoản"
            placeholder="..."
            fullWidth
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            id="password"
            label="Mật khẩu"
            type="password"
            placeholder="..."
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <LinkOther>
            <Button onClick={goSignUp}>Đăng ký</Button>
            <Button type="submit">Đăng nhập</Button>
          </LinkOther>
        </Form>
      </Content>
    </Container>
  );
}

export default SignInScreen;
const Container = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  border: 1px solid #111;
  border-radius: 6px;
  padding: 4%;
  line-height: 2rem;
  margin: 17px;
  h2 {
    text-align: center;
  }

  &:hover {
    border: 1px solid #0304ff;
  }
`;
const LinkOther = styled.div`
  justify-content: center;
  padding: 4px;
`;
const Form = styled.form`
  width: 100%;
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
  margin-left: 10px;
  &:hover {
    opacity: 0.85;
  }
`;
