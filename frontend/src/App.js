import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './containers/Navbar';
import { IndexPage, EducatePage, RecordPage, ContactPage, FoundationPage } from './containers/Sences';

const { Content } = Layout;
const contentStyle = {
  minHeight: 450,
  lineHeight: '120px',
  paddingInline: "3.5vw",
};

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Navbar />
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={ <IndexPage /> } />
              <Route path="/educate" element={ <EducatePage /> } />
              <Route path="/record" element={ <RecordPage /> } />
              <Route path="/contact" element={ <ContactPage /> } />
              <Route path="/foundation" element={ <FoundationPage /> } />
            </Routes>
          </Content>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
