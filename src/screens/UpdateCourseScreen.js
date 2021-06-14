import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./AddCourseScreen.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";

function UpdateCourseScreen(props) {
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const updatecourse = async () => {
    const data = {
      id: props.match.params.id,
      title: title,
      id_video: url,
      description: desc,
      src: source,
    };
    await axios
      .put("/course/", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Cập nhật khóa học thành công");
          history.push("/admin/courses");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    axios
      .get("/account/check-login/", {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("/course/")
            .then((res) => {
              if (res.status === 200) {
                setCourse(
                  res.data.find((x) => x.id === parseInt(props.match.params.id))
                );
                setLoading(true);
              }
            })
            .catch((error) => {
              alert(error);
            });
          if (loading) {
            setUrl(course.id_video);
            setTitle(course.title);
            setDesc(course.description);
            setSource(course.src);
          }
        }
      })
      .catch((error) => {
        dispatch(signout());
        history.push("/signin");
      });
  }, [loading]);
  return (
    <div className="list_input row">
      <TextField
        placeholder="Url khóa học"
        margin="normal"
        className="col-lg-6"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <TextField
        placeholder="Tên khóa học"
        margin="normal"
        className="col-lg-6"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        placeholder="Mô tả khóa học"
        margin="normal"
        className="col-lg-6"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <TextField
        placeholder="Nguồn khóa học"
        margin="normal"
        value={source}
        className="col-lg-6"
        onChange={(e) => setSource(e.target.value)}
      />
      <div className="btn_content">
        <Button onClick={updatecourse} variant="contained" color="primary">
          CẬP NHẬT
        </Button>
      </div>
    </div>
  );
}

export default UpdateCourseScreen;
