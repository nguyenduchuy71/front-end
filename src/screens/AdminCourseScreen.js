import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { signout, loadCourses, checklogin } from "../actions/userActions";
import { deleteCourse } from "../actions/adminActions";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import "./users.css";

function AdminCourseScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loadingInfo, userInfo, error } = userSignin;
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const userLoadCourses = useSelector((state) => state.userLoadCourses);
  const { loadingCourses, courses, errorLoadCourses } = userLoadCourses;

  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
    dispatch(loadCourses());
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Tên khóa học",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.url} alt="url" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "id_video", headerName: "ID Video", width: 150 },
    { field: "description", headerName: "Mô tả", width: 200 },
    { field: "src", headerName: "Nguồn khóa học", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/course/updatecourse/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    if (userInfo) {
      dispatch(checklogin());
      if (errorCheckLogin) {
        dispatch(signout());
        history.push("/signin");
      }
    }
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <>
      {loadingCourses || loadingCheckLogin || loadingInfo ? (
        <Spinner />
      ) : (
        <>
          {userInfo?.is_staff ? (
            <Container>
              <Left>
                <AdminOption />
              </Left>
              <Right>
                <div className="userList">
                  <DataGrid
                    rows={courses ? courses : []}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={6}
                    checkboxSelection
                  />
                </div>
                <CourseBottom className="userBottom">
                  <Link to="/course/addcourse">
                    <Button>Create</Button>
                  </Link>
                </CourseBottom>
              </Right>
            </Container>
          ) : (
            <Error404Page />
          )}
        </>
      )}
    </>
  );
}

export default AdminCourseScreen;
const Container = styled.div`
  display: flex;
  margin-top: 100px;
`;
const Left = styled.div`
  padding: 12px;
  flex: 1;
  max-width: 200px;
`;
const Right = styled.div`
  flex: 4;
`;
const CourseBottom = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #0304ff;
  color: #fff;
  cursor: pointer;
`;
