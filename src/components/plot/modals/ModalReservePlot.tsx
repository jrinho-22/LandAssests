import { useTheme, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../../buttons/Buttons";
import { ModalBox } from "./Modal.styled";

const ModalReservePlot = (props: any) => {
  // props.
  return (
    <Modal
      onClose={() => props.setModalReservePlotVisibility(false)}
      open={props.open}
    >
      <ModalBox style={{ width: "800px" }}>
        <Typography>RESERVE THIS PLOT</Typography>
        <div className="horizontal-line"></div>
        <div className="flex" style={{ justifyContent: "space-around" }}>
          <TextField
            sx={{ mr: "10px" }}
            color="secondary"
            variant="standard"
            label="Estate name"
            fullWidth
          />
          <TextField
            sx={{ ml: "10px" }}
            color="secondary"
            variant="standard"
            label="Select Date"
            fullWidth
          />
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </div>
        <div
          className="flex"
          style={{ marginTop: "25px", flexDirection: "row-reverse" }}
        >
          <Button
            type="filled"
            bg={props.theme.palette.primary.dark}
            border={props.theme.palette.primary.main}
          >
            Reserve this plot
          </Button>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default ModalReservePlot;