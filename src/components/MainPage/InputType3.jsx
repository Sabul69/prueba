import React, { useState } from "react";

const InputType3 = ({ content, setEmpty, empty }) => {
  const [change, setChange] = useState(true);

  const handleSelect = (e) => {
    if (e.target.value !== null && change) {
      setChange(false);
      setEmpty(empty - 1);
    } else {
      setEmpty(empty + 1);
      setChange(true);
    }
  };
  return (
    <>
      <img className="h-10 w-10 m-4" src="Img Evaluacion" alt={content} />
      <select
        name="select"
        className="my-6 w-60"
        onChange={(e) => handleSelect(e)}
      >
        <option value={null}>Select an option</option>
        <option value={"true"}>True</option>
        <option value={"false"}>False</option>
      </select>
    </>
  );
};

export default InputType3;
