import React from "react";
import { Select, Table } from "antd";
import { TableContainer, Tabletitle } from "../../styles/components/TableComponent/index";
import { BarChart2 } from "lucide-react";

const { Option } = Select;

const RateFactors = () => {
  const columns = [
    {
      title: "Construction",
      dataIndex: "construction",
      key: "construction",
    },
    {
      title: "Total Exposure",
      dataIndex: "totalExposure",
      key: "totalExposure",
    },
    {
      title: "Total Loss",
      dataIndex: "totalLoss",
      key: "totalLoss",
    },
    {
      title: "Avg Loss Cost",
      dataIndex: "avgLossCost",
      key: "avgLossCost",
    },
    {
      title: "Relativity",
      dataIndex: "relativity",
      key: "relativity",
    },
    {
      title: "Recommended Modifier",
      dataIndex: "recommendedModifier",
      key: "recommendedModifier",
    },
  ];

  const data = [
    {
      key: "1",
      construction: "Fire Resistive",
      totalExposure: 170643906,
      totalLoss: 1535000,
      avgLossCost: 0.0115,
      relativity: 1,
      recommendedModifier: 1,
    },
    {
      key: "2",
      construction: "Frame",
      totalExposure: 168151450,
      totalLoss: 1580000,
      avgLossCost: 0.0198,
      relativity: 1.7255,
      recommendedModifier: 1.73,
    },
    {
      key: "3",
      construction: "Masonry",
      totalExposure: 164940124,
      totalLoss: 1165000,
      avgLossCost: 0.0123,
      relativity: 1.0747,
      recommendedModifier: 1.07,
    },
  ];

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <h3 style={{ margin: 0 }}>Group by</h3>
        <Select defaultValue="Construction" style={{ width: 200 }}>
          <Option value="Construction">Construction</Option>
          <Option value="Occupancy">Occupancy</Option>
          {/* Add more group options if needed */}
        </Select>
      </div>

      <TableContainer theme="light">
        <Tabletitle>
          <BarChart2 size={20} style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Modifier Table by Construction
        </Tabletitle>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          rowKey="key"
          scroll={{ x: "max-content" }}
        />
      </TableContainer>
    </>
  );
};

export default RateFactors;
