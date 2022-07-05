import React from "react";
import MyGrid from './components/MyGrid';
import Header from './components/header' 
import Footer from './components/footer';

export default function App() {
  return (
    <div>
      <Header/>
      <MyGrid/>
      <Footer/>
    </div>
  );
}
