"use client";
import React from "react";
import dynamic from "next/dynamic";
import {IGlobeData} from "./globeProps";

const GlobeComp = dynamic(() => import("react-globe.gl"), { ssr: false });

export const Globe = ({ data }: { data: IGlobeData }) => {
  return (
    <GlobeComp
      globeImageUrl={data.globeImageUrl}
      labelText={data.labelText}
      backgroundColor={data.backgroundColor}
      labelSize={data.labelSize}
      labelsData={data.labelsData}
      labelDotRadius={data.labelDotRadius}
      labelColor={(d: any) => d.color}
      labelLabel={(d: any) => data.labelLabel(d)}
      onLabelClick={(d: any) => data.onLabelClick?.(d)}
      pointAltitude={data.pointAltitude}
      pointColor={data.pointColor}
      
    />
  );
};
