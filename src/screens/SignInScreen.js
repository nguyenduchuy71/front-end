import React,{ useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import { useDispatch,useSelector } from "react-redux";

function SignInScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(signin(username,password));
  }
  useEffect(() => {
    if(userInfo){
      props.history.push('/');
    }
    if(error){
      alert('Tài khoản hoặc mật khẩu không đúng');
    }
  }, [userInfo,loading,error])
  return (
    <Container>
      <h2>Đăng nhập</h2>
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
        <Button type="submit">Đăng nhập</Button>
      </Form>
      <LinkOther>
        <Link to="/signup">Chưa có tài khoản?</Link>
      </LinkOther>
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
