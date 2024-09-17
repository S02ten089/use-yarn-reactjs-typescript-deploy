import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Marker } from "@react-google-maps/api"; // Import Marker for individual markers
import jsonData from "./data/locations.json"; // Import your JSON data

// Your Google Maps API Key
const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

// Component to render the map
const GoogleMapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Load the markers and cluster them
  useEffect(() => {
    if (map) {
      const markers = jsonData.locations.map((location: any) => {
        return new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
        });
      });

      new MarkerClusterer({ map, markers });
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        onLoad={(mapInstance) => setMap(mapInstance)}
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={{ lat: 37.7749, lng: -122.4194 }} // Example center, change to your preference
        zoom={10}
      >
        {/* Markers will be clustered */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
