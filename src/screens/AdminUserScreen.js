import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import TableUserAdmin from "../components/admin/TableUserAdmin";
import { checklogin, signout } from "../actions/userActions";
import Spinner from "../components/Spinner";

function AdminUserScreen(props) {
  const dispatch = useDispatch();
  const userCheckLogin = useSelector((state) => state.userCheckLogin);
  const { loadingCheckLogin, userCheck, errorCheckLogin } = userCheckLogin;
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "date_joined", headerName: "Date joined", width: 250 },
  ];
  useEffect(() => {
    dispatch(checklogin());
    if (errorCheckLogin) {
      dispatch(signout());
      props.history.push("/signin");
    }
  }, []);
  return (
    <>
      {loadingCheckLogin ? (
        <Spinner />
      ) : (
        <div className="">
          {userCheck?.is_staff ? (
            <div>
              <div className="list_admin row">
                <div className="left col-lg-3 col-md-3 col-sm-12">
                  <AdminOption />
                </div>
                <div className="right col-lg-9 col-md-9 col-sm-12">
                  <TableUserAdmin columns={columns} />
                </div>
              </div>
            </div>
          ) : (
            <Error404Page />
          )}
        </div>
      )}
    </>
  );
}

export default AdminUserScreen;
