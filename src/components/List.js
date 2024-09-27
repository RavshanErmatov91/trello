import React from "react";
import AddNew from "./AddNew";
import Card from "./Card";
import { useSelector } from "react-redux";

const List = () => {
  const listItem = useSelector((store) => store.listSlice.list);
  return (
    <>
      {listItem.length > 0 &&
        listItem.map((list) => {
          return (
            <div key={list.id} className="p-3 w-1/3 ">
              <div className="p-3 bg-gray-200">
                <h2>{list.title}</h2>

                {list.children &&
                  list.children.map((children) => (
                    <Card key={children.id} info={children} />
                  ))}

                <div className="mt-3">
                  <AddNew type="card" id={list.id} />
                </div>
              </div>
            </div>
          );
        })}

      <div className="p-3 w-1/3 ">
        <div className="p-3 bg-green-600">
          <AddNew />
        </div>
      </div>
    </>
  );
};

export default List;
