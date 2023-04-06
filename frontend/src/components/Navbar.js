import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';
import 'material-icons/iconfont/material-icons.css';
const { Header } = Layout;

const CustomizedHeader = styled(Header)`
  height: 60px;
  padding-inline: 50px;
  line-height: 64px;
  background: transparent !important;
  align-items: center;
  display: flex;
  &>.ant-menu{
    background: transparent !important;
  }
`;
const navItemsStyle = {
  width: "max-content",
  minWidth: "170px",
  height: "70%",
  float: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "large",
}
const buttonStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  color: "#161616",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const menuStyle = {
    float: "left",
}
const navItems = ['主畫面', '知識小遊戲', '通報系統'].map((key) => ({
  key,
  label: `${key}`,
}));
  

const Navbar = () => {
  return (
    <CustomizedHeader theme="light">
      <div style={navItemsStyle}>
        <span class="material-icons-round">bug_report</span> 
        台灣兩棲保育平台  
      </div>
      <Menu 
        theme="light" 
        mode="horizontal" 
        defaultSelectedKeys={['0']} 
        items={navItems} 
        style={menuStyle}
      />
      <Button type="primary" size='large' shape="round" style={navItemsStyle}>
        尚未登入
        <span class="material-icons-round" style={buttonStyle}>person</span> 
      </Button>
    </CustomizedHeader>
  )
};

export { Navbar }