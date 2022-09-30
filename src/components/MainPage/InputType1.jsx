import React, { useEffect, useState } from "react";
import InputCount from "./InputCount";

const InputType1 = ({ content, setEmpty, empty }) => {
  const [check, setCheck] = useState(5);
  const [change, setChange] = useState(true);

  useEffect(() => {
    if (content?.lenght) {
      setCheck(content?.lenght);
    }
  }, [content]);

  useEffect(() => {
    if (check === 0 && change) {
      setChange(false);
      setEmpty(empty - 1);
    }
    // if (check !== 0 ) {
    //   setChange(false);
    //   setEmpty(empty + 1);
    // }
  }, [check, empty, setEmpty]);

  return (
    <>
      {content?.map((element, idx) => (
        <InputCount
          key={idx}
          placeholder={element}
          setCheck={setCheck}
          check={check}
        />
      ))}
    </>
  );
};

export default InputType1;
