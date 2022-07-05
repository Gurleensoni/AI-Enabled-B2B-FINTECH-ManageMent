import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import './dialog.css'

export default function Delete({Sl_no, changeHandler}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (bool) => {
    if (bool) {
        console.log(Sl_no);
        let data = "Sl_no=" + Sl_no;
        let response = await axios.get("http://localhost:8080/H2HWebApp/DeletePayment?" + data);
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="MenuItem">
          {"Delete records?"}
        </DialogTitle>
        <DialogContent className="MenuItem">
          <DialogContentText id="alert-dialog-description" className='textItem' style={{color: "white"}}>
            Are you sure you want to delete these record[s]?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="MenuItem">
          <Button onClick={() => handleClose(true)} autoFocus>DELETE</Button>
          <Button onClick={() => handleClose(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
