import React from "react";
import List from "./List";
// import Test from "./Test";
import img1 from "../images/nature.jpeg";

const Body = () => {
  return (
    <div className="w-full body ">
      <div className="p-3">
        {/* <Test /> */}
        <div className="flex flex-wrap gap-3  ">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Body;
