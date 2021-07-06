import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";
import styled from "styled-components";
import "./users.css";
import Spinner from "../components/Spinner";

function AdminForumScreen() {
  const server = 'http://127.0.0.1:8000';
  const [data, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/forum/`, {
        data: { id: id },
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
  const [loading, setLoading] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "content",
      headerName: "Nội dung",
      width: 250,
    },
    { field: "user", headerName: "ID người đăng", width: 200 },
    { field: "date", headerName: "Ngày đăng", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/forum/" + params.row.id}>
              <button className="userListEdit">Xem</button>
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
      .get(`${server}/account/check-login/`, {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get(`${server}/forum/`, {
              headers: {
                Authorization: "Bearer " + Cookie.get("access_token"),
              },
            })
            .then((res) => {
              if (res.status === 200) {
                setData(res.data);
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
    <div>
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
                    pageSize={8}
                    checkboxSelection
                  />
                </div>
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

export default AdminForumScreen;
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
