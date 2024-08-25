import React from "react";

export const MainBanner = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url(/images/home/main.jpg)",
        backgroundSize: "cover",
        paddingBottom: "40%",
      }}
    >
      <h1>Website 3 line short description here</h1>
    </div>
  );
};
