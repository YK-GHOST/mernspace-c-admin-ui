import React from "react";
import { Button, Card, Col, Input, Row, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const UsersFilter = () => {
  return (
    <Card>
      <Row justify="space-between" align="middle">
        <Col span={16}>
          <Row gutter={20}>
            <Col span={8}>
              <Input.Search placeholder="search" />
            </Col>
            <Col span={8}>
              <Select style={{ width: "100%" }} placeholder="Select role">
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="manager">Manager</Select.Option>
                <Select.Option value="customer">Cusotmer</Select.Option>
              </Select>
            </Col>
            <Col span={8}>
              <Select style={{ width: "100%" }} placeholder="Select status">
                <Select.Option value="banned">Banned</Select.Option>
                <Select.Option value="active">Active</Select.Option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Add User
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default UsersFilter;
