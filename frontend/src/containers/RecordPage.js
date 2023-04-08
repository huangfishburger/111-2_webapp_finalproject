import { Col, Row } from 'antd';
import { Lists } from './Lists';
import { MapContainer } from './MapContainer';
import './../css/RecordPage.css';

const gridStyle = {
  padding: "10px 0px",
}

const RecordPage = () => {
  return (
    <Row>
      <Col xs={24} md={12} style={gridStyle}>
        <Lists />
      </Col>
      <Col xs={24} md={12} style={gridStyle}>
        <MapContainer />
      </Col>
    </Row>
  );
};

export { RecordPage }