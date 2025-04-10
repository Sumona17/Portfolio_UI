import React from "react";
import { Layout } from "antd";
import Header from "../components/Header/Header";
import CustomFooter from "../components/Footer/Footer";
import { Routes, Route } from "react-router-dom"; 



const {  Content } = Layout;

const CustomLayout = () => {
  return (
    <Layout
      style={{
    
        
        // backgroundImage: "url(" + { bg1.jpg } + ")",// Set the background image
        // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundSize: "100%",
        background: "transparent"
 

      }}
    >
     
        <Header />
 
        <Content
        
        style={{
          padding: "20px",
          // backgroundImage: "url(bg1.jpg)",
          //  backgroundSize:"cover",

          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          margin: "0px 0", // Margin above and below the content
          flex: 1, // Allows Content to grow and fill remaining height
        }}
      >
       <Routes>
          <Route path="/dashboard" element={<div>DAshboard</div>} />
         {/* <Route path="/model-details/claim-severity" element={<Tab/>}/> */}
          
        </Routes>
      </Content>
    
        <CustomFooter />
      
    </Layout>
  );
};

export default CustomLayout;
