import React from 'react'
import { useSelector } from "react-redux";
import AdminOption from "../components/admin/AdminOption";
import Error404Page from './Error404Page';
import TableAdmin from "../components/admin/TableAdmin";

function AdminCourseScreen() {
  const user= '';
  const columns = [
    { field: 'id_video', headerName: 'Url', width: 120 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'src', headerName: 'Source', width: 180 },
  ];

  return (
    <div>
      {
        user?.is_staff?(
          <div>
              <div className="list_admin row">
                <div className="left col-lg-3 col-md-3 col-sm-12"><AdminOption/></div>
                <div className="right col-lg-9 col-md-9 col-sm-12">
                  <TableAdmin columns={columns} />
                </div>
              </div>
          </div>
        ):(
        <Error404Page/>)
      }
    </div>
  )
}

export default AdminCourseScreen
