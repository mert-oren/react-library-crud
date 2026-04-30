import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <h1 className="text-base-100 font-bold text-3xl md:text-5xl text-center">
        <span className="text-gray-400">404</span> <br />
        Page does not exist!
      </h1>
      <p className="text-gray-500">
        Enter a valid url and try again or{" "}
        <Link to={"/books"} className="text-blue-600 underline">
          go to library.
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
