import React from "react";
import { useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from "./Error404Page";
import TableAdmin from "../components/admin/TableAdmin";
import styled from "styled-components";

function AdminCourseScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const columns = [
    { field: "id_video", headerName: "Url", width: 120 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 250 },
    { field: "src", headerName: "Source", width: 180 },
  ];

  return (
    <div className="">
      {userInfo?.is_staff ? (
        <Container>
          <Left>
            <AdminOption />
          </Left>
          <Right>
            <TableAdmin columns={columns} />
          </Right>
        </Container>
      ) : (
        <Error404Page />
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
  padding: 10px;
`;
const Right = styled.div`
  flex: 1;
`;
