import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { signout } from "../../actions/userActions";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TableUserAdmin({ columns }) {
  const [selectionModel, setselectionModel] = useState();
  const [rows, setRows] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/account/check-login/", {
        headers: { Authorization: "Bearer " + Cookie.get("access_token") },
      })
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("/account/get-all/", {
              headers: {
                Authorization: "Bearer " + Cookie.get("access_token"),
              },
            })
            .then((res) => {
              if (res.status === 200) {
                setRows(res.data.filter((row) => row.is_staff === false));
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
      <Container>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
