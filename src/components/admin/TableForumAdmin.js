import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../actions/userActions";
import Cookie from "js-cookie";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TableForumAdmin({ columns }) {
  const [selectionModel, setselectionModel] = useState();
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteForum = async () => {
    if (selectionModel?.[0]) {
      const id = selectionModel[0];
      await axios
        .delete("/forum/", {
          data: { id: id },
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
            .get("/forum/", {
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
      <Container>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={deleteForum}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
