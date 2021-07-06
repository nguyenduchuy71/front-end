import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import { signout } from "../actions/userActions";
import styled from "styled-components";
import "./users.css";
import Spinner from "../components/Spinner";

function AdminUserScreen() {
  const url = "http://127.0.0.1:8000";
  const [data, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const userSignin = useSelector((state) => state.userSignin);
  const { loadingInfo, userInfo, error } = userSignin;
  const [loading, setLoading] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "Username",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="img" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "full_name", headerName: "Full name", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
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
            .get(`${url}/account/get-all/`, {
              headers: {
                Authorization: "Bearer " + Cookie.get("access_token"),
              },
            })
            .then(async (res) => {
              if (res.status === 200) {
                await setData(res.data.filter((row) => row.is_staff === false));
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

export default AdminUserScreen;
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
