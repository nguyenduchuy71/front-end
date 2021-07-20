import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { signin } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function SignInScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    let check = true;
    if (!username.trim()) {
      setErrorUsername("Tên đăng nhập không được để trống");
      check = false;
    }
    if (!password.trim()) {
      setErrorPassword("Mật khẩu không được để trống");
      check = false;
    }
    if (check == true) {
      await dispatch(signin(user));
      props.history.push("/");
      window.location.reload();
    }
  };
  return (
    <Container>
      <Left>
        <h2>Welcome to AI lab</h2>
        <img src="/images/logo.png" alt="logo" />
      </Left>
      <Right>
        <Title>Đăng nhập</Title>
        <Form onSubmit={handleSubmit}>
          <FormTop>
            <FormLeft>
              <FormElement>
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
                {errorUsername ? <p>{errorUsername}</p> : <p>*</p>}
              </FormElement>
              <FormElement>
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
                {errorPassword ? <p>{errorPassword}</p> : <p>*</p>}
              </FormElement>
            </FormLeft>
          </FormTop>
          <FormBottom>
            <Button type="submit">Đăng nhập</Button>
          </FormBottom>
        </Form>
        <Bot>
          <span>
            Chưa có tài khoản?
            <Link to="/signup" className="bot-link">
              {" "}
              Đăng ký
            </Link>
          </span>
        </Bot>
      </Right>
    </Container>
  );
}

export default SignInScreen;
const Container = styled.div`
  width: 100%;
  height: 410px;
  margin-top: 100px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 420px) {
    padding: 0 20px;
  }
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
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1.5;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
  @media screen and (max-width: 420px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  margin: 20px 0;
  cursor: default;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const FormTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 0 20px;
`;
const FormBottom = styled.div`
  display: flex;
  justify-content: center;
`;
const FormLeft = styled.div`
  width: 100%;
  margin-right: 20px;
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
const Bot = styled.div`
  margin-top: 50px;
  font-size: 18px;
  .bot-link {
    color: #0304ff;
  }
`;
const FormElement = styled.div`
  width: 100%;
  p {
    color: red;
    padding: 8px 0;
    font-size: 14px;
  }
`;
