// datapreview.js
import React, { useState } from "react";
import { Tabs } from "antd";
import { Table } from "antd";
import { TableContainer, Tabletitle } from "../../styles/components/TableComponent/index"; // Adjust path if needed

const { TabPane } = Tabs;

const data = [
    {
      key: "1",
      PolicyID: 1,
      TIV: 221958,
      LossAmount: 0,
      Construction: "Frame",
      Security: "Burglar Alarm",
      Occupancy: "Vacant",
      Location: "Non-Coastal",
      YearBuilt: 2002,
    },
    {
      key: "2",
      PolicyID: 3,
      TIV: 231932,
      LossAmount: 2,
      Construction: "Frame",
      Security: "Burglar Alarm",
      Occupancy: "Vacant",
      Location: "Non-Coastal",
      YearBuilt: 1997,
    },
    {
      key: "3",
      PolicyID: 5,
      TIV: 359178,
      LossAmount: 4,
      Construction: "Frame",
      Security: "None",
      Occupancy: "Vacant",
      Location: "Tier 2",
      YearBuilt: 1987,
    },
    {
      key: "4",
      PolicyID: 2,
      TIV: 771155,
      LossAmount: 1,
      Construction: "Frame",
      Security: "None",
      Occupancy: "Vacant",
      Location: "Tier 1",
      YearBuilt: 1999,
    },
    {
      key: "5",
      PolicyID: 4,
      TIV: 1514414,
      LossAmount: 3,
      Construction: "Fire Resistive",
      Security: "None",
      Occupancy: "Partial",
      Location: "Tier 1",
      YearBuilt: 1992,
    },
  ];
  
  const columns = [
    { title: "PolicyID", dataIndex: "PolicyID", key: "PolicyID" },
    { title: "TIV", dataIndex: "TIV", key: "TIV" },
    { title: "LossAmount", dataIndex: "LossAmount", key: "LossAmount" },
    { title: "Construction", dataIndex: "Construction", key: "Construction" },
    { title: "Security", dataIndex: "Security", key: "Security" },
    { title: "Occupancy", dataIndex: "Occupancy", key: "Occupancy" },
    { title: "Location", dataIndex: "Location", key: "Location" },
    { title: "YearBuilt", dataIndex: "YearBuilt", key: "YearBuilt" },
  ];
  

const DataPreview = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Tabs activeKey={activeTab} onChange={setActiveTab}>
      <TabPane tab="Data Preview" key="1">
        <TableContainer theme="light">
          <Tabletitle>Data Preview</Tabletitle>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            rowKey="PolicyID"
            scroll={{ x: "max-content" }}
          />
        </TableContainer>
      </TabPane>

      <TabPane tab="Analytics" key="2">
        {/* You can add analytics chart/logic here */}
        <TableContainer theme="light">
          <Tabletitle>Analytics Section</Tabletitle>
          {/* Placeholder content */}
          <p style={{ padding: "1rem", color: "#888" }}>
            Analytics dashboard coming soon.
          </p>
        </TableContainer>
      </TabPane>
    </Tabs>
  );
};

export default DataPreview;
