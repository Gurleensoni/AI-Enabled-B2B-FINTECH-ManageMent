package com.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.pojo.Invoice;
import com.pojo.Students;

public class Crud {

	public Connection getConnection()
	{
		 Connection conn =null;
		 String url ="jdbc:mysql://localhost:3306/grey_goose";
		 String user = "root";
		 String pass ="Anidip272001.";
			
			
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn =DriverManager.getConnection(url,user,pass);
				} catch (ClassNotFoundException e) {
					
					e.printStackTrace();
				} catch (SQLException e) {
					e.printStackTrace();
				}
				
				return conn;

		}
	
	
		public ArrayList<Invoice> getData()
		{
			ArrayList<Invoice> ALLInvoice =new ArrayList<Invoice>();
			 			
			try {
			 Connection conn = getConnection();
			 String sql_query="SELECT * from winter_internship";
			 PreparedStatement pst = conn.prepareStatement(sql_query);
			 //System.out.println(pst);
			 
			 ResultSet rs = pst.executeQuery();
			
			 while(rs.next())
			 {
				 Invoice i = new Invoice();
				 i.setSl_no(rs.getString("sl_no"));
				 i.setBuisness_code(rs.getString("business_code"));
				 i.setCust_number(rs.getString("cust_number"));
				 i.setClear_date(rs.getString("clear_date"));
				 i.setBuisness_year(rs.getString("buisness_year"));
				 i.setDoc_id(rs.getString("doc_id"));
				 i.setPosting_date(rs.getString("posting_date"));
				 i.setDocument_create_date(rs.getString("document_create_date"));
				 i.setDue_in_date(rs.getString("due_in_date"));
				 i.setInvoice_currency(rs.getString("invoice_currency"));
				 i.setDocument_type(rs.getString("document_type"));
				 i.setPosting_id(rs.getString("posting_id"));
				 i.setTotal_open_amount(rs.getString("total_open_amount"));
				 i.setBaseline_create_date(rs.getString("baseline_create_date"));
				 i.setCust_payment_terms(rs.getString("cust_payment_terms"));
				 i.setInvoice_id(rs.getString("invoice_id"));
					
				 ALLInvoice.add(i);
					
				
			 
			 
			 
			 }
			}
				  
			
			catch (Exception e) {
				e.printStackTrace();
				System.out.println("exception occur");
			}
			
			return ALLInvoice;
			
		
		}
			 
		
		
		
}



