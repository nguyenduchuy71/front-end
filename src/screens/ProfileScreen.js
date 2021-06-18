import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Fade from "react-reveal/Fade";
import { updateProfile } from "../actions/userActions";
import Spinner from "../components/Spinner";

function ProfileScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loadingUpdateProfile, profile, errorUpdateProfile } =
    userUpdateProfile;
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
  const update = async () => {
    const value = {
      username: userInfo.username,
      full_name: fullName,
      avatar: url,
      email: email,
    };
    dispatch(updateProfile(value));
  };
  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo?.email);
      setUrl(userInfo?.avatar);
      setFullName(userInfo?.full_name);
    } else {
      props.history.push("/signin");
    }
    if (profile) {
      window.location.reload();
    }
  }, [profile]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Fade bottom>
          <Container>
            <Content>
              <ImageContainer>
                <ImageProfile src={userInfo?.avatar}></ImageProfile>
              </ImageContainer>
              <Info>
                <TextField
                  id="email"
                  label="Email"
                  style={{ margin: 16 }}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue={userInfo?.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="full_name"
                  label="Full name"
                  style={{ margin: 16 }}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue={userInfo?.full_name}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                  id="url_avatar"
                  label="Url Avatar"
                  style={{ margin: 16 }}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue={userInfo?.avatar}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Info>
              <Button type="button" onClick={update}>
                Cập nhật
              </Button>
            </Content>
          </Container>
        </Fade>
      )}
    </>
  );
}

export default ProfileScreen;
const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #111;
  flex-direction: column;
  border-radius: 10px;
  border-top: none;
`;
const ImageContainer = styled.div`
  width: 100%;
  background-color: #263238;
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const ImageProfile = styled.img`
  width: 100px;
  padding: 8px;
  border-radius:99px;
`;
const Info = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  background-color: #6200ee;
  color: #fff;
  border: none;
  outline: none;
  padding: 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 12px;
  &:hover {
    background-color: #3700b3;
  }
`;
