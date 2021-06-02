import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SignUpScreen() {
  return (
    <Container>
      <h2>Đăng ký tài khoản</h2>
      <Form>
        <TextField
          id="username"
          label="Tài khoản"
          placeholder="..."
          fullWidth
        />
        <TextField id="password" label="Mật khẩu" placeholder="..." fullWidth />
        <TextField
          id="repassword"
          label="Xác nhận mật khẩu"
          placeholder="..."
          fullWidth
        />
        <Button>Đăng ký</Button>
      </Form>
      <LinkOther>
        <Link to="/signin">Đã có tài khoản?</Link>
      </LinkOther>
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
const LinkOther = styled.div`
  border-bottom: 1px solid #304ffe;
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
