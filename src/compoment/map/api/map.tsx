import React, { useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

// Định nghĩa các kiểu props nếu cần thiết
interface MapProps {
  apiKey: string; // Google Maps API Key
}

// Định nghĩa các option cho Google Maps
const mapOptions = {
  zoom: 4,
  center: { lat: 40.712776, lng: -74.005974 }, // Tọa độ của New York
  disableDefaultUI: true,
};

// Container cho bản đồ
const containerStyle = {
  width: '100%',
  height: '500px',
};

const Map: React.FC<MapProps> = ({ apiKey }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey, // Đặt Google Maps API Key của bạn vào đây
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  // Các tọa độ ví dụ cho các marker
  const markers = [
    { lat: 40.712776, lng: -74.005974 }, // New York
    { lat: 34.052235, lng: -118.243683 }, // Los Angeles
    { lat: 41.878113, lng: -87.629799 },  // Chicago
    { lat: 29.760427, lng: -95.369804 },  // Houston
    { lat: 33.448376, lng: -112.074036 }, // Phoenix
  ];

  // Hàm render cluster marker
  const createMarkerCluster = (map: google.maps.Map) => {
    const googleMarkers = markers.map(
      (location) => new google.maps.Marker({ position: location })
    );

    // Tạo marker clusterer
    new MarkerClusterer({ markers: googleMarkers, map });
  };

  // Khi bản đồ được load
  useEffect(() => {
    if (mapRef.current) {
      createMarkerCluster(mapRef.current);
    }
  }, [isLoaded]);

  if (loadError) {
    return <div>Error loading map: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapOptions.center}
      zoom={mapOptions.zoom}
      options={mapOptions}
      onLoad={(map) => {
        mapRef.current = map;
        createMarkerCluster(map);
      }}
    />
  );
};

export default Map;
