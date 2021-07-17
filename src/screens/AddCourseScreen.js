import "./user.css";
import { useState,useEffect } from "react";
import Error404Page from "./Error404Page";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import { useHistory } from "react-router-dom";
import { addCourse } from "../actions/adminActions";
import Spinner from "../components/Spinner";
import { signout, checklogin } from "../actions/userActions";

function AddCourseScreen() {
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleAddCourse = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      id_video: url,
      description: desc,
      src: source,
      url: img,
    };
    dispatch(addCourse(data));
    history.push("/admin/courses");
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
  }, [dispatch]);
  return (
    <>
      {loading || loadingCheckLogin ? (
        <Spinner />
      ) : (
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
                        onClick={handleAddCourse}
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
      )}
    </>
  );
}
export default AddCourseScreen;
