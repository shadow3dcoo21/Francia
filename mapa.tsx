import React from 'react';
import { useWindowDimensions } from 'react-native';
import MapView, { LatLng } from 'react-native-maps'; // Importa LatLng desde 'react-native-maps'

const MERCATOR_OFFSET = Math.pow(2, 28);
const MERCATOR_RADIUS = MERCATOR_OFFSET / Math.PI;

function mercatorLatitudeToY(latitude: number): number {
  return Math.round(
    MERCATOR_OFFSET -
      (
        (
          MERCATOR_RADIUS *
          Math.log(
            (1 + Math.sin(latitude * (Math.PI / 180))) /
            (1 - Math.sin(latitude * (Math.PI / 180)))
          )
        ) / 2
      )
  );
}

function mercatorLongitudeToX(longitude: number): number {
  return Math.round(
    MERCATOR_OFFSET +
      (
        (
          (MERCATOR_RADIUS * longitude) * Math.PI
        ) / 180
      )
  );
}

function mercatorXToLongitude(x: number): number {
  return (
    (
      (x - MERCATOR_OFFSET) / MERCATOR_RADIUS
    ) * 180
  ) / Math.PI;
}

function mercatorYToLatitude(y: number): number {
  return (
    (
      (
        Math.PI / 2
      ) -
      (2 * Math.atan(
        Math.exp(
          (
            y - MERCATOR_OFFSET
          ) / MERCATOR_RADIUS
        )
      )
      )
    ) * 180
  ) / Math.PI;
}

function mercatorAdjustLatitudeByOffsetAndZoom(latitude: number, offset: number, zoom: number): number {
  return mercatorYToLatitude(mercatorLatitudeToY(latitude) + (offset << (21 - zoom)));
}

function mercatorAdjustLongitudeByOffsetAndZoom(longitude: number, offset: number, zoom: number): number {
  return mercatorXToLongitude(mercatorLongitudeToX(longitude) + (offset << (21 - zoom)));
}

interface Delta {
  latitudeDelta: number;
  longitudeDelta: number;
}

function mercatorDegreeDeltas(latitude: number, longitude: number, width: number, height: number, zoom?: number): Delta {
  if (!zoom) {
    zoom = 20;
  }

  const deltaX = width / 2;
  const deltaY = height / 2;

  const northLatitude = mercatorAdjustLatitudeByOffsetAndZoom(latitude, deltaY * -1, zoom);
  const westLongitude = mercatorAdjustLongitudeByOffsetAndZoom(longitude, deltaX * -1, zoom);
  const southLatitude = mercatorAdjustLatitudeByOffsetAndZoom(latitude, deltaY, zoom);
  const eastLongitude = mercatorAdjustLongitudeByOffsetAndZoom(longitude, deltaX, zoom);

  const latitudeDelta = Math.abs(northLatitude - southLatitude);
  const longitudeDelta = Math.abs(eastLongitude - westLongitude);

  return { latitudeDelta, longitudeDelta };
}

// Somewhat arbitrarily, Riverside Park, Independence, KS 67301
const CENTER_UNITED_STATES: LatLng = {
  latitude: 37.24435373025407,
  longitude: -95.70234410503208,
};

export default function MapViewWrapper() {
  const { width, height } = useWindowDimensions();
  // Asegúrate de importar useBottomTabBarHeight según sea necesario
  // const tabBarHeight = useBottomTabBarHeight();

  // Resto del código...
}

