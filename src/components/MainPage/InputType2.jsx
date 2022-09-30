import React, { useEffect, useState } from "react";

const InputType2 = ({ setEmpty, empty }) => {
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [change, setChange] = useState(true);
  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (first) {
      if ((select && change) || (select2 && change)) {
        setChange(false);
        setEmpty(empty - 1);
      }
      if (!select && !select2) {
        setChange(true);
        setEmpty(empty + 1);
      }
    }
    setFirst(true);
  }, [select, select2]);

  const handleSelect = (n) => {
    if (n === 1) {
      setSelect(!select);
    }
    if (n === 2) {
      setSelect2(!select2);
    }
  };
  return (
    <div className="my-4 flex justify-around w-52">
      <label>
        <input
          type="checkbox"
          id="cbox1"
          value={"true"}
          onChange={(e) => handleSelect(1)}
        />{" "}
        True
      </label>
      <label>
        <input
          type="checkbox"
          id="cbox2"
          value={"falso"}
          onChange={(e) => handleSelect(2)}
        />{" "}
        False
      </label>
    </div>
  );
};

export default InputType2;
