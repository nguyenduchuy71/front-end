import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { signout, loadForums, checklogin } from "../actions/userActions";
import { deleteForum } from "../actions/adminActions";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import "./users.css";

function AdminForumScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loadingInfo, userInfo, error } = userSignin;
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const userLoadForums = useSelector((state) => state.userLoadForums);
  const { loadingForums, forums, errorLoadForums } = userLoadForums;
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
  const fetchForums = async () => {
    await dispatch(loadForums());
    console.log(forums);
  };
  const handleDelete = async (id) => {
    await dispatch(deleteForum(id));
    fetchForums(forums);
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
    fetchForums();
  }, []);
  return (
    <div>
      {loadingInfo || loadingForums || loadingCheckLogin ? (
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
                    rows={forums ? forums : []}
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
