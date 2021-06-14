import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../actions/userActions";
import Cookie from "js-cookie";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TableAdmin({ columns }) {
  const [selectionModel, setselectionModel] = useState([]);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const moveToAddCourseScreen = () => {
    history.push("/course/addcourse");
  };
  const deleteCourse = async () => {
    if (selectionModel?.[0]) {
      const id = selectionModel[0];
      await axios
        .delete("/course/", {
          data: {
            id: id,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setRows(rows.filter((r) => r.id !== id));
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  useEffect(() => {
    axios
      .get("/account/check-login/", {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("/course/", {
              headers: {
                Authorization: "Bearer " + Cookie.get("access_token"),
              },
            })
            .then((res) => {
              if (res.status === 200) {
                setRows(res.data);
              }
            })
            .catch((error) => console.log(error.message));
        }
      })
      .catch((error) => {
        dispatch(signout());
        window.location.reload();
        history.push("/signin");
      });
  }, []);
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setselectionModel(newSelection.selectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>
      <div>
        <div
          className="list_btn"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={moveToAddCourseScreen}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<AddIcon />}
          />
          <Link to={`/course/updatecourse/${selectionModel?.[0]}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<UpdateIcon />}
            />
          </Link>
          <Button
            variant="contained"
            color="secondary"
            onClick={deleteCourse}
            className={classes.button}
            startIcon={<DeleteIcon />}
          />
        </div>
      </div>
    </>
  );
}
