import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  setButtons: {
    display: "flex",
    flexDirection: "row", //change to coloum to stack the buttons
    margin: "auto",
    width: "fit-content"
  }
}));

export default function VirtualTourDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");

  const handleSkip = () => {
    setOpen(false);
    console.log("Look at Me Hey. Skip is triggered");
  };

  return (
    <React.Fragment>
      {open && (
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={true}
          aria-labelledby="virtual-tour-dialog-title"
          onEnter={console.log("Look at Me Hey. Dialog opened")}
        >
          <DialogTitle id="virtual-tour-dialog-title">Take Tour?</DialogTitle>

          <DialogContent>
            <DialogContentText>
              -- later is display logo and mascot{" "}
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.setButtons}>
            <Link href="/register-tour" passHref>
              <Button variant="contained" color="secondary">
                Yes!
              </Button>
            </Link>
            <Button onClick={() => handleSkip()} color="primary">
              Skip
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
}
