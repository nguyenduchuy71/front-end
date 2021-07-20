import { useState, useEffect } from "react";
import Forum from "../components/forum/Forum";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadForums } from "../actions/userActions";
import Spinner from "../components/Spinner";
import { addForum, checklogin, signout } from "../actions/userActions";
import styled from "styled-components";

export default function ForumScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userLoadForums = useSelector((state) => state.userLoadForums);
  const { loadingForums, forums, errorLoadForums } = userLoadForums;
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const add = async () => {
    if (userInfo) {
      const data = {
        title: input,
        content: input,
        date: Date().toLocaleString(),
      };
      await dispatch(addForum(data));
      dispatch(loadForums());
    } else {
      history.push("/signin");
    }
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(checklogin());
      if (errorCheckLogin) {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      }
    }
    dispatch(loadForums());
  }, [dispatch]);
  return (
    <>
      {loadingForums || loading || loadingCheckLogin ? (
        <Spinner />
      ) : (
        <Container>
          <Top>
            <ContainerTextFiled>
              <TextField
                id="input__question"
                placeholder="Nhập câu hỏi"
                style={{ width: "100%" }}
                onChange={(e) => setInput(e.target.value)}
              />
            </ContainerTextFiled>
            <Button onClick={add}>Đăng</Button>
          </Top>
          {forums?.length ? (
            <>
              <Bottom>
                {forums?.map((cmt) => (
                  <Forum key={cmt.id} cmt={cmt} />
                ))}
              </Bottom>
            </>
          ) : (
            <Content>
              <img
                src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
                alt="img"
                style={{ width: "100%" }}
              />
            </Content>
          )}
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
const ContainerTextFiled = styled.div`
  width: 100%;
  display: flex;
  padding: 0 16px;
`;
const Button = styled.button`
  margin-left: 10px;
  font-size: 16px;
  padding: 0 12px;
  cursor: pointer;
  background-color: #fc4445;
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #e7717d;
  }
`;
const Bottom = styled.div`
  height: calc(100vh - 200px);
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;
