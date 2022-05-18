import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      This page doesn't exist. Go to <Link to="/">home.</Link>
    </div>
  );
};

export default NotFound;
