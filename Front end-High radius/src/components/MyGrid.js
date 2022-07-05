import React from "react";
import axios from "axios";
import { TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper, Checkbox, Button,} from "@mui/material";
import { useEffect, useState } from "react";
//import {getData} from './services/data';
import { getData, getDataSearch } from "../services/data";
import AddPayments from "./AddPayments";
import EditPayments from "./EditPayments";
import "./mygrid.css";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import Predict from "./Predict";
import Analytics from "./Analytics";
import Delete from "./Delete";

export default function MyGrid() {
  const [data, setData] = useState([]);
  //const [search, setSearch] = useState([]);
  //const [row, setRow] = useState([]);
  //const [remove, setRemove] = useState([]);
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
  const [count, setCount] = useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [open, setOpen] = useState(false);
  const { Sl_no, Business_code, Cust_number, Clear_date, Buisness_year, Doc_id, Posting_date, Document_create_date, Document_create_date1, Due_in_date, Invoice_currency, Document_type, Posting_id, Area_business, Total_open_amount, Baseline_create_date, Cust_payment_terms, Invoice_id, IsOpen, Aging_bucket, Is_deleted,} = payments;

  const [columns, setColumns] = useState([
    { title: "sl no.", field: "sl no." },
    { title: "business_code", field: "Business_code" },
    { title: "cust_number", field: "Cust_number" },
    { title: "clear_date", field: "Clear_date" },
    { title: "buisness_year", field: "Buisness_year" },
    { title: "doc_id", field: "Doc_id" },
    { title: "posting_date", field: "Posting_date" },
    { title: "document_create_date", field: "Document_create_date" },
    { title: "document_create_date1", field: "Document_create_date1" },
    { title: "due_in_date", field: "Due_in_date" },
    { title: "invoice_currency", field: "Invoice_currency" },
    { title: "document_type", field: "Document_type" },
    { title: "posting_id", field: "Posting_id" },
    { title: "total_open_amount", field: "Total_open_amount" },
    { title: "cust_payment_terms", field: "Cust_payment-terms" },
    { title: "invoice_id", field: "Invoice_id" },
    { title: "isOpen", field: "Is_Open" },
    { title: "aging_bucket", field: "Aging_bucket" },
    { title: "is_deleted", field: "Is_deleted" },
  ]);

  const reloadFunc =() => {
    window.location.reload(false);
    //this.setState()
    //this.forceUpdate()
  }
  const addHandler = () => {
    setOpen(true);

  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPayments({ ...payments, [name]: value });
  };

  const checkHandler = (e, Sl_no) => {
    if (e.target.checked) {
      let editPayments = data.filter((a) => a.Sl_no === Sl_no)[0];
      setPayments(editPayments);
    }
  };

  const deleteHandler = async () => {
    let data = "Sl_no=" + Sl_no;
    let response = await axios.get("http://localhost:8080/H2HWebApp/DeletePayment?" + data);
  };

  const searchHandler = () => {
    setOpen(true);
  };

  
  let data1;
  const handleClose = async (update) => {
    if (update) {
      let data = "Doc_id=" + Doc_id + "&Invoice_id=" + Invoice_id + "&Cust_number=" + Cust_number + "&Buisness_year=" + Buisness_year;
      let response = axios.get(
        "http://localhost:8080/H2HWebApp/AdvancedSearch?" + data
      );
      data1 = (await response).data.payments;
      console.log("data updated", data1);
      if (response) {
        setData(data1);
      }
    }
    setOpen(false);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  /*const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));*/
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '70%',
        
      },
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, rowsPerPage));
    setPage(0);
  };


  useEffect(() => {
    async function fetchData() {
      //console.log(page, rowsPerPage);
      let start = page;
      let limit = rowsPerPage;
      let data = await getData(start, limit);
      let response1 = await axios.get("http://localhost:8080/H2HWebApp/GetCount");
      if(response1){
        console.log(response1.data.Integer)
      }
      //console.log(data['data'])
      setData(data);
      setCount(Math.ceil((response1.data.Integer)/limit));
      //setCount(data["count"]);
    }
    fetchData();
  }, [rowsPerPage, page]);

  return (
    <div>
      <div style={{display: "flex", marginBottom: 10}}>
        <div style={{display: "flex", marginRight: "15%"}}>
          <Predict />
          <Analytics></Analytics>
          <Button variant="outlined" onClick={reloadFunc}><RefreshIcon/></Button>
        </div>
        <div style={{display: "flex", marginRight: "25%"}}>
          <Search>
            {/*<SearchIconWrapper><SearchIcon /></SearchIconWrapper>*/}
            <StyledInputBase placeholder="Search Customer Id" inputProps={{ 'aria-label': 'search' }}/>
          </Search>
        </div>
        <div style={{display: "flex"}}>
          <AddPayments Business_code={Business_code} Cust_number={Cust_number} Clear_date={Clear_date} Buisness_year={Buisness_year} Doc_id={Doc_id} Posting_date={Posting_date} Document_create_date={Document_create_date} Document_create_date1={Document_create_date1} Due_in_date={Due_in_date} Invoice_currency={Invoice_currency} Document_type={Document_type} Posting_id={Posting_id} Total_open_amount={Total_open_amount} Baseline_create_date={Baseline_create_date} Cust_payment_terms={Cust_payment_terms} Invoice_id={Invoice_id} IsOpen={IsOpen} Aging_bucket={Aging_bucket} Is_deleted={Is_deleted} changeHandler={changeHandler}/>
          <EditPayments Sl_no={Sl_no} Invoice_currency={Invoice_currency} Cust_payment_terms={Cust_payment_terms} changeHandler={changeHandler} />
          {/*<Button variant="outlined"  onClick={deleteHandler}>Delete</Button>*/}
          <Delete Sl_no={Sl_no}/>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/*checkBoxSelection above}`*/}
          <TableHead className="table">
            <TableRow>
              <TableCell><Checkbox></Checkbox>{" "}</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Sl_no</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Business_code</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Cust_number"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Clear_date"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Buisness_year"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Doc_id"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Posting_date"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Document_create_date"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Document_create_date1"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Due_in_date"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Invoice_currency"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Document_type"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Posting_id"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Area_business"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Total_open_amount"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Baseline_create_date"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Cust_payment_terms"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Invoice_id"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> IsOpen"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Aging_Bucket"</TableCell>
              <TableCell align="right" style={{ color: "white" }}> Is_deleted"</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {data.map((payments) => (
              <TableRow
                /*onClick = {() => clickHandler(payments.Id)}*/
                key={payments.Sl_no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"><Checkbox onClick={(e) => checkHandler(e, payments.Sl_no)} /></TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Sl_no}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Business_code}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Cust_number}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Clear_date}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Buisness_year}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Doc_id}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Posting_date}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Document_create_date}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Document_create_date1}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Due_in_date}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Invoice_currency}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Document_type}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Posting_id}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Area_business}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Total_open_amount}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Baseline_create_date}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Cust_payment_terms}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Invoice_id}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.IsOpen}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Aging_Bucket}</TableCell>
                <TableCell align="right" style={{ color: "white" }}>{payments.Is_deleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
  //)
}
