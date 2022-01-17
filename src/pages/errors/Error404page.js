import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="content">
      Page not found.
      <Link to="/home">
        Go back to Home
      </Link>
    </div>
  );
}
