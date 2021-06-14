import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./AddCourseScreen.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddCourseScreen() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();
  const addcourse = async () => {
    const data = {
      title: title,
      id_video: url,
      description: desc,
      src: source,
      img: img,
    };
    await axios
      .post("/course/", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Thêm khóa học thành công");
          history.push("/admin/courses");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
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
      <TextField
        placeholder="Ảnh khóa học"
        margin="normal"
        value={img}
        className="col-lg-6"
        onChange={(e) => setImg(e.target.value)}
      />
      <div className="btn_content">
        <Button
          variant="contained"
          color="secondary"
          className="btn__add"
          onClick={addcourse}
        >
          Thêm khóa học
        </Button>
      </div>
    </div>
  );
}

export default AddCourseScreen;
