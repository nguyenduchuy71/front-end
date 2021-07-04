import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ForumIcon from "@material-ui/icons/Forum";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import "./AdminOption.css";
function AdminOption() {
  return (
    <div className="list__option">
      <Link to="/admin/users" className="item__option">
        <AccountBoxIcon />
        <span className="item__title">Người dùng</span>
      </Link>
      <Link to="/admin/forums" className="item__option">
        <ForumIcon />
        <span className="item__title">Diễn đàn</span>
      </Link>
      <Link to="/admin/courses" className="item__option">
        <AssignmentIcon />
        <span className="item__title">Khóa học</span>
      </Link>
    </div>
  );
}

export default AdminOption;
