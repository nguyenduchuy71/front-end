import React, { useState, useEffect } from "react";
import Forum from "../components/forum/Forum";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ForumScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ForumScreen() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const add = async () => {
    if (!userInfo) {
      history.push("/signin");
    } else {
      const data = {
        title: input,
        content: input,
        date: Date().toLocaleString(),
      };
      await axios
        .post("/forum/", data, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          if (res.status === 200) {
            setQuestions([res.data, ...questions]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    axios
      .get("/forum/")
      .then((res) => {
        if (res.status === 200) {
          setQuestions(res.data);
        }
      })
      .catch((error) => console.log(error.message));
  }, [dispatch]);
  return (
    <>
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
        {questions.map((cmt) => {
          return <Forum key={cmt.id} cmt={cmt} />;
        })}
      </div>
    </>
  );
}
