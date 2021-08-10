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
      if (input !== "") {
        const data = {
          title: input,
          content: input,
          date: Date().toLocaleString(),
        };
        await dispatch(addForum(data));
        dispatch(loadForums());
      } else {
        alert("Vui lòng nhập nội dung");
      }
    } else {
      history.push("/signin");
    }
  };
  useEffect(() => {
    /*     if (userInfo) {
      dispatch(checklogin());
      if (errorCheckLogin) {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      }
    } */
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
                required
              />
            </ContainerTextFiled>
            <Button onClick={add}>Đăng</Button>
          </Top>
          {forums?.length ? (
            <Bottom>
              <BottomCotent>
                <Topic>Nội dung</Topic>
                <Details>
                  <span>Người trả lời</span>
                </Details>
              </BottomCotent>
              {forums?.map((cmt) => (
                <Forum key={cmt.id} cmt={cmt} />
              ))}
            </Bottom>
          ) : (
            <Content>
              <img
                src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
                alt="img"
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
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 4px;
  }
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
const Content = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Bottom = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const BottomCotent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f2ef;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 20px;
`;
const Topic = styled.p`
  flex: 1;
  font-weight: 600;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 40px;
    font-size: 14px;
    color: #5f5e5e;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
