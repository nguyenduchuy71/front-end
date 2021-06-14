import React from "react";
import { useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import TableForumAdmin from "../components/admin/TableForumAdmin";
import styled from "styled-components";

function AdminForumScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const columns = [
    { field: "user", headerName: "User", width: 200 },
    { field: "content", headerName: "Content", width: 300 },
    { field: "date", headerName: "Date post", width: 260 },
  ];
  return (
    <div className="">
      {userInfo?.is_staff ? (
        <Container>
          <Left>
            <AdminOption />
          </Left>
          <Right>
            <TableForumAdmin columns={columns} />
          </Right>
        </Container>
      ) : (
        <Error404Page />
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
  padding: 10px;
`;
const Right = styled.div`
  flex: 1;
`;
