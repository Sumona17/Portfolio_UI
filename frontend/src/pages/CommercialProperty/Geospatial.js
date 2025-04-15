import React, { useState } from 'react';
import { Checkbox, Radio, Button, Card, Input } from 'antd';
import {
    Container,
    ContentWrapper,
    LabelRow,
    Label,
    TextSection,
    Sidebar,
    ButtonRow,
  } from "../../styles/components/FormControl/index";
  const { TextArea } = Input;

const WildfireRiskDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('map');
  
  return (
    <div className="flex flex-col p-4 bg-gray-50 h-screen">
      {/* Header */}
      <div className="flex items-center mb-4">
      <ContentWrapper>
            <LabelRow>
              <Label>Ask AI Agent</Label>
              <Input
                placeholder="Type your question here"
                defaultValue=" List the wildfire events and crimes associated with California and Los Angeles for the last 5 years"
              />
            </LabelRow>
            <div className="flex mb-4 items-center">
        <Radio className="mr-4">Include Portfolio data</Radio>
        <Checkbox className="mr-4 bg-blue-500 text-white px-2 py-1 rounded">Policy</Checkbox>
        <Checkbox className="mr-4">Claims</Checkbox>
      </div>
      <div className="bg-white p-2" style={{marginTop:'20px', marginBottom:'10px'}}>
              <Button 
                type={selectedTab === 'map' ? 'primary' : 'default'} 
                onClick={() => setSelectedTab('map')}
                className="mr-2"
                style={{marginRight:'10px'}}
              >
                Map
              </Button>
              <Button 
                type={selectedTab === 'satellite' ? 'primary' : 'default'} 
                onClick={() => setSelectedTab('satellite')}
              >
                Satellite
              </Button>
            </div>
            <TextSection>
              < Card rows={6} style={{width:'800px', height:'300px'}}>  <div className="h-64 w-full">
              {/* California Map using iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502594.616173302!2d-123.79997885498318!3d37.19297251753744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2sus!4v1681799989979!5m2!1sen!2sus" 
                width="100%" 
                height="200%" 
                style={{ border: 0, height:'250px' }} 
                allowFullScreen="true" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> </Card>
              <Card style={{width:'300px'}}>
                <p>Information Sources</p>
              </Card>
            </TextSection>
            <Card className="mb-4 h-64 flex items-center justify-center" style={{marginTop:'20px'}}>
            <div className="text-center">
            <Label>Insights</Label>
              
            </div>
          </Card>
            <ButtonRow>
           
              <Button type="primary">Add to Insights</Button>
            </ButtonRow>
          </ContentWrapper>
      
      </div>
      
      {/* Filters */}
     
      
      {/* Main content */}
      
    </div>
  );
};

export default WildfireRiskDashboard;