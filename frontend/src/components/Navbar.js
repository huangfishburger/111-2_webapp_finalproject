import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';
import 'material-icons/iconfont/material-icons.css';
const { Header } = Layout;

const CustomizedHeader = styled(Header)`
  position: absolute;
  top: 20px;
  height: 30px;
  width: 100%;
  padding-inline: 50px;
  line-height: 64px;
  background: transparent !important;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: 99;
  & .ant-menu{
    backgroundColor: #ffffff70;
    backdropFilter: blur(5px);
    height: 100%;
    font-size: small;
    font-weight: 700;
  }
  & .ant-menu-item, .ant-menu-submenu-title{
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
const navTitleStyle = {
  width: "max-content",
  minWidth: "170px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "large",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
}
const navItemsStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "medium",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "50%",
}
const buttonStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  color: "#161616",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const menuStyle = {
  height: "30px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
  paddingInline: "10px",
}
const navItems = ['主畫面', '教育', '紀錄', '聯絡我們', '贊助'].map((key) => ({
  key,
  label: `${key}`,
}));
  

const Navbar = () => {
  return (
    <CustomizedHeader theme="light">
      <div style={navTitleStyle}>
        🐸 青蛙的第一個家  
      </div>
      <div style={{display: "flex", width: "40%"}}>
        <Menu 
          theme="light" 
          mode="horizontal" 
          defaultSelectedKeys={['0']} 
          items={navItems} 
          style={menuStyle}
        />      
        <Button shape="circle" style={navItemsStyle}>
          <span class="material-icons-round" style={buttonStyle}>person</span> 
        </Button>
      </div>
    </CustomizedHeader>
  )
};

export { Navbar }