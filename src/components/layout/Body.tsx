import React from "react";
import { Layout, Menu, Icon } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/Store";
import { toggleSidebar } from "../../store/reducers/LayoutReducer";

const { Header, Content, Footer, Sider } = Layout;

const Body = () => {
  const dispatch = useDispatch();

  const { sidebarCollapsed } = useSelector((state: RootState) => state.layout);
  const { films } = useSelector((state: RootState) => state.films);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
        onCollapse={() => dispatch(toggleSidebar())}
      >
        {/* TODO: SW logo here <div className="logo" /> */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>

          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {/* TODO: Breadcrumb here <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {films.map(film => {
              return (
                <div>
                  Episode {film.episode_id} - {film.title}
                </div>
              );
            })}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Narnok ©2019</Footer>
      </Layout>
    </Layout>
  );
};
export default Body;
