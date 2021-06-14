import React from "react";
import { useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import TableUserAdmin from "../components/admin/TableUserAdmin";
import styled from "styled-components";

function AdminUserScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "date_joined", headerName: "Date joined", width: 250 },
  ];
  return (
    <div className="">
      {userInfo?.is_staff ? (
        <Container>
          <Left>
            <AdminOption />
          </Left>
          <Right>
            <TableUserAdmin columns={columns} />
          </Right>
        </Container>
      ) : (
        <Error404Page />
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
  padding: 10px;
`;
const Right = styled.div`
  flex: 1;
`;
