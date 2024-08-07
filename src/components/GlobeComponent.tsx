import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
const GlobeComponent = () => {
  const globeEl = useRef(null);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: 23.8859,
        lng: 45.0792,
        altitude: 1.5,
      });
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;
    }
  }, []);

  const arcsData = [
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 48.8566,
      endLng: 2.3522,
      color: ["#FF5733", "#33FF57"], // Paris, France
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 35.6895,
      endLng: 139.6917,
      color: ["#FF5733", "#3357FF"], // Tokyo, Japan
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 51.5074,
      endLng: -0.1278,
      color: ["#FF5733", "#FF5733"], // London, UK
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 40.7128,
      endLng: -74.006,
      color: ["#FF5733", "#57FF33"], // New York, USA
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: -33.8688,
      endLng: 151.2093,
      color: ["#FF5733", "#3357FF"], // Sydney, Australia
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 55.7558,
      endLng: 37.6173,
      color: ["#FF5733", "#FF5733"], // Moscow, Russia
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 39.9042,
      endLng: 116.4074,
      color: ["#FF5733", "#57FF33"], // Beijing, China
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 19.4326,
      endLng: -99.1332,
      color: ["#FF5733", "#FF5733"], // Mexico City, Mexico
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 34.0522,
      endLng: -118.2437,
      color: ["#FF5733", "#3357FF"], // Los Angeles, USA
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: -1.2921,
      endLng: 36.8219,
      color: ["#FF5733", "#57FF33"], // Nairobi, Kenya
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 28.6139,
      endLng: 77.209,
      color: ["#FF5733", "#3357FF"], // New Delhi, India
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 37.7749,
      endLng: -122.4194,
      color: ["#FF5733", "#57FF33"], // San Francisco, USA
    },
    {
      startLat: 23.8859,
      startLng: 45.0792,
      endLat: 41.9028,
      endLng: 12.4964,
      color: ["#FF5733", "#FF5733"], // Rome, Italy
    },
  ];

  return (
    <div style={{ width: "70%" }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={[
          { lat: 23.8859, lng: 45.0792, label: "Saudi Arabia" },
          { lat: 48.8566, lng: 2.3522, label: "Paris" },
          { lat: 35.6895, lng: 139.6917, label: "Tokyo" },
          { lat: 51.5074, lng: -0.1278, label: "London" },
          { lat: 40.7128, lng: -74.006, label: "New York" },
          { lat: -33.8688, lng: 151.2093, label: "Sydney" },
          { lat: 55.7558, lng: 37.6173, label: "Moscow" },
          { lat: 39.9042, lng: 116.4074, label: "Beijing" },
          { lat: 19.4326, lng: -99.1332, label: "Mexico City" },
          { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
          { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
          { lat: 28.6139, lng: 77.209, label: "New Delhi" },
          { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
          { lat: 41.9028, lng: 12.4964, label: "Rome" },
        ]}
        labelText={(d) => d.label}
        labelSize={1.5}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        arcsData={arcsData}
        arcColor={(d) => d.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        arcStroke={1.5}
        arcDashInitialGap={() => Math.random()}
        arcsTransitionDuration={1000}
      />
    </div>
  );
};

export default GlobeComponent;
