import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ForumIcon from "@material-ui/icons/Forum";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import "./AdminOption.css";
function AdminOption() {
  return (
    <ul className="list__option">
      <li className="item__option">
        <AccountBoxIcon />
        <Link to="/admin/users">
          <span className="item__title">Người dùng</span>
        </Link>
      </li>
      <li className="item__option">
        <ForumIcon />
        <Link to="/admin/forums">
          <span className="item__title">Diễn đàn</span>
        </Link>
      </li>
      <li className="item__option">
        <AssignmentIcon />
        <Link to="/admin/courses">
          <span className="item__title">Khóa học</span>
        </Link>
      </li>
    </ul>
  );
}

export default AdminOption;
