import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GiphyApp = () => {
  const [categories, setcategories] = useState(["Iron-man", "Hawkeye"]);
  const InputAdd = () => {
    return (
      <>
        <input id="hero" type="text" placeholder="Agrege nombre" />
      </>
    );
  };
  const handleAdd = () => {
    setcategories((cats) => [...cats, {}]);
  };
  return (
    <div>
      <h2 className="bg-black sm:bg-red-600">GiphyApp</h2>
      <AddCategory />
      <hr />

      <form>
        <InputAdd />
      </form>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};
