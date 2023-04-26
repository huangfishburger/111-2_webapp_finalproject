import React, { useState, useEffect, useContext } from "react";
import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { fromLonLat, toLonLat } from "ol/proj";
import { Map } from "./../components/Map/Map";
import { Layers, MapBoxLayer, VectorLayer, DrawVectorLayer } from "./../components/Layers";
import Geolocation from 'ol/Geolocation.js';
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Circle as CircleStyle, Style, Fill, Stroke } from "ol/style";
import { vector } from "../components/Sources";
import Pin from './../data/pin.svg';
import MapContext from "../hook/MapContext";
import * as olTransform from 'ol/transform';

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
  const { userCoord } = useContext(MapContext);

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
          <span className="material-icons-round">visibility</span>
          僅顯示
        </Tooltip>
      </ViewButton>
      <Map>
        <Layers>
            <MapBoxLayer name={"basemap_mapbox"} zIndex={0} />
            <DrawVectorLayer 
              name={"draw"}
              source={vector({
                  features: [
                    new Feature({
                      geometry: new Point(fromLonLat(toLonLat(userCoord, "EPSG:3857"), "EPSG:3857")),
                    })
                  ]
              })}
              style={
                new Style({
                  image: new Icon({
                    anchor: [0.5, 16],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    width: 40,
                    height: 40,
                    src: Pin,
                  })
                })
              }
              zIndex={2}
            />
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
                          color: "rgb(60, 60, 60)",
                          width: 5
                        }),
                      })
                  })
                }
                zIndex={1}
              />
        </Layers>
      </Map>
    </div>
  );
};

export { MapContainer }