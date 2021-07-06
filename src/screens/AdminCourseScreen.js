import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";
import styled from "styled-components";
import "./users.css";
import Spinner from "../components/Spinner";


function AdminCourseScreen() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const url='http://127.0.0.1:8000';
  const handleDelete = async (id) => {
    await axios
      .delete(`${url}/course/`, {
        data: {
          id: id,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(data.filter((item) => item.id !== id));
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const userSignin = useSelector((state) => state.userSignin);
  const { loadingInfo, userInfo, error } = userSignin;
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
    axios
      .get(`${url}/account/check-login/`, {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get(`${url}/course/`, {
              headers: {
                Authorization: "Bearer " + Cookie.get("access_token"),
              },
            })
            .then(async (res) => {
              if (res.status === 200) {
                await setData(res.data);
                setLoading(true);
              }
            })
            .catch((error) => console.log(error.message));
        }
      })
      .catch((error) => {
        dispatch(signout());
        history.push("/");
      });
  }, []);
  return (
    <div className="">
      {!loading ? (
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
                    rows={data}
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
    </div>
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
