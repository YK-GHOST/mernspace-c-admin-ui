import { Flex, List, Skeleton, Space, Tag, Typography } from "antd";
import Icon from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import { useAuthStore } from "../store";
import BasketIcon from "../components/icons/BasketIcon";
const { Title, Text } = Typography;

const list = [
  {
    OrderSummary: "Peperoni, Margarita ...",
    address: "Bandra, Mumbai",
    amount: 1200,
    status: "preparing",
    loading: false,
  },
  {
    OrderSummary: "Paneer, Chicken BBQ ...",
    address: "Balurghat, West bengal",
    amount: 2000,
    status: "on the way",
    loading: false,
  },
  {
    OrderSummary: "Paneer, Chicken BBQ ...",
    address: "Balurghat, West bengal",
    amount: 2000,
    status: "on the way",
    loading: false,
  },
  {
    OrderSummary: "Paneer, Chicken BBQ ...",
    address: "Balurghat, West bengal",
    amount: 2000,
    status: "on the way",
    loading: false,
  },
  {
    OrderSummary: "Paneer, Chicken BBQ ...",
    address: "Balurghat, West bengal",
    amount: 2000,
    status: "on the way",
    loading: false,
  },
  {
    OrderSummary: "Paneer, Chicken BBQ ...",
    address: "Balurghat, West bengal",
    amount: 2000,
    status: "on the way",
    loading: false,
  },
];

const CardTitle = ({ title, PrefixIcon }: any) => {
  return (
    <Space>
      <Icon component={PrefixIcon} />
      {title}
    </Space>
  );
};

function HomePage() {
  const { user } = useAuthStore();
  const greetUser = () => {
    const date = new Date();
    const hour = date.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
      greeting = "Good morning!";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
    return greeting;
  };
  return (
    <div>
      <Title level={4}>
        {greetUser()}{" "}
        {user?.firstName
          .toLowerCase()
          .match(/[a-z]+/g)
          ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))}{" "}
        😁
      </Title>
      <div style={{ display: "flex", width: "100%", gap: "16px" }}>
        <Flex vertical gap={16}>
          <Flex>
            <Row gutter={16}>
              <Col span={12}>
                <Card variant="borderless" style={{ width: "265px" }}>
                  <Statistic title="Total Orders" value={69} />
                </Card>
              </Col>
              <Col span={12}>
                <Card variant="borderless" style={{ width: "265px" }}>
                  <Statistic
                    title="Total Sales"
                    value={50000}
                    precision={2}
                    prefix="₹"
                  />
                </Card>
              </Col>
            </Row>
          </Flex>

          <Card style={{ flex: 1 }}></Card>
        </Flex>
        <Card
          style={{ flex: 1 }}
          title={<CardTitle title="Recent orders" PrefixIcon={BasketIcon} />}
        >
          <List
            className="demo-loadmore-list"
            loading={false}
            itemLayout="horizontal"
            loadMore={true}
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.OrderSummary}</a>}
                    description={item.address}
                  />
                  <Row style={{ flex: 1 }} justify="space-between">
                    <Col>
                      <Text strong>₹{item.amount}</Text>
                    </Col>
                    <Col>
                      <Tag color="volcano">{item.status}</Tag>
                    </Col>
                  </Row>
                </Skeleton>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
