import { Layout, Drawer } from "antd";
import { NavigationMenu } from "./NavigationMenu";
import logo from "../../assets/logo.png";

const NavigationLogo = () => {
  return (
    <div data-testid="navigation-logo" className="logo">
      <img alt="logo" src={logo} width={200} />
    </div>
  );
};

export const NavigationSidebar = ({
  openDrawer,
  showDrawer,
  currentPath,
  closeDrawer,
  onClickMenu,
  onClickDrawerMenu,
}) => {
  return (
    <>
      <Layout.Sider
        width={250}
        breakpoint="md"
        collapsedWidth="0"
        trigger={null}
        collapsed={showDrawer}
      >
        <NavigationLogo />
        <NavigationMenu
          theme="dark"
          defaultSelectedKeys={[currentPath]}
          selectedKeys={[currentPath]}
          onClick={onClickMenu}
        />
      </Layout.Sider>
      {showDrawer && (
        <Drawer
          title="Blockchain Studio Challenge"
          placement="left"
          onClose={closeDrawer}
          visible={openDrawer}
        >
          <NavigationMenu
            defaultSelectedKeys={[currentPath]}
            selectedKeys={[currentPath]}
            onClick={onClickDrawerMenu}
          />
        </Drawer>
      )}
    </>
  );
};
