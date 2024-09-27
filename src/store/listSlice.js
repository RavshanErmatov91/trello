import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
      console.log(action);
    },
    addCard: (state, action) => {
      state.list.forEach((el) => {
        if (el.id === action.payload.id) {
          if (Object.hasOwn(el, "children")) {
            el.children.push(action.payload);
          } else {
            el.children = [];
            el.children.push(action.payload);
          }
        }
      });
    },
  },
});

export const { addList, addCard } = listSlice.actions;
export default listSlice.reducer;
