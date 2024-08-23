import React from "react";

const Add = () => {
  return (
    <form>
      <label htmlFor="">Person Name:</label>
      <input className="border rounded-md p-2 mx-2" />
      <button className="bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700">
        Add
      </button>
    </form>
  );
};

export default Add;
