import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../store/listSlice";

const AddNew = ({ type, id }) => {
  const [inputVal, setInputVal] = useState("");
  const [form, setForm] = useState(false);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (type) {
      if (inputVal)
        dispatch(addCard({ id: Math.random(), title: inputVal, id: id }));
    } else {
      if (inputVal) dispatch(addList({ id: Math.random(), title: inputVal }));
    }
    setInputVal("");
    hideForm();
  };

  const openForm = () => {
    setForm(true);
  };
  const hideForm = () => {
    setForm(false);
  };

  return (
    <div>
      <button onClick={openForm}>+ Add {type ? "card" : "another list"}</button>
      {form && (
        <form onSubmit={submitHandler} className="mt-3 ">
          <input
            required
            className="p-2"
            placeholder={type ? "Enter card name" : "Enter list name"}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <div className="mt-3">
            <button onClick={hideForm} className="mr-3">
              Cansel
            </button>

            <button
              onClick={submitHandler}
              className="px-3 py-1 bg-blue-500 text-white "
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNew;
