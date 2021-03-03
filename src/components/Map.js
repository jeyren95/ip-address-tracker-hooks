import React, {useEffect, useRef} from "react";
import "./Map.css";
import L from "leaflet";

const Map = ({latitude, longtitude}) => {

  const mapRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [latitude, longtitude],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    markerRef.current = L.marker([latitude, longtitude]).addTo(mapRef.current)
  }, [])


  useEffect(() => {
    mapRef.current.panTo(new L.LatLng(latitude, longtitude));
    markerRef.current.setLatLng([latitude, longtitude]);
  }, [latitude, longtitude])


  return (
    <div id="map">
    </div>
  )
}




export default Map;
