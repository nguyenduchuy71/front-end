import "./user.css";
import { useState } from "react";
import Error404Page from "./Error404Page";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import { useHistory } from "react-router-dom";
import axios from "axios";
function AddCourseScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loadinguser, userInfo, error } = userSignin;
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();
  const addCourse = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      id_video: url,
      description: desc,
      src: source,
      url: img,
    };
    await axios
      .post("/course/", data)
      .then((res) => {
        if (res.status === 200) {
          history.push("/admin/courses");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      {userInfo?.is_staff ? (
        <div className="user">
          <div className="userContainer">
            <div className="usershow">
              <AdminOption />
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Add Course</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Tên khóa học</label>
                    <input
                      type="text"
                      value={title}
                      className="userUpdateInput"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>ID video</label>
                    <input
                      type="text"
                      value={url}
                      className="userUpdateInput"
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Mô tả khóa học</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Url ảnh khóa học</label>
                    <input
                      type="text"
                      value={img}
                      className="col-lg-6"
                      onChange={(e) => setImg(e.target.value)}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Nguồn khóa học</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      src={
                        img
                          ? img
                          : "http://beepeers.com/assets/images/commerces/default-image.jpg"
                      }
                      alt="img"
                      className="userUpdateImg"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={addCourse}
                    class="userUpdateButton"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Error404Page />
      )}
    </>
  );
}
export default AddCourseScreen;
