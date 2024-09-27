import React from "react";

const Card = ({ info }) => {
  return (
    <div className="p-2 mt-2 shadow-md rounded-md bg-white">{info.title}</div>
  );
};

export default Card;
