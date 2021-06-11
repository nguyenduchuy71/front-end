import React, { useState, useEffect } from "react";
import "./ForumDetailScreen.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";

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
        .post("/forum/comment/", data, {
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
      .get("/account/check-login/", {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("/forum/", {
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
      });
  }, []);
  return (
    <div className="forumdetail">
      <div className="forum__detail__content">
        <div className="list__info__author">
          <p className="item__author content_title">{cmt?.title}</p>
          <ul className="list__infor__content item__author">
            <li className="infor__content username">
              <PersonOutlineIcon className="icon"></PersonOutlineIcon>
              <span className="name__author">{cmt?.user}</span>
            </li>
            <li className="infor__content postdate">
              <DateRangeIcon className="icon"></DateRangeIcon>
              <span className="date__post">{cmt?.date.split("T")[0]}</span>
            </li>
          </ul>
        </div>
        <div className="list__responde">
          {responses.map((res) => {
            return (
              <div key={res.id} className="item__responde row">
                <div className="left col-lg-3 col-md-2 col-sm-12">
                  <img
                    className="avartar__author__responde"
                    src={userInfo?.avatar}
                    alt="img"
                  />
                </div>
                <div className="center col-lg-6 col-md-8 col-sm-12">
                  <p className="text__author__responde">{res.content}</p>
                </div>
                <div className="right col-lg-3 col-md-2 col-sm-12">
                  <span className="time__author__responde">{res.date}</span>
                  <Button
                    className="bnt__reply"
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={() => {
                      setInput(`@:${res.user} `);
                    }}
                  >
                    Reply
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row post_comment">
          <TextField
            fullWidth
            value={input}
            id="cmt__post"
            placeholder="Nhập bình luận"
            variant="outlined"
            size="small"
            className="col-lg-8 col-md-6 col-sm-12 input__cmt__post"
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="col-lg-1 col-md-12 col-sm-12"></span>
          <Button
            className="col-lg-1 col-md-6 col-sm-12 btn__post__cmt"
            variant="contained"
            size="small"
            color="primary"
            onClick={submitHandle}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForumDetailScreen;
