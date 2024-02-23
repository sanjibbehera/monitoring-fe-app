import { CustomCard } from "@/components/CustomCard";
import Layout from "@/components/Layout";
import { Color } from "@/utils/color";
import { cardsList } from "@/utils/const";
import { ArrowRightOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  List,
  MenuProps,
  Progress,
  Row,
  Space,
  Typography,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";
import SeverIcon from "../../public/Server.svg";
import AlertFlesh from "../../public/alertPhishing.svg";
import ServerRequestIcon from "../../public/serverRequest.svg";
import { dashboardData, getS3Data } from "./api/dashboard";

const divStyle: CSSProperties = { paddingInline: 15, paddingTop: 10 };

const cardContainerStyle = {
  padding: 15,
  borderRadius: 10,
};
const cardImageStyle = {
  ...cardContainerStyle,
  backgroundColor: Color.GRADIENT_ORANGE,
};
const cardImageContainerStyle = {
  ...cardContainerStyle,
  backgroundColor: Color.GRADIENT_LIGHT_BLUE,
};
const cardTextStyle = {
  fontSize: 14,
};
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 2",
  },
];


const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

function Dashboard() {
  const { Text } = Typography;
  const route = useRouter();
  const [response, setResponse] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [extraCardData, setExtraCardData] = useState([]);
  useEffect(() => {
    const fetchCardItems = async () => {
      const result = await dashboardData();
      if (result !== null) {
        setExtraCardData(result.data);
        const usageItems: any = {
          cpu: result?.data?.cpu?.pop(),
          disk: result?.data?.disk.pop(),
        };

        const cardInfo = cardsList.map((item: any, idx: number) => {
          return {
            ...item,
            percentage: idx === 0 ? parseFloat(usageItems.cpu?.cpuData[0]?.Maximum).toFixed(2) :
              idx === 2 ? `${usageItems.disk?.size} GB` :
                item.percentage,

            average: idx === 0 ? parseFloat(result?.data?.average.toString()).toFixed(2) :
              idx === 2 ? usageItems.disk?.size / 100 :
                item.average,

            progressProps: {
              percent: idx === 0 ? parseFloat(usageItems.cpu?.cpuData[0]?.Maximum).toFixed(2) :
                idx === 2 ? usageItems.disk?.size :
                  item.progressProps.percent,
              strokeColor: item.progressProps.strokeColor,
            },
          };
        });
        setCardsData(cardInfo);
      }
    };
    fetchCardItems();
    getS3Data()
      .then((data) => {
        setResponse(data.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const generateCardMenu = (index: number) => {
    // Customize the menu items based on the card's index
    switch (index) {
      case 0:
        return {
          items: [
            {
              label: <Typography.Text style={{ fontSize: 12 }} strong>CPU Details</Typography.Text>,
              key: '0',
            },
            {
              label: <Typography.Text style={{ fontSize: 12 }}>Account Id :{extraCardData?.cpu[0]?.accountId}</Typography.Text>,
              key: '0',
            }, {
              label: <Typography.Text style={{ fontSize: 12 }}>Maximum :{parseFloat(extraCardData?.cpu[0]?.cpuData[index]?.Maximum).toPrecision(2)}%</Typography.Text>,
              key: '1',
            },
            {
              label: <Typography.Text style={{ fontSize: 12 }}>Date :{new Date(extraCardData?.cpu[0]?.cpuData[index]?.Timestamp).toLocaleDateString()}</Typography.Text>,
              key: '2',
            }
          ]
        };
      // case 1:
      //   return { items: [/* your data for index 1 */] };
      // case 2:
      //   return { items: [/* your data for index 2 */] };
      // Add more cases as needed for other indices
      default:
        return null; // Return null if no menu is needed for other indices
    }
  };

  return (
    <Layout>
      <div>
        <div style={divStyle}>
          <Row gutter={16}>
            <Col span={16}>
              <Flex justify="space-evenly" align="center">
                {cardsData.length > 0 &&
                  cardsData.map(
                    (
                      card: {
                        name: string;
                        color: string;
                        icon: any;
                        average: any;
                        percentage: string | number;
                        progressProps: {
                          percentage: number;
                          strokeColor: string;
                        };
                        bgColor: string;
                      },
                      index
                    ) => (
                      <CustomCard
                        cardMenu={generateCardMenu(index)}
                        key={index}
                        title={card.name}
                        color={card.color}
                        titleIcon={card.icon}
                        average={card.average}
                        percentage={card.percentage}
                        progressProps={card.progressProps}
                        bgColor={card.bgColor}
                      />
                    )
                  )}
              </Flex>
              <Space style={{ marginTop: 10, marginBottom: 10 }}>
                <Card title="Cardss title" bordered={false}>
                  Card content Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Asperiores odio corporis temporibus
                </Card>
              </Space>
            </Col>
            <Col span={8}>
              <Card style={{ marginBottom: 10 }} bordered={false}>
                <Flex gap={20} vertical>
                  <Space
                    style={{ justifyContent: "space-between" }}
                    size="small"
                  >
                    <div style={cardImageStyle}>
                      <Image alt="" src={SeverIcon} />
                    </div>
                    <Flex vertical>
                      <Text strong>Loads</Text>
                      <Text style={cardTextStyle} type="secondary">
                        online Participant
                      </Text>
                    </Flex>
                    <Progress
                      style={{ width: "135px" }}
                      strokeColor={Color.PRIMARY_ORANGE}
                      percent={50}
                      showInfo={false}
                    />
                  </Space>
                  <Space
                    style={{ justifyContent: "space-between" }}
                    size="small"
                  >
                    <div style={cardImageContainerStyle}>
                      <Image alt="" src={ServerRequestIcon} />
                    </div>
                    <Flex vertical>
                      <Text strong>Request</Text>
                      <Text style={cardTextStyle} type="secondary">
                        online Participant
                      </Text>
                    </Flex>
                    <Progress
                      style={{ width: "135px" }}
                      percent={50}
                      showInfo={false}
                    />
                  </Space>
                </Flex>
              </Card>
              <Card style={{ marginBottom: 10 }} title="S3 Buckets">
                {Object.values(
                  (response || []).reduce<
                    Record<
                      string,
                      { bucketName: string; totalSizeGB: number }
                    >
                  >((buckets, item) => {
                    const { bucketName, totalSizeGB } = item;
                    if (!buckets[bucketName]) {
                      buckets[bucketName] = { bucketName, totalSizeGB };
                    } else {
                      buckets[bucketName].totalSizeGB += totalSizeGB;
                    }
                    return buckets;
                  }, {})
                ).map((bucket) => (
                  <Space
                    style={{ display: "flex", justifyContent: "space-between" }}
                    key={bucket.bucketName}
                  >
                    <Text strong>{bucket.bucketName}</Text>
                    <Text type="secondary">{parseFloat(bucket.totalSizeGB.toString()).toPrecision(2)} GB</Text>
                  </Space>
                ))}
              </Card>

              <Card style={{ background: "linear-gradient(#8F68FD, #420ADF)" }}>
                <Flex align="center" justify="space-between">
                  <Progress
                    strokeWidth={10}
                    strokeColor={Color.BASIC_WHITE}
                    trailColor="#8EBBFE"
                    type="circle"
                    size={"small"}
                    percent={75}
                    format={(percent) => (
                      <Text style={{ color: Color.BASIC_WHITE }} strong>
                        {percent}
                      </Text>
                    )}
                  />
                  <Text style={{ color: Color.BASIC_WHITE }} strong>
                    Storage <br /> Usage
                  </Text>{" "}
                  <Text style={{ color: Color.BASIC_WHITE }} strong>
                    |
                  </Text>
                  <Text style={{ color: Color.BASIC_WHITE }} strong>
                    21,21,32,314 <br /> online users{" "}
                  </Text>
                </Flex>
              </Card>
              <Card
                title={
                  <Flex align="center" justify="center">
                    <Image alt="alertLogo" src={AlertFlesh} />
                    <Text style={{ color: Color.BASIC_WHITE }} strong>
                      Phishing Alert
                    </Text>
                  </Flex>
                }
                style={{
                  marginTop: 10,
                  background: "linear-gradient(#DD0101, #995555)",
                }}
                bordered={false}
              >
                <List
                  dataSource={data.length > 1 ? data.slice(0, 2) : data}
                  renderItem={(item, index) => (
                    <List.Item key={index}>
                      <List.Item.Meta
                        title={
                          <Text style={{ color: Color.BASIC_WHITE }}>
                            "10:31:44 from Indonesia"
                          </Text>
                        }
                        description={
                          <Text style={{ color: Color.BASIC_WHITE }}>
                            "Sobatserver"
                          </Text>
                        }
                      />
                      <Button onClick={() => route.push("/alerts")} type="text">
                        <ArrowRightOutlined
                          style={{ color: Color.BASIC_WHITE }}
                        />
                      </Button>
                    </List.Item>
                  )}
                />
                {data.length > 1 && (
                  <Button
                    size="small"
                    onClick={() => route.push("/alerts")}
                    style={{ color: Color.BASIC_WHITE }}
                    type="text"
                  >
                    +more <ArrowRightOutlined />
                  </Button>
                )}
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ ...divStyle, marginBottom: 10 }}>
          <Row wrap gutter={16}>
            <Col span={24}>
              <Card title="Cassrd title" bordered={false}>
                Card content Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Asperiores odio corporis temporibus
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
