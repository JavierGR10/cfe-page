import { GoogleMap, Marker, } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  minHeight: "550px",
};

const center = {
  lat: 20.5844664,
  lng: -102.9739271,
};

export const Map = ({ coordinates }) => {
  const value = coordinates !== null ? coordinates : center;


  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={value}
      zoom={15}
    >
      {coordinates && (
        <Marker position={coordinates} />
      )}
    </GoogleMap>
  );
};
