import React, { useState } from "react";

const InputCount = ({ placeholder, check, setCheck }) => {
  const [change, setChange] = useState(true);

  const handleFill = (e) => {
    if (e.target.value !== "") {
      if (change) {
        setChange(false);
        setCheck(check - 1);
      }
      return;
    }
    setChange(true);
    setCheck(check + 1);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="my-4 w-96 p-3 rounded-2xl"
        onChange={(e) => handleFill(e)}
      />
    </div>
  );
};

export default InputCount;
