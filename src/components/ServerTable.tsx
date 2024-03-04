import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  key: string;
  countryLocation: string;
  serverName: any;
  storage: string;
  pageLoad: string;
  status: string;
  logs: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Country Location",
    dataIndex: "countryLocation",
    key: "countryLocation",
  },
  {
    title: "Server Name",
    dataIndex: "serverName",
    key: "serverName",
  },
  {
    title: "Storage",
    dataIndex: "storage",
    key: "storage",
  },
  {
    title: "Page Load",
    key: "pageLoad",
    dataIndex: "pageLoad",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text) => (
      <Tag
        style={{ backgroundColor: "#E00707", paddingTop: 2, paddingBottom: 4, color: "white" }}
      >
        {text}
      </Tag>
    ),
  },
  {
    title: "Logs",
    dataIndex: "logs",
    key: "logs",
    render: (text) => <a>{text}</a>,
  },
];

const data: DataType[] = [
  {
    key: "1",
    countryLocation: "Indonesia",
    serverName: "https://test2world.com",
    storage: "12 TB",
    pageLoad: "200.04 ms",
    status: "Down",
    logs: "test1.txt",
  },
  {
    key: "2",
    countryLocation: "Malaysia",
    serverName: "https://test3world.com",
    storage: "5 TB",
    pageLoad: "300.00 ms",
    status: "Down",
    logs: "test2.txt",
  },
  {
    key: "3",
    countryLocation: "Singapore",
    serverName: "https://test4world.com",
    storage: "500 GB",
    pageLoad: "120.03 ms",
    status: "Down",
    logs: "test3.txt",
  },
  {
    key: "3",
    countryLocation: "India",
    serverName: "https://test5world.com",
    storage: "10 TB",
    pageLoad: "900.92 ms",
    status: "Down",
    logs: "test4.txt",
  },
];

const ServerTable: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={{pageSize: 3}}/>
);

export default ServerTable;
