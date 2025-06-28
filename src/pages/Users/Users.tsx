import React from "react";
import { Breadcrumb, Space, Table } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../http/api";
import { User } from "../../types/types";
import { useAuthStore } from "../../store";
import UsersFilter from "./UsersFilter";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (_: string, record: User) => {
      return (
        <div>
          {record.firstName} {record.lastName}
        </div>
      );
    },
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (text: string) => <span>{text}</span>,
  },
];

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return getUsers().then((response) => response.data.data);
    },
  });

  const { user } = useAuthStore();

  if (user?.role !== "admin") {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Breadcrumb
        separator={<RightOutlined />}
        items={[{ title: <Link to={"/"}>Dashboard</Link> }, { title: "Users" }]}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      <UsersFilter />
      <Table dataSource={users} columns={columns} />;
    </Space>
  );
};
export default Users;
