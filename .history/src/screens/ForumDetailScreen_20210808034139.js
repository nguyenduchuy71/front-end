import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import { URL_SERVER } from "../url";
function ForumDetailScreen(props) {
  const [cmt, setCmt] = useState();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const history = useHistory();
  const dispatch = useDispatch();
  const [responses, setResponses] = useState([]);
  const [input, setInput] = useState("");
  const submitHandle = async () => {
    if (input !== "") {
      const data = {
        id_post: cmt.id,
        content: input,
        date: Date().toLocaleString(),
      };
      await axios
        .post(`${URL_SERVER}/forum/comment/`, data, {
          headers: { Authorization: "Bearer " + Cookie.get("access_token") },
        })
        .then((res) => {
          if (res.status === 200) {
            setResponses([...responses, res.data]);
            setInput("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Bạn chưa nhập thông tin");
    }
  };
  useEffect(() => {
    axios
      .get(`${URL_SERVER}/account/check-login/`, {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get(`${URL_SERVER}/forum/`, {
              headers: {
                Authorization: "Bearer " + Cookie.get("access_token"),
              },
            })
            .then((res) => {
              if (res.status === 200) {
                const rs = res.data.find(
                  (item) => item.id === parseInt(props.match.params.id)
                );
                setCmt(rs);
                setResponses(rs.comment);
              }
            })
            .catch((error) => console.log(error.message));
        }
      })
      .catch((error) => {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      });
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Content>
          <AuthorCotent style={{ borderBottom: "2px solid #fff" }}>
            <AuthorLeft>
              <AuthorImage
                src={`https://ailabchatbot.xyz/${cmt?.user.avatar}`}
                alt="avatar"
              />
            </AuthorLeft>
            <AuthorRight>
              <TitleForum>{cmt?.title}</TitleForum>
              <AuthorRightBot>
                <ion-icon name="calendar-outline"></ion-icon>
                <span>{cmt?.date.split("T")[0]}</span>
              </AuthorRightBot>
            </AuthorRight>
          </AuthorCotent>
          <ResponseContent>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              {responses.length} Comments
            </span>
            {responses.map((res) => {
              return (
                <ListResponse>
                  <AuthorCotent>
                    <AuthorLeft>
                      <AuthorImage
                        style={{ width: "60px", height: "60px" }}
                        src={`https://ailabchatbot.xyz/${res.user.avatar}`}
                        alt="avatar"
                      />
                    </AuthorLeft>
                    <AuthorRight>
                      <AuthorResponseContent>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "2px 4px",
                          }}
                        >
                          <ion-icon name="person-circle-outline"></ion-icon>
                          <AuthorResponseName>
                            {res.user.username}
                          </AuthorResponseName>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "2px 4px",
                          }}
                        >
                          <ion-icon name="calendar-outline"></ion-icon>
                          <span>
                            {res.date.split("T")[0]}
                          </span>
                        </div>
                      </AuthorResponseContent>
                      <div style={{ width: "100%" }}>
                        <TitleForum style={{ fontSize: "18px" }}>
                          {res.content}
                        </TitleForum>
                      </div>
                    </AuthorRight>
                  </AuthorCotent>
                  <div
                    style={{
                      borderBottom: "2px solid #fff",
                      paddingBottom: "8px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setInput(`@:${res.user.username} `);
                      }}
                    >
                      Reply
                    </Button>
                  </div>
                </ListResponse>
              );
            })}
          </ResponseContent>
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-between",
            }}
          >
            <TextField
              fullWidth
              value={input}
              placeholder="Nhập bình luận"
              variant="outlined"
              size="small"
              style={{ backgroundColor: "white" }}
              onChange={(e) => setInput(e.target.value)}
            />
            <div style={{ padding: " 8px" }}>
              <Button
                style={{ backgroundColor: "blue", fontSize: "16px" }}
                onClick={submitHandle}
              >
                Post
              </Button>
            </div>
          </div>
        </Content>
      )}
    </>
  );
}
export default ForumDetailScreen;
const Content = styled.div`
  width: 80%;
  margin: 100px auto;
  padding: 10px;
  border-radius: 8px;
  background-color: #ddd;
`;
const AuthorCotent = styled.div`
  display: flex;
  align-items: stretch;
`;
const AuthorRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
`;
const AuthorLeft = styled.div`
  padding: 4px;
`;
const AuthorRightBot = styled.div`
  display: flex;
  align-items: center;
`;
const TitleForum = styled.span`
  font-size: 20px;
  font-weight: bold;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const ResponseContent = styled.div`
  width: 90%;
  margin: 20px auto;
`;
const ListResponse = styled.div`
  padding: 4px;
`;
const AuthorResponseName = styled.p`
  font-size: 16px;
`;
const AuthorResponseContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 56px;
  height: 24px;
  padding: 4px;
  background-color: red;
  color: #fff;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;
