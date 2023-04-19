import React, { useState, useContext } from "react";
import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { fromLonLat } from "ol/proj";
import { Map } from "./../components/Map/Map";
import { Layers, MapBoxLayer, VectorLayer } from "./../components/Layers";
import Geolocation from 'ol/Geolocation.js';
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Circle as CircleStyle, Style, Fill, Stroke } from "ol/style";
import { vector } from "../components/Sources";

const ViewButton = styled(Button)`
  position: absolute;
  bottom: 15px;
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

const MapContainer = ({mapView, setMapView}) => {
  const handleViewButtonClick = () => {
    setMapView(!mapView)
  };
  
  // Geolocation
  const geolocation = new Geolocation({
    tracking: true,
    projection: "EPSG: 4326"
  });
  const positionFeature = new Feature();
  geolocation.on('change:position', () => {
      const coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ? new Point(fromLonLat(coordinates, "EPSG:3857")) : null);
  });

  return (
    <div id="map_container">
      <ViewButton shape="round" onClick={handleViewButtonClick}>
        <Tooltip title="切換地圖模式">
          <span class="material-icons-round">visibility</span>
          僅顯示
        </Tooltip>
      </ViewButton>
      <Map center={fromLonLat(center)} zoom={zoom} setCenter={setCenter}>
        <Layers>
            <MapBoxLayer name={"basemap_mapbox"} zIndex={0} />
            <VectorLayer
                name={"userlocation"}
                source={vector({
                    features: [positionFeature]
                })}
                style={
                    new Style({
                        image: new CircleStyle({
                            radius: 50,
                            fill: new Fill({
                                color: 'rgba(22, 22, 22, 0.3)',
                            }),
                            stroke: new Stroke({
                                color: '#626262',
                                width: 5,
                            }),
                        }),
                    })
                }
              />
        </Layers>
      </Map>
    </div>
  );
};

export { MapContainer }