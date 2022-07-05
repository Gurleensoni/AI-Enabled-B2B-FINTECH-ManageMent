import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import './dialog.css'

export default function EditPayments({ Sl_no, Invoice_currency, Cust_payment_terms, changeHandler}) {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [payments, setPayments] = useState({ Sl_no: "", Business_code: "", Cust_number: "", Clear_date: "", Buisness_year: "", Doc_id: "", Posting_date: "", Document_create_date: "", Document_create_date1: "", Due_in_date: "", Invoice_currency: "", Document_type: "", Posting_id: "", Total_open_amount: "", Baseline_create_date: "", Cust_payment_terms: "", Invoice_id: "", IsOpen: "", Aging_bucket: "", Is_deleted: "",});
  const editHandler = () => {
    setOpen(true);
  };
  const handleClose = async (update) => {
    if (update) {
      let data = "Sl_no=" + Sl_no + "&Invoice_currency=" + Invoice_currency + "&Cust_payment_terms=" + Cust_payment_terms;
      let response = axios.get("http://localhost:8080/H2HWebApp/UpdatePayment?" + data);
      console.log("data updated", response);
      if (response) {
        setPayments({ Sl_no: "", Business_code: "", Cust_number: "", Clear_date: "", Buisness_year: "", Doc_id: "", Posting_date: "", Document_create_date: "", Document_create_date1: "", Due_in_date: "", Invoice_currency: "", Document_type: "", Posting_id: "", Area_business: "", Total_open_amount: "", Baseline_create_date: "", Cust_payment_terms: "", Invoice_id: "", IsOpen: "", Aging_bucket: "", Is_deleted: "",});
      }
    }
    setOpen(false);
  };

  useEffect(()=> {
    setData(payments)
  })

  return (
    <div>
      <Button variant="outlined" onClick={editHandler}>
        Edit
      </Button>
      <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidateautoComplete="off">
      <Dialog open={open} sx={{ '& .MuiTextField-root': { m: 1 },}} onClose={handleClose}>
        <DialogTitle className="MenuItem">Edit</DialogTitle>
        <DialogContent className="MenuItem">
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Invoice_currency" name="Invoice_currency" value={Invoice_currency} onChange={changeHandler}/>
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Cust_payment_terms" name="Cust_payment_terms" value={Cust_payment_terms} onChange={changeHandler}/>
        </DialogContent>
        <DialogActions className="MenuItem">
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Submit</Button>
        </DialogActions>
      </Dialog>
      </Box>
      <div></div>
    </div>
  );
}