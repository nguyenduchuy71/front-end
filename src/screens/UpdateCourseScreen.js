import "./user.css";
import { useState, useEffect } from "react";
import Error404Page from "./Error404Page";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";
import { updateCourse } from "../actions/adminActions";
import Spinner from "../components/Spinner";
import { URL_SERVER } from "../url";

function UpdateCourseScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { loadingInfo, userInfo, error } = userSignin;
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUpdatecourse = async (e) => {
    e.preventDefault();
    const data = {
      id: props.match.params.id,
      title: title,
      id_video: url,
      description: desc,
      src: source,
      url: img,
    };
    dispatch(updateCourse(data));
    history.push("/admin/courses");
  };
  useEffect(() => {
    axios
      .get(`${URL_SERVER}/account/check-login/`, {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get(`${URL_SERVER}/course/`)
            .then((res) => {
              if (res.status === 200) {
                setCourse(
                  res.data.find((x) => x.id_video === props.match.params.id)
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
            setSource(course.authen);
            setImg(course.image);
          }
        }
      })
      .catch((error) => {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      });
  }, [dispatch, loading]);
  return (
    <>
      {!loading || loadingInfo ? (
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
                  <span className="userUpdateTitle">Edit Course</span>
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
                        <img src={img} alt="img" className="userUpdateImg" />
                      </div>
                      <button
                        type="submit"
                        onClick={handleUpdatecourse}
                        className="userUpdateButton"
                      >
                        Update
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
export default UpdateCourseScreen;
