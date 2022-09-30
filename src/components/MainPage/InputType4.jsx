import React, { useState } from "react";

const InputType4 = ({ setEmpty, empty }) => {
  const [change, setChange] = useState(true);

  const handleFill = (e) => {
    if (e.target.value !== "") {
      if (change) {
        setChange(false);
        setEmpty(empty - 1);
      }
      return;
    }
    setChange(true);
    setEmpty(empty + 1);
  };
  return (
    <div>
      <input
        defaultValue=""
        className="my-4"
        type="text"
        placeholder="Write your answer"
        onChange={(e) => handleFill(e)}
      />
    </div>
  );
};

export default InputType4;
