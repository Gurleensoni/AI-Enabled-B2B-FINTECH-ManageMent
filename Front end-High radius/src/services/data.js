import axios from "axios";
export const getData = async (start, limit) => {
  //console.log("getData", start, limit);
    let str = "start=" + (start*limit) + "&limit=" + limit;
    let response = await axios.get("http://localhost:8080/H2HWebApp/DataLoading?"+str);
    //console.log("response from server", response)
    let data = response.data.payments;
    data.map((payment, index) => ({ ...payment, "id": index }))
    //console.log("response from server", data )
    return data;
}

export const getDataSearch = async ({Doc_id, Invoice_id, Cust_number, Buisness_year}) => {
  let data1 = "Doc_id=" + Doc_id + "&Invoice_id=" + Invoice_id + "&Cust_number=" + Cust_number + "&Buisness_year=" + Buisness_year;
  let response = await axios.get("http://localhost:8080/H2HWebApp/AdvancedSearch?" + data1);
  //console.log("response from server", response)
  let data = response.data.payments;
  data.map((payment, index) => ({ ...payment, "id": index }))
  console.log("response from server", data )
  return data;
}