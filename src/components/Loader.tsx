"use client";
import React from "react";
import { Spin } from "antd";

function Loader() {
  return (
    <div className="flex justify-center mt-20">
      <Spin />
    </div>
  );
}

export default Loader;
