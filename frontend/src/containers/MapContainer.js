import React, { useState, useContext } from "react";
import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { fromLonLat } from "ol/proj";
import { Map } from "./../components/Map/Map";
import { Layers, MapBoxLayer } from "./../components/Layers";

const ViewButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  right: 5px;
  background: #ffffff70;
  backdrop-filter: blur(5px);
  color: #161616;
  align-items: center;
  display: flex;
  z-index: 2;
  &>span{
    align-items: center;
    display: flex;
  }
`;

const MapContainer = () => {
  const [ center, setCenter ] = useState([120.97986041534145, 23.9748311775491]);
  const [ zoom, setZoom ] = useState(7);
  //const { stepsAndGeoJSON, showSteps, showAllFeactures } = useContext(MapContext);
  //const [ loading1, setloading1 ] = useState(false)

  return (
    <div id="map_container">
      <ViewButton shape="round">
        <Tooltip title="切換地圖編輯模式">
          <span class="material-icons-round">visibility</span>
          僅顯示
        </Tooltip>
      </ViewButton>
      <Map center={fromLonLat(center)} zoom={zoom} setCenter={setCenter}>
        <Layers>
            <MapBoxLayer name={"basemap_mapbox"} zIndex={0} />
        </Layers>
      </Map>
    </div>
  );
};

export { MapContainer }