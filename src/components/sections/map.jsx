import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Map = () => {
  const center = {
    lat: 31.63,
    lng: -8.008889,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBK5xkHC6lt03YwrSpzqUVYurSxAzFzYL0",
  });

  const [map, setMap] = React.useState(null);

  console.log(map)

 

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="map">
      <h4>Visit us Soon :</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta aperiam blanditiis. Dignissimos, sed mollitia!</p>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onUnmount={onUnmount}
        ></GoogleMap>
      ) : null}
    </div>
  );
};

export default Map;
