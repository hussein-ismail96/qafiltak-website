"use client";
import React from "react";
import { Globe } from "@/components";


export const AuthGlobe = () => {

    const labelsData = [
        {
          lat: 23.8859,
          lng: 45.0792,
          label: "Saudi Arabia",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 48.8566,
          lng: 2.3522,
          label: "Paris",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 35.6895,
          lng: 139.6917,
          label: "Tokyo",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 51.5074,
          lng: -0.1278,
          label: "London",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 40.7128,
          lng: -74.006,
          label: "New York",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: -33.8688,
          lng: 151.2093,
          label: "Sydney",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 55.7558,
          lng: 37.6173,
          label: "Moscow",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 39.9042,
          lng: 116.4074,
          label: "Beijing",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 19.4326,
          lng: -99.1332,
          label: "Mexico City",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 34.0522,
          lng: -118.2437,
          label: "Los Angeles",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: -1.2921,
          lng: 36.8219,
          label: "Nairobi",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 28.6139,
          lng: 77.209,
          label: "New Delhi",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 37.7749,
          lng: -122.4194,
          label: "San Francisco",
          url: "/saudi-arabia",
          color: "#fff",
        },
        {
          lat: 41.9028,
          lng: 12.4964,
          label: "Rome",
          url: "/saudi-arabia",
          color: "#fff",
        },
      ];

  return (
    <Globe
        data={{
             globeImageUrl: "/images/login/earth-night.jpg",
             labelText: "label",
             backgroundColor: "rgba(0,0,0,0)",
             labelSize: 1.7,
             labelsData: labelsData,
             labelDotRadius: 0.4,
             labelLabel: (d: any) => `<div><b>${d.label}</b></div>`,
             onLabelClick: (d: any) => window.open(d.url, "_blank"),
             pointAltitude: "size",
             pointColor: "white",
              }}
            />
  );
};
