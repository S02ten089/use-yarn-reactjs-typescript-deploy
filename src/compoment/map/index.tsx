import React from 'react';
import Map from './api/map';
import SearchComponent from './api/useApiSerper';

const MapGoogle: React.FC = () => {
  return (
    <div>
      <h1>Google Maps with Marker Clustering</h1>
      {/* <Map apiKey="YOUR_GOOGLE_MAPS_API_KEY" /> */}
      <Map apiKey="7714433c2b3960ccdb98998caa39c2d5287710ca" />
      <h1>GoogleMap use Serper</h1>
      <SearchComponent/>
    </div>
  );
};

export default MapGoogle;
