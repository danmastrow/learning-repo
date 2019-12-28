import React from "react";
import {
  Layout,
  Menu,
  Icon,
  Button,
  Breadcrumb,
  Card,
  Row,
  Col,
  Skeleton,
  Avatar
} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/Store";
import { toggleSidebar } from "../../store/reducers/LayoutReducer";
import ButtonGroup from "antd/lib/button/button-group";
import Meta from "antd/lib/card/Meta";

const { Header, Content, Footer, Sider } = Layout;

const Body = () => {
  const dispatch = useDispatch();

  const { sidebarCollapsed } = useSelector((state: RootState) => state.layout);
  const { films, loading } = useSelector((state: RootState) => state.films);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
        onCollapse={() => dispatch(toggleSidebar())}
      >
        {/* <div className="logo" /> */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="video-camera" />
            <span>Films</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Star Wars</Breadcrumb.Item>
            <Breadcrumb.Item>Films</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Row gutter={16}>
              {!loading ? (
                films.map(film => {
                  const title = `Episode ${film.episode_id} - ${film.title}`;
                  return (
                    <Col span={8}>
                      <Card title={title} bordered={true}>
                        Content here
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Skeleton>
              )}
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Narnok ©2019</Footer>
      </Layout>
    </Layout>
  );
};
export default Body;
