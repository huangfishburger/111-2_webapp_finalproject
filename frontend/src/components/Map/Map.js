import React, { useRef, useState, useEffect, useCallback, useContext } from "react"
import MapContext from "./../../hook/MapContext";
import * as ol from "ol";
import { Icon, Style } from "ol/style";

const Map = ({ children, zoom, center, setCenter, user, setloading1 }) => {
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
		<MapContext.Provider value={{ map }}>
			<div ref={mapRef} className="map" >
				{children}
			</div>
		</MapContext.Provider>
	)
}

export { Map };