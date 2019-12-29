import React from "react";
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Card,
  Row,
  Col,
  Skeleton,
  Avatar
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/Store";
import { toggleSidebar } from "../../store/reducers/LayoutReducer";
import Meta from "antd/lib/card/Meta";
import FilmCards from "../film-cards/FilmCards";

const { Content, Footer, Sider } = Layout;

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
            <FilmCards films={films} loading={loading} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Narnok ©2019</Footer>
      </Layout>
    </Layout>
  );
};
export default Body;
