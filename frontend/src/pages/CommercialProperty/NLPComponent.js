import React from "react";
import { Table } from "antd";
import { TableContainer, Tabletitle } from "../../styles/components/TableComponent/index"; // Adjust path if needed

const data = [
  {
    key: "1",
    Construction: "Fire Resistive",
    TotalExposure: 170643906,
    TotalLoss: 1535000,
    AvgLossCost: 0.0115,
  },
  {
    key: "2",
    Construction: "Frame",
    TotalExposure: 168151450,
    TotalLoss: 1580000,
    AvgLossCost: 0.0198,
  },
  {
    key: "3",
    Construction: "Masonry",
    TotalExposure: 164940124,
    TotalLoss: 1165000,
    AvgLossCost: 0.0123,
  },
];

const columns = [
  {
    title: "Construction",
    dataIndex: "Construction",
    key: "Construction",
  },
  {
    title: "Total Exposure",
    dataIndex: "TotalExposure",
    key: "TotalExposure",
    render: (value) => value.toLocaleString(),
  },
  {
    title: "Total Loss",
    dataIndex: "TotalLoss",
    key: "TotalLoss",
    render: (value) => value.toLocaleString(),
  },
  {
    title: "Avg Loss Cost",
    dataIndex: "AvgLossCost",
    key: "AvgLossCost",
    render: (value) => value.toFixed(4),
  },
];

const Nlpcomponents = () => {
  return (
    <TableContainer theme="light">
      <Tabletitle>Construction Loss Table</Tabletitle>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
        scroll={{ x: "max-content" }}
      />
    </TableContainer>
  );
};

export default Nlpcomponents;
