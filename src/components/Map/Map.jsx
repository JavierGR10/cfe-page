import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  // height: '400px'
  minHeight: "550px",
};

const center = {
  // lat: -3.745,
  // lng: -38.523,
  lat: 20.5844664,
  lng: -102.9739271,
};
const libraries = ['places'];


export const Map = ({ coordinates }) => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "YOUR_API_KEY",
  //   libraries,
  // });

  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }

  // if (!isLoaded) {
  //   return <div>Loading maps</div>;
  // }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10.7}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {coordinates.map((points, index) => (
        <Marker position={{ lat: points.lat, lng: points.lng }} key={index}>
          {/* <InfoBox>
            <div
              style={{
                backgroundColor: `yellow`,
                opacity: 0.75,
                padding: `12px`,
              }}
            >
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                Hello, Kaohsiung!
              </div>
            </div>
          </InfoBox> */}
        </Marker>
      ))}
    </GoogleMap>
  );
};
