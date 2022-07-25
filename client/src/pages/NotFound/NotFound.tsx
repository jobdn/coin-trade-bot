import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ color: "#fff" }}>
      This page doesn't exist. Go to <Link to="/">home.</Link>
    </div>
  );
};

export { NotFound };
