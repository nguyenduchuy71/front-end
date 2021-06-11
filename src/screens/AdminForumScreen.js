import React from 'react'
import { useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from './Error404Page';
import TableForumAdmin from "../components/admin/TableForumAdmin";

function AdminForumScreen() {
  const user= '';
  const columns = [
    { field: 'user', headerName: 'User', width: 200 },
    { field: 'content', headerName: 'Content', width: 300 },
    { field: 'date', headerName: 'Date post', width: 260 },
  ];
  return (
    <div>
      {
        user?.is_staff?(
          <div>
              <div className="list_admin row">
                <div className="left col-lg-3 col-md-3 col-sm-12"><AdminOption/></div>
                <div className="right col-lg-9 col-md-9 col-sm-12">
                  <TableForumAdmin columns={columns} />
                </div>
              </div>
          </div>
        ):(
        <Error404Page/>)
      }
    </div>
  )
}

export default AdminForumScreen