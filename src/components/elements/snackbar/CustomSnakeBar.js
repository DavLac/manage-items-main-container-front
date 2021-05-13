import React from 'react'
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CustomSnackBar = (props) => {
    return (
        <Snackbar open={props.openSnakeBar} autoHideDuration={6000} onClose={props.handleClose}
                  anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <Alert severity={props.level} onClose={props.handleClose}>
                {props.message}
            </Alert>
        </Snackbar>
    );
};
