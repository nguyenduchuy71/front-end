import React,{useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signup } from "../actions/userActions";
import { useDispatch, useSelector} from "react-redux";

function SignUpScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, success, error } = userSignup;
  const dispatch = useDispatch();
  useEffect(() => {
    if(success){
      props.history.push('/signin');
    }
  }, [success])
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password===repassword){
      const user={
        username,
        password,
        email: username,
        confirmpassword:repassword,
        avatar:
            "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",
        full_name: username,
      };
      dispatch(signup(user));
    }
    else{
      alert('Mật khẩu không khớp');
    }
  }
  return (
    <Container>
      <h2>Đăng ký tài khoản</h2>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Tài khoản"
          placeholder="..."
          fullWidth
          onChange={(e)=>{setUsername(e.target.value)}}
        />
        <TextField id="password" label="Mật khẩu" placeholder="..." fullWidth           
        onChange={(e)=>{setPassword(e.target.value)}}
 />
        <TextField
          id="repassword"
          label="Xác nhận mật khẩu"
          placeholder="..."
          fullWidth
          onChange={(e)=>{setRepassword(e.target.value)}}

        />
        <Button type="submit">Đăng ký</Button>
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
