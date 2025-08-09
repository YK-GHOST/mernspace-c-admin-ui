import { useQuery } from "@tanstack/react-query";
import { getTenants } from "../../http/api";
import { useEffect } from "react";
import { Breadcrumb, Space, Table } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text: string) => <span>{text}</span>,
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (text: string) => <span>{text}</span>,
  },
];

const Tenants = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tenants"],
    queryFn: async () => {
      return getTenants().then((response) => response.data.data);
    },
  });

  useEffect(
    function () {
      console.log(data);
    },
    [data]
  );
  return (
    <div>
      {" "}
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            { title: <Link to={"/"}>Dashboard</Link> },
            { title: "Users" },
          ]}
        />
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error.message}</div>}

        <Table dataSource={data} columns={columns} rowKey={"id"} />
      </Space>
    </div>
  );
};

export default Tenants;
