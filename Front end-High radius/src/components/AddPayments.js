import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import './dialog.css'


export default function AddPayments({Business_code, Cust_number, Clear_date, Buisness_year, Doc_id, Posting_date, Document_create_date, Document_create_date1, Due_in_date, Invoice_currency, Document_type, Posting_id, Area_business, Total_open_amount, Baseline_create_date, Cust_payment_terms, Invoice_id, IsOpen, Aging_bucket, Is_deleted, changeHandler}) {
  const [open, setOpen] = React.useState(false);
  const [payments, setPayments] = useState({
    Sl_no: "",
    Business_code: "",
    Cust_number: "",
    Clear_date: "",
    Buisness_year: "",
    Doc_id: "",
    Posting_date: "",
    Document_create_date: "",
    Document_create_date1: "",
    Due_in_date: "",
    Invoice_currency: "",
    Document_type: "",
    Posting_id: "",
    Total_open_amount: "",
    Baseline_create_date: "",
    Cust_payment_terms: "",
    Invoice_id: "",
    IsOpen: "",
    Aging_bucket: "",
    Is_deleted: "",
  });
  const addHandler = () => {
    setOpen(true);
  }

  const handleCloseAdd = async (add) => {
    if (add) {
      let data = "Business_code=" + Business_code + "&Cust_number=" + Cust_number + "&Clear_date=" + Clear_date + "&Buisness_year=" + Buisness_year + "&Doc_id=" + Doc_id + "&Posting_date=" + Posting_date + "&Document_create_date=" + Document_create_date + "&Document_create_date1=" + Document_create_date1 + "&Due_in_date=" + Due_in_date + "&Invoice_currency=" + Invoice_currency + "&Document_type=" + Document_type + "&Posting_id=" + Posting_id + "&Area_business=" + "&Total_open_amount=" + Total_open_amount + "&Baseline_create_date=" + Baseline_create_date + "&Cust_payment_terms=" + Cust_payment_terms + "&Invoice_id=" + Invoice_id + "&IsOpen=" + IsOpen + "&Aging_bucket=" + "&Is_deleted=" + Is_deleted;
      let response = axios.get("http://localhost:8080/H2HWebApp/AddPayment?" + data);console.log("data added", response);
    if (response) {
      setPayments({ Business_code: "", Cust_number: "", Clear_date: "", Buisness_year: "", Doc_id: "", Posting_date: "", Document_create_date: "", Document_create_date1: "", Due_in_date: "", Invoice_currency: "", Document_type: "", Posting_id: "", Area_business: "", Total_open_amount: "", Baseline_create_date: "", Cust_payment_terms: "", Invoice_id: "", IsOpen: "", Aging_bucket: "", Is_deleted: "",});
    }
    setOpen(false);
      
    console.log("data updated", response);
    }
    setOpen(false);
  }; 

  useEffect(()=> {
    setPayments(payments)
  })
  return (
    
    <div>
       <Button variant="outlined" onClick = {addHandler}>Add</Button>
       <Box component="form"  noValidateautoComplete="off" >
      <Dialog open={open} onClose={handleCloseAdd} sx={{ '& .MuiTextField-root': { m: 1}, }} maxWidth="lg">
        <DialogTitle className="MenuItem">ADD</DialogTitle>
        <DialogContent className="MenuItem">
          <TextField required id="component-filled " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Business_code" name="Business_code" value={Business_code} onChange = {changeHandler} color = "primary" />
          <TextField required id="component-filled " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Cust_number" name="Cust_number" value={Cust_number} onChange = {changeHandler}  />
          <TextField required id="component-filled " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel", shrink: true}} label="Clear_date" type={"date"} name="Clear_date" value={Clear_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}}label="Buisness_year" name="Buisness_year" value={Buisness_year} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Doc_id" name="Doc_id" value={Doc_id} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel", shrink: true}} label="Posting_date" type={"date"} name="Posting_date" value={Posting_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel", shrink: true}} label="Document_create_date" type={"date"} name="Document_create_date" value={Document_create_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel", shrink: true}} label="Document_create_date1" type={"date"} name="Document_create_date1" value={Document_create_date1} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel", shrink: true}} label="Due_in_date" type={"date"} name="Due_in_date" value={Due_in_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Invoice_currency" name="Invoice_currency" value={Invoice_currency} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Document_type" name="Document_type" value={Document_type} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Posting_id" name="Posting_id" value={Posting_id} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Area_business" name="Area_business" value={Area_business} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Total_open_amount" name="Total_open_amount" value={Total_open_amount} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel", shrink: true}} label="Baseline_create_date" type={"date"} name="Baseline_create_date" value={Baseline_create_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Cust_payment_terms" name="Cust_payment_terms" value={Cust_payment_terms} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Invoice_id" name="Invoice_id" value={Invoice_id} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="IsOpen" name="IsOpen" value={IsOpen} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Aging_bucket" name="Aging_bucket" value={Aging_bucket} onChange = {changeHandler}  />
          <TextField required id="outlined-required " InputProps={{className: "textfieldLabel" }} InputLabelProps = {{className: "textfieldLabel"}} label="Is_deleted" name="Is_deleted" value={Is_deleted} onChange = {changeHandler}  />
        </DialogContent>
        <DialogActions className="MenuItem">
          <Button onClick={() => handleCloseAdd(false)}>Cancel</Button>
          <Button onClick={() => handleCloseAdd(true)}>Submit</Button>
        </DialogActions>
      </Dialog></Box>
      
      <div>
      </div>
    </div>
  )
}


/*import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function AddPayments({Business_code, Cust_number, Clear_date, Buisness_year, Doc_id, Posting_date, Document_create_date, Document_create_date1, Due_in_date, Invoice_currency, Document_type, Posting_id, Area_business, Total_open_amount, Baseline_create_date, Cust_payment_terms, Invoice_id, IsOpen, Aging_bucket, Is_deleted, changeHandler}) {
  const [open, setOpen] = React.useState(false);
  const [payments, setPayments] = useState({
    Sl_no: "",
    Business_code: "",
    Cust_number: "",
    Clear_date: "",
    Buisness_year: "",
    Doc_id: "",
    Posting_date: "",
    Document_create_date: "",
    Document_create_date1: "",
    Due_in_date: "",
    Invoice_currency: "",
    Document_type: "",
    Posting_id: "",
    Total_open_amount: "",
    Baseline_create_date: "",
    Cust_payment_terms: "",
    Invoice_id: "",
    IsOpen: "",
    Aging_bucket: "",
    Is_deleted: "",
  });
  const addHandler = () => {
    setOpen(true);

  }
  

  const handleCloseAdd = async (add) => {
    if (add) {
      let data = "Business_code=" + Business_code + "&Cust_number=" + Cust_number + "&Clear_date=" + Clear_date + "&Buisness_year=" + Buisness_year + "&Doc_id=" + Doc_id + "&Posting_date=" + Posting_date + "&Document_create_date=" + Document_create_date + "&Document_create_date1=" + Document_create_date1 + "&Due_in_date=" + Due_in_date + "&Invoice_currency=" + Invoice_currency + "&Document_type=" + Document_type + "&Posting_id=" + Posting_id + "&Area_business=" + "&Total_open_amount=" + Total_open_amount + "&Baseline_create_date=" + Baseline_create_date + "&Cust_payment_terms=" + Cust_payment_terms + "&Invoice_id=" + Invoice_id + "&IsOpen=" + IsOpen + "&Aging_bucket=" + Aging_bucket + "&Is_deleted=" + Is_deleted;
      let response = axios.get("http://localhost:8080/H2HWebApp/AddPayment?" + data);console.log("data added", response);
    if (response) {
      setPayments({
        Business_code: "",
        Cust_number: "",
        Clear_date: "",
        Buisness_year: "",
        Doc_id: "",
        Posting_date: "",
        Document_create_date: "",
        Document_create_date1: "",
        Due_in_date: "",
        Invoice_currency: "",
        Document_type: "",
        Posting_id: "",
        Area_business: "",
        Total_open_amount: "",
        Baseline_create_date: "",
        Cust_payment_terms: "",
        Invoice_id: "",
        IsOpen: "",
        Aging_bucket: "",
        Is_deleted: "",
      });
    }
    setOpen(false);
      
    console.log("data updated", response);
    }
    setOpen(false);
  };
  return (
    
    <div>
       <Button variant="outlined" onClick = {addHandler}>Add</Button>
       <Box component="form" sx={{ '& .MuiTextField-root': { m: 10, width: '750ch', maxWidth: 750 },}}noValidateautoComplete="off">
      <Dialog open={open} onClose={handleCloseAdd} sx={{ '& .MuiTextField-root': { m: 1 },}} >
        <DialogTitle>ADD</DialogTitle>
        <DialogContent >
          <TextField required id="component-filled " label="Business_code" name="Business_code" value={Business_code} onChange = {changeHandler}  />
          <TextField required id="component-filled " label="Cust_number" name="Cust_number" value={Cust_number} onChange = {changeHandler}  />
          <TextField required id="component-filled " label="Clear_date" name="Clear_date" value={Clear_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Buisness_year" name="Buisness_year" value={Buisness_year} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Doc_id" name="Doc_id" value={Doc_id} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Posting_date" name="Posting_date" value={Posting_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Document_create_date" name="Document_create_date" value={Document_create_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Document_create_date1" name="Document_create_date1" value={Document_create_date1} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Due_in_date" name="Due_in_date" value={Due_in_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Invoice_currency" name="Invoice_currency" value={Invoice_currency} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Document_type" name="Document_type" value={Document_type} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Posting_id" name="Posting_id" value={Posting_id} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Area_business" name="Area_business" value={Area_business} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Total_open_amount" name="Total_open_amount" value={Total_open_amount} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Baseline_create_date" name="Baseline_create_date" value={Baseline_create_date} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Cust_payment_terms" name="Cust_payment_terms" value={Cust_payment_terms} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Invoice_id" name="Invoice_id" value={Invoice_id} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="IsOpen" name="IsOpen" value={IsOpen} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Aging_bucket" name="Aging_bucket" value={Aging_bucket} onChange = {changeHandler}  />
          <TextField required id="outlined-required " label="Is_deleted" name="Is_deleted" value={Is_deleted} onChange = {changeHandler}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseAdd(false)}>Cancel</Button>
          <Button onClick={() => handleCloseAdd(true)}>Submit</Button>
        </DialogActions>
      </Dialog></Box>
      
      <div>
        


      </div>
    </div>
  )
}
*/