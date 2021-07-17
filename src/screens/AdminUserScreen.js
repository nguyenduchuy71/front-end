import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { signout } from "../actions/userActions";
import { loadUsers } from "../actions/adminActions";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import "./users.css";

function AdminUserScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loadingInfo, userInfo, error } = userSignin;
  const adminLoadUsers = useSelector((state) => state.adminLoadUsers);
  const { loadingUsers, users, errorUsers } = adminLoadUsers;
  const handleDelete = (id) => {};
  const fetchUsers = async () => {
    await dispatch(loadUsers());
  };
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
    if (userInfo) {
      fetchUsers();
      if (errorUsers) {
        dispatch(signout());
        history.push("/signin");
        window.location.reload();
      }
    }
  }, [dispatch]);
  return (
    <>
      {loadingInfo || loadingUsers ? (
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
                    rows={users ? users.filter((user) => !user.is_staff) : []}
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
    </>
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
