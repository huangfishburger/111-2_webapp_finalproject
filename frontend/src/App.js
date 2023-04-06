import './App.css';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import 'material-icons/iconfont/material-icons.css';
import { Navbar } from './components/Navbar';
import { RecordPage } from './containers/RecordPage';

const { Footer, Content } = Layout;
const contentStyle = {
  minHeight: 450,
  lineHeight: '120px',
  paddingInline: "50px",
};
const footerStyle = {
  height: 100,
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Content style={contentStyle}>
          <RecordPage />
        </Content>
        <Footer style={footerStyle}>

        </Footer>
      </Layout>
    </div>
  );
}

export default App;
