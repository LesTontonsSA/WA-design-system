import React, { useState } from 'react';
import { Link, Typography } from '@mui/material';

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { AddressItem } from './maps.type';

interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
}

const mapStyles = {
  height: '400px',
  width: '100%',
};

const defaultCenter = {
  lat: 46.458039167700875,
  lng: 6.953298941043285,
};

const googleMapsApiKey = 'fake-api-key';

interface GoogleMapsProps {
  addresses: AddressItem[];
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ addresses }) => {
  if (!addresses) {
    return null;
  }
  const locations = addresses.reduce((loc, address) => {
    const latLong = address?.coordinates
      ?.replace(/\s/g, '')
      .split(',')
      .map(Number);

    if (latLong && latLong.length === 2) {
      loc.push({
        lat: latLong[0],
        lng: latLong[1],
        name: address.title,
        address: encodeURIComponent(address.address),
      });
    }
    return loc;
  }, [] as Location[]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  if (!googleMapsApiKey) {
    console.error(
      'Google Maps API key is missing. Please add it to your environment variables.',
    );
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey!}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
        options={{
          disableDefaultUI: true,
          minZoom: 9,
          clickableIcons: false,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        }}
      >
        {locations.map((location, i) => {
          return (
            <Marker
              key={i}
              position={location}
              onClick={() => {
                setSelectedLocation(location);
              }}
            />
          );
        })}

        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => {
              setSelectedLocation(null);
            }}
          >
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.address}`}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: 'none', color: '#fff' }}
            >
              <Typography
                variant="h6"
                sx={{ margin: 0, padding: 2, fontSize: '1rem' }}
              >
                {selectedLocation.name}
              </Typography>
            </Link>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
