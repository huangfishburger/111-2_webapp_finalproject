import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './containers/Navbar';
import { IndexPage, EducatePage, Game, Search, RecordPage, ContactPage, FoundationPage } from './containers/Sences';

const { Content } = Layout;
const contentStyle = {
  minHeight: 450,
  lineHeight: '120px',
}

const searchContentStyle = {
  ...contentStyle,
  minHeight: 'calc(100vh)',
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
              <Route path="/game" element={ <Game /> } />
              <Route path="/search"  element={<Search contentStyle={searchContentStyle}/>} />
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
