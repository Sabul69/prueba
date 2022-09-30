import React, { useEffect, useState } from "react";
import InputType1 from "../components/MainPage/InputType1";
import InputType2 from "../components/MainPage/InputType2";
import InputType3 from "../components/MainPage/InputType3";
import InputType4 from "../components/MainPage/InputType4";
import api from "../utils/api";

const MainPage = () => {
  const [response, setResponse] = useState([]);
  const [empty, setEmpty] = useState(0);

  useEffect(() => {
    setResponse(api);
    setEmpty(api.length);
  }, []);

  useEffect(() => {
    console.log(empty);
  }, [empty]);

  const handleSend = () => {
    if (empty !== 0) {
      alert("You must fill all the questions. Left: " + empty);
    }
  };
  return (
    <div className="ml-10 mt-10 m-auto flex flex-col">
      {response?.map((element, idx) => (
        <div key={idx}>
          <p className="font-semibold">{element?.question}</p>
          {element?.type === 1 ? (
            <InputType1
              content={element.content}
              setEmpty={setEmpty}
              empty={empty}
            />
          ) : element?.type === 2 ? (
            <InputType2 setEmpty={setEmpty} empty={empty} />
          ) : element?.type === 3 ? (
            <InputType3
              content={element.content}
              setEmpty={setEmpty}
              empty={empty}
            />
          ) : element?.type === 4 ? (
            <InputType4 setEmpty={setEmpty} empty={empty} />
          ) : (
            ""
          )}
        </div>
      ))}
      <button
        className="bg-sky-600 w-52 rounded-xl h-12 m-4 font-bold text-white hover:bg-white hover:text-sky-600 border-sky-600 border-solid border"
        onClick={() => handleSend()}
      >
        Send
      </button>
    </div>
  );
};

export default MainPage;
