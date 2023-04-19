import { Col, Row } from 'antd';
import { Lists } from '../Lists';
import { MapContainer } from '../MapContainer';
import './../../css/RecordPage.css';
import MapContext from '../../hook/MapContext';
import * as ol from "ol";
import { Icon, Style } from "ol/style";
import React, { useRef, useState, useEffect } from "react";

const gridStyle = {
  borderTop: "10px solid #f5f5f5",
  borderBottom: "10px solid #f5f5f5",
}

const RecordPage = () => {
  const [mapView, setMapView] = useState(false);
  const [ center, setCenter ] = useState([120.97986041534145, 23.9748311775491]);
  const [ zoom, setZoom ] = useState(7);
  //const { stepsAndGeoJSON, showSteps, showAllFeactures } = useContext(MapContext);
  //const [ loading1, setloading1 ] = useState(false)

  var map_width = (mapView) ? 24 : 12;

  const mapRef = useRef();
	const [ map, setMap ] = useState(null);
	//const { showSteps, setAllFeactures, setDisplayMap } = useContext(HomePageContext);

	// on component mount
	useEffect(() => {
		let options = { 
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: [],
		};
		
		let mapObject = new ol.Map(options);

		mapObject.setTarget(mapRef.current);
		setMap(mapObject);

		return () => {
			mapObject.setTarget(undefined);
		}
	}, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setCenter(center);
	}, [center])


  return (
    <MapContext.Provider value={{ map, mapRef, zoom, center }}>
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