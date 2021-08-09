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
  const [repassword, setRepassword] = useState("");
  const [avartar, setAvartar] = useState();
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorFullname, setErrorFullname] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepassword, setErrorRepassword] = useState("");
  const [errorAvatar, setErrorAvatar] = useState("");
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
    let check = true;
    if (!username.trim()) {
      setErrorUsername("Tên đăng nhập không được để trống");
      check = false;
    }
    if (!password.trim() || !repassword.trim()) {
      setErrorPassword("Mật khẩu không được để trống");
      check = false;
    } else if (password.length < 6) {
      setErrorPassword("Mật khẩu phải dài hơn 6 kí tự");
      check = false;
    }
    if (!fullname.trim()) {
      setErrorFullname("Họ và tên không được để trống");
      check = false;
    }
    if (repassword.length < 6) {
      setErrorRepassword(
        "Mật khẩu không được để trống và phải dài hơn 6 kí tự "
      );
      check = false;
    } else if (password !== repassword) {
      setErrorRepassword("Mật khẩu không khớp");
      check = false;
    }
    if (!email.trim()) {
      setErrorEmail("Email không được để trống");
      check = false;
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setErrorEmail("Email không hợp lệ");
      check = false;
    }
    if (!avartar) {
      setErrorAvatar("Vui lòng chọn ảnh đại diện");
      check = false;
    }
    if (check === true) {
      const user = new FormData();
      user.append("username", username);
      user.append("password", password);
      user.append("email", email);
      user.append("full_name", fullname);
      user.append("confirmpassword", repassword);
      user.append("avatar", avartar, avartar.name);
      dispatch(signup(user));
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
              <FormElement>
                <TextField
                  id="repassword"
                  label="Xác nhận"
                  placeholder="..."
                  type="password"
                  className="input-field"
                  fullWidth
                  onChange={(e) => {
                    setRepassword(e.target.value);
                  }}
                />
                {errorRepassword ? <p>{errorRepassword}</p> : <p>*</p>}
              </FormElement>
            </FormLeft>
            <FormRight>
              <FormElement>
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
                {errorEmail ? <p>{errorEmail}</p> : <p>*</p>}
              </FormElement>
              <FormElement>
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
                {errorFullname ? <p>{errorFullname}</p> : <p>*</p>}
              </FormElement>
              <FormElement>
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
                {errorAvatar ? <p>{errorAvatar}</p> : <p>*</p>}
              </FormElement>
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
  margin-left: 20px;
  flex: 2;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
  @media screen and (max-width: 420px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  cursor: default;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
const FormLeft = styled.div`
  margin-right: 20px;
  width: 100%;
`;
const FormRight = styled.div`
  width: 100%;
`;
const FormElement = styled.div`
  width: 100%;
  p {
    color: red;
    padding: 8px 0;
    font-size: 14px;
  }
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
  &:hover {
    opacity: 0.9;
  }
`;
