import { Col, Row } from 'antd';
import { Lists } from '../Lists';
import { MapContainer } from '../MapContainer';
import './../../css/RecordPage.css';
import MapContext from '../../hook/MapContext';
import React, { useRef, useState } from "react";
import { fromLonLat } from "ol/proj";

const gridStyle = {
  borderTop: "10px solid #f5f5f5",
  borderBottom: "10px solid #f5f5f5",
}

const RecordPage = () => {
  const mapRef = useRef();
	const [ map, setMap ] = useState(null);
  const [ mapView, setMapView ] = useState(false);
  const [ center, setCenter ] = useState(fromLonLat([120.97986041534145, 23.9748311775491]));
  const [ zoom, setZoom ] = useState(7);
  const [ isDraw, setIsDraw ] = useState(false);
  const [ userCoord, setUserCoord ] = useState([]);

  //const { stepsAndGeoJSON, showSteps, showAllFeactures } = useContext(MapContext);
  //const [ loading1, setloading1 ] = useState(false)
	//const { showSteps, setAllFeactures, setDisplayMap } = useContext(HomePageContext);

  var map_width = (mapView) ? 24 : 12;
  return (
    <MapContext.Provider value={{ map, mapRef, zoom, center, setCenter, setMap, setZoom, isDraw, setIsDraw, userCoord, setUserCoord }}>
       <Row style={gridStyle}>
        <Col xs={24} md={24-map_width}>
          <Lists />
        </Col>
        <Col xs={24} md={map_width}>
          <MapContainer mapView={mapView} setMapView={setMapView} />
        </Col>
      </Row>
    </MapContext.Provider>
  );
};

export { RecordPage }