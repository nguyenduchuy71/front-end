import React, { useState, useEffect } from "react";
import Forum from "../components/forum/Forum";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ForumScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadForums } from "../actions/userActions";
import Spinner from "../components/Spinner";
import { addForum } from "../actions/userActions";

export default function ForumScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userLoadForums = useSelector((state) => state.userLoadForums);
  const { loadingForums, forums, errorLoadForums } = userLoadForums;
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
      dispatch(addForum(data));
      dispatch(loadForums());
    } else {
      history.push("/signin");
    }
  };
  useEffect(() => {
    dispatch(loadForums());
  }, [dispatch]);
  return (
    <>
      {loadingForums && loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="top">
            <TextField
              id="input__question"
              placeholder="Nhập câu hỏi"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={add}>
              Đăng
            </Button>
          </div>
          <div className="forum">
            {forums?.map((cmt) => {
              return <Forum key={cmt.id} cmt={cmt} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
